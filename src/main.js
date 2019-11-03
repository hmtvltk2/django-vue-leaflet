import Vue from 'vue'
import App from '@/App.vue'

import store from '@/store'
import router from '@/router'
import VueCompositionApi from "@vue/composition-api";
import vuetify from './plugins/vuetify';
Vue.use(VueCompositionApi);

Vue.config.productionTip = false

const vue = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
})

vue.$mount('#app')
