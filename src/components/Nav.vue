<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="w-full md:w-full md:mx-auto  md:absolute md:top-4     md:top-5 md:left-0 flex justify-between items-center h-10 px-1 py-2 dark:text-cyan-500 shadow shadow-gray-400/30 px-2 md:px-8 rounded-md shadow-md">
        <RouterLink to="/">
            <h1 class="border border-black  bg-black text-white rounded-md p-2 font-extrabold text-xl">SHUN</h1>
        </RouterLink>
        <RouterLink to="/repo"> <button class="text-xl text-white font-bold">Repo</button> </RouterLink>

    </nav>
</template>