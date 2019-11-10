<template>
    <div class="rounded-lg shadow-2xl overflow-hidden shadow-lg bg-blue-600 mb-16 mx-8 
    md:flex
    lg:flex-col lg:h-full lg:w-1/3
    xl:w-1/4">
        <!-- rounded-lg md:h-full lg:h-auto -->
        <div class=" bg-cover bg-local h-64 w-full rounded-lg 
         md:w-64 md:h-auto 
         lg:h-64 lg:w-full
        text-center overflow-hidden" 
        style="background-image: url('https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406__340.jpg')" 
        title="project image">
        </div>
        
        <!-- <div class="" 
        style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
        </div> -->
        <div class="px-8 py-6 h-full flex flex-col justify-between flex-grow 
        md:w-1/2 
        lg:w-full">
            <div class="font-bold text-xl mb-3 text-blue-200">
                {{project.name}}
            </div>
            <div class="">
                <p class="text-gray-200 text-base">
                    {{project.summary}}
                </p>
            </div>
            
            <div class="flex justify-start flex flex-wrap mt-2">
                               
                <button class="font-semibold px-2 py-1 bg-green-400 rounded-sm
                hover:bg-green-300 mr-4 mb-2">
                More info 
                </button>
                               
                <button class="font-semibold px-2 py-1 bg-green-400 rounded-sm
                hover:bg-green-300 mr-4 mb-2">
                Live Demo  
                </button>
                               
                <button class="font-semibold px-2 py-1 bg-green-400 rounded-sm
                hover:bg-green-300 mr-4 mb-2">
                GitHub  
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Project',
    props: {
        project: Object
    }
}
</script>

<style>

</style>