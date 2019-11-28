<template>
  <div class="bg-gray-900 text-blue-300">
    <div>
        <svg class="wave" viewBox="0 0 1440 120" id="wave">
            <path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z" 
            fill="#1a202c"></path>
        </svg>
    </div>
    <div class=" min-h-screen py-16 sm:px-8 xl:py-32
    sm:px-8 pt-20 
    md:flex md:flex-col md:justify-around md:min-h-full
    lg:flex-row lg:justify-between
    xl:content-center">
        <div class="flex justify-around h-screen">
            
            <div class="flex content-center justify-center w-1/2">
            
                <button v-show="!showLogin" 
                class="flex-grow-0 bg-gray-800 m-auto text-orange-400 font-semibold glow-orange px-6 py-3 rounded-lg" 
                @click="showLogin = true">Login</button>
                
            <transition name="fade">
                <api-login-component v-show="showLogin"></api-login-component>
            </transition>
            </div>
            
            <div class="flex content-center justify-center w-1/2">
                <button v-show="!showRegister"
                class="flex-grow-0 bg-gray-800 m-auto text-orange-400 font-semibold glow-orange px-6 py-3 rounded-lg"
                @click="showRegister = true">Register</button>
            <transition name="fade">
                <api-register-component v-show="showRegister"></api-register-component>
            </transition>
            </div>
            
            <!-- <api-tester-component></api-tester-component> -->
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'LoginSection',
    data(){
        return {
            showLogin: false,
            showRegister: false,
        }
    },

}
</script>

<style>
.glow-orange {
    box-shadow: 0 0 3px orange, 0 0 10px orange;
    transition: 0.2s;
}
.glow-orange:hover {
    box-shadow: 0 0 8px orange, 0 0 30px orange;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  transition-delay: .6s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>