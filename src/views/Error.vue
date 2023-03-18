<template>
    <div class="md:p-3 h-screen flex flex-col justify-center items-center">
        <div class="error  w-full md:w-10/12 ">
        </div>
        <RouterLink to="/">
            <h1 class="text-2xl font-bold">Go Home</h1>
        </RouterLink>
</div>
</template>

<style scoped>
    .error{
height: 80vh;
        background: url('../assets/error.gif');
background-size: contain;
background-repeat: no-repeat;
background-position: center center;
    }
</style>