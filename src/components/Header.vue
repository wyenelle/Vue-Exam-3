<script setup>
import bg from '../assets/home.png'
const tech_stack = ['JavaScript','React','Vue','Next','Typescript','HTML & CSS']
</script>

<template>
    <section class="h-full">
        <div class="grid grid-cols-2 h-full">
            <div class="col-span-2 md:col-span-1 h-full flex justify-start items-center">
                <div class="pl-3">
                    <h1 class=" text-5xl font-extrabold w-7/12  mb-4 ">
                    Discover the best <span class="text-white"> projects</span>
                </h1>
                <p class="w-10/12 font-light mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor ad ab quis quaerat mollitia. Culpa voluptatum deserunt sequi accusamus.
                </p>
                <div class="hidden w-8/12  text-center h-15 fine-edge py-3  md:block absolute bottom-70 left-1/4 right-1/2 bg-white/30 flex-normal shadow shadow-gray-800/30 shadow-lg ">
                    <span v-for="item in tech_stack" :key="item " class="mx-4 font-bold text-xl">
                    {{ item }}
                    </span>
                </div>
                <button class="btn-normal">
                    Explore
                </button>
                </div>
            </div>

            <div class="col-span-1 hidden md:block h-full">
                    <img :src="bg" alt="img" class="h-4/5 w-4/5" />
                
            </div>

        </div>
    </section>
</template>