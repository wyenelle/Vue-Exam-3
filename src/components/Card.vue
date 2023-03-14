<script setup>
import data from './data.js'
</script>

<template>
    <section class="h-1/5 w-full card-wrapper  mb-4" data-aos="fade-in" data-aos-delay="1000">
        <div class="grid grid-cols-3">

            <div  v-for="item in data" :key="item.id" class="col-span-3 md:col-span-1 p-4 mx-3 card  hover:shadow-gray-800/30 hover:shadow-lg h-full ">
                <h2 class="h2">{{ item.title }}</h2>
                <p>
                    {{ item.desc }}
                </p>
            </div>


        </div>
    </section>
</template>

<style>
.card-wrapper{
}
@media (min-width: 768px){
    .card-wrapper{
        background-color: transparent;
        color: black;
    }
}
</style>