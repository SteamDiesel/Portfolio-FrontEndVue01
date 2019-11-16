<template>
<div class="">
<!-- <div>
lander <br>
-> name, what i do, colourful <br>

<br>
projects <br>
-> this site <br>
-> other projects <br>

<br>
footer <br>
-> contact <br>
-> download resume
</div> -->
    <api-login-component></api-login-component>
    <api-register-component v-show="showRegister"></api-register-component>
    <api-tester-component></api-tester-component>
    
    <lander-component v-show="!showResume"></lander-component>
    <projects-component v-show="!showResume"></projects-component>
    <about-section-component v-show="!showResume"></about-section-component>
    
    <resume-component v-show="showResume" ></resume-component>
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
  computed: mapState(['showResume', 'showRegister'])
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