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
  @apply text-white  bg-transparent;
}
::v-deep(content){
  @apply text-white ;
}
::v-deep(h1) {
  @apply text-white  bg-transparent ;
}

::v-deep(h2) {
  @apply text-white  bg-transparent;
}

::v-deep(h3) {
  @apply text-white  bg-transparent;
}

::v-deep(h4) {
  @apply text-white ;
}

::v-deep(h5) {
  @apply text-white ;
}

::v-deep(h6) {
  @apply text-white ;
}

::v-deep(b) {
  @apply text-white ;
}

::v-deep(i) {
  @apply text-white italic ;
}

::v-deep(a) {
  @apply text-primary-40 underline  ;
}

::v-deep(a:hover) {
  @apply text-primary-20 ;
}

::v-deep(reference) {
  @apply  text-light-40;
}

::v-deep(.inlineCode) {
  @apply text-white bg-dark-80  p-[2px_4px] ;
}

::v-deep(.codeBlock) {
  @apply text-white bg-dark-80    items-center justify-center flex  leading-[1.4];
}

::v-deep(blockQuote) {
  @apply text-white ;
}

::v-deep(.orderedListItem){
  @apply text-white
}
::v-deep(table) {
  @apply border border-white;
}


</style>