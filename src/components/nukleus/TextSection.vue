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
  <div class="
  text-dark-100 dark:text-light-10 flex
  data-[mode='fluid']:xl:flex-row data-[mode='fluid']:xs:flex-col h-fit gap-[32px] nuke-transition-productive-standard-fast-01
  data-[mode='vertical']:flex-col data-[mode='horizontal']:flex-row
  " :data-mode="mode">
    <div class="nuke-text-fluid-display-01 w-full" >
      {{
        title
      }}
    </div>
    <div class="nuke-text-fluid-paragraph-01 w-full">
      <slot/>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = withDefaults(
    defineProps<{
      title: String
      mode: "fluid" | "vertical" | "horizontal"
    }>(),
    {
      title: "Default Title",
      mode: "fluid"
    }
)
</script>


<style scoped>

</style>