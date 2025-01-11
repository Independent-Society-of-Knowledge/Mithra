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
  <div class="h-full w-fit p-[16px]  justify-center items-center flex
  nuke-text-body-02 select-none

  text-dark-20 hover:text-dark-60 data-[selected=true]:text-dark-80
  bg-none hover:bg-light-30 data-[selected=true]:bg-light-40

  dark:text-light-20 dark:hover:text-light-40 dark:data-[selected=true]:text-light-30
  dark:bg-none dark:hover:bg-dark-70 dark:data-[selected=true]:bg-dark-90


"
  >
    <slot/>
  </div>
</template>
<script setup lang="ts">

</script>

<style scoped>

</style>