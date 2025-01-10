<script setup>
import { ref, watch } from 'vue';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const props = defineProps({
  latex: {
    type: String,
    required: true,
  },
});

const renderedLatex = ref('');

watch(() => props.latex, (newLatex) => {
  try {
    renderedLatex.value = katex.renderToString(newLatex, {
      throwOnError: false,
      displayMode: true,
    });
  } catch (error) {
    console.error('Error rendering LaTeX:', error);
  }
}, { immediate: true });
</script>

<template>
  <div class="latex-stroke katex" v-html="renderedLatex"></div>
</template>

<style scoped>
.katex {
  font-size: 1.6em;
}

</style>