<script setup lang="ts">
import DashboardIcon from "../../assets/icons/dashboard.svg";
import CanvasIcon from "../../assets/icons/brush-freehand.svg";
import StartMeetingIcon from "../../assets/icons/presentation-file.svg";
import PluginsIcon from "../../assets/icons/plug.svg";
import OpenLecturesIcon from "../../assets/icons/text--align--left.svg";
import SidebarButton from "./SidebarButton.vue";
</script>

<template>

     <aside id="default-sidebar"
            class=" z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-dark-90 border-r-dark-50 border-r-[1px]  flex flex-col justify-between "
            aria-label="Sidebar">
          <div>
               <div class="flex flex-row px-32px pt-32px pb-8px nuke-text-fluid-heading-04">
                    Mithra
               </div>
               <div class="flex flex-col  p-16px">
                    <SidebarButton>
                         <DashboardIcon width="24px"/>
                         Dashboard
                    </SidebarButton>
                    <SidebarButton>
                         <CanvasIcon width="24px"/>
                         Canvas
                    </SidebarButton>
                    <SidebarButton>
                         <StartMeetingIcon width="24px"/>
                         Start a meeting
                    </SidebarButton>
                    <SidebarButton>
                         <PluginsIcon width="24px"/>
                         Plugins
                    </SidebarButton>
                    <SidebarButton>
                         <OpenLecturesIcon width="24px"/>
                         Open Lectures
                    </SidebarButton>
               </div>
          </div>
          <div class="flex flex-col items-start p-16px text-white nuke-text-body-01">
               Kid A
          </div>
     </aside>


</template>

<style scoped>

</style>