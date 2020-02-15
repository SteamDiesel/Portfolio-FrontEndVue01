<template>
	<div id="app">
		<transition name="slide-fade" mode="out-in">
			<router-view />
		</transition>
	</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "app",
	methods: {
		...mapActions(["siteLoad", "projectsLoad"])
	},
	mounted() {
		this.siteLoad();
		this.projectsLoad();
	}
};
</script>

<style>
    .slide-fade-enter-active {
        transition: all .8s cubic-bezier(1.0, 0.8, 0.5, 1.0);
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(30px);
        opacity: 0;
	}
	.primary {
		fill: #f6ad55;
	}
	.secondary {
		fill: #dd6b20;
	}
</style>
