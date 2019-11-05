<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <h3 class="text-gray-500 font-semibold text-3xl">Hello from tailwind</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
