<template>
  <div class="test-products">
    <p>test-product</p>
    <label>email</label>
    <input v-model="email">
    <label>password</label>
    <input v-model="password">
    <button type="submit" v-on:click="OnSubmitLogin">submit</button>

    <form @keyup.enter.native="OnSubmitGetProduct" @submit.prevent="OnSubmitGetProduct">
      <input v-model="getProduct">
    </form>
    <button type="submit" v-on:click="OnSubmitCreateOrder">Order</button>
    <p>{{oneProduct}}</p>
    <label>Id</label>
    <input v-model="updateProductId">
    <label>Title</label>
    <input v-model="updateProductTitle">
    <button type="submit" v-on:click="OnSubmitUpdateProduct">submit</button>
    <p>{{products}}</p>
    <hr>
    <p>{{orders}}</p>
    <hr>

    <div class="selected-box">
      <div class="left-input">
            <p>Product Photo</p>
            <input type="image"  v-model="currentImage">
      </div>
        
      <div class="middle-input">
          <label>Product name</label>
          <input type="text" v-model="currentProduct.title">
          <label>Product short desc</label>
          <input type="text" v-model="currentProduct.shortDesc">
          <label>Product Price</label>
          <input type="text" v-model="currentProduct.price">

      </div>
      <div class="right-input">
            <p>Product Description</p>
            <textarea v-model="currentProduct.longDesc"></textarea>
      </div>
      <button type="submit" v-on:click="OnSubmitCreateProduct">submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestProduct",
  data() {
    return {
      getProduct: null,
      updateProductId: null,
      updateProductTitle: null,
      currentProduct:  {
        _id: '39y7gbbZk1u4ABnv', // generated serverside
        title: 'Gretas Fury',
        price: 999,
        shortDesc: 'Unisex',
        longDesc: 'Skate ipsum dolor sit amet...',
        imgFile: 'skateboard-greta.png' // Asset logic on clientside
      } 
    }
  },
  computed: {
    products() {
        return this.$store.state.productList
    },
    oneProduct() {
      return this.$store.state.product
    },
    
    orders() {
      return this.$store.state.orderList
    },
    currentImage() {
      return this.getImage(this.currentProduct.imgFile)
    }
  },
  methods: {
    getImage(path) {          
      return require(`../../assets/${path}`)
    },
    OnSubmitGetProduct() {
      this.$store.dispatch("GetProduct", this.getProduct)
    },
    OnSubmitUpdateProduct() {
      this.$router.go(0)  
      this.$store.dispatch("UpdateProduct", {_id: this.updateProductId, title: this.updateProductTitle})
    },
    OnSubmitCreateProduct() {
      this.$store.dispatch("CreateNewProduct", this.currentProduct)
    },
    OnSubmitLogin() {
      this.$store.dispatch("AuthenticateUser", {email: this.email, password: this.password})
      this.$store.dispatch("GetAllOrders")
    },
    OnSubmitCreateOrder() {
      this.$store.dispatch("CreateOrder")
    }
  },
  created() {
    this.$store.dispatch("GetAllProducts")
    this.$store.dispatch("GetAllOrders")
    //.dispatch("AuthenticateUser", {name: 'Johan Kivi', })

    // this.$store.dispatch("RegisterUser", {
    //   _id: null, // generated server side
    //   email: 'elchin.mussolini@zocom.se',
    //   password: 'password',
    //   repeatPassword: 'password',
    //   name: 'Elchin Mussolini',
    //   role: 'customer', // or customer

    //   adress: {
    //       street: 'Tokitokvägen 3',
    //       zip: '123 45',
    //       city: 'Tokberga'
    //   },
    //   orderHistory: []
    //   })
  },
  
  
}
</script>

<style>

</style>