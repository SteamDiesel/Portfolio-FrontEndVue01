<template>
  <div class="h-full bg-gray-600 flex items-center justify-center">
    <form @submit.prevent="login">
            <div class="flex flex-col p-4">
        
                <h2 class="text-3xl font-semibold">Login</h2>
                <input class="p-3 mb-2" autocomplete="email" type="email" placeholder="email" v-model="email">
                <input class="p-3 mb-2" autocomplete="new-password" type="password" placeholder="password" v-model="password">
                <button class="text-xl font-bold p-6 bg-orange-500 hover:bg-orange-300 rounded-lg" 
                type="submit">
                    Login
                </button>
                <br>
                {{message}}
       
            </div>
        </form>
    
      
  </div>
</template>

<script>
import { 
    mapState, 
    mapMutations 
    } from "vuex"
export default {
    name: 'LoginComponent',
    data(){
        return {
            message: '',
            email: '',
            password: '',
        }
    },
    computed:{
        ...mapState(['api_uri', 'auth_token'])
    },
    methods: {
        login(){
            this.axios.post(this.api_uri + '/login', 
                { 
                    message: this.message,
                    email: this.email,
                    password: this.password,
                },
                {
                headers: {'X-Requested-With': 'XMLHttpResponse'}
                }
                ).then(response=>{
                this.setToken({
                    token: response.data.auth_token, 
                    type: response.data.token_type
                })
                }).catch(error=>{
                window.console.log(error);
            });
        },
        ...mapMutations(['setToken'])
    }
}
</script>

<style>

</style>