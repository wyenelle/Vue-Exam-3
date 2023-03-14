<script setup>
import {useState} from 'vuex-composition-helpers/dist'

const {app} = useState(['app'])

const {owner: avatar_url} = app[0]
console.log(owner );
</script>


<template>
    <div class="h-auto flex-col flex-normal">
        <section class="grid grid-cols-5 border border-slate-200 h-40 w-full">
            <div class="col-span-5 md:col-span-1  border border-slate-200 w-full">
                <div class="avatar md:hidden border-slate-400 border mx-auto">
                    <img :src="avatar_url" alt="profile picture" />
                </div>
            </div>
            <div
                class="col-span-5 md:col-span-4 flex-normal text-center h-10 md:h-full  w-full shadow-md shadow-slate-200 rounded-md py-4 ">
                <h2 class="h2">Favour Timothy</h2>
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