import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/API'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: {},
    product: {}
  },
  mutations: {
    GetAllProducts(state, data) {
      state.productList = data
    },
    GetProduct(state, data) {
      state.product = data
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
    }
  },
  modules: {
  }
})
