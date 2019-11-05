<template>
  <div>
      <h2 class="text-indigo-600 font-bold text-3xl">{{message}}</h2>
      <div class="flex justify-center">
        <button @click="api" 
        class="px-4 py-2 border border-2 bg-indigo-400 text-xl font-semibold text-indigo-800
        hover:bg-indigo-300 active:bg-indigo-500">
            click to test
        </button>
      </div>
      
  </div>
</template>

<script>

export default {
    name: 'api-test',
    data(){
        return {
            message: 'now if i test it again',
        }
    },
    methods:{
        api(){
            this.axios.get('http://backend.test/test').then(response =>{
                this.message = response.data.message;
            })
        }
    }
}
</script>

<style>

</style>