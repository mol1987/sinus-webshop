<template>
    <div class="products">
            <Nav/>
          <div class="body">
            <div class="product-container" v-for="product in products" :key="product.id">
                <product-card v-on:clicked-card="currentProduct = product" id="product-card"/>
   
            </div>
            <product-view v-if="currentProduct">
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
    getImage(path) {          
      return require(`../assets/${path}`)
    }    
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