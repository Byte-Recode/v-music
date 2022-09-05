import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home'
import layout from '../pages/layout'


Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		name:'layout',
		component:layout,
		children:[
			{
				path:'/',
				name:'home',
				component:home
			},
			{
				path:'mine',
				name:'mine',
				component: () => import('../pages/mine')
			},
			{
				path:'search',
				name:'search',
				component: () => import('../pages/search')
		
			},
			{
				path:'topic',
				name:'topic',
				component: () => import('../pages/topic')
			},
		]
	},
]

const router = new VueRouter({
	mode:'hash',
	base:process.env.BASE_URL,
	routes,
	linkActiveClass:'active'
})
export default router