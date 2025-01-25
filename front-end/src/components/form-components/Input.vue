<template>
     <div class="flex flex-col group">
          <label :for="id" class="nuke-text-body-02 mb-4px block text-dark-50
          group-focus-within:text-dark-10
          group-hover:text-dark-10
          nuke-transition-expressive-entrance-moderate-01
">{{
                    label
               }}</label>
          <input :type="type" :id="id" v-model="inputValue"
                 class="
                 w-full p-8px box-border outline-none
                 bg-dark-80 group-focus-within:bg-dark-70
                 nuke-transition-expressive-entrance-moderate-01
                  group-hover:bg-dark-70"/>
     </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';

const props = defineProps<{
     label: string;
     id: string;
     type: string;
     modelValue: string | number;
}>();

const emit = defineEmits(['update:modelValue']);

const inputValue = ref(props.modelValue);

watch(inputValue, (newValue) => {
     emit('update:modelValue', newValue);
});
</script>

<style scoped>
.form-group {
     :deep(label) {
          display: block;
          margin-bottom: 4px;
          color: var(--color-dark-50);
     }

     :deep(input) {
          width: 100%;
          padding: 8px;
          box-sizing: border-box;
          outline: none;
          background: var(--color-dark-70);
     }
}
</style>