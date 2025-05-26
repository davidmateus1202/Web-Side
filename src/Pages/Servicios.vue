<template>
    <div class="flex flex-col top-0 left-0 w-full h-full bg-white overflow-x-hidden">
        <NavBar />
        <!-- Header -->
        <Header :title="'Servicios'" />
        <!-- section 5 -->
        <Section5 />
        <!-- Footer -->
        <Footer />
    </div>
    <!-- El componente de carga. -->
    <Loading v-if="showLoadingScreen" :is-actually-loading="!allComponentsReady" />
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import Section5 from '../components/Section5.vue'
import Loading from './Loading.vue'
import { ref, onMounted } from 'vue'

const allComponentsReady = ref(false)
const showLoadingScreen = ref(true)

const FADE_OUT_DURATION_LOADING_ELEMENTS = 0.2;
const EXPANSION_DURATION_LOADING = 0.7;

onMounted(async () => {
    showLoadingScreen.value = true;
    allComponentsReady.value = false;
    console.log("HomePage: Montado, iniciando carga simulada...");
    await new Promise(resolve => setTimeout(resolve, 3500));

    console.log("HomePage: Carga de componentes/datos terminada.");
    allComponentsReady.value = true;

    const totalLoadingTransitionTime = FADE_OUT_DURATION_LOADING_ELEMENTS + EXPANSION_DURATION_LOADING;

    setTimeout(() => {
        console.log("HomePage: Ocultando pantalla de carga.");
        showLoadingScreen.value = false; // Desmonta Loading.vue y muestra el contenido
    }, (totalLoadingTransitionTime * 1000) + 100); // Multiplicar por 1000 para ms y añadir un pequeño buffer (100ms)
});
</script>