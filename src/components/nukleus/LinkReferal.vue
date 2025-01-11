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
  <a :href="href">
    <div class="nuke-text-body-02 flex flex-row gap-8px items-start justify-start
  nuke-transition-productive-standard-fast-01
  text-primary-80 hover:text-primary-60 active:text-primary-90
  dark:text-primary-30 dark:hover:text-primary-50 dark:active:text-primary-60 group h-fit

">
      {{ text }}
      <SvgArrowLeft height="24px"/>
    </div>
  </a>
</template>
<script setup lang="ts">
import SvgArrowLeft from "@/assets/icons/arrow--right.svg?component";

const props = defineProps<{
  text: string,
  href: string
}>()
</script>
<style scoped>

</style>