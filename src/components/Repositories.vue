<script setup>
import Info from './Info.vue'
import PageNumbers from './PageNumbers.vue'
import { ref, watch, computed } from 'vue'


const { arr } = defineProps({
    arr: Array
})
const arrLength = arr.length
const postPerPage = 5
const currentPage = ref(1)
const numberOfPages = Math.ceil(arrLength / postPerPage)
// Creating an array of the first to last index for each page 
const currentPost = computed(() => arr.slice((currentPage.value - 1) * postPerPage, currentPage.value * postPerPage))

// Alter the current page
const changePage = (number) => {
    currentPage.value = number
}
const next = () => {
    currentPage.value < numberOfPages ? currentPage.value++ : currentPage.value = numberOfPages
}
const prev = () => {
    currentPage.value > 1 ? currentPage.value-- : currentPage.value = 1
}
</script>


<template>
    <main class="pb-4 ">
      
        <div class="wrapper ">
            <div class="w-full h-full bg-white/70 cursor-pointer">
                <Info :arr="num" v-for="num in currentPost" :key="num" />
            </div>
        </div>
        <PageNumbers @next="next" @prev="prev" @numberChange="changePage" :arr="arr" :arrLength="arrLength"
            :postPerPage="postPerPage" :currentPage="currentPage" />
    </main>
    <div class="h-40">

    </div>
</template>

<style scoped>
.wrapper {
    height: auto;
    margin-bottom: 5rem;
    background: url('../assets/software.png');
    background-size: cover;
    background-position: center;
}
</style>