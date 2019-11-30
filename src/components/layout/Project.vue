<template>
  <div
    class="rounded-lg shadow-2xl overflow-hidden shadow-lg bg-blue-600 mb-16 mx-8 
    md:flex lg:flex-col lg:h-full lg:w-1/3 xl:w-1/4"
  >
    <div
      class="bg-cover bg-local h-64 w-full rounded-lg text-center overflow-hidden
      md:w-64 md:h-auto 
      lg:h-64 lg:w-full "
    >
      <img :src="project.image_url" alt sizes srcset />
    </div>

    <div class="px-8 py-6 h-full flex flex-col justify-between flex-grow md:w-1/2 lg:w-full">
      <div class="font-bold text-xl mb-3 text-blue-200">
        {{project.title}}
        <span v-if="project.subtitle">-</span>
        {{project.subtitle}}
      </div>
      <div class="text-gray-400" v-if="project.stack">
          Stack: {{project.stack}}
      </div>
      <div>
        <p class="text-gray-200 text-base">{{project.brief_description}}</p>
      </div>

      <div class="flex justify-start flex flex-wrap mt-2">
        <!-- <button v-if="project.long_description"
        @click.prevent=""
          class="font-semibold rounded-full px-2 py-1 bg-green-400 rounded-sm hover:bg-green-300 mr-4 mb-2"
        >More info</button>-->
        <a :href="project.url" v-if="project.url" target="_blank">
          <button
            class="font-semibold rounded-full px-2 py-1 bg-green-400 rounded-sm hover:bg-green-300 mr-4 mb-2"
          >Live Demo</button>
        </a>
        <a :href="project.github" target="_blank" v-if="project.github">
          <button
            class="font-semibold rounded-full px-2 py-1 bg-green-400 rounded-sm hover:bg-green-300 mr-4 mb-2"
          >GitHub</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: Array
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style>
</style>