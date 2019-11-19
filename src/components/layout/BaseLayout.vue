<template>
<div class="">
   
    <lander-component v-show="!showResume"></lander-component>
    <projects-component v-show="!showResume"></projects-component>
    <about-section-component v-show="!showResume"></about-section-component>
    
    <resume-component v-show="showResume" ></resume-component>
    <!-- <api-login-component v-show="showLogin"></api-login-component>
    <api-register-component v-show="showRegister"></api-register-component>
    <api-tester-component></api-tester-component> -->
    <footer-component class="no-print"></footer-component>

</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'BaseLayout',
  data(){
    return{
      
    }
  },
  computed: mapState(['showResume', 'showRegister', 'showLogin'])
}
</script>

<style>
 @media print
        {
            .no-print, .no-print *
            {
                display: none !important;
            }
        }

</style>