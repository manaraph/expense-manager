import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import materialIcons from 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.use(materialIcons)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
