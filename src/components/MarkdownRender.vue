<script setup>
import { ref, watch } from 'vue';
import { marked } from 'marked';
// import '@github-markdown-css/github-markdown.css';

const props = defineProps({
  markdown: {
    type: String,
    required: true,
  },
});

const renderedMarkdown = ref('');

watch(() => props.markdown, (newMarkdown) => {
  try {
    renderedMarkdown.value = marked(newMarkdown);
  } catch (error) {
    console.error('Error rendering Markdown:', error);
  }
}, { immediate: true });
</script>

<template>
  <div class="markdown-body" v-html="renderedMarkdown"></div>
</template>

<style scoped>
.markdown-body {
  font-size: 1.6em;
  font-family: "IBM Plex Sans",serif;
}

.markdown-body > * {
  margin: 0;
  padding: 0;
}


</style>