
<template>
<router-link :to="route">
     <div class=" nuke-text-heading-03  px-16px py-8px hover:px-32px   text-white hover:text-black hover:bg-white
     nuke-transition-all nuke-transition-productive-standard-moderate-01 h-fit select-none text-nowrap xs:max-w-fit
">
          {{ title}}
     </div>
</router-link>
</template>
<script setup lang="ts">
const props = defineProps<{
     title: String,
     route: string
}>()
</script>

<style scoped>

</style>