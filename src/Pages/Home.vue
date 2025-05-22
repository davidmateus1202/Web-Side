<template>
    <div class="flex flex-col top-0 left-0 w-full h-full bg-white overflow-x-hidden">
        <NavBar />

        <!-- section 1 -->
        <Carrusel />

        <!-- section 2 -->
        <Section2 />

        <!-- section 3 -->
        <Section3 />

    </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Carrusel from '../components/Carrusel.vue'
import Section2 from '../components/Section2.vue'
import Section3 from '../components/Section3.vue'

</script>