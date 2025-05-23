<template>
    <div class="flex flex-col top-0 left-0 w-full min-h-screen h-auto bg-white items-center justify-start p-10">
        <h1 class="text-4xl font-semibold text-center">Bowlix: Where Fun ans Flavor Collide</h1>
        <span class="text-center mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
        <div ref="cardsContainer" 
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 mt-10">
            <Card class="card-rotate-item"/>
            <Card class="card-rotate-item"/>
            <Card class="card-rotate-item"/>
            <Card class="card-rotate-item"/>
        </div>

        <div class="flex flex-col lg:flex-row items-center justify-center w-full gap-x-5">
            <div class="flex flex-1/2 items-center justify-center lg:justify-end">
                <img :src="bolos" class="w-[90%] object-cover translate-y-2 hover:translate-y-0 transition-transform duration-300 ease-in-out group-hover:rotate-3 hover:scale-95">
            </div>
            <div class="flex flex-col flex-1/2 items-start justify-center lg:justify-start">
                <h1 class="font-semibold text-4xl">Selva Bowling: ¡Diversión Total en Cada Lanzamiento!</h1>
                <p class="mt-10 text-left font-light">¡Bienvenidos a Selva Bowling! Vive la mejor experiencia de entretenimiento y diversión en el corazón de Villavicencio. Ubicados en el local 96 del centro comercial Villacentro, te ofrecemos un concepto único que fusiona deporte, recreación y gastronomía en un ambiente moderno, vibrante y lleno de buena energía. Perfecto para toda la familia, un plan con amigos o ese evento corporativo que quieres hacer inolvidable. ¡En Selva Bowling, cada momento se convierte en una experiencia increíble!</p>
                <p class="mt-10 text-left font-light">En Selva Bowling la diversión no tiene límites. Contamos con 8 pistas de bolos de última generación con tecnología EDGE STRING y sistema de entretenimiento X ULTIMATE, que elevan cada partida a otro nivel. Disfruta además de 4 mesas de billar MATCH JIMAR EXCELSIOR, 2 juegos tradicionales de bolirana y un espectacular gastrobar, donde la buena comida y las bebidas se combinan para ofrecer una experiencia culinaria única. Y para quienes buscan un ambiente más exclusivo, nuestro elegante bar VIP está diseñado para brindar comodidad, privacidad y sofisticación. ¡En Selva Bowling, cada visita es una aventura que querrás repetir!</p>
                <button class="mt-10 bg-[#246364] text-xl text-white font-normal py-5 px-10 rounded-lg hover:bg-[#349896] transition duration-300 ease-in-out">
                    ¡Reserva Ahora!
                </button>
            </div>
        </div>
    </div>

</template>

<script setup>
import Card from './Card.vue';
import bolos from '../assets/bolos.png'
import '../CSS/Section2.css';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';

const cardsContainer = ref(null);
let observer = null;
let animationDone = false;

onMounted(() => {
    if (!cardsContainer.value) return;

    const cardElements = Array.from(cardsContainer.value.querySelectorAll('.card-rotate-item'));

    if (cardElements.length === 0) return;

    // logica para abtener las posiciones de los elementos
    const mindPoint = Math.ceil(cardElements.length / 2);
    const leftCards = cardElements.slice(0, mindPoint);
    const rightCards = cardElements.slice(mindPoint);

    if (leftCards.length > 0) {
        gsap.set(leftCards, {
            rotateY: 90,
            opacity: 0,
            transformOrigin: 'left center',
        });
    }

    if (rightCards.length > 0) {
        gsap.set(rightCards, {
            rotateY: -90,
            opacity: 0,
            transformOrigin: 'right center',
        });
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // tiempo para que el elemento sea visible
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !animationDone) {
                animationDone = true;

                if (leftCards.length > 0) {
                    gsap.to(leftCards, {
                        rotateY: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.2,
                    });
                }

                if (rightCards.length > 0) {
                    gsap.to(rightCards, {
                        rotateY: 0,
                        opacity: 1,
                        duration: 2,
                        stagger: 0.2,
                    });
                }

                if (cardsContainer.value) {
                    observer.unobserve(cardsContainer.value);
                }
            }
        });
    }, options);

    observer.observe(cardsContainer.value);
})


onBeforeUnmount(() => {
    if (observer && cardsContainer.value) {
        observer.unobserve(cardsContainer.value);
    }
    observer = null;
})

</script>