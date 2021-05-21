import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import messages from './lang'

Vue.config.productionTip = false

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
