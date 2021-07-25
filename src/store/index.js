import Vue from "vue";
import Vuex from "vuex";
// import 'es6-promise/auto';
import layout from './modules/layout'
import menu from './modules/menu'
import products from './modules/products'
import chat from './modules/chat'
// import auth from './modules/auth'
import * as auth from "@/store/modules/auth";
Vue.use(Vuex);


export default new Vuex.Store({
  strict: true,
  modules: {
    layout,
    menu,
    products,
    chat,
    auth
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

