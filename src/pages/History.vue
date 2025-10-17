<script setup lang="ts">
import { ref } from "vue";

interface Memory {
  title: string;
  date: string;
  description: string;
  image: string;
  type?: "image" | "text"; // 👈 Nuevo campo para tipo de modal
}

const memories: Memory[] = [
  {
    title: "Cómo nos conocimos 💫",
    date: "El comienzo",
    description:
      "Nos conocimos en 2014, Briñez nos presentó, cuando teníamos apenas 6 años. Sino me equivoco tenías tu chaqueta rosada que tanto recuerdo. Tiempo después nos hicimos novios y recuerdo que fue en mi cuarto un domingo, y ahí me diste mi primer beso que tanto recuerdo y jamás olvidaré (y también recuerdo que nos dimos muchos jaja). Aunque éramos pequeños, jamás imaginamos que ahí empezaba nuestra historia.",
    image: "/images/image.png",
    type: "image",
  },
  {
    title: "Nuestro reencuentro después de habernos separado tantos años 💞",
    date: "Ese día especial",
    description:
      "Fue en mi grado 2023, y aunque fue fugaz y sinceramente nunca imaginamos la conexión que tendríamos, recuerdo haber bailado juntos y sin saberlo formamos un momento que con el tiempo cobraría vida.",
    image: "/images/grado2023.jpg",
    type: "image",
  },
  {
    title: "Nuestra Primera Videollamada",
    date: "Nuestro futuro",
    description:
      "Recuerdo que teniamos una pena, yo no sabia que ponerme o como peinarme y tu solo me dijiste 'yo solo estare con mi pijama de stich' y yo ahh bueno jajaja entonces me puse una camiseta me peine y yap. Recuerdo la pena que tenias, aunque yo tambien pero no tanto como la tuya jajaja, tu te tapabas la cara y estabas en la sala, y luego ya te quitaste las manos de la cara, y nos reiamos jaja, te decia que estabas hermosa tu estabas toda roja jaja, y con pena, pero hablabamos y sino estoy mal nos pusimos a ver una peli jeje, y fue un bonito recuerdo, porque comprobamos que seguimos la quimica y la conexion, y eramos notros mismos, y fue bonito creo que esa videollamada abrio muchas puertas interesantes 😈 JAJAJAJ",
    image: "/images/videollamada.jpg",
    type: "image",
  },
  {
    title: "Recuerdo privado de tu y yo jijiji",
    date: "Solo para ti",
    description: "Haz click para leer...",
    image: "",
    type: "text", // 👈 Este será el botón/modal de texto
  },
  {
    title: "Lo que viene 💍",
    date: "Nuestro futuro",
    description:
      "Algun día, muy pronto con ayuda de Jehova, nos casaremos, y no solo tu y yo juraremos un amor eterno, sino tambien frente a todo el mundo y frente a Jehova ❤️‍🩹",
    image: "/images/fotobodafuture.png",
    type: "image",
  },
  {
    title: "Nuestra familia",
    date: "Nuestro futuro",
    description:
      "Creo que me estoy adelantando mucho jaj, pero va a pasar, y algun dia tendremos nuestra familia, criaremos a Anto y a Noa, porque cuando te veo, veo arrugas y unos niños corriendo. Te Amo mucho Mi Reina 👑",
    image: "/images/family.png",
    type: "image",
  },
];

// Estados de los modales
const selectedImage = ref<string | null>(null);
const showTextModal = ref<boolean>(false); // 👈 Nuevo estado para modal de texto

function openModal(memory: Memory) {
  if (memory.type === "text") {
    showTextModal.value = true; // 👈 Abre modal de texto
  } else if (memory.image) {
    selectedImage.value = memory.image; // 👈 Abre modal de imagen
  }
}

function closeModal() {
  selectedImage.value = null;
  showTextModal.value = false;
}
</script>

<template>
  <div class="history-container">
    <h1>Nuestra Historia jeje</h1>

    <div class="timeline">
      <div v-for="(memory, i) in memories" :key="i" class="memory-card">
        <!-- Mostrar imagen o botón según el tipo -->
        <img
          v-if="memory.image && memory.type !== 'text'"
          :src="memory.image"
          :alt="memory.title"
          @click="openModal(memory)"
          class="clickable-image"
        />

        <!-- Botón para el modal de texto -->
        <div
          v-else-if="memory.type === 'text'"
          class="text-modal-trigger"
          @click="openModal(memory)"
        >
          <div class="trigger-content">
            <span class="trigger-icon">💌</span>
            <span class="trigger-text">Recuerdo Secretito jeje</span>
          </div>
        </div>

        <div class="memory-text">
          <h2>{{ memory.title }}</h2>
          <p class="date">{{ memory.date }}</p>
          <p>{{ memory.description }}</p>
        </div>
      </div>
    </div>

    <router-link to="/" class="back-btn">Volver al inicio</router-link>

    <!-- MODAL DE IMAGEN -->
    <div v-if="selectedImage" class="modal-overlay" @click="closeModal">
      <img :src="selectedImage" alt="Amor" class="modal-image" />
    </div>

    <!-- MODAL DE TEXTO -->
    <div v-if="showTextModal" class="modal-overlay" @click="closeModal">
      <div class="text-modal" @click.stop>
        <h3>Unos de los recuerdos mas importantes y hermosos que hemos tenido</h3>
        <div class="text-content">
          <p>
            - Cuando sentimos esa conexion tan fuerte que sin darnos en cuenta de un
            momento a otro, estabamos haciendo el amor y sintiendo todo a ditancia, no
            sabiamos que pasaba pero nuestro amor y nuestros cuerpos si lo sabian, tu
            sentias y yo sentia, y fue cuando supimos que el "tu y yo" era lo mas unico de
            este mundo.
          </p>
          <p>
            - La primera vez que lo hicimos por llamada, nuestra conexion aumento, y no
            solo sentiamos, tambien escuchabamos, sentiamos placer y amor y conexion, y
            fue un momento hermoso.
          </p>
          <p>
            - La primera vez que lo hicimos por videollamada, tu estabas en sabanas y
            hermosa, nuestro amor ya era tan grande, que aunque nos habiamos entregado
            esta vez fue mas fuerte y real, hubo deseo, placer, amor, conexion, y es algo
            que jamas olvidare.
          </p>
          <p>
            Te amo más de lo que las palabras pueden expresar. Gracias por esos momentos.
            Y no espero el día que sea fisico ese aquel dia de tanta espera que llegara al
            fin, y nuestro amor sera mas inrrompible de lo que es ahora
          </p>
          <p class="signature">Te Amo ❤️‍🩹</p>
        </div>
        <button class="close-text-btn" @click="closeModal">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<style src="../styles/history.css"></style>
