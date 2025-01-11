<!--
  - Copyright © 2024 Independent Society of Knowledge
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU General Public License as published by
  - the Free Software Foundation, either version 2 of the License, or
  - (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  - GNU General Public License for more details.
  -
  - You should have received a copy of the GNU General Public License
  - along with this program. If not, see <https://www.gnu.org/licenses/>.
  -
  - Contact Information:
  - Independent Society of Knowledge
  - Email: projects@iskportal.com
  -
  - SPDX-License-Identifier: GPL-2.0-or-later
  -
  - Developed by: Amir H. Ebrahimnezhad (if you helped or your commits are going to be pulled please add your name and email with a comma.)
  - Email:        ceo@iskportal.com
  - version 1.0.0
  -
  -->

<template>
  <RouterLink :to="link" class="w-full h-full">
    <div class="
  nuke-transition-productive-standard-moderate-01 backdrop-blur-[1px] dark:hover:bg-dark-100
  w-full h-full justify-between
  xs:p-16px
  xl:py-64px flex flex-col
  text-light-10 hover:text-dark-100 dark:hover:text-light-10
  xl:border-l-light-100 xl:border-l-[1px]
  hover:bg-light-10">
      <div class="xs:h-fit xl:h-full w-full nuke-text-heading-03">
        {{ title }}
      </div>
      <slot/>
<!--      <div class="w-full xs:h-[16px] xl:h-[24px] flex justify-end">-->
<!--        <SvgArrowLeft height="100%"/>-->
<!--      </div>-->

    </div>
  </RouterLink>
</template>

<script setup >
// import SvgArrowLeft from "@/assets/icons/arrow--right.svg?component"

const props = defineProps({
  title: String,
  link: String
})
</script>

<style scoped>

</style>