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
  <a :href="link">
    <div class="flex flex-row gap group items-center
  nuke-transition-productive-standard-moderate-01 h-full
  bg-light-10 hover:bg-light-40  active:bg-light-10 text-dark-100 dark:text-light-10 p-24px hover:pl-32px select-none
  border-l-[2px] border-l-light-30 dark:border-l-dark-60 hover:border-l-[2px] hover:border-light-50
  dark:bg-dark-70 hover:dark:bg-dark-60 active:dark:bg-dark-70 ">
      <div class="flex flex-col gap-16px w-full">
        <div class="nuke-text-heading-04">{{ title }}</div>
        <div class="nuke-text-body-02 text-nowrap">{{ description }}</div>
      </div>
      <div class="w-full xs:h-[16px] xl:h-[24px] flex justify-end">
        <SvgArrowLeft height="100%"/>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import SvgArrowLeft from "@/assets/icons/arrow--right.svg?component"

const props = withDefaults(
    defineProps<{
      title: String,
      description: String,
      link: String
    }>(),
    {}
)
</script>

<style scoped>

</style>