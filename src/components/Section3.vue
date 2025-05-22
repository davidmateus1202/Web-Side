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
            <div class="grid grid-cols-1 lg:grid-cols-4 w-full h-full gap-x-5 px-5">
                <CardDetails 
                    :title="'Pistas de Bolos, Billares y Bolirana'"
                    :description="'Diversión sin límites: Bolos, billar y bolirana en un solo lugar para disfrutar al máximo.'"
                    />
                <CardDetails
                    :title="'Gastrobar & Celebraciones Especiales'" 
                    :description="'Gastrobar moderno y celebraciones inolvidables para disfrutar con amigos o en familia.'"
                    />
                <CardDetails 
                    :title="'Pasión por el Bowling'"
                    :description="'Escuela, torneos y premios. Vive el bowling como deporte, pasión y competencia.'"
                    />
                <CardDetails
                    :title="'Conexiones que Cuentan'"
                    :description="'Alianzas estratégicas y tienda de souvenirs con recuerdos únicos y artículos exclusivos.'"
                    />    
            </div>
        </div>

    </div>
</template>

<script setup>
import selvaFondo4 from '../assets/selva-fondo-4.png';
import CardDetails from './CardDetails.vue';

</script>