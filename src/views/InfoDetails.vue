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

const msg = '<span  class="text-gray-300"> No description for this repo</span>'

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

    <div class="grid grid-cols-2 border-4 border-red-500">
      <div class="col-span-2 md:col-span-1">

        <div class="h-auto md:w-8/12 md:mx-auto   flex flex-col gap-4 ">

          <div class=" flex flex-col items-center gap-5    h-4/5 px-3">

            <div class=" text-center mt-3">
              <h1 class="text-4xl mt-3"> {{ name }} </h1>
              <a :href="html_url" title="Visit this repository">
                <p class="text-gray-500 my-3 font-bold text-xl">
                  Go to repo
                </p>
              </a>
            </div>
            <div>
              <h3 v-if="description" class="text-xl font-extrabold p-3">
                {{ description }}
              </h3>
              <h3 v-else v-html="msg" class="">

              </h3>

            </div>

            <div class="p-3 flex flex-col justify-around gap-5 ">
              <h1 class="text-2xl">Details</h1>
              <div class="flex flex-col justify-around gap-5">
                <p>
                  Written mainly with <b>{{ language }}</b> along with other dependent technologies.
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
        <div class="flex flex-col justify-center items-center h-full w-full">

        </div>

      </div>

    </div>
  </main>
</template>
<style scoped>
.body-wrapper {
  background: url('../assets/svg.svg');
  background-size: cover;
}
</style>
 