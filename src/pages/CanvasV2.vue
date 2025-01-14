<template>
  <div
      class="heading z-[100]
      w-full h-fit nuke-text-fluid-heading-03 md:p-32px xs:p-8px nuke-transition-productive-standard-moderate-01
      dark:text-white bg-white dark:bg-black  text-black flex flex-row items-center justify-between  fixed">
    <div class="flex flex-row gap-4px items-center justify-normal nuke-text-heading-05">
      <router-link to="/"><span class="nuke-text-code-02 items-center"> > </span> Mithra  <span
          class="nuke-text-code-02"> 0.3 </span></router-link>
    </div>
    <div class="flex flex-row gap-16px">
      <button @click="saveContentAsMD()"
              class="
              rounded-none text-black dark:text-white bg-white hover:bg-light-30 p-8px hover:invert dark:invert hover:dark:invert-0
              nuke-transition-productive-standard-slow-01">
        <Download width="24px"/>
      </button>
      <button @click="loadContentFromMD()"
              class="
              rounded-none text-black dark:text-white bg-white hover:bg-light-30 p-8px hover:invert dark:invert hover:dark:invert-0
              nuke-transition-productive-standard-slow-01">
        <Upload width="24px"/>
      </button>
      <button @click="startPresentation()"
              class="
              rounded-none text-black dark:text-white bg-white hover:bg-light-30 p-8px hover:invert dark:invert hover:dark:invert-0
              nuke-transition-productive-standard-slow-01">
        <Present width="24px"/>
      </button>
    </div>
    <!--    <button @click="toggleFreeStyle" class="ml-auto">Toggle Free Style</button>-->
  </div>

  <div class="canvas bg-light-10 dark:bg-dark-100 flex flex-row overflow-hidden">
    <div :class="{'mr-64': isSidebarOpen}" class="blocks px-[256px] h-[100vh] flex flex-col gap-24px scroll"
         ref="blocksContainer">
      <BlockV2
          class="block-item snap-center nuke-transition-productive-standard-slow-01"
          v-for="item in content"
          :key="item.id"
          :block-id="item.id"
          v-model:raw-content="item.content"
          @update:rawContent="arg => { item.content = arg }"
          :class="{ 'focused': focusedBlockIndex === item.id }"
          @click="focusBlock(item.id)"
      />
      <button @click="addBlock" class="add-block-button select-none text-black dark:text-white">+</button>
    </div>
  </div>
</template>

<script setup>
import BlockV2 from "@/components/BlockV2.vue";
import {ref, onMounted, nextTick, watch} from "vue";
import {parseMarkdown} from "@/interpreter/markdownImporter.js";
import Menu from "@/assets/icons/menu.svg?component"
import Download from "@/assets/icons/download.svg?component"
import Upload from "@/assets/icons/upload.svg?component"
import Present from "@/assets/icons/presentation-file.svg?component"

const idCounter = ref(0);
const content = ref([{id: 0, content: "", rightHandBlocks: []}]);
const hiddenBlocks = ref([]);
const focusedBlockIndex = ref(0);
const blocksContainer = ref(null);
const isSidebarOpen = ref(false);
// const isFreeStyle = ref(false)
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
//
// const toggleFreeStyle = () => {
//   isFreeStyle.value = !isFreeStyle.value
// }

const addBlock = () => {
  content.value.push({id: content.value.length + 1, content: "", rightHandBlocks: []});
  focusBlock(content.value.length);
};

const removeBlock = (index) => {
  if (content.value.length >= 1) {
    content.value = content.value.filter(item => item.id !== index);
    content.value.forEach((item, index) => {
      item.id = index;
    });
    focusBlock(content.value[index - 1].id);
  } else {
    content.value = [{id: 0, content: "", rightHandBlocks: []}];
    focusBlock(content.value[0].id);
  }
};

const canvasIsOpen = ref(true);

const addBlockUnderFocused = () => {
  idCounter.value = idCounter.value + 1;
  const focusedIndex = content.value.findIndex(item => item.id === focusedBlockIndex.value);
  const newBlock = {id: focusedBlockIndex.value + 1, content: "", rightHandBlocks: []};
  content.value.splice(focusedIndex + 1, 0, newBlock);
  content.value.forEach((item, index) => {
    item.id = index;
  });
  nextTick(() => {
    focusBlock(focusedIndex + 1);
  });
};

const focusBlock = (index) => {
  focusedBlockIndex.value = index;
  nextTick(centerFocusedBlock);
};

const centerFocusedBlock = () => {
  if (!blocksContainer.value) return;
  const blockElements = blocksContainer.value.querySelectorAll(".block-item");
  const focusedElement = blockElements[focusedBlockIndex.value];

  if (focusedElement) {
    const containerRect = blocksContainer.value.getBoundingClientRect();
    const focusedRect = focusedElement.getBoundingClientRect();
    const offsetY = (containerRect.height / 2) - (focusedRect.height / 2) - focusedRect.top + containerRect.top;

    blocksContainer.value.style.transform = `translateY(${offsetY}px)`;
  }
};

const startPresentation = () => {
  hiddenBlocks.value = [...content.value];
  content.value = [];
  window.addEventListener("keyup", handlePresentationKey);
};

const handlePresentationKey = (event) => {
  if (event.key === " ") {
    event.preventDefault();
    showNextBlock();
    focusBlock(content.value.length - 1);
  } else if (event.key === "Backspace") {
    event.preventDefault();
    hidePreviousBlock();
    focusBlock(content.value.length - 1);
  }
};

const showNextBlock = () => {
  if (hiddenBlocks.value.length > 0) {
    content.value.push(hiddenBlocks.value.shift());
  }
};

const hidePreviousBlock = () => {
  if (content.value.length > 0) {
    hiddenBlocks.value.unshift(content.value.pop());
  }
};

onMounted(() => {
  window.addEventListener("keyup", (event) => {
    if (event.ctrlKey && event.key === "Enter") {
      event.preventDefault();
      addBlockUnderFocused();
    }
  });
  window.addEventListener("keyup", (event) => {
    if (event.ctrlKey && event.key === "Backspace") {
      event.preventDefault();
      removeBlock(focusedBlockIndex.value);
    }
  });
  window.addEventListener("keyup", (event) => {
    if (event.ctrlKey && event.key === "ArrowUp") {
      event.preventDefault();
      const indexOfFocusedID = content.value.findIndex(item => item.id === focusedBlockIndex.value);
      if (indexOfFocusedID > 0) {
        focusBlock(content.value[indexOfFocusedID - 1].id);
      }
    }
  });
  window.addEventListener("keyup", (event) => {
    if (event.ctrlKey && event.key === "ArrowDown") {
      event.preventDefault();
      const indexOfFocusedID = content.value.findIndex(item => item.id === focusedBlockIndex.value);
      if (indexOfFocusedID < content.value.length - 1) {
        focusBlock(content.value[indexOfFocusedID + 1].id);
      }
    }
  });
  watch(focusedBlockIndex, centerFocusedBlock);
});

function saveContentAsMD() {
  const contentSaving = content.value.filter(item => item.content !== "").map(item => item.content).join("\n\n");
  const blob = new Blob([contentSaving], {type: "text/markdown"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "content.md";
  a.click();
  URL.revokeObjectURL(url);
}

function loadContentFromMD() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.md';
  input.onchange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const text = await file.text();
      const parsedContent = parseMarkdown(text);
      content.value = parsedContent.map((block, index) => ({
        id: index,
        content: block.content
      }));
      idCounter.value = parsedContent.length - 1;
    }
  };
  input.click();
}
</script>

<style scoped>
.add-block-button {
  display: block;
  margin: 10px auto;
  padding: 5px 10px;
  font-size: 20px;
  cursor: pointer;
}

.blockList-move,
.blockList-enter-active,
.blockList-leave-active {
  transition: opacity 0.15s ease;
}

.blockList-enter-from,
.blockList-leave-to {
  opacity: 0;
}

.blockList-leave-active {
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.canvas {
  @apply flex flex-col items-center h-[100vh] justify-center;
}

.blocks {
  @apply flex flex-col h-full w-full justify-center;
  position: relative;
  transition: transform 0.5s ease;
}

.block-item {
  @apply border-l-[2px] border-light-30 dark:border-dark-60;
  opacity: 0.5;
  transition: opacity 0.3s ease, transform 0.5s ease;
}

.focused {
  @apply border-l-[2px] border-primary-70 dark:border-primary-40;
  opacity: 1;
  transform: scale(1.1);
}

.sidebar {
  @apply flex flex-col items-center h-full justify-center;
  transition: transform 0.5s ease;
}
</style>