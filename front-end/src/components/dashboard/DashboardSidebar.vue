<script setup lang="ts">

import SidebarButton from "./SidebarButton.vue";
</script>

<template>

     <aside id="default-sidebar"
            class=" z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-dark-90 border-r-dark-50 border-r-[1px]  flex flex-col justify-between "
            aria-label="Sidebar">
          <div class="flex flex-row px-32px pt-32px pb-8px nuke-text-fluid-heading-04">
               Mithra
          </div>
          <div class="flex flex-col  p-16px">
               <SidebarButton>Dashboard</SidebarButton>
               <SidebarButton>Canvas</SidebarButton>
               <SidebarButton>Start a meeting</SidebarButton>
               <SidebarButton>Plugins</SidebarButton>
               <SidebarButton>Open Lectures</SidebarButton>
          </div>
          <div class="flex flex-col items-start p-16px text-white nuke-text-body-01">
               Kid A
          </div>
     </aside>


</template>

<style scoped>

</style>