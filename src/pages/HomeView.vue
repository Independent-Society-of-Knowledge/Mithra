<template>


  <!--  <video autoplay muted loop class="absolute top-0 left-0 w-full h-full object-cover">-->
  <!--    <source src="@/assets/background.mp4" type="video/mp4"/>-->
  <!--    Your browser does not support the video tag.-->
  <!--  </video>-->
  <div
      class="h-[100vh] lg:w-full  flex flex-col  w-full items-start  about-background   justify-between">
    <div class="flex md:flex-row xs:flex-col gap-4px justify-end  xs:justify-end xs:mx-0 xl:mx-[112px]  h-full pb-4px">

      <router-link to="/canvas">
        <div class="
  nuke-transition-productive-standard-moderate-01
  w-full h-fit justify-end
  p-24px
  hover:pt-64px
   flex flex-col
  text-light-10 hover:text-dark-100  dark:text-dark-100 dark:hover:text-light-10
  bg-dark-100 hover:bg-light-10 dark:bg-light-10 dark:hover:bg-dark-100 select-none
">
          <div class="xs:h-fit xl:h-full w-full nuke-text-heading-03 text-nowrap">
            Open Canvas
          </div>

        </div>
      </router-link>

      <router-link to="/docs">
        <div class="
  nuke-transition-productive-standard-moderate-01
  w-full h-fit justify-end
  p-24px
  hover:pt-64px
   flex flex-col
  text-light-10 hover:text-dark-100  dark:text-dark-100 dark:hover:text-light-10
  bg-dark-100 hover:bg-light-10 dark:bg-light-10 dark:hover:bg-dark-100 select-none
">
          <div class="xs:h-fit xl:h-full w-full nuke-text-heading-03 text-nowrap">
            Learn More
          </div>
        </div>
      </router-link>

      <a href="https://github.com/independent-society-of-knowledge/Mithra">
        <div class="
  nuke-transition-productive-standard-moderate-01
  w-full h-fit justify-end
  p-24px
  hover:pt-64px
   flex flex-col
  text-light-10 hover:text-dark-100  dark:text-dark-100 dark:hover:text-light-10
  bg-dark-100 hover:bg-light-10 dark:bg-light-10 dark:hover:bg-dark-100 select-none
">
          <div class="xs:h-fit xl:h-full w-full nuke-text-heading-03 text-nowrap">
            GitHub
          </div>
        </div>
      </a>
    </div>
    <div class="  mx:px-[112px] xs:mx-0  xs:w-full xl:mx-[112px]  xs:px-16px   py-32px md:px-64px md:h-full xs:h-fit md:w-fit nuke-transition-productive-standard-slow-01 w-full
      bg-black  backdrop-blur-sm nuke-text-fluid-display-01 text-light-10  flex flex-col gap-64px justify-between
      ">
      <div class="nuke-text-fluid-display-01 h-full items-end justify-end">
        Mithra
      </div>
      <div class="w-full nuke-text-fluid-paragraph-01">
        > Edu Program
      </div>
      <div class="nuke-text-body-02  max-w-[512px] ">
        Mithra, developed by the Independent Society of Knowledge, is a free and open-source digital teaching platform
        designed to revolutionize learning through interactive, modern tools.
      </div>
      <div class="nuke-text-legal-01 text-dark-50  max-w-[512px] ">
        All rights reserved for Independent Society of Knowledge / Mithra <br>
        Photo by <a
          href="https://unsplash.com/@profwicks?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ben
        Wicks</a> on <a
          href="https://unsplash.com/photos/chart-treemap-chart-GjBPLkTDzt4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

      </div>
    </div>
  </div>
</template>

<script setup>
// import GlassReferal from "@/components/nukleus/GlassReferal.vue";
import FooterButton from "@/components/nukleus/FooterButton.vue";
</script>

<style scoped>
/* Ensure the video covers the entire background */
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.about-background {
  background: url("@/assets/backgrounds/home.jpg") center;
  background-blend-mode: luminosity;
  background-size: cover;
}
</style>