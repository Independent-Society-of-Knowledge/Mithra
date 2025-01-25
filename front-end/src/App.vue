<template>
     <div class=" background-video-container
flex flex-col h-[100vh] w-[100vw]
     mx:px-[112px] lg:px-64px xs:px-0 md:px-24px lg:pb-64px  md:pb-24px xs:pb-0">
          <Header/>
          <transition-group>
          <router-view/>
          </transition-group>
          <video autoplay muted loop class="background-video">
               <source src="./assets/backgrounds/background.mp4" type="video/mp4">
               Your browser does not support the video tag.
          </video>

     </div>

</template>
<script setup lang="ts">
import Header from "./components/Header.vue";

</script>
<style scoped>
.background-video-container {
     position: relative;
}

.background-video {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     object-fit: cover;
     z-index: -1;
}
</style>
