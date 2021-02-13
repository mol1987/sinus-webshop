import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/API'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: {},
    orderList: {},
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
    },
    GetAllOrders(state, data) {
      state.orderList = data
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
      await API.UpdateProduct(payload, this.state.userToken)
    },
    async DeleteProduct(context, payload) {
      await API.DeleteProduct(payload, this.state.userToken)
    },
    async AuthenticateUser(context, payload) {
      const result = await API.AuthenticateUser(payload)
      context.commit('AuthenticateUser', result)
    },
    async RegisterUser(context, payload) {
      console.log(payload)
      const result = await API.RegisterUser(payload)
      console.log(result)
    },
    async GetAllOrders(context) {
      const result = await API.GetAllOrders(this.state.userToken)
      context.commit('GetAllOrders', result)
    },
    async CreateOrder(context, payload) {
      await API.CreateOrder(payload, this.state.userToken)
    }
  },
  modules: {
  }
})
