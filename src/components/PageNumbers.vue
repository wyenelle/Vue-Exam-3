<script setup>
const emits = defineEmits(['number-change'])
const {arrLength,postPerPage} = defineProps(['arrLength','postPerPage'])


let number_of_pages = []
for(let i = 1; i <= Math.ceil(arrLength / postPerPage);i++){
    number_of_pages.push(i)
}
</script>

<template>
    
    <div class="flex-normal px-2 h-10 py-5  ">
        <!-- <button class="border border-slate-200 rounded-md p-2 font-bold " @click="backPage">
        prev
    </button> -->
    <ul  class=" flex-normal gap-2 px-3">
        <li @click="emits('number-change', num)" v-for="num in number_of_pages" :key="num" class="border border-slate-200 rounded-md p-2 font-bold dark:text-sky-400"> {{ num }}</li>
    </ul>
    <!-- <button class="border border-slate-200 rounded-md p-2 font-bold " @click="nextPage">
        next
    </button> -->
    </div>
</template>