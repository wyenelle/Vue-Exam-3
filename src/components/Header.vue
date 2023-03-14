<script setup>
import bg from '../assets/home.png'
const tech_stack = ['JavaScript', 'React', 'Vue', 'Next', 'Typescript', 'HTML & CSS']
</script>

<template>
    <section class="h-full mt-20  w-full">
        <div class="grid grid-cols-2 h-full ">
            <div class="col-span-2  h-full flex justify-start items-center">
                <div class="pl-3 md:text-center md:w-10/12 md:mx-auto md:flex flex-col justify-center items-center " data-aos="fade-in" data-aos-delay="1000">
                    <h1 class=" text-5xl font-extrabold w-7/12 md:w-full drop-shadow-lg drop-shadow-slate-200  mb-4 ">
                        Discover the best <span class="text-blue-500"> projects</span>. <span class='hidden md:block'> Meet
                            real life projects in one place.</span>
                    </h1>
                    <p class="w-10/12 font-light md:text-gray-400 mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor ad ab quis quaerat mollitia.
                        Culpa voluptatum deserunt sequi accusamus.
                    </p>
                    <div
                        class="hidden w-8/12  text-center h-15 fine-edge py-3  md:block  bg-white/30 flex-normal  shadow-slate-200 shadow-lg ">
                        <i v-for="item in tech_stack" :key="item" class="mx-4 font-bold text-xl">
                            {{ item }}
                        </i>
                    </div>
                    <button class="btn-normal md:mt-6">
                        Explore
                    </button>
                </div>
            </div>



        </div>
    </section>
</template>

<style scoped>

</style>