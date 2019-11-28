<template>
  <div class="h-full w-full flex items-center justify-center">
    <form @submit.prevent="login">
            <div class="flex flex-col p-4">
                <input class="p-3 mb-4 bg-gray-200 placeholder-gray-800 text-orange-600 text-lg font-semibold tracking-wide rounded-lg " 
                autocomplete="email" 
                type="email" 
                placeholder="email" v-model="email">
                <input class="p-3 mb-4 bg-gray-200 placeholder-gray-800 text-orange-600 text-lg font-semibold tracking-wide rounded-lg " 
                autocomplete="new-password" 
                type="password" 
                placeholder="password" v-model="password">
                <button class="text-xl m-auto font-bold px-6 py-3 bg-gray-800 glow-orange hover:bg-gray-700 rounded-lg text-orange-400" 
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