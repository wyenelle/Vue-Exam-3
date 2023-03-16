<script setup>
import Info from './Info.vue'
import PageNumbers from './PageNumbers.vue'
import { ref, watch, computed } from 'vue'


const {arr} = defineProps({
  arr:Array
})
console.log(arr)
const arrLength = arr.length
const postPerPage = 5
const currentPage = ref(1) 

// Creating an array of the first to last index for each page 
const currentPost = computed(() => arr.slice((currentPage.value - 1) * postPerPage,currentPage.value * postPerPage)) 

// Alter the current page
const changePage = (number) => {
    currentPage.value = number
    }

</script>


<template>
    <div class="wrapper">
        <Info  :arr="num"  v-for="num in currentPost"  :key="num"  />
    </div>
    <PageNumbers @numberChange="changePage" :arr="arr" :arrLength="arrLength" :postPerPage="postPerPage"/>
</template>

<style scoped>
    .wrapper{
        height: 70vh;
        margin-bottom: 5rem;
    }
</style>