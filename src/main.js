import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import home from './components/home/home'
import detail from './components/home/detail'
import video from './components/video/video'
import my from './components/my/my'

import './assets/css/main.css'

Vue.use(VueRouter)
Vue.use(VueResource)

const app = Vue.extend(App)

const router = new VueRouter({
	linkActiveClass: 'active'
});

router.map({
	'/home': {
		component: home,
		subRoutes:{
			'detail/:id':{
				component:detail
			}
		}
	},
	'/video': {
		component: video
	},
	'/my': {
		component: my
	}
});

router.start(app, '#app')
router.redirect({'/':'/home'})