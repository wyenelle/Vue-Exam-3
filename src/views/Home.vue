<script setup>
import Nav from '../components/Nav.vue'
import Header from '../components/Header.vue'
import Card from '../components/Card.vue';
import Head from '../components/Head.vue';
</script>

<template>
    <section>
        <div class="home-bg pb-10">
            <Nav />
            <Head />
            <main class=" md:w-11/12 bg-white/40  md:mx-auto py-3 shadow shadow-gray-300/40 shadow-lg">
                <div class=" md:w-11/12 md:relative  flex flex-col gap-2 md:mx-auto">

                    <div class="h-screen md:h-96">
                        <Header />
                    </div>
                    <Card />
                </div>
            </main>

        </div>
    </section>
</template>

<style scoped>
.home-bg {
    background-image: linear-gradient(to bottom right, #0047b3, #0047b3, #ccccff);
    background-size: cover;
    background-position: center;
}
</style>