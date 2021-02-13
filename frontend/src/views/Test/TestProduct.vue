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
    <p>{{oneProduct}}</p>
    <label>Id</label>
    <input v-model="updateProductId">
    <label>Title</label>
    <input v-model="updateProductTitle">
    <button type="submit" v-on:click="OnSubmitUpdateProduct">submit</button>
    <p>{{products}}</p>
  </div>
</template>


<script>
export default {
  name: "TestProduct",
  data() {
    return {
      getProduct: null,
      updateProductId: null,
      updateProductTitle: null
    }
  },
  computed: {
    products() {
        return this.$store.state.productList
    },
    oneProduct() {
      return this.$store.state.product
    }
  },
  methods: {
    OnSubmitGetProduct() {
      this.$store.dispatch("GetProduct", this.getProduct)
    },
    OnSubmitUpdateProduct() {
      //this.$router.go(0)  
      this.$store.dispatch("UpdateProduct", {_id: this.updateProductId, title: this.updateProductTitle})
    },
    OnSubmitLogin() {
      this.$store.dispatch("AuthenticateUser", {email: this.email, password: this.password})
    }
  },
  created() {
    this.$store.dispatch("GetAllProducts")
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