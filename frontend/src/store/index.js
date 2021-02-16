import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/API'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: {},
    orderList: {},
    cartList: [],
    product: {},
    loggedInUser: null,
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
    },
    AddOrder(state, data) {
      state.orderList.push(data)
    },
    LogoutUser(state) {
      state.orderList = {}
      state.loggedInUser = null
      state.userToken = null
    },
    AddToCart(state, data) {
      let index = state.cartList.findIndex(f => f.product.serial == data.serial)
      if (index >= 0) {
        state.cartList[index].amount++;
      } else {
        state.cartList.push({product: data, amount: 1})
      }
    },
    CreateOrder(state) {
      state.cartList = []
    }
  },
  getters: {
    inloggedUser: state => {
      return state.loggedInUser
    },
    GetProducts: state => {
      return state.productList
    },
    GetOrders: state => {
      return state.orderList
    },
    GetCart: state => {
      return state.cartList
    }
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
    async CreateNewProduct(context, payload) {
      const result = await API.CreateNewProduct(payload, this.state.userToken)
      console.log(result)
    },
    async DeleteProduct(context, payload) {
      await API.DeleteProduct(payload, this.state.userToken)
    },
    async AuthenticateUser(context, payload) {
      const result = await API.AuthenticateUser(payload)
      context.commit('AuthenticateUser', result)
    },
    async RegisterUser(context, payload) {
      console.log('received data from fields ', payload)
      const result = await API.RegisterUser(payload)
      console.log(result)
    },
    async GetAllOrders(context) {
      const result = await API.GetAllOrders(this.state.userToken)
      context.commit('GetAllOrders', result)
      console.log(result)
    },
    async CreateOrder(context) {
      let orderValue = this.state.cartList.reduce((a, b) => a + (b.product.price || 0), 0);
      let order = {
        timeStamp: Date.now(),
        status: 'inProcess',
        items: [],
        orderValue: orderValue
      }
      this.state.cartList.forEach(e => {
        for (let i = 0; i < e.amount; i++) {
          order.items.push(e.product._id)
        }
      })
      const result = await API.CreateOrder(order, this.state.userToken)
      context.commit('CreateOrder')
      console.log(result)
    }
  },
  modules: {
  }
})
