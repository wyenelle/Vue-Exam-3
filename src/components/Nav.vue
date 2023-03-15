<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="w-full md:w-full md:mx-auto flex justify-between items-center h-20 px-3 py-4 dark:text-white   md:px-8 rounded-md ">
        <RouterLink to="/">
            <h1 class=" p-2 font-extrabold hidden md:block text-2xl">Github API project</h1>
        </RouterLink>
        <RouterLink to="/repo"> <button class="text-xl bg-black text-white border border-black px-4 md:pY-2 py-3  font-extrabold">Repo</button> </RouterLink>

    </nav>
</template>