<script setup>
import Footer from './components/Footer.vue';
import { onMounted,ref } from 'vue';
import { RouterView } from 'vue-router';


    const arr = ref([])
    const loading = ref(true)
    const url = 'https://api.github.com/users/wyenelle/repos'

     onMounted(() => {
      const getData = async  () => {
           try{
               const fetch_url = await fetch(url)
               arr.value = await fetch_url.json()
               loading.value = false
           } catch (error){
                arr.value = 'Could not reach API call ' + error 
           }
           console.log(arr.value);
          }

          getData()
     })
         

</script>

<template>

  <RouterView  :arr="arr" :loading="loading"/>
  <Footer />
</template>

<style scoped>

</style>
