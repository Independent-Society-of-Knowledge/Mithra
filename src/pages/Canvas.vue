<template>
  <div class="w-full h-[100vh] flex flex-col justify-between md:px-32px xs:px-8px lg:px-64px xl:px-[112px] nuke-transition-productive-standard-moderate-01 dark:bg-dark-100 no-scrollbar">
    <router-link to="/">
      <div class="w-full h-fit nuke-text-fluid-heading-03 md:p-32px xs:p-8px nuke-transition-productive-standard-moderate-01 dark:text-white text-black flex flex-row items-center no-scrollbar">
        <span class="nuke-text-code-02"> > </span> Mithra <span class="nuke-text-code-02"> -  beta</span>
      </div>
    </router-link>

    <!-- Main Content Area -->
    <div class="w-full flex-1 flex flex-row gap-4 overflow-hidden pb-16 no-scrollbar">
      <!-- Left Column -->
      <div class="w-full  flex flex-col items-center justify-end   h-[50%] overflow-hidden no-scrollbar   ">
        <div v-for="(item, index) in leftContentItems"
             :key="item.id"
             class="w-full  transition-all duration-300 no-scrollbar "
             :class="{'opacity-50': index !== leftContentItems.length - 1}">
          <Block :content="item.content" :number="item.id.toString()"/>
        </div>
      </div>

      <!-- Right Column -->
      <div v-if="rightColumnVisible" class="w-full  flex flex-col items-center justify-end   h-[50%]  ">
        <div v-for="(item, index) in rightContentItems"
             :key="item.id"
             class="w-full max-w-3xl transition-all duration-300  "
             :class="{'opacity-50': index !== rightContentItems.length - 1}">
          <Block :content="item.content" :number="item.id.toString()"/>
        </div>
      </div>
    </div>

    <!-- Bottom - Input Form -->
    <div class="w-full h-64px flex flex-row items-center justify-center overflow-hidden outline-none">
      <input
          type="text"
          v-model="inputContent"
          class="input-field outline-none h-full w-full bg-dark-80 placeholder:text-dark-40 p-16px text-light-100"
          placeholder="Type your content here (e.g. 'latex: \\int x^3 = 2' or 'mark: ## Hello World!')"
          @keyup.enter="addContent"
          @keyup.ctrl.space.prevent="showRightColumn"
      />
      <button
          @click="addContent"
          class="add-button outline-none nuke-transition-productive-standard-moderate-01 text-white h-full w-fit p-16px bg-primary-70 hover:bg-primary-60"
      >
        Add
      </button>
    </div>

    <div class="nuke-text-legal-01 text-light-60 w-16px h-fit justify-end items-end flex flex-row text-right absolute bottom-0 right-0 p-8px">
      Independent Society of Knowledge
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Block from "@/components/Block.vue";
import { interpretBlock } from "@/interpreter/blockInterpreter.js";

const leftContentItems = ref([]);
const rightContentItems = ref([]);
const inputContent = ref('');
let idCounter = 0;
const rightColumnVisible = ref(false);

const showRightColumn = () => {
  rightColumnVisible.value = true;
};

const deleteContentItem = (idToDelete) => {
  leftContentItems.value = leftContentItems.value.filter(item => item.id !== idToDelete);
  rightContentItems.value = rightContentItems.value.filter(item => item.id !== idToDelete);
};

const addContent = () => {
  let input = inputContent.value.trim();
  if (!input) return;

  const isRightColumn = input.startsWith('rh');
  if (isRightColumn) {
    input = input.slice(2).trim();
  }

  if (input.startsWith('del')) {
    const idToDelete = parseInt(input.slice(3).trim(), 10);
    if (!isNaN(idToDelete)) {
      deleteContentItem(idToDelete);
    }
    inputContent.value = '';
    return;
  }

  const interpretedContent = interpretBlock(input);
  const targetList = isRightColumn ? rightContentItems : leftContentItems;

  targetList.value.push({
    id: idCounter++,
    content: interpretedContent
  });

  inputContent.value = '';
};
</script>

<style scoped>
/* Center the last block in the column */
.centered-block {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

/* Stacked layout for previous blocks */
.animated-block {
  margin-bottom: 16px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 1;
}

/* Entry animation for new blocks */
.animated-block-enter-active {
  transform: translateY(-10px);
  opacity: 0;
}

/* Animation applied as new blocks enter */
.animated-block-leave-active {
  transform: translateY(10px);
  opacity: 0;
}
</style>
