<template>
    <div class="flex flex-col top-0 left-0 w-full h-full bg-white overflow-x-hidden">
        <NavBar />
        <!-- Header -->
        <Header :title="'Reservar'" />
        <div class="flex items-start justify-center h-auto min-h-screen w-full">
            <div class="flex flex-col w-full lg:w-1/2 h-full items-start justify-start px-10">
                <span class="text-[#246364] font-medium text-sm">Paso 1</span>
                <h1 class="text-3xl font-semibold">Reserva ahora!</h1>
                <div class="flex flex-col md:flex-row w-full h-auto items-center justify-center gap-x-2 gap-y-5 mt-5">
                    <Input v-model="name" placeholder="Nombre" type="text">
                    <template #icon>
                        <IconUser :stroke="2" class="text-gray-400" />
                    </template>
                    </Input>

                    <Input v-model="phone" placeholder="Telefono" type="text">
                    <template #icon>
                        <IconDeviceMobile stroke={2} class="text-gray-400" />
                    </template>
                    </Input>
                </div>

                <div class="flex flex-col md:flex-row w-full h-auto items-center justify-center gap-x-2 gap-y-5 mt-5">
                    <Input v-model="date" placeholder="Nombre" type="date">
                    <template #icon>
                        <IconCalendarClock stroke={2} class="text-gray-400" />
                    </template>
                    </Input>

                    <Input v-model="time" placeholder="Telefono" type="time">
                    <template #icon>
                        <IconStopwatch stroke={2} class="text-gray-400" />
                    </template>
                    </Input>
                </div>

                <!-- seleccionable de horas -->
                <div class="relative w-full mt-5">
                    <select class="w-full bg-gray-100 text-gray-400 rounded-2xl p-3 pr-10 outline-none appearance-none">
                        <option value="">Selecciona el número de horas</option>
                        <option value="">30 minutos</option>
                        <option value="">1 hora</option>
                        <option value="">1 hora y 30 minutos</option>
                        <option value="">2 horas</option>
                        <option value="">2 horas y 30 minutos</option>
                        <option value="">3 horas</option>
                        <option value="">3 horas y 30 minutos</option>
                        <option value="">4 horas</option>
                        <option value="">4 horas y 30 minutos</option>
                        <option value="">5 horas</option>
                    </select>
                    <!-- Ícono al lado derecho -->
                    <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>

                <!-- seleccionable de personas -->
                <div class="relative w-full mt-5">
                    <select class="w-full bg-gray-100 text-gray-400 rounded-2xl p-3 pr-10 outline-none appearance-none">
                        <option value="">Selecciona el número de personas</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                    </select>
                    <!-- Ícono al lado derecho -->
                    <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>

                <span class="text-[#246364] font-medium text-sm mt-16">Paso 2</span>
                <h1 class="text-3xl font-semibold">Reserva tus zapatos!</h1>
                <!-- tallas -->
                <div class="relative w-full mt-5">
                    <select class="w-full bg-gray-100 text-gray-400 rounded-2xl p-3 pr-10 outline-none appearance-none">
                        <option value="">Selecciona la talla de zapatos</option>
                        <option value="">34</option>
                        <option value="">35</option>
                        <option value="">36</option>
                        <option value="">37</option>
                        <option value="">38</option>
                        <option value="">39</option>
                        <option value="">40</option>
                        <option value="">41</option>
                        <option value="">42</option>
                        <option value="">43</option>
                    </select>
                    <!-- Ícono al lado derecho -->
                    <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>

                <div class="flex w-full h-auto items-start gap-x-3">

                    <div class="relative flex w-auto h-auto items-start justify-start mt-5">
                        <div class="flex bg-gray-200 p-3 rounded-2xl w-auto">
                            <p class="text-sm">🎳 38</p>
                        </div>

                        <button
                            class="absolute -top-1 left-12 bg-white text-gray-600 rounded-full w-5 h-5 text-xs flex items-center justify-center shadow cursor-pointer">
                            x
                        </button>
                    </div>

                    <div class="relative flex w-auto h-auto items-start justify-start mt-5">
                        <div class="flex bg-gray-200 p-3 rounded-2xl w-auto">
                            <p class="text-sm">🎳 38</p>
                        </div>

                        <button
                            class="absolute -top-1 left-12 bg-white text-gray-600 rounded-full w-5 h-5 text-xs flex items-center justify-center shadow cursor-pointer">
                            x
                        </button>
                    </div>
                </div>
                <span class="text-[#246364] font-medium text-sm mt-16">Paso 3</span>
                <button class="flex items-center justify-center w-full h-auto p-3 bg-[#246364] text-white rounded-2xl font-semibold hover:bg-[#1f4f4f] transition duration-300 mb-16">
                    Finalizar reserva
                </button>
            </div>
        </div>
        <!-- Footer -->
        <Footer />

    </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Input from '../components/Input.vue'
import { IconUser } from '@tabler/icons-vue';
import { IconDeviceMobile } from '@tabler/icons-vue';
import { ref, onMounted } from 'vue'
import { IconCalendarClock } from '@tabler/icons-vue';
import { IconStopwatch } from '@tabler/icons-vue';

const name = ref('')
const phone = ref('')
const date = ref('')
const time = ref('')
</script>