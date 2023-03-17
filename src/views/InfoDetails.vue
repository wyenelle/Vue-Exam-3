<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { useState } from 'vuex-composition-helpers/dist';

const { app, notLoading } = useState(['app', 'notLoading'])

const route = useRoute()
const routeId = route.params.id
const objId = app.value.find(elem => elem.id === parseInt(routeId))
const {
  owner: { login, avatar_url },
  visibility,
  name,
  language,
  default_branch,
  description,
  clone_url,
  html_url,
} = objId
const desc = ''
const msg = '<span  class=""> No description for this repo</span>'

</script>

<template>
  <main class="mb-5 md:mb-9">

    <div class="flex w-full mt-3   h-10 py-5 shadow-slate-200 shadow-md  justify-between px-5  items-center">

      <h1 class="font-bold h-full flex-normal text-2xl">
        <RouterLink to="/"> Home </RouterLink>
      </h1>
      <h1 class="font-bold h-full flex-normal text-2xl">
        <RouterLink to="/repo">Back</RouterLink>
      </h1>

    </div>

    <div class="grid grid-cols-2 ">
      <div class="col-span-2 md:col-span-1 bg-png">

        <div class="h-auto md:w-8/12 md:mx-auto bg-white/80  flex flex-col gap-4 ">

          <div class=" flex flex-col items-center gap-5    h-4/5 px-3">

            <div class=" text-center md:text-start mt-3">
              <h1 class="text-4xl mt-3 capitalize"> {{ name }} </h1>
              <a :href="html_url" title="Visit this repository">
                <p class="text-gray-700 my-3 font-extrabold text-xl">
                  Go to repo
                </p>
              </a>
            </div>
            <div class=" p-1">
              <h1 class="text-2xl">
                Description
              </h1>
              <h3 v-if="description" class="text-xl italic font-light p-3">
                {{ description }}
              </h3>
              <h3 v-else v-html="msg" class="text-xl italic font-light p-3">

              </h3>

            </div>

            <div class="p-3 flex flex-col justify-around gap-5 ">
              <h1 class="text-2xl">Details</h1>
              <div class="flex flex-col justify-around gap-5">
                <p>
                  {{ language ? `Written in ${language}`: 'This is an empty repository' }}
                </p>
                <p>
                  This repository is <b>{{ visibility }}</b> to all who wish to clone or fork.
                </p>
                <p>
                  Default branch is the <b> {{ default_branch }} </b> branch
                </p>
              </div>

              <button class=" px-3 py-2 text-2xl bg-black text-white font-extrabold">
                <a :href="clone_url">
                  clone url
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>


      <div class="col-span-1 hidden md:block">
        <div class="flex flex-col justify-center gap-5 items-center h-full w-full">
          <img :src="avatar_url" alt="photo" class="" />
          <h1 class="text-3xl">
              {{ login }}
          </h1>
        </div>

      </div>

    </div>
  </main>
</template>
<style scoped>
.bg-png {
  background: url('../assets/software.png');
  background-size: cover;
  background-position: center;
}
</style>
 