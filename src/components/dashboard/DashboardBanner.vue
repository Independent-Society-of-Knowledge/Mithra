<template>
     <div
         class="h-full w-full  flex flex-col  items-start background nuke-transition-productive-standard-moderate-02 group justify-between "
         :style="{ backgroundImage: `url(${backgroundUrl})` }">
          <div class="nuke-text-fluid-heading-04 px-24px pt-16px group-hover:px-32px nuke-transition-productive-standard-moderate-02 ">
               {{ title }}
          </div>
          <div
              class="nuke-text-heading-03 opacity-0 group-hover:opacity-100  bg-black  nuke-transition-productive-standard-moderate-02 px-64px py-32px w-full">
               {{ description }}
          </div>
     </div>
</template>
<script setup lang="ts">
const props = defineProps<{
     title: string,
     description: string,
     backgroundUrl: string,
}>()
</script>
<style scoped>
.background {
     background-size: cover;
     background-position: center;
     opacity: 0.75;
     transition: opacity 0.25s ;
}

.background:hover {
     opacity: 1;
}
</style>