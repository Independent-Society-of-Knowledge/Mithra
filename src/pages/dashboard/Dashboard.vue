<script setup lang="ts">

import DashboardSidebar from "../../components/dashboard/DashboardSidebar.vue";
import DashboardBanner from "../../components/dashboard/DashboardBanner.vue";
</script>

<template>
     <div class="h-[100vh] w-[100vw] bg-dark-80 text-white flex flex-row">
          <DashboardSidebar/>
          <div class="nuke-text-fluid-paragraph-01 flex w-full justify-center items-center ">
               <div class="flex flex-col w-full h-full justify-center ">
                    <div class="nuke-text-fluid-heading-05 h-fit p-32px ">
                         Kid A's Canvas
                    </div>
                    <div class="flex lg:flex-row xs:flex-col h-full  w-full ">
                         <DashboardBanner action="Create a new canvas" title="Open Canvas" description="Open a new presentation session; a canvas to share your ideas." backgroundUrl="/backgrounds/dashboard1.jpg"/>
<!--                         <div class="border-l-dark-50 border-l-[1px]"/>-->
                         <div class="w-full h-full flex flex-col ">
                              <DashboardBanner action="Check out new lectures" title="Open Lectures" description="Find out about new lectures taking place in Mithra." backgroundUrl="/backgrounds/dashboard2.jpg"/>
<!--                              <div class="border-b-dark-50 border-b-[1px]"/>-->
                              <DashboardBanner action="Open Market" title="Find Plugins" description="Use plugins to enhance the way you share ideas." backgroundUrl="/backgrounds/dashboard3.jpg"/>
                         </div>
                    </div>
<!--                    <div class="flex flex-col text-nowrap px-16px gap-16px">-->
<!--                         <div class="nuke-text-fluid-heading-03">-->
<!--                              Recent Activity-->
<!--                         </div>-->
<!--                         <div class="flex flex-col gap-2px">-->
<!--                              <DashboardRecentActivityLinks title="Lectures on Quantum Mechanics - Session 09" route="/dashboard"/>-->
<!--                              <DashboardRecentActivityLinks title="Quantum Gravity Presentation" route="/dashboard"/>-->
<!--                              <DashboardRecentActivityLinks title="Advanced Lectures on GR - Session 07" route="/dashboard"/>-->
<!--                              <DashboardRecentActivityLinks title="Learning Python" route="/dashboard"/>-->
<!--                              <DashboardRecentActivityLinks title="Mithra - an introduction" route="/dashboard"/>-->
<!--                              <DashboardRecentActivityLinks title="Susan and Jim Collaboration" route="/dashboard"/>-->
<!--                              <DashboardRecentActivityLinks title="Mathematical Methods for Physics - Tensor Algebra and Manifolds" route="/dashboard"/>-->
<!--                         </div>-->

<!--                    </div>-->
               </div>
          </div>
     </div>
</template>
<style scoped>

</style>