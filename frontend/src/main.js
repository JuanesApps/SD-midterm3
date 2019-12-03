import Vue from 'vue'
import Router from 'vue-router'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'
Vue.http.headers.common['Access-Control-Allow-Methods'] = 'GET,POST,PATCH,DELETE'

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
