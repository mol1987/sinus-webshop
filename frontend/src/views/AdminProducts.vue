<template>
    <div class="admin-products">
        <Nav navBarState="admin"/>
        <div class="body">
                <h2>ADMIN PRODUCTS</h2>
                <div class="line-section">  
                    <p>ADD/EDIT</p>
                    <div class="line"></div>
                </div>
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
                       <label>Product Serial</label>
                       <input type="text" v-model="currentProduct.serial">

                   </div>
                   <div class="right-input">
                        <p>Product Description</p>
                        <textarea v-model="currentProduct.longDesc"></textarea>
                   </div>
                </div>
            <div class="products">
                <!-- *** For each object in products display product-card component *** -->
                <div class="product-container" v-for="product in products" :key="product.id">
                    <product-card v-on:clicked-card="currentProduct = product" id="product-card"/>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav'
import ProductCard from '../components/ProductCard.vue'
import Products from '/database/productsSeed.json'

export default {
    name: "AdminProducts",
    components: {
        Nav,
        ProductCard,
    },
    computed: {
        currentImage() {
            return this.getImage(this.currentProduct.imgFile)
        }
    },
    data() {
    return {
      products: Products,
      currentProduct:  {
        "title" : "",
        "price" : null,
        "shortDesc" : "",
        "category": "",
        "longDesc" : "",
        "imgFile" : "hoodie-ocean.png",
        "serial" : ""
    },
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
.admin-products {
    width: 100%;    
}
label {
    color: rgba(255,255,255,0.7);
    text-align: left;
}
input {
    background-color: rgba(0,0,0,0);
    border-style: solid;
}
textarea {
    background-color: rgba(0,0,0,0);
    border-style: solid;
}
.selected-box {
    display: grid;
    grid-template-columns: auto auto auto;
    width: 100%;
    height: 250px;
    margin-bottom: 10px;
    color: rgba(255,255,255,0.8);
    background-color: #404040;
    padding: 20px;

    .left-input {
        text-align: left;
        >input {
            width: 100%;
            height: 95%;
            border-width: 0px;
        }
    }
    .middle-input {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-left: 10px;
        margin-right: 10px;
        > input {
            height: 30px;
        }
    }
    .right-input {
        text-align: left;
        >textarea {
            color: rgba(255,255,255,0.8);
            width: 100%;
            height: 90%;

            padding-top: 0;
            padding-left: 0;
        }
    }
    
}
.line {
    background-color: rgba(0,0,0,0.8);
    width: 100%;
    height: 1px;
}
.body{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    .line-section   {
        display: flex;
        align-items: center;
        >p {
            text-align: left;
            
            color: rgba(0,0,0,0.6);
            font-size: 11px;
        }
        margin-bottom: 10px;
    }

    >h2{
        text-align: left;
    }
}

.products {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

</style>