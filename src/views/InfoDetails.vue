<script setup>
import {useRoute,RouterLink} from 'vue-router'
const {arr} = defineProps({
    arr:Array
})
const route = useRoute()
const routeid = route.params.id
const objId = arr.find(elem => elem === routeid)
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
    <div class="h-screen flex-normal flex-col ">
        <h1>Details page {{ routeid }} </h1>
        <!-- <div className="px-2 w-full flex justify-between h-20 py-2 w-11/12 mx-auto  items-center">
        <img src={img} alt="github" className="github-img" />
        <div className="flex gap-3">
          <RouterLink to="/repo" className="font-extrabold text-xl">
            Back
          </RouterLink>
          <RouterLink to="/" className="font-extrabold text-xl">
            Home
          </RouterLink>
        </div> -->
      <div className="subinfo w-11/12 shadow-lg mx-auto">
        <div>
          <div className="px-2 grid grid-cols-4 space-x-6 py-3">
            <div className="col-span-4 sm:col-span-1">
              <div className="w-full flex justify-center items-center h-full ">
                <!-- <img
                  src={avatar_url}
                  alt="photo"
                  className="w-40 h-40 info-img"
                /> -->
              </div>
            </div>
            <div className="col-span-4 sm:col-span-3">
              <div className="flex flex-col items-center justify-center h-full border sm:shadow-md">
                <h1>Favour Timothy</h1>
                <div className="flex items-center  space-x-8 ">
                  <p className="text-gray-400 text-xl ">{{  }}</p>
                </div>
                <h2 className="text-gray-300 text-xl">{{  }}</h2>
              </div>
            </div>
          </div>
          <header className="text-center bg-white pl-3 ">
            <div className="flex items-center px-2 my-2 space-x-3 ">
              <h1 className="text-blue-500">{{  }}</h1>
            </div>

            <p className="text-gray-400 mb-3 flex w-full">
              <h3 className="text-start ml-9 lang text-xl w-8/12">
                {{  }}
              </h3>
            </p>
            <div className="flex items-center px-2 space-x-3 ">
              <p className="text-blue-500 text-xl ">{{  }}</p>
            </div>
          </header>
          <div className="flex items-center justify-between w-full bg-white text-xl my-5  px-3 py-2">
            <p className="text-gray-400 flex w-full">
              <h2 className="font-bold text-black">Branch </h2>
              <h3>{{  }}</h3>
            </p>
            <p className="text-gray-400 flex w-full">
              <h2 className="font-bold text-black">Visibility </h2>
              <h3>{{  }} </h3>
            </p>
          </div>
        </div>
        <div className="w-full bg-green-600 py-2 text-center">
          <a
            href='#'
            title="clone this repository"
            className=" text-white  font-extrabold text-2xl "
          >
            Clone repo
          </a>
        </div>
      </div>
    </div>
</template>