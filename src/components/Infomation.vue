<script setup>
import {useState} from 'vuex-composition-helpers/dist'

const {arr} = defineProps({
    arr:Object
})
const {login,avatar_url} = arr.owner
console.log()
// console.log(app.value[0])
// const {owner: avatar_url} = app.value[0]
// console.log(owner );
</script>


<template>
    <div class="h-auto flex-col  flex-normal">
        <section class="grid grid-cols-5 border border-slate-200 h-40 w-full">
            <div class="col-span-5 md:col-span-1 overflow-hidden  w-full">
                <div class=" h-full">
                    <img :src="avatar_url" alt="profile picture" class="w-full object-cover h-full  hidden md:block" />
                </div>
            </div>
            <div class=" md:hidden col-span-5  w-full mx-auto ">
                <div class="flex justify-center items-center">
                    <img :src="avatar_url" alt="profile picture" class="avatar" />
                </div>
            </div>
            <div
                class="col-span-5 md:col-span-4 flex-normal text-center h-10 md:h-full  w-full shadow-md shadow-slate-200 rounded-md py-4 ">
                <h2 class="h2">{{ login }}</h2>
            </div>
        </section>
    </div>
</template>

<style scoped>
.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

@media (min-width: 768px) {}
</style>