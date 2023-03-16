<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { useState } from 'vuex-composition-helpers/dist';

const { app, notLoading } = useState(['app', 'notLoading'])

const route = useRoute()
const routeId = route.params.id
const objId = app.value.find(elem => elem.id === parseInt(routeId))
const {
  owner: {  login, avatar_url },
  visibility,
  name,
  language,
  default_branch,
  description,
  clone_url,
  html_url,
} = objId

const msg = '<span  class="text-gray-300"> No description for this repo</span>'

</script>

<template>
  <div class="flex w-full  h-10 py-5 border shadow-slate-200 shadow-md  justify-between px-2  items-center">

    <h1 class="font-bold h-full flex-normal">
      <RouterLink to="/"> Home </RouterLink>
    </h1>
    <h1 class="font-bold h-full flex-normal ">
      <RouterLink to="/repo">Back</RouterLink>
    </h1>

  </div>
  <div class="h-screen flex flex-col gap-4 ">
    <h1>Details page {{ routeId }} </h1>

   <div class="border-4 flex flex-col items-center gap-5 border-red-500 h-4/5 px-3">

    <div class=" text-center mt-3">
      <h1 class="text-4xl"> {{ name }} </h1>
      <a :href="html_url" title="Visit this repository"> <p class="text-gray-300 font-bold text-xl">
        Go to repo
      </p>   </a>
    </div>
    <div>
      <h3 v-if="description" class="text-xl font-extrabold p-3">
          {{ description }}  
      </h3>
      <h3 v-else v-html="msg" class="" >

      </h3>
      
    </div>

    <div class="p-3">
      <h1 class="text-2xl">Details</h1>
      <p>
        Written mainly with <b>{{ language }}</b> along with other dependent technologies.
      </p>
      <p>
        This repository is <b>{{ visibility }}</b> to all who wish to clone or fork.
      </p>
      <p>
        Default branch is the  <b> {{ default_branch }} </b> branch
      </p>
      <button class="border-4 px-3 py-2 text-xl font-bold">
        <a :href="clone_url">
          clone url
        </a>
      </button>
    </div>
   </div>
  </div>
</template>

 