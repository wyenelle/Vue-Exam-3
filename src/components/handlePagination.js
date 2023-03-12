import {ref,computed } from 'vue'

export default function handlePagination(arr){
    let page =  ref(1)
    
    const data = arr

    const perPage = 2
    
    const paginatedData = computed(() => data.slice((page.value - 1) * perPage, page.value * perPage))

    const nextPage = () => {
        if(page.value !== Math.ceil(data.length / perPage)) {
            page.value += 1
        }
        console.log(page.value)
    }

    const backPage = () => {
         if(page.value !== 1){
            page.value -= 1
         }
         console.log(page.value)
    }

    const goToPage = (numPage) => {
        page.value = numPage
        console.log(page.value)
    }
    return {data,paginatedData,perPage,page,nextPage,backPage,goToPage}
}
