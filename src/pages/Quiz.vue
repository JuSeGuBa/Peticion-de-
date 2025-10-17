<script setup lang="ts">
interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    question: "¿Cuál es mi canción favorita? 🎶",
    options: ["Bugambilia", "Azul", "Danza Kuduro", "La Bamba"],
    answer: "Bugambilia",
  },
  {
    question: "¿Qué comida me gusta más? 🍔",
    options: ["Pizza", "Hamburguesa", "Sushi", "Tacos"],
    answer: "Hamburguesa",
  },
  {
    question: "¿Qué me gusta hacer en mi tiempo libre? 💻",
    options: ["Programar", "Dormir", "Ver películas", "Bailar"],
    answer: "Programar",
  },
  {
    question: "¿Qué color me representa más? 🎨",
    options: ["Negro", "Azul", "Rojo", "Blanco"],
    answer: "Negro",
  },
];
</script>

<template>
  <div class="quiz-container">
    <h1>💞 ¿Qué tanto me conoces, amor? 💞</h1>

    <div class="questions-list">
      <div v-for="(q, index) in questions" :key="index" class="question-card">
        <h2>{{ q.question }}</h2>
        <div class="options">
          <button v-for="(option, i) in q.options" :key="i" class="option-btn">
            {{ option }}
          </button>
        </div>
      </div>
    </div>

    <router-link to="/" class="back-btn">Volver al inicio</router-link>
  </div>
</template>

<style src="../styles/"></style>
