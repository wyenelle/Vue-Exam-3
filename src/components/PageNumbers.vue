<script setup>
import handlePagination from './handlePagination.js';

const {arr} = defineProps({
  arr:Array
})

const {data,perPage,nextPage,backPage,goToPage} = handlePagination(arr)

let number_of_pages = []
for(let i = 1; i <= Math.ceil(data.length / perPage);i++){
    number_of_pages.push(i)
}
</script>

<template>
    <div class="flex-normal px-2 h-10 py-3 mt-5 ">
        <button class="border border-slate-200 rounded-md p-2 font-bold " @click="backPage">
        prev
    </button>
    <ul  class=" flex-normal gap-2 px-3">
        <li @click="goToPage(num)" v-for="num in number_of_pages" :key="num" class="border border-slate-200 rounded-md p-2 font-bold dark:text-sky-400"> {{ num }}</li>
    </ul>
    <button class="border border-slate-200 rounded-md p-2 font-bold " @click="nextPage">
        next
    </button>
    </div>
</template>