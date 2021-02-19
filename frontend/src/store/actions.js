import * as API from '@/API'

export default {
    async GetAllProducts(context) {
        const result = await API.GetAllProducts()
        context.commit('GetAllProducts', result)
      },
      async GetProduct(context, payload) {
        const result = await API.GetProduct(payload)
        context.commit('GetProduct', result)
      },
      async UpdateProduct(context, payload) {
        const result = await API.UpdateProduct(payload, this.state.userToken)
        context.commit('UpdateProduct', result)
        console.log(result)
      },
      async CreateNewProduct(context, payload) {
        const result = await API.CreateNewProduct(payload, this.state.userToken)
        context.commit('CreateNewProduct', result)
        console.log(result)
      },
      async DeleteProduct(context, payload) {
        const result = await API.DeleteProduct(payload, this.state.userToken)
        console.log(result)
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
}