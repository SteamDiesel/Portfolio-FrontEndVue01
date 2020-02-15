<template>
	<div>
		<Lander/>
		<Projects/>
	</div>
</template>

<script>
import Lander from "@/components/layout/Lander.vue";
import Projects from "@/components/layout/Projects.vue";
export default {
	name: 'Home',
	components: {
		Lander,
		Projects
		}
};
</script>

<style>
</style>