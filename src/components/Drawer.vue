<template>
  <div>
    <canvas ref="drawingCanvas" class="drawing-canvas"></canvas>
  </div>
</template>

<script setup>
import {ref, onMounted, watch} from 'vue';

const drawingCanvas = ref(null);
let isDrawing = false;
let context = null;

const brushSize = ref(10);
const brushColor = ref('#ffffff');

const startDrawing = (event) => {
  isDrawing = true;
  context.beginPath();
  context.moveTo(event.clientX, event.clientY);
};

const draw = (event) => {
  if (!isDrawing) return;
  context.lineTo(event.clientX, event.clientY);
  context.stroke();
  context.stroke.style = brushColor.value;
  context.lineWidth = brushSize.value;
};

const stopDrawing = () => {
  isDrawing = false;
  context.closePath();
};


onMounted(() => {
  const canvas = drawingCanvas.value;
  context = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

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
.drawing-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 1000;
}

.hidden {
  display: none;
}

.controls {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1001;
  background: white;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>