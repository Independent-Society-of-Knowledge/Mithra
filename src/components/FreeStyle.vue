<template>
  <div>
    <canvas ref="drawingCanvas" class="w-full"></canvas>
    <div class="w-full h-64px flex flex-row gap-32px justify-center items-center">
      <label>
        Brush Size:
        <input type="range" min="1" max="50" v-model="brushSize" />
      </label>
      <label>
        Brush Color:
        <input type="color" v-model="brushColor" />
      </label>
      <button @click="clearCanvas">Clear Canvas</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const drawingCanvas = ref(null);
let isDrawing = false;
let context = null;

const brushSize = ref(5);
const brushColor = ref('#000000');

const startDrawing = (event) => {
  isDrawing = true;
  context.beginPath();
  context.moveTo(event.clientX - drawingCanvas.value.offsetLeft, event.clientY - drawingCanvas.value.offsetTop);
};

const draw = (event) => {
  if (!isDrawing) return;
  context.lineTo(event.clientX - drawingCanvas.value.offsetLeft, event.clientY - drawingCanvas.value.offsetTop);
  context.stroke();
};

const stopDrawing = () => {
  isDrawing = false;
  context.closePath();
};

const clearCanvas = () => {
  context.clearRect(0, 0, drawingCanvas.value.width, drawingCanvas.value.height);
};

onMounted(() => {
  const canvas = drawingCanvas.value;
  context = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  context.lineWidth = brushSize.value;
  context.strokeStyle = brushColor.value;
  context.lineCap = 'round';

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);
});

watch([brushSize, brushColor], () => {
  if (context) {
    context.lineWidth = brushSize.value;
    context.strokeStyle = brushColor.value;
  }
});
</script>

<style scoped>

</style>