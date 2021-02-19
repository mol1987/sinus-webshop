import router from '@/router'


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
        if (data.user.role == 'admin') {
            router.push('Admin')
        }
      },
      GetAllOrders(state, data) {
        for (let index = 0; index < data.length; index++) {
          let temp = [] 
          
          data[index].items.forEach(e => {
              const product = state.productList.find(f => f._id == e)
              if (product != null) {
                temp.push(product)
              } else {
                temp.push({
                  title: 'Gretas Fury',
                  price: 999,
                  shortDesc: 'Unisex',
                  longDesc: 'Skate ipsum dolor sit amet...',
                  imgFile: 'skateboard-greta.png' // Asset logic on clientside
                })
              }
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
          state.cartList.push({product: data, amount: 1})
        }
      },
      CreateOrder(state) {
        state.cartList = []
      },
      CreateNewProduct(state, data) {
        if (data.data != null) {
          state.productList.push(data.data)
          alert('Product Created!')
        } else {
          alert('Product could not be created')
        }
      },
      UpdateProduct(state, data) {
        if (data.data != null) {
          alert('Product edited!')
        } else {
          alert('Product could not be edited')
        }
    }
}
