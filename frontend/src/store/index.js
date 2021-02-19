import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/store/actions.js'
import mutations from '@/store/mutations.js'
import getters from '@/store/getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: {},
    orderList: {},
    cartList: [],
    product: {},
    loggedInUser: null,
    userToken: null,
    loginValidation: null
  },
  
  mutations: mutations,
  getters: getters,
  actions: actions,

  modules: {
  }
})
