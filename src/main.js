import Vue from 'vue'
import App from './App'
import router from './router'

require('common/css/reset.less')
require('common/css/base.less')
require('vue-swipe/dist/vue-swipe.css')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
