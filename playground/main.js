import 'vuetify/dist/vuetify.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'roboto-fontface/css/roboto-condensed/roboto-condensed-fontface.css'
import 'roboto-fontface/css/roboto-slab/roboto-slab-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'

Vue.use(Vuetify)

new Vue({
  vuetify: new Vuetify(),
  render: (h) => h(App),
}).$mount('#app')
