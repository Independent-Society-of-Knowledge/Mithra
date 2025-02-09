
<template>
     <router-link :to="route">
          <div class="
     nuke-text-body-02  px-4px py-8px text-white hover:text-black hover:bg-white
     nuke-transition-all nuke-transition-productive-standard-moderate-01 h-fit select-none text-nowrap max-w-fit flex-nowrap
" :aria-label="title">
                >  {{ title.substring(0, 40) }} {{ title.length > 40 ? '...' : '' }}
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