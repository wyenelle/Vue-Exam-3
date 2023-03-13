<script setup>
  // const {name} = defineProps(['name'])
  import {useRouter} from 'vue-router'
  const route = useRouter()

  const {arr} = defineProps(
    {
      arr:String
    }
  )

  const navigate = () => {
    route.push(`/repo/${arr}`)
  }
  

  
  // console.log(arr);

  // const {
  //       owner: { html_url, login, avatar_url },
  //       visibility,
            // id,
  //       name,
  //       language,
  //       default_branch,
  //       clone_url,
  //       full_name,
  //     } = arr
  //   console.log(visibility);
</script>


<template>
    <div @click="navigate">
        <div className="grid grid-cols-5 border border-slate-200 pr-3 ">
          <div to={} className="w-full py-4 col-span-4  px-3">
            <div className="flex items-center">
              <h1 className=" my-2 h-auto capitalize">{{ arr  }}  </h1>
              <p className=" ml-3 h-auto border rounded-lg px-2 py-1">
                 <!-- {{ visibility  }}   -->
               </p>
            </div>
            <div className="flex items-center">
              <p className=" mt-1 ">
                <!-- {{ language }}   -->
               </p>
             
            </div>
          </div >

          <div className="col-span-1 py-4 w-full   ">
            <div className="flex items-center text-start py-2 pr-2">
              <div to={} className="border rounded-lg px-2 py-1">
                <!-- {{ default_branch }} -->
              </div>
            </div>
          </div>
        </div>
      </div>
</template>