export default {
    GetAllProducts(state, data) {
        state.productList = data
    },
    GetProduct(state, data) {
        state.product = data
    },
    AuthenticateUser(state, data) {
        if (data.user == null) {
            state.loginValidation = 'Not found'
        }
        state.userToken = data.token
        state.loggedInUser = data.user
        console.log('data ',data)
    },
    GetAllOrders(state, data) {
        for (let index = 0; index < data.length; index++) {
            let temp = []
      
            data[index].items.forEach(e => {
                const product = state.productList.find(f => f._id == e)
                temp.push(product)
            })
            data[index].items = temp
        }

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
            state.cartList.push({ product: data, amount: 1 })
        }
    },
    CreateOrder(state) {
        state.cartList = []
    }
}
