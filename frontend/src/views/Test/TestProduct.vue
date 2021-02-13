

<template>
  <div class="test-products">
    <p>test-product</p>
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
      this.$router.go(0)  
      this.$store.dispatch("GetProduct", {_id: this.updateProductId, title: this.updateProductTitle})
    }
  },
  created() {
    this.$store.dispatch("GetAllProducts")
  }
  
}
</script>

<style>

</style>