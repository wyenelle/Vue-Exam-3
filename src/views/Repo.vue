<script setup>
import Information from '../components/Infomation.vue';
import Repositories from '../components/Repositories.vue';
import { useDark, useToggle } from '@vueuse/core'
import { useState } from 'vuex-composition-helpers/dist'




const { app, notLoading: loading } = useState(['app', 'notLoading'])

//    
</script>

<template>
    <main class=" dark:text-white dark:bg-slate-800 text-black h-screen w-full">
        <div class="flex w-11/12 mx-auto mt-3   h-10 py-5 shadow-slate-200 shadow-md  justify-end px-3  items-center">

            <h1 class="font-bold h-full flex-normal text-2xl">
                <RouterLink to="/">Back</RouterLink>
            </h1>
        </div>


        <div class="w-11/12 mx-auto shadow-md shadow-slate-200">
            <Information v-if="loading" :arr="app[0]" />
            <Repositories v-if="loading" :arr="app" />
            <section v-else class="text-gray-200 h-80 flex-normal text-center ">
                Loading Repositories
            </section>
        </div>
    </main>
</template>

