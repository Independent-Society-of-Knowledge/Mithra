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
  <div
      class=" w-full h-[calc(75vh-64px)] flex flex-col  items-start  bg-cover print:h-fit  "
      :style="{
      backgroundImage: `url(${imageURL})`
    }"
  >
    <div class="xs:mx-0 mx:px-[112px] xl:mx-[112px] xs:px-16px  py-32px md:px-[64px] lg:h-full md:h-fit xs:h-fit  xs:w-fit nuke-transition-productive-standard-slow-01 w-full
      bg-black dark:bg-light-10  nuke-text-fluid-display-01 text-light-10 dark:text-dark-100 lg:max-w-[50%] print:h-fit print:w-fit print:text-black
      ">
      {{ title }}
    </div>
  </div>
  <div v-html="renderedMarkdown" class="xs:py-32px md:px-16px h-fit lg:px-[256px] w-full dark:text-light-10 text-dark-100  flex flex-col gap-32px press print:px-[112px]" />
</template>
<script lang="ts" setup>
import {computed, onMounted, ref} from "vue";
import {marked} from "marked";
import markedKatex from "marked-katex-extension";

const props = defineProps<{
  imageName: string,
  title: string,
  contentName: string
}>()

const imageURL = computed(() => {
  return `../../iskportal/blogs/images/${props.imageName}`
})

const contentURL = computed(()=> {
  return `../../iskportal/blogs/${props.contentName}.md`
})
const markdownContent = ref<string>('');
const renderedMarkdown = ref<any>(''); // I assume marked returns string HTML
const options = {
  throwOnError: false
};

fetch(contentURL.value)
    .then(response => response.text())
    .then(data => {
      markdownContent.value = data;  // Assign the fetched markdown content
      marked.use(markedKatex(options))

      // marked.use(markedCodePreview())
      renderedMarkdown.value = marked.parse(markdownContent.value); // Parse and render markdown
    })
    .catch(err => console.error(err));

</script>

<style scoped lang="scss">

</style>
