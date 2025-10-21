<script setup lang="ts">
import { ref, computed, nextTick } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const gridSize = 5;
const totalPieces = gridSize * gridSize;

// Lista de imágenes disponibles
const imageList = [
  "/images/familyconperro.png",
  "/images/image.png", // Reemplaza con tus imágenes
  "/images/fotobodafuture.png",
];

// Variable reactiva para la imagen actual
const currentImageIndex = ref(0);
const imageSrc = computed(() => imageList[currentImageIndex.value]);

const pieces = ref(
  Array.from({ length: totalPieces }, (_, i) => i).sort(
    () => Math.random() - 0.5
  )
);
const selectedPiece = ref<number | null>(null);

const correctPieces = computed(
  () => pieces.value.filter((val, i) => val === i).length
);
const progress = computed(() =>
  Math.round((correctPieces.value / totalPieces) * 100)
);
const isCompleted = computed(() => correctPieces.value === totalPieces);

async function selectPiece(index: number) {
  if (selectedPiece.value === null) {
    selectedPiece.value = index;
  } else {
    const selected = selectedPiece.value;
    const temp = pieces.value[selected] as number;
    pieces.value[selected] = pieces.value[index] as number;
    pieces.value[index] = temp;
    selectedPiece.value = null;

    await nextTick();
    if (isCompleted.value) {
      alert("❤️‍🩹 Eso mi vidaaaaaaaa Te Amooooooooooooo ❤️‍🩹");
    }
  }
}

function getBackgroundPosition(pieceIndex: number) {
  const col = pieceIndex % gridSize;
  const row = Math.floor(pieceIndex / gridSize);

  const xPos = (col / (gridSize - 1)) * 100;
  const yPos = (row / (gridSize - 1)) * 100;

  return `${xPos}% ${yPos}%`;
}

function getPieceShape(row: number, col: number) {
  const shapes = [];

  // Identificar bordes externos
  if (row === 0) shapes.push("flat-top");
  if (row === gridSize - 1) shapes.push("flat-bottom");
  if (col === 0) shapes.push("flat-left");
  if (col === gridSize - 1) shapes.push("flat-right");

  return shapes.join(" ");
}

function resetPuzzle() {
  // Cambiar a la siguiente imagen (cíclico)
  currentImageIndex.value = (currentImageIndex.value + 1) % imageList.length;

  // Mezclar las piezas
  pieces.value = Array.from({ length: totalPieces }, (_, i) => i).sort(
    () => Math.random() - 0.5
  );
  selectedPiece.value = null;
}

function goHome() {
  router.push("/");
}
</script>

<template>
  <div class="puzzle-container">
    <h1>🧩 Rompecabezas Amor jiji ❤️‍🩹</h1>

    <div class="progress">
      <p>
        Progreso: {{ correctPieces }} / {{ totalPieces }} piezas correctas ({{
          progress
        }}%)
      </p>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progress + '%' }"></div>
      </div>
    </div>

    <div class="puzzle-wrapper">
      <div class="puzzle-grid">
        <div
          v-for="(piece, index) in pieces"
          :key="index"
          class="puzzle-piece"
          :class="[
            { selected: selectedPiece === index },
            getPieceShape(Math.floor(index / gridSize), index % gridSize),
          ]"
          :style="{
            backgroundImage: `url(${imageSrc})`,
            backgroundPosition: getBackgroundPosition(piece),
            backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
          }"
          @click="selectPiece(index)"
        ></div>
      </div>
    </div>

    <div class="buttons-container">
      <button class="back-btn" @click="goHome">Volver al inicio 🏠</button>
    </div>

    <div v-if="isCompleted" class="completed-message">
      <p>Upaa que dura eres mi vida Te Amooooo 👑❤️‍🩹</p>
      <div class="buttons-container">
        <button class="back-btn" @click="resetPuzzle">Jugar otra vez 🔁</button>
        <button class="back-btn" @click="goHome">Volver al inicio 🏠</button>
      </div>
    </div>
  </div>
</template>

<style src="../styles/puzzle.css"></style>
