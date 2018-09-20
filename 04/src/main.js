import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Vuex from 'vuex';
import App from './components/app.vue';
import store from './store';

Vue.use(VueI18n);
const i18n = new VueI18n({ locale: 'sv' });

const app = new Vue({
  i18n,
  store,
  render: (h) => h(App)
});

app.$mount('#app');
