export default {
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
      },
      GetOneProduct: state => id => {
        //let prod = state.productList.find(f => f._id == id)
        let prod = state.dispatch('GetProduct', id)
        return prod
      }
}