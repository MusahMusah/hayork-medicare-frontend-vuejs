import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import Breadcrumbs from './components/bread_crumbs'
import { store } from './store';
import VueFeather from 'vue-feather';
import { ValidationObserver, ValidationProvider } from 'vee-validate'
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
import VueFormWizard from 'vue-form-wizard';
Vue.use(VueFormWizard)
import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect)
import SmartTable from 'vuejs-smart-table'
Vue.use(SmartTable)
import VueApexCharts from 'vue-apexcharts';
Vue.component('apexchart', VueApexCharts)
import PxCard  from './components/Pxcard.vue'
Vue.component(PxCard.name, PxCard)

// Import Theme scss
import './assets/scss/app.scss'

// Import Components Bootstrap
import './utils/components-bootstrap'

Vue.use(VueFeather);
Vue.use(BootstrapVue)
Vue.component('Breadcrumbs', Breadcrumbs)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')