<script setup>
import Footer from './components/Footer.vue';
import { onMounted,ref } from 'vue';
import { RouterView } from 'vue-router';

let arr = ['favour','uche','emma','nonso']
    const loading = ref(false)
    const url = 'https://api.github.com/users/wyenelle/repos'
// onMounted(() => {
        //     const getRepo = async () => {
        //    try{
        //     loading.value = true
        //        const fetch_url = await fetch(url)
        //        arr = await fetch_url.json()
        //        loading.value = false
        //    } catch (error){
        //         arr = 'Could not reach API call ' + error 
        //    }
        // }
        
        // getRepo()
        // })

</script>

<template>

  <RouterView  :arr="arr"/>
  <Footer />
</template>

<style scoped>

</style>
