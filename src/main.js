import Vue from 'vue'
import App from './App'
import router from './router'

//图片懒加载
import VueLazyZLoad from 'vue-lazyload'

require('common/css/reset.less')
require('common/css/base.less')
require('vue-swipe/dist/vue-swipe.css')
Vue.config.productionTip = false

//注册懒加载组件
Vue.use(VueLazyZLoad, {
	preLoad: 1.3,
	//error: 'dist/error.png',
	loading: require('common/images/loading.gif'),
	//attempt: 1
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
