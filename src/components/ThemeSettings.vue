<template>
  <div class="theme-customizer p-4">
    <div class="mb-6">
      <h2 class="text-xl font-bold mb-4">Theme Customizer</h2>

      <!-- Mode Toggle -->
      <div class="mb-4">
        <label class="inline-flex items-center">
          <input
              type="radio"
              v-model="mode"
              value="basic"
              class="form-radio"
          >
          <span class="ml-2">Basic</span>
        </label>
        <label class="inline-flex items-center ml-4">
          <input
              type="radio"
              v-model="mode"
              value="advanced"
              class="form-radio"
          >
          <span class="ml-2">Advanced</span>
        </label>
      </div>

      <!-- Basic Mode -->
      <div v-if="mode === 'basic'" class="space-y-6">
        <!-- Global Colors -->
        <div class="border rounded-lg p-4">
          <h3 class="font-semibold mb-3">Global Colors</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block mb-2">Primary Color</label>
              <input
                  type="color"
                  v-model="basicTheme.primaryColor"
                  @input="updateFromBasicTheme"
                  class="w-full"
              >
            </div>
            <div>
              <label class="block mb-2">Background Color</label>
              <input
                  type="color"
                  v-model="basicTheme.backgroundColor"
                  @input="updateFromBasicTheme"
                  class="w-full"
              >
            </div>
          </div>
        </div>

        <!-- Typography -->
        <div class="border rounded-lg p-4">
          <h3 class="font-semibold mb-3">Typography</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block mb-2">Font Family</label>
              <select
                  v-model="basicTheme.fontFamily"
                  @change="updateFromBasicTheme"
                  class="w-full p-2 border rounded"
              >
                <option value="Arial, sans-serif">Arial</option>
                <option value="Times New Roman, serif">Times New Roman</option>
                <option value="Helvetica, sans-serif">Helvetica</option>
                <option value="Georgia, serif">Georgia</option>
              </select>
            </div>
            <div>
              <label class="block mb-2">Base Font Size</label>
              <select
                  v-model="basicTheme.baseFontSize"
                  @change="updateFromBasicTheme"
                  class="w-full p-2 border rounded"
              >
                <option value="14px">Small (14px)</option>
                <option value="16px">Medium (16px)</option>
                <option value="18px">Large (18px)</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Block Styles -->
        <div class="border rounded-lg p-4">
          <h3 class="font-semibold mb-3">Block Styles</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block mb-2">Block Background</label>
              <input
                  type="color"
                  v-model="basicTheme.blockBackground"
                  @input="updateFromBasicTheme"
                  class="w-full"
              >
            </div>
            <div>
              <label class="block mb-2">Border Color</label>
              <input
                  type="color"
                  v-model="basicTheme.borderColor"
                  @input="updateFromBasicTheme"
                  class="w-full"
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Advanced Mode -->
      <div v-else class="space-y-6">
        <!-- Sections Accordion -->
        <div v-for="(section, sectionKey) in advancedSections" :key="sectionKey" class="border rounded-lg">
          <button
              @click="toggleSection(sectionKey)"
              class="w-full p-4 text-left font-semibold flex justify-between items-center"
          >
            {{ section.title }}
            <span>{{ expandedSections[sectionKey] ? '−' : '+' }}</span>
          </button>

          <div v-if="expandedSections[sectionKey]" class="p-4 border-t">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <template v-for="(field, fieldKey) in section.fields" :key="fieldKey">
                <div>
                  <label class="block mb-2">{{ field.label }}</label>

                  <!-- Color Input -->
                  <input
                      v-if="field.type === 'color'"
                      type="color"
                      v-model="themeStore[sectionKey][fieldKey]"
                      class="w-full"
                  >

                  <!-- Select Input -->
                  <select
                      v-else-if="field.type === 'select'"
                      v-model="themeStore[sectionKey][fieldKey]"
                      class="w-full p-2 border rounded"
                  >
                    <option v-for="opt in field.options" :key="opt.value" :value="opt.value">
                      {{ opt.label }}
                    </option>
                  </select>

                  <!-- Text Input -->
                  <input
                      v-else
                      :type="field.type"
                      v-model="themeStore[sectionKey][fieldKey]"
                      class="w-full p-2 border rounded"
                  >
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Preview Section -->
    <div class="mt-8 border rounded-lg p-4">
      <h3 class="font-semibold mb-3">Preview</h3>
      <div class="preview-content" :style="previewStyles">
        <h1>Heading 1</h1>
        <p>Regular paragraph text with <strong>bold</strong> and <em>italic</em> content.</p>
        <blockquote>This is a blockquote example</blockquote>
        <div class="callout-block">This is a callout block</div>
        <pre><code>This is a code block</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { themeStore } from '@/store/themeStore.js';

const mode = ref('basic');
const expandedSections = ref({});

// Basic theme controls
const basicTheme = reactive({
  primaryColor: '#ffffff',
  backgroundColor: '#000000',
  fontFamily: 'Arial, sans-serif',
  baseFontSize: '16px',
  blockBackground: '#2a2a2a',
  borderColor: '#444444',
});

// Advanced sections configuration
const advancedSections = {
  text: {
    title: 'Text Styles',
    fields: {
      color: { label: 'Color', type: 'color' },
      fontSize: { label: 'Font Size', type: 'text' },
      fontWeight: {
        label: 'Font Weight',
        type: 'select',
        options: [
          { value: '400', label: 'Normal' },
          { value: '500', label: 'Medium' },
          { value: '600', label: 'Semi Bold' },
          { value: '700', label: 'Bold' },
        ],
      },
    },
  },
  heading1: {
    title: 'Heading 1',
    fields: {
      color: { label: 'Color', type: 'color' },
      fontSize: { label: 'Font Size', type: 'text' },
      fontWeight: {
        label: 'Font Weight',
        type: 'select',
        options: [
          { value: '600', label: 'Semi Bold' },
          { value: '700', label: 'Bold' },
          { value: '800', label: 'Extra Bold' },
        ],
      },
      backgroundColor: { label: 'Background Color', type: 'color' },
    },
  },
  // Add more sections as needed...
};

// Toggle section expansion
const toggleSection = (sectionKey) => {
  expandedSections.value[sectionKey] = !expandedSections.value[sectionKey];
};

// Update theme from basic controls
const updateFromBasicTheme = () => {
  const updates = {
    global: {
      backgroundColor: basicTheme.backgroundColor,
      fontFamily: basicTheme.fontFamily,
    },
    text: {
      color: basicTheme.primaryColor,
      fontSize: basicTheme.baseFontSize,
    },
    blockQuote: {
      backgroundColor: basicTheme.blockBackground,
      borderColor: basicTheme.borderColor,
    },
    codeBlock: {
      backgroundColor: basicTheme.blockBackground,
    },
    calloutBlock: {
      backgroundColor: basicTheme.blockBackground,
      borderColor: basicTheme.borderColor,
    },
  };

  themeStore.updateTheme(updates);
};

// Computed styles for preview
const previewStyles = computed(() => ({
  color: themeStore.text.color,
  backgroundColor: themeStore.global.backgroundColor,
  fontFamily: themeStore.global.fontFamily,
  fontSize: themeStore.text.fontSize,
}));
</script>

<style scoped>
.theme-customizer {
  max-width: 1200px;
  margin: 0 auto;
}

.preview-content {
  padding: 20px;
  border-radius: 4px;
  min-height: 200px;
}
</style>