<template>
  <div
      class="
      w-full h-32px nuke-text-fluid-heading-03 md:p-32px xs:p-8px nuke-transition-productive-standard-moderate-01
      dark:text-white bg-white dark:bg-black  text-black flex flex-row items-center  fixed">
    <router-link to="/"><span class="nuke-text-code-02"> > </span> Mithra <span
        class="nuke-text-code-02"> -  beta</span></router-link>
  </div>
    <div
        class="
        w-full h-full flex flex-col justify-evenly md:px-32px xs:px-8px lg:px-64px xl:px-[112px] nuke-transition-productive-standard-moderate-01
        max-h-[100vh]  min-h-[100vh] dark:bg-dark-100">
        <div class="w-full  max-h-[50%] flex flex-row gap-4">
          <!-- Left Column -->
          <div class="w-full flex flex-col items-center justify-center h-[calc(50vh)] overflow-y-scroll no-scrollbar snap-y ">
            <div v-for="(item, index) in leftContentItems"
                 :key="item.id"
                 :class="['w-full transition-all duration-300 h-fit opacity-50 snap-end', { 'focused-block': index === focusedIndex }]"
                 @click="focusBlock(index)">
              <Block :content="item.htmlContent" :number="item.id.toString()"/>
            </div>
          </div>
          <!-- Right Column -->
          <div v-if="focusedBlock && focusedBlock.rightHandSideContent.length > 0"
               class="w-full flex flex-col items-center justify-end h-full  ">
            <div v-for="(item, index) in focusedBlock.rightHandSideContent"
                 :key="item.id"
                 class="w-full max-w-3xl transition-all duration-300">
              <Block :content="item.htmlContent" :number="item.id.toString()" />
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
        />
        <button
            @click="addContent"
            class="add-button outline-none nuke-transition-productive-standard-moderate-01 text-white h-full w-fit p-16px bg-primary-70 hover:bg-primary-60"
        >
          Add
        </button>
      </div>
    </div>
</template>

<script setup>
import {ref, computed, nextTick} from 'vue';
import Block from "@/components/Block.vue";
import {interpretBlock} from "@/interpreter/blockInterpreter.js";

const leftContentItems = ref([]);
const inputContent = ref('');
let idCounter = 0;
const focusedIndex = ref(0);

const focusedBlock = computed(() => leftContentItems.value[focusedIndex.value]);


const deleteContentItem = (idToDelete) => {
  leftContentItems.value = leftContentItems.value.filter(item => item.id !== idToDelete);
  let index = 0;
  leftContentItems.value.forEach(item => {
    item.id = index++;
  });
};


const focusBlock = (index) => {
  focusedIndex.value = index;
};

const addContent = () => {
  let input = inputContent.value.trim();
  if (!input) return;

  const isRightColumn = input.startsWith('rh');
  if (isRightColumn) {
    input = input.slice(2).trim();
    if (focusedBlock.value) {
      focusedBlock.value.rightHandSideContent.push({
        id: idCounter++,
        htmlContent: interpretBlock(input),
        rawContent: input,
        rightHandSideContent: []
      });
    }
  } else {
    if (input.startsWith('del')) {
      const idToDelete = parseInt(input.slice(3).trim(), 10);
      if (!isNaN(idToDelete)) {
        deleteContentItem(idToDelete);
      }
      inputContent.value = '';
      return;
    }

    leftContentItems.value.push({
      id: idCounter++,
      htmlContent: interpretBlock(input),
      rawContent: input,
      rightHandSideContent: []
    });

    focusedIndex.value = leftContentItems.value.length - 1; // Focus the last block
    nextTick(() => {
      const blockElement = document.querySelector(`.focused-block`);
      if (blockElement) {
        blockElement.scrollIntoView({behavior: 'smooth', block: 'center'});
      }
    });
  }

  inputContent.value = '';
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.focused-block {
  width: 100%;
  border-left: 4px solid #6f489a;
  opacity: 100%;
  scroll-snap-align: center;
}
</style>