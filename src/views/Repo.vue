<script setup>
    import { onMounted,ref } from 'vue';
    import Information from '../components/Infomation.vue';
    import Repositories from '../components/Repositories.vue';
    import {useDark,useToggle} from '@vueuse/core'

    const isDark = useDark()
    const toggleDark = useToggle(isDark)
    
    const { arr } = defineProps(
    {
        arr: Array
    }
)
        
    
</script>

<template>
    <main class=" dark:text-white dark:bg-slate-800 text-black h-screen">
        <button @click="toggleDark()">click me now</button>
        <Information />
        <Repositories v-if="arr" :arr="arr" />
        <section v-else class="text-gray-200 h-80 flex-normal text-center ">
            Loading Repositories
        </section>
    </main>
</template>

