<template>
  <div @dblclick="enableEditMode" class="
    nuke-transition-productive-standard-moderate-01
  hover:bg-light-40  dark:hover:bg-dark-70
  px-64px py-12px items-center
  flex flex-row gap-32px
  text-black dark:text-white">
<!--      <div> {{ blockId}}</div>-->
      <div v-if="isEditing" @click.stop class="flex flex-row items-center h-full w-full">
      <input
          type="text"
          aria-multiline="true"
          ref="textarea"
          v-model="editableContent"
          @input="adjustTextareaHeight"
          @keydown.enter="handleEnter"
          @keydown.shift.enter.stop
          @blur="disableEditMode"
          class="edit-area"
      />
      </div>
      <div v-else v-html="interpretedContent" class="view-area select-none
nuke-transition-productive-standard-moderate-01 dark:text-white text-black
    [&_h1]:nuke-text-fluid-display-04
    [&_h2]:nuke-text-fluid-display-03
    [&_h3]:nuke-text-fluid-display-02
    [&_h4]:nuke-text-fluid-display-01
    [&_h5]:nuke-text-fluid-heading-04
    [&_h6]:nuke-text-fluid-heading-03
    [&_p]:nuke-text-fluid-paragraph-01
    [&_b]:nuke-text-fluid-paragraph-01
    [&_i]:nuke-text-fluid-paragraph-01
    [&_blockquote]:nuke-text-fluid-quotation-02
    [&_blockquote]:bg-light-50
    dark:[&_blockquote]:bg-dark-70
    [&_blockquote]:font-italic
    [&_blockquote]:flex
    [&_blockquote]:justify-center
"></div>

  </div>
</template>

<script setup>
import {ref, watch, nextTick} from 'vue';
import {interpretBlock} from '@/interpreter/blockInterpreter.js';


const props = defineProps({
  rawContent: String,
  isFocused: Boolean,
  blockId: Number
});

const emit = defineEmits(['update:rawContent', 'focus']);

const isEditing = ref(false);
const editableContent = ref(props.rawContent);
const interpretedContent = ref(interpretBlock(props.rawContent));
const textarea = ref(null);

watch(() => props.rawContent, (newVal) => {
  editableContent.value = newVal;
  interpretedContent.value = interpretBlock(newVal);
});

watch(editableContent, (newVal) => {
  interpretedContent.value = interpretBlock(newVal);
});

watch(() => props.isFocused, (newVal) => {
  isEditing.value = newVal;
})

const enableEditMode = () => {
  isEditing.value = true;
  editableContent.value = props.rawContent;
  nextTick(() => {
    if (textarea.value) {
      textarea.value.focus();
      adjustTextareaHeight();
    }
  });
};

const disableEditMode = () => {
  isEditing.value = false;
  emit('update:rawContent', editableContent.value);
};

const handleEnter = (event) => {
  if (!event.shiftKey) {
    disableEditMode();
  }
};

window.addEventListener("keydown", (event) => {
  if (event.altKey && event.key === "Enter" ) {
    event.preventDefault();
    if (isEditing.value) {
      disableEditMode();
    } else {
      enableEditMode();
    }
  }
});

const adjustTextareaHeight = () => {
  const el = textarea.value;
  if (el) {
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }
};
</script>

<style scoped>
.block-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
}

.edit-area {
  width: 100%;
  height: auto;
  min-height: 1.5em; /* Adjust this value based on your line height */
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  overflow: hidden; /* Hide the scrollbar */
  display: flex;
  align-items: center; /* Center text vertically */
  padding: 0; /* Remove default padding */
}

.view-area {
  width: 100%;
}

.blockSwitch-move,
.blockSwitch-enter-active,
.blockSwitch-leave-active {
  transition: opacity 0.15s ease;
  width: 100%;

}

.blockSwitch-enter-from,
.blockSwitch-leave-to {
  opacity: 0;
  width: 100%;
}

.blockSwitch-leave-active {
  position: absolute;
}
</style>