<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  content: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="
     flex flex-row px-8px hover:pl-16px py-4px  nuke-transition-productive-standard-moderate-01 gap-32px justify-start items-center
   hover:bg-light-50 dark:hover:bg-dark-70 group hover:bg-opacity-20">
    <div class="nuke-text-code-01 opacity-0 group-hover:opacity-100 nuke-transition-productive-standard-moderate-01 group-hover:text-dark-10">{{ number }}</div>
    <div class="contents  nuke-transition-productive-standard-moderate-01 dark:text-white text-black
    [&_h1]:nuke-text-fluid-display-04
    [&_h2]:nuke-text-fluid-display-03
    [&_h3]:nuke-text-fluid-display-02
    [&_h4]:nuke-text-fluid-display-01
    [&_h5]:nuke-text-fluid-heading-04
    [&_h6]:nuke-text-fluid-heading-03
    [&_p]:nuke-text-fluid-paragraph-01
    [&_b]:nuke-text-fluid-paragraph-01
    [&_i]:nuke-text-fluid-paragraph-01
    [&_blockquote]:nuke-text-fluid-quotation-02  [&_blockquote]:bg-light-50 dark:[&_blockquote]:bg-dark-70 [&_blockquote]:font-italic [&_blockquote]:flex [&_blockquote]:justify-center
    [&_.katex]:nuke-text-fluid-heading-05
" v-html="content" :id="number" />
  </div>
</template>

<style  lang="scss" scoped>



</style>67uy6++