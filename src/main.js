import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(BootstrapVue);
Vue.prototype.$http = axios;
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
