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
  <RouterLink :to="link" class="h-full w-full">
    <div class="
  nuke-transition-productive-standard-moderate-01 backdrop-blur-[2px]
  w-full h-full group
  xs:p-16px
  xl:py-64px flex flex-col

  hover:backdrop-blur-[16px] hover:dark:backdrop-blur-[16px]">
      <div class="xs:h-fit xl:h-full w-full nuke-text-heading-03">
        <div class="h-fit w-fit p-8px bg-dark-100 dark:bg-light-10 text-light-10 dark:text-dark-100 ">
          {{ title }}
        </div>
        <div class="text-light-10  ">
          <slot/>
        </div>
      </div>

      <div class="w-full xs:h-[16px] xl:h-[24px] flex justify-end
    text-light-10 ">
        <SvgArrowLeft height="100%"/>
      </div>

    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import SvgArrowLeft from "@/assets/icons/arrow--right.svg?component"

const props = defineProps<{
  title: String
  link: string
}>()
</script>

<style scoped>

</style>