<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const router = useRouter();

const questions: Question[] = [
  {
    question: "¿Cual es mi pelicula favorita 🎬",
    options: [
      "Iron Man 3",
      "Interestelar",
      "Piratas del caribe",
      "Avengers End Game",
      "Avengers Infinity War",
      "Spiderman: No way Home",
    ],
    answer: "Avengers End Game",
  },
  {
    question: "Personaje favorito",
    options: [
      "Iron Man",
      "Capitan America",
      "Hulk",
      "Viuda Negra",
      "Spider Man",
    ],
    answer: "Spider Man",
  },
  {
    question: "¿Qué comida me gusta más? 🍔",
    options: ["Pizza", "Hamburguesa", "Sushi", "Tacos", "Burritos"],
    answer: "Hamburguesa",
  },
  {
    question: "¿Qué me gusta hacer en mi tiempo libre? 💻",
    options: [
      "Programar",
      "Dormir",
      "Ver películas",
      "Bailar",
      "Hacer Ejercicio",
      "Caminar",
      "Jugar Videojuegos",
    ],
    answer: "Jugar Videojuegos",
  },
  {
    question: "¿Cual es mi color favorito?",
    options: [
      "Negro",
      "Azul",
      "Rojo",
      "Blanco",
      "Gris",
      "Celeste",
      "Amarillo",
      "Verde",
    ],
    answer: "Negro",
  },
  {
    question: "¿Cuantos hijos quiero?",
    options: ["1", "2", "3", "4", "5", "6", "7", "8"],
    answer: "8",
  },
  {
    question: "¿Prefiero niña o niño?",
    options: ["Solo Niños", "Solo Niñas", "Ambos"],
    answer: "Ambos",
  },
  {
    question: "Dulce o Salado",
    options: ["Salado", "Dulce"],
    answer: "Dulce",
  },
  {
    question: "Que prefiero",
    options: ["Frontend", "Backend", "Fullstack"],
    answer: "Frontend",
  },
  {
    question: "Que prefiero?",
    options: ["Casa", "Apartamento"],
    answer: "Casa",
  },
  {
    question: "Cuando me quiero casar contigo",
    options: ["En dos años", "En 5 años", "El otro año", "Hoy"],
    answer: "Hoy",
  },
];

const selectedAnswers = ref<(string | null)[]>(
  Array(questions.length).fill(null)
);
const showResults = ref(false);
const correctCount = ref(0);
const wrongCount = ref(0);

const selectAnswer = (qIndex: number, option: string) => {
  selectedAnswers.value[qIndex] = option;
};

const allAnswered = () => selectedAnswers.value.every((a) => a !== null);

const checkResults = () => {
  if (!allAnswered()) {
    alert(
      "Amor tienes que responder todas las preguntas para ver el resultado 💗"
    );
    return;
  }

  let correct = 0;
  questions.forEach((q, i) => {
    if (selectedAnswers.value[i] === q.answer) correct++;
  });

  correctCount.value = correct;
  wrongCount.value = questions.length - correct;
  showResults.value = true;
};

const resetQuiz = () => {
  selectedAnswers.value = Array(questions.length).fill(null);
  showResults.value = false;
  correctCount.value = 0;
  wrongCount.value = 0;
};

const goHome = () => router.push("/");
</script>

<template>
  <div class="quiz-container">
    <h1>¿Qué tanto me conoces, Mi Reina? 👑</h1>

    <!-- Modo normal -->
    <div v-if="!showResults" class="questions-list">
      <div v-for="(q, index) in questions" :key="index" class="question-card">
        <h2>{{ q.question }}</h2>

        <div class="options">
          <button
            v-for="(option, i) in q.options"
            :key="i"
            class="option-btn"
            :class="{
              selected: selectedAnswers[index] === option,
            }"
            @click="selectAnswer(index, option)"
          >
            {{ option }}
          </button>
        </div>
      </div>

      <button
        class="check-results-btn"
        @click="checkResults"
        :disabled="!allAnswered()"
      >
        {{
          allAnswered()
            ? "Ver resultados 💌"
            : "Mi vida tienes que responder todas las preguntas para ver el resultado jeje💝"
        }}
      </button>

      <!-- AÑADE ESTE CONTENEDOR ALREDEDOR DEL BOTÓN -->
      <div class="button-container">
        <button class="back-btn" @click="goHome">Ir al inicio 🏠</button>
      </div>
    </div>

    <!-- Modo resultados -->
    <div v-else class="results-container">
      <h2>💘 Resultado del Quiz</h2>
      <p>
        Aciertos: <strong>{{ correctCount }}</strong> 💖 <br />
        Errores: <strong>{{ wrongCount }}</strong> 😅
      </p>

      <p v-if="correctCount === questions.length">
        Iss amor, me conocesssss, te amooooooooo 😍
      </p>
      <p v-else-if="correctCount >= questions.length / 2">
        ¡Muy bien! Me conoces bastante 💕
      </p>
      <p v-else>Uy amorrr te faltaronnn, JUMMMM SOSPECHOSOOOO JAJAJAJ</p>

      <div class="results-buttons">
        <button class="back-btn" @click="resetQuiz">
          Volver a intentarlo 🔁
        </button>
        <button class="back-btn" @click="goHome">Ir al inicio 🏠</button>
      </div>
    </div>
  </div>
</template>

<style src="../styles/quiz.css"></style>
