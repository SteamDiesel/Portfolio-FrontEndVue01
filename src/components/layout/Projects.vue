<template>
    <div class="bg-blue-300 h-full">
        <div>
            <svg class="wave" viewBox="0 0 1440 120" id="wave">
                <path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z" 
                fill="#90cdf4"></path>
            </svg>
        </div>
        <div class="py-16 sm:px-8 xl:py-32">
            <div class="lg:flex lg:justify-around lg:flex-wrap">
                <Project v-for="item in projects" 
                v-bind:key="item.index" 
                v-bind:project="item"></Project>
            </div>
        </div>
    </div>
</template>

<script>
import Project from '@/components/layout/Project.vue'
import { mapState, mapActions } from 'vuex'
export default {
	name: "Projects",
	components:{
		Project
	},
    data(){
        return {
            
        }
    },
    computed: {
        ...mapState(['projects'])
	},
	methods: {
		...mapActions(["siteLoad", "projectsLoad"])
	},
	mounted() {
		this.siteLoad();
		this.projectsLoad();
	}
}
</script>

<style>
.wave {
    color: #fff;
    display: block;
    overflow: hidden;
    position: absolute;
    transform: translateY(-50%);
    width: 100%;
}
</style>