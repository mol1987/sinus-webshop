// *** Products template for all products in the store. 

<template>
    <div class="products">
            <Nav/>
          <div class="body"> 
            
            <!-- *** For each object in products display product-card component *** -->
            <div class="product-container" v-for="product in products" :key="product.id">
                <product-card v-on:clicked-card="currentProduct = product" id="product-card"/>
            </div>

            <!-- *** This is product-view template which uses in the slots of ProductView modal component *** -->
            <product-view v-if="currentProduct" v-on:close="closePopup">
                  <template v-slot:img-file>
                    <img :src="getImage(currentProduct.imgFile)">
                  </template>
                  <template v-slot:header>
                    <h3>{{currentProduct.title}}</h3>
                  </template>
                  <template v-slot:short-desc>
                    <label>{{currentProduct.shortDesc}}</label>
                  </template>
                  <template v-slot:long-desc>
                    <p>{{currentProduct.longDesc}}</p>
                  </template>
                  <template v-slot:price>
                    <h3>{{currentProduct.price}} sek</h3>
                  </template>
                </product-view>
          </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import ProductCard from '../components/ProductCard.vue'
import ProductView from '../components/ProductView.vue'
import Products from '/database/productsSeed.json'

export default {
    name: "Products",
    components: {
    Nav, 
    ProductCard,
    ProductView,
  },
  data() {
    return {
      products: Products,
      currentProduct: null,
    }
  },
  methods: {
    // Just get an image from the assets. Should be reassigned by the fetch or axios later on.
    getImage(path) {          
      return require(`../assets/${path}`)
    },
    // Closing the modal component. May fix it without close button later.
    closePopup() {
      this.currentProduct = null
    },
  },
}
</script>

        
<style lang="scss" scoped>
.products {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
.body {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    #product-card {
      width: 180px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
}
img {
  width: 100%;
}
</style>