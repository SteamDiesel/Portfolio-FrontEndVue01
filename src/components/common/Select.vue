<template>
  <div class="bg-gray-600 w-64" @mouseleave="show = false">
      <button @click.prevent="show = !show"
      class="w-full px-4 py-2">
          {{ selected }}
      </button>
      <div v-if="show" 
      class="bg-gray-600 w-64 flex flex-col absolute 
      ">
          <button v-for="option in options" 
          :key="option.index"
          class="hover:bg-gray-500"
          @click.prevent="select(option)"> 
              {{option}}
          </button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'select',
    data(){
        return {
            show: false,
            selected: 'select',
            options: [
                'select',
                'option 01',
                'option 02',
                'option 03',
                'option 04',
                'option 05',
            ]
        }
    },
    methods:{
        select(option){
            this.selected = option;
            this.show = false;
        }
    }
}
</script>

<style>

</style>