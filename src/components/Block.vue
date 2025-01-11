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
     flex flex-row px-8px py-4px hover:py-16px nuke-transition-productive-standard-moderate-01 gap-32px justify-start items-center
   hover:bg-light-50 dark:hover:bg-dark-70 group hover:bg-opacity-20">
    <div class="nuke-text-code-01 opacity-0 group-hover:opacity-100 group-hover:text-dark-10">{{ number }}</div>
    <div class="contents no-scrollbar" v-html="content" :id="number"/>
  </div>
</template>

<style  lang="scss" >
::v-deep(p) {
  @apply text-white nuke-text-fluid-paragraph-01 bg-transparent;
}
::v-deep(content){
  @apply text-white nuke-text-fluid-paragraph-01;
}
::v-deep(h1) {
  @apply text-white nuke-text-fluid-display-04 bg-transparent ;
}

::v-deep(h2) {
  @apply text-white nuke-text-fluid-display-03 bg-transparent;
}

::v-deep(h3) {
  @apply text-white nuke-text-fluid-display-02 bg-transparent;
}

::v-deep(h4) {
  @apply text-white nuke-text-fluid-display-01;
}

::v-deep(h5) {
  @apply text-white nuke-text-fluid-heading-04;
}

::v-deep(h6) {
  @apply text-white nuke-text-fluid-heading-03;
}

::v-deep(b) {
  @apply text-white nuke-text-fluid-paragraph-01;
}

::v-deep(i) {
  @apply text-white italic nuke-text-fluid-paragraph-01;
}

::v-deep(a) {
  @apply text-primary-40 underline nuke-text-fluid-paragraph-01 ;
}

::v-deep(a:hover) {
  @apply text-primary-20 nuke-text-fluid-paragraph-01;
}

::v-deep(reference) {
  @apply nuke-text-fluid-paragraph-01 text-light-40;
}

::v-deep(.inlineCode) {
  @apply text-white bg-dark-80 nuke-text-fluid-paragraph-01 p-[2px_4px] ;
}

::v-deep(.codeBlock) {
  @apply text-white bg-dark-80 nuke-text-fluid-paragraph-01   items-center justify-center flex  leading-[1.4];
}

::v-deep(blockQuote) {
  @apply text-white nuke-text-fluid-quotation-02;
}

::v-deep(.orderedListItem){
  @apply text-white
}
::v-deep(table) {
  @apply border border-white;
}


</style>