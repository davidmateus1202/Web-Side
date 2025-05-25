<template>
    <div v-if="loadingRef === false" class="flex flex-col top-0 left-0 w-full h-full bg-white overflow-x-hidden">
        <NavBar />

        <!-- section 1 -->
        <Carrusel />

        <!-- section 2 -->
        <Section2 />

        <!-- section 3 -->
        <Section3 />

        <!-- section 4 -->
        <Section4 />

        <!-- section 5 -->
        <Section5 />

        <!-- Footer -->
        <Footer />
    </div>

    <Loading v-else/>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Carrusel from '../components/Carrusel.vue'
import Section2 from '../components/Section2.vue'
import Section3 from '../components/Section3.vue'
import Section4 from '../components/Section4.vue'
import Section5 from '../components/Section5.vue'
import Footer from '../components/Footer.vue'
import Loading from '../components/Loading.vue'
import { ref, onMounted } from 'vue'

const loadingRef = ref(false)

</script>