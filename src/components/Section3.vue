<template>
    <div class="relative w-screen min-h-[500px] h-auto">
        <div class="absolute inset-0 z-0 overflow-hidden">
            <img :src="selvaFondo4" class="object-cover w-full h-full" alt="Background Image" />
        </div>
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        <div class="relative z-10 flex flex-col items-center justify-center h-full p-16">
            <h1 class="font-semibold text-3xl text-white text-center">La Experiencia Selva Bowling: Diversión, Sabor e Innovación en un Solo Lugar</h1>
            <h3 class="text-white font-light my-5">Nuestra dedicación a ir más allá de lo ordinario.</h3>
            <div ref="cardsContainer" class="grid grid-cols-1 lg:grid-cols-4 w-full h-full gap-x-5 px-5">
                <CardDetails
                    v-for="(item, index) in carditems"
                    :key="index"
                    :title="item.title"
                    :description="item.description"
                    class="card-item-gsap"
                    />  
            </div>
        </div>

    </div>
</template>

<script setup>
import selvaFondo4 from '../assets/selva-fondo-4.png';
import CardDetails from './CardDetails.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';


const carditems = ref([
    {
        title: 'Pistas de Bolos, Billares y Bolirana',
        description: 'Diversión sin límites: Bolos, billar y bolirana en un solo lugar para disfrutar al máximo.',
    },
    {
        title: 'Gastrobar & Celebraciones Especiales',
        description: 'Gastrobar moderno y celebraciones inolvidables para disfrutar con amigos o en familia.',
    },
    {
        title: 'Pasión por el Bowling',
        description: 'Escuela, torneos y premios. Vive el bowling como deporte, pasión y competencia.',
    },
    {
        title: 'Conexiones que Cuentan',
        description: 'Alianzas estratégicas y tienda de souvenirs con recuerdos únicos y artículos exclusivos.',
    },
]);

const cardsContainer = ref(null);
let observer = null;
let animationDone = false;

onMounted(() => {
    if (!cardsContainer.value) return;

    gsap.set(".card-item-gsap", {
        opacity: 0,
        x: 0,
        y: -50
    });

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // animar cuando el 20% del elemento sea visible
    }

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0 && !animationDone) {
                gsap.to(".card-item-gsap", {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    delay: 0.2,
                });
                observer.unobserve(cardsContainer.value);
            }
        })
    }, options)

    observer.observe(cardsContainer.value);
})

onBeforeUnmount(() => {
    if (observer && cardsContainer.value) {
        observer.unobserve(cardsContainer.value);
    }
    observer = null;
})

</script>