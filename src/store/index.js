import Vue from "vue";
import Vuex from "vuex";
// import 'es6-promise/auto';
import layout from './modules/layout'
import menu from './modules/menu'
import products from './modules/products'
import chat from './modules/chat'
import * as auth from "@/store/modules/auth";
import healthworkers from './modules/healthworkers'

Vue.use(Vuex);
export default new Vuex.Store({
  strict: true,
  modules: {
    layout,
    menu,
    products,
    chat,
    auth,
    healthworkers
  }
});
// export const store = new Vuex.Store({
//     state: {
//     },
//     mutations: {
//     },
//     actions: {
//     },
//     modules: {
//       layout,
//       menu,
//       products,
//       chat,
//       auth
//     }
// });

