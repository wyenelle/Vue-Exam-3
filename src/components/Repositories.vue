<script setup>
import Info from './Info.vue'
import PageNumbers from './PageNumbers.vue'
import { ref, watch, computed } from 'vue'
import {useRouter} from 'vue-router'
import handlePagination from './handlePagination.js'

const {arr} = defineProps({
  arr:Array
})

const {paginatedData} = handlePagination(arr)

// const arrLength = arr.length
// const postPerPage = 2
// let currentPage = ref(1)

// const route = useRouter()
  // const goToDetails = () => {
  //   route.push(`/repo/${id}`)
  // }

// Getting the index first and last values of each page dynamicaaly
// let index_of_last_post = currentPage.value * postPerPage
// const index_of_first_post = index_of_last_post - postPerPage

// Alter the current page
// const changePage = (number) => {
//     currentPage.value = number
//      console.log(currentPage.value);
//     }

// Creating an array of the first to last index for each page 
// const currentPost = arr.slice(index_of_first_post, index_of_last_post)
</script>


<template>
    <div >
        <Info :arr="num" v-for="num in paginatedData" :key="num"  />
    </div>
    <PageNumbers :arr="arr" />
</template>