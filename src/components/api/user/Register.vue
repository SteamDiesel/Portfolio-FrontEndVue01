<template>
    <div class="h-screen bg-gray-600 flex items-center justify-center">
        <form @submit.prevent="registerUser">
            <div class="flex flex-col p-4">
        
                <h2 class="text-3xl font-semibold">Register</h2>
                <input class="p-3 mb-2" autocomplete="name" type="text" 
                placeholder="name" v-model="name">
                <input class="p-3 mb-2" autocomplete="email" type="email" 
                placeholder="email" v-model="email">
                <span v-if="email_error">{{email_error}}</span>
                <input class="p-3 mb-2" autocomplete="new-password" type="password" 
                placeholder="password" v-model="password">
                <input class="p-3 mb-2" autocomplete="new-password" type="password" 
                placeholder="confirm password" v-model="password_confirmation">

                <button 
                class="text-xl font-bold p-6 bg-orange-500 hover:bg-orange-300 rounded-lg" 
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
                    this.switchRegister(response.data.show_register);
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