<template>
  <div class="align-center">
      <h2 class="text-indigo-600 text-3xl font-semibold">
          {{about.title}}
      </h2>
      <p>
          {{about.body}}
      </p>
  </div>
</template>

<script>
export default {
    name: 'About',
    props: {
        about: Object
    }
}
</script>

<style>

</style>