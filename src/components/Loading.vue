<template>
    <div class="flex items-center justify-center w-full h-screen bg-white">
        <img :src="loading" alt="Loading" class="w-32 h-32" />
    </div>
</template>

<script setup>
import loading from '../assets/loading.png'
</script>