<script setup lang="ts">
interface Circle {
  size: number;
  top: number;
  left: number;
  color: string;
}

const colors = ["#b388eb", "#89cff0", "#ffb6c1"];

function randomColor(): string {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index] as string;
}

// Círculos decorativos fijos en el fondo
const circles: Circle[] = Array.from({ length: 8 }, () => ({
  size: Math.random() * 160 + 60,
  top: Math.random() * 90,
  left: Math.random() * 90,
  color: randomColor(),
}));
</script>

<template>
  <div class="home-container">
    <!-- Fondo decorativo estático -->
    <div
      v-for="(circle, i) in circles"
      :key="i"
      class="animated-circle"
      :style="{
        width: circle.size + 'px',
        height: circle.size + 'px',
        background: circle.color,
        top: circle.top + '%',
        left: circle.left + '%',
      }"
    />

    <!-- Contenido principal -->
    <div class="home-content">
      <h1>Nuestro viaje ❤️‍🩹</h1>
      <div class="button-group">
        <router-link to="/historia" class="btn btn-story">
          Nuestra historia 🕰️
        </router-link>
        <router-link to="/quiz" class="btn btn-quiz">
          Quiz de pareja JUA JUA JUA ❤️‍🩹
        </router-link>
        <router-link to="/rompecabezas" class="btn btn-puzzle">
          Rompecabezas JIJIJI 🧩
        </router-link>
      </div>
    </div>
  </div>
</template>

<style src="../styles/home.css"></style>
