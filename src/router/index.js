import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FourOhFour from '../views/FourOhFour.vue'


Vue.use(VueRouter)

const routes = [
	{
		path: '/home',
		name: 'home',
		component: Home
	},

	{
		path: '/',
		name: 'home',
		component: Home
	},

	{
		path: '/tinkering',
		name: 'tinkering',
	
		component: () => import(/* webpackChunkName: "tinkering" */ '../views/Tinkering.vue'),
	},
	{
		path: '/about',
		name: 'about',
		
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/contact',
		name: 'contact',
		
		component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
	},
	{
		path: '/resume',
		name: 'resume',
		
		component: () => import(/* webpackChunkName: "about" */ '../views/Resume.vue')
	},

	{
		// This should catch the 404 redirect in the spa when installed as PWA App
		path: '/index.html',
		name: 'home',
		component: Home
	},
	{
		// This route must be last in the routes list.
		path: '/*',
		name: 'FourOhFour',
		component: FourOhFour
	},
]

const router = new VueRouter({
	mode: 'history',
	linkActiveClass: 'text-blue-200',
	base: process.env.BASE_URL,
	routes
})

export default router
