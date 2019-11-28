<template>
    <div class="h-full flex items-center justify-center">
        <form @submit.prevent="registerUser">
            <div class="flex flex-col p-4">
        
                
                <input class="p-3 mb-4 bg-gray-200 placeholder-gray-800 text-orange-600 text-lg font-semibold tracking-wide rounded-lg " autocomplete="name" type="text" 
                placeholder="your name" v-model="name">
                <input class="p-3 mb-4 bg-gray-200 placeholder-gray-800 text-orange-600 text-lg font-semibold tracking-wide rounded-lg " autocomplete="email" type="email" 
                placeholder="your email" v-model="email">
                <span v-if="email_error">{{email_error}}</span>
                <input class="p-3 mb-4 bg-gray-200 placeholder-gray-800 text-orange-600 text-lg font-semibold tracking-wide rounded-lg " autocomplete="new-password" type="password" 
                placeholder="password" v-model="password">
                <input class="p-3 mb-4 bg-gray-200 placeholder-gray-800 text-orange-600 text-lg font-semibold tracking-wide rounded-lg " autocomplete="new-password" type="password" 
                placeholder="confirm password" v-model="password_confirmation">

                <button 
                class="text-xl m-auto font-bold px-6 py-3 bg-gray-800 glow-orange text-orange-400 rounded-lg hover:bg-gray-700" 
                type="submit">
                    Register
                </button>
                <br>
                {{message}}
       
            </div>
        </form>
      
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
export default {
    name: 'RegisterComponent',
    data(){
        return {
            message: '',
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            name_error: '',
            email_error: '',
            password_error: '',
        }
    },
    computed:{
        ...mapState(['api_uri'])
    },
    methods :{
        registerUser(){
            this.axios.post(this.api_uri + '/register', 
                { 
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                },
                {
                    headers: {'X-Requested-With': 'XMLHttpResponse'}
                }
                ).then(response=>{
                    this.message = response.data.message;
                    // this.switchRegister(response.data.show_register);
                }).catch(error=>{
                    window.console.log(error);
            });
        },
        ...mapMutations(['switchRegister'])
    }
}
</script>

<style>

</style>