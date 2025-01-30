<script setup lang="ts">

import DashboardSidebar from "../../components/dashboard/DashboardSidebar.vue";
import DashboardBanner from "../../components/dashboard/DashboardBanner.vue";
</script>

<template>
     <div class="h-[100vh] w-[100vw] bg-dark-80 text-white flex flex-row">
          <DashboardSidebar/>
          <div class="nuke-text-fluid-paragraph-01 flex w-full justify-center items-center ">
               <div class="flex flex-col w-[50%]">
                    <div class="nuke-text-fluid-display-01 h-fit py-32px ">
                         Kid A's Canvas
                    </div>
                    <div class="flex flex-row  gap-16px ">
                         <DashboardBanner/>
                         <div class="w-full h-full flex flex-col gap-16px">
                              <DashboardBanner/>
                              <DashboardBanner/>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<style scoped>

</style>