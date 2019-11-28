<template>
  <div id="app">
    <base-layout-component></base-layout-component>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'app',
  methods: {
    ...mapActions(['siteLoad', 'projectsLoad'])
  },
  mounted(){
    this.siteLoad();
    this.projectsLoad();
  }
}
</script>

<style>

</style>
