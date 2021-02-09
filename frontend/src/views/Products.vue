<template>
    <div class="products">
        <div class="body">
            <Nav/>
            <div class="product-container">
                <!-- <product-card @click.native="@/components/ProductView.vue"/> -->
                <product-card/>
                <product-card/>
                <product-card/>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import ProductCard from '../components/ProductCard.vue'

export default {
    name: "Products",
    components: {
    Nav, ProductCard,
  },
}
</script>
        
<style lang="scss" scoped>
.products {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: lightgrey;
}
.body {
  display: flex;
  flex-direction: column;
  width: 70%;
}
.product-container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: auto auto auto;
}

@media only screen and (max-width: 34px) {
  .products {
    width: 50%;
  }
}
</style>