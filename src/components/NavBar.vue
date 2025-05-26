<template>
    <nav
        class="fixed w-full z-30 top-0 start-0 bg-transparent">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <img :src="logo" class="h-18" alt="Flowbite Logo">
                
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul
                    class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                    <li>
                        <button @click="navigateTo('Home')" class="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 cursor-pointer">Inicio</button>
                    </li>
                    <li>
                        <button @click="navigateTo('About')" class="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 cursor-pointer">Nosotros</button>     
                    </li>
                    <li>
                        <button @click="navigateTo('Services')" class="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 cursor-pointer">Servicios</button>
                    </li>
                    <li>
                        <button @click="navigateTo('Gallery')" class="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 cursor-pointer">Galeria</button>
                    </li>
                    <li>
                        <button @click="navigateTo('Contact')" class="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 cursor-pointer">Contacto</button>
                    </li>
                </ul>
            </div>

            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <div class="hidden xl:flex items-center gap-x-5">
                    <div class="flex w-14 h-14 items-center justify-center bg-[#246364] rounded-full">
                        <svg  xmlns="http://www.w3.org/2000/svg"  
                            width="30"  
                            height="30"  
                            viewBox="0 0 24 24"  
                            fill="none"  
                            stroke="#ffffff"  
                            stroke-width="1"  
                            stroke-linecap="round"  
                            stroke-linejoin="round"  
                            class="icon icon-tabler icons-tabler-outline icon-tabler-phone-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                            <path d="M15 6h6m-3 -3v6" />
                        </svg>
                    </div>
                    <h2 class="text-lg font-semibold text-white">+57-3218536985</h2>
                </div>

                <div class="hidden xl:flex items-center gap-x-5 ml-5">
                    <div class="flex w-14 h-14 items-center justify-center bg-[#246364] rounded-full">
                        <svg  
                            xmlns="http://www.w3.org/2000/svg"  
                            width="30"  
                            height="30"  
                            viewBox="0 0 24 24"  
                            fill="none"  
                            stroke="#ffffff"  
                            stroke-width="1"  
                            stroke-linecap="round"  
                            stroke-linejoin="round"  
                            class="icon icon-tabler icons-tabler-outline icon-tabler-home-link">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M20.085 11.085l-8.085 -8.085l-9 9h2v7a2 2 0 0 0 2 2h4.5" />
                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.807 1.143" />
                            <path d="M21 21m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M21 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M16 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M21 16l-5 3l5 2" />
                        </svg>
                    </div>
                    <h2 class="text-lg font-semibold text-white">Calle 10 #20 - 85</h2>
                </div>

                <button data-collapse-toggle="navbar-sticky" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
        </div>
    </nav>

</template>

<script setup>
import logo from '../assets/logo.png'
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (name) => {
  try {
    router.push({ name });
  } catch (e) {
    console.error('Navigation error:', e);
  }
};


</script>