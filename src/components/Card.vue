<template>
    <div class="flex flex-col top-0 left-0 w-full h-full items-center justify-center">
        <div class="flex group w-72 h-72 bg-[#349896] rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#4eb3af]">
            <img src="https://media.istockphoto.com/id/958731110/es/foto/ellanatural.jpg?s=612x612&w=0&k=20&c=dkC7XUeOCLbKk83MfxyetDHZLeF3efjs9drbzjXxQoc="
                class="w-full h-full object-cover rounded-full translate-y-2 hover:translate-y-0 transition-transform duration-300 ease-in-out group-hover:rotate-3 hover:scale-95">
        </div>
        <div class="flex items-center justify-center w-32 h-28 bg-[#349896] rounded-full z-10 translate-y-[-80px]">
            <div class="flex items-center justify-center w-30 h-28 bg-white rounded-full translate-y-2">
                <img :src="review" class="w-16 h-16">
            </div>
        </div>
        <h1 class="text-xl font-bold translate-y-[-60px]">SnackBar</h1>
        <p class="text-center translate-y-[-50px] text-sm font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum corrupti sunt ducimus inventore</p>
    </div>
</template>

<script setup>
import review from '../assets/review.png'


</script>