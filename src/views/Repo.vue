<script setup>
    import { onMounted,ref,defineProps} from 'vue';
    import Information from '../components/Infomation.vue';
    import Repositories from '../components/Repositories.vue';
    import {useDark,useToggle} from '@vueuse/core'

    const isDark = useDark()
    const toggleDark = useToggle(isDark)
    const props = defineProps(['arr','loading'])

    onMounted(() => {
    console.log(props.loading)

    })
    
</script>

<template>
    <main class=" dark:text-white dark:bg-slate-800 text-black h-screen w-full">
       <div class="w-11/12 mx-auto shadow-md shadow-slate-200">
        <button @click="toggleDark()">click me now</button>
        <Information />
        <!-- <Repositories v-if="arr" :arr="arr" /> -->
        <!-- <section v-else class="text-gray-200 h-80 flex-normal text-center ">
            Loading Repositories
        </section> -->
       </div>
    </main>
</template>

