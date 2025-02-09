<script setup lang="ts">

import NavbarLink from "./NavbarLink.vue";
</script>

<template>
     <div class="h-fit flex flex-row mg:w-full   lg:items-start lg:justify-start">
          <div class="flex lg:flex-row xs:flex-col w-full  ">
               <NavbarLink title="Home" route="/"/>
               <NavbarLink title="Canvas" route="/canvas"/>
               <NavbarLink title="Get Started" route="/get-started"/>
               <NavbarLink title="Docs" route="/docs"/>
               <NavbarLink title="Show cases" route="/show-case"/>
          </div>
          <div class="flex lg:flex-row xs:flex-col lg:w-full xs:w-fit lg:justify-end xs:justify-start items-start ">
               <NavbarLink title="Signup" route="/auth/signup"/>
               <NavbarLink title="Login" route="/auth/login"/>
          </div>
     </div>
</template>

<style scoped>

</style>