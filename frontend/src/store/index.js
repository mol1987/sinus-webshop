import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/API'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: {},
    product: {},
    loggedInUser: {},
    userToken: null
  },
  mutations: {
    GetAllProducts(state, data) {
      state.productList = data
    },
    GetProduct(state, data) {
      state.product = data
    },
    AuthenticateUser(state, data) {
        state.userToken = data.token
        state.loggedInUser = data.user
    }
  },
  getters: {
  },
  actions: {
    async GetAllProducts(context) {
      const result = await API.GetAllProducts()
      context.commit('GetAllProducts', result)
    },
    async GetProduct(context, payload) {
      const result = await API.GetProduct(payload)
      context.commit('GetProduct', result)
    },
    async UpdateProduct(context, payload) {
      await API.UpdateProduct(payload._id, payload)
    },
    async AuthenticateUser(context, payload) {
      const result = await API.AuthenticateUser(payload)
      context.commit('AuthenticateUser', result)
    },
    async RegisterUser(context, payload) {
      console.log(payload)
      const result = await API.RegisterUser(payload)
      console.log(result)
    }
  },
  modules: {
  }
})
