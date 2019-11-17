<template>
  <div class="h-full bg-gray-600 flex items-center justify-center">
    <div class="flex flex-col p-4">
      <button class="text-xl font-bold p-6 bg-orange-500 hover:bg-orange-300 rounded-lg" 
      @click="test">
        Test API
      </button>
       <br>
       {{message}}
    </div>
    
      
  </div>
</template>

<script>


import { mapState } from 'vuex'
export default {
  data(){
    return {
      message:'',
      
    }
  },
  computed:{
    ...mapState(['api_uri', 'auth_token'])
  },
  methods:{
    test(){
      this.message = '';
        this.axios.post(this.api_uri + '/test', 
        { 
          name: 'JAson'
        },
        {
          headers: {'X-Requested-With': 'XMLHttpResponse', 'Authorization': 'Bearer ' + this.auth_token}
        }
        ).then(response=>{
          this.message = response.data.message
        }).catch(error=>{
          window.console.log(error);
        })
    }
  }
}
</script>

<style>

</style>