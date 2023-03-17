<script setup>
import Information from '../components/Infomation.vue';
import Repositories from '../components/Repositories.vue';
import { useDark, useToggle } from '@vueuse/core'
import { useState } from 'vuex-composition-helpers/dist'



const isDark = useDark()
const toggleDark = useToggle(isDark)

const { app, notLoading: loading } = useState(['app', 'notLoading'])

//    

</script>

<template>
    <main class=" dark:text-white dark:bg-slate-800 text-black h-screen w-full">
        <div class="w-11/12 mx-auto shadow-md shadow-slate-200">
            <button @click="toggleDark()">click me now</button>
            <Information v-if="loading" :arr="app[0]" />
            <Repositories v-if="loading" :arr="app" />
            <section v-else class="text-gray-200 h-80 flex-normal text-center ">
                Loading Repositories
            </section>
        </div>
    </main>
</template>

