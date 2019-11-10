<template>
<div class="bg-gray-900 text-blue-300">
    <div>
        <svg class="wave" viewBox="0 0 1440 120" id="wave">
            <path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z" 
            fill="#1a202c"></path>
        </svg>
    </div>
    <div class=" min-h-screen 
    sm:px-8 pt-20 
    md:flex md:flex-col md:justify-around md:min-h-full
    lg:flex-row lg:justify-between
    xl:content-center">
        <div class="px-8 pb-20" v-for="about in abouts" :key="about.index">
            <about-component :about="about"></about-component>
        </div>
    </div>
</div>
    

</template>

<script>
export default {
    name: 'AboutSection',
    data(){
        return {
            abouts: [
                { title: 'Development', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolores placeat, ea exercitationem eligendi accusantium excepturi nulla distinctio ipsa adipisci quisquam magnam quasi sint sit illo alias cumque saepe eum"},
                { title: 'Deployment', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolores placeat, ea exercitationem eligendi accusantium excepturi nulla distinctio ipsa adipisci quisquam magnam quasi sint sit illo alias cumque saepe eum"},
                { title: 'Maintenance', body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolores placeat, ea exercitationem eligendi accusantium excepturi nulla distinctio ipsa adipisci quisquam magnam quasi sint sit illo alias cumque saepe eum"},
            ]
        }
    }
}
</script>

<style>

</style>