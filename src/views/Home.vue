<script setup>
import Nav from '../components/Nav.vue'
import Header from '../components/Header.vue'
import Card from '../components/Card.vue';
</script>

<template>
    <main class="w-full ">
        <div class="w-full home-bg ">
            <section class="  bg-white/70 pb-9 md:ml-3 flex-vertical ">
                <Nav />
                <Header />
            </section>
        </div>

        <section class="w-full h-auto card-container  mt-20 md:mt-20">
            <div class="flex flex-col gap-2  md:flex-vertical bg-white/70">
                <h2 class="w-10/12 mg:w-8/12 pl-8   md:mx-auto bg-white/70 md:bg-none text-start md:text-center h2">
               <span class="drop-shadow-lg">
                Curious about what our projects are ? they are ...    
            </span> 
            </h2>
                <div class=" md:mt-10 card bg-white/70 md:bg-none">
                    <Card />
                </div>
            </div>
            
                
        </section>
    </main>
</template>

<style scoped>

.home-bg {
    background: url('../assets/images.jpeg');
    background-position:center;
    background-size: cover;
    object-fit: cover;
    /* background-repeat: no-repeat; */
}
.card-container{
        background:url('../assets/sec.png');
        background-size: cover;
    }
@media (min-width:768px){
    .home-bg{
        background:url('../assets/lg-bg.png');
        background-size: cover;
        background-position: center;
    }
    
}
</style>