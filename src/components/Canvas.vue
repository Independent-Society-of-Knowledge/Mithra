<!-- Canvas.vue -->
<template>
  <div class="container-all">
    <!-- Left side - Rendered Components -->
    <div class="container-content">
      <div class="single-item" v-for="item in contentItems" :key="item.id">
        <LatexRenderer
            v-if="item.type === 'latex'"
            :id="'render-' + item.id"
            :latex="item.content"/>
        <MarkdownRenderer
            v-if="item.type === 'mark' || item.type === '' "
            :id="'render-' + item.id"
            :markdown="item.content"/>
      </div>
    </div>

    <!-- Bottom - Input Form -->
    <div class="content-editor">
      <textarea
          type="text"
          v-model="inputContent"
          class="input-field"
          placeholder="Type your content here (e.g. 'latex: \int x^3 = 2' or 'mark: ## Hello World!')"
          @keyup.enter="addContent"
      />
      <button
          @click="addContent"
          class="add-button"
      >
        Add Content
      </button>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import LatexRenderer from "./LatexRender.vue"
import MarkdownRenderer from "./MarkdownRender.vue"

export default {
  name: 'Canvas',
  components: {
    LatexRenderer,
    MarkdownRenderer
  },
  setup() {
    const contentItems = ref([])
    const inputContent = ref('')
    let idCounter = 0

    const addContent = () => {
      const input = inputContent.value.trim()
      if (!input) return

      const [type, ...contentParts] = input.split(':')
      const content = contentParts.join(':').trim()

      if (!content) return

      contentItems.value.push({
        id: idCounter++,
        type: type.toLowerCase(),
        content
      })

      inputContent.value = ''
    }

    return {
      contentItems,
      inputContent,
      addContent
    }
  }
}
</script>
<style>
*{
  color: white;
}
.container-all {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  gap: 20px;
  background: black;
}
.container-content {
  height: 100%;
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

@keyframes typewriter {
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
}

.container-content > div {
  width: 100%;
  height: fit-content;
  animation: typewriter ease-in 2s 1 normal;
}
.single-item{
  transition: transform 0.5s ease-in-out;
}

.content-editor {
  display: flex;
  border-radius: 0px;
  padding-left: 20%;
  padding-right: 20%;
}

.input-field {
  flex: 1;
  padding: 10px;
  border: 1px solid #555;
  border-radius: 0;
  background: #222;
  color: white;
}

.add-button {
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.add-button:hover {
  background: #0056b3;
}
</style>