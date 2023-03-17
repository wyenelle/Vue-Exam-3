<script setup>
import Footer from './components/Footer.vue';
import { onMounted,ref } from 'vue';
import { RouterView } from 'vue-router';
import {useStore} from 'vuex'

const store = useStore()

    let arr
    const url = 'https://api.github.com/users/wyenelle/repos'

     onMounted(() => {
      const getData = async  () => {
           try{
               const fetch_url = await fetch(url)
               arr = await fetch_url.json()
               store.commit('fetched',arr)
           } catch (error){
                arr = 'Could not reach API call ' + error 
           }
           console.log(arr)
           
          }

          getData()
     })
         

</script>

<template>

  <RouterView  />
  <!-- <Footer /> -->
</template>

<style scoped>

</style>
