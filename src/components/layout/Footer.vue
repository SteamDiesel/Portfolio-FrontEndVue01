<template>
  <div>
      <div>
          <button class="bg-blue-400 px-10 py-5" @click="toggle">
              Show Resume
          </button>
      </div>
      <div>

      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'Footer',
    data(){
        return {

        }
    },
    methods: {
        toggle(){
            this.toggleResume();
        },
        ...mapMutations(['toggleResume'])
    }
}
</script>

<style>

</style>