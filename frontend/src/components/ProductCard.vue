// *** This component is a product card template. This model is uses in the Product component

<template>
    <!-- *** Click event emits to Product.vue (parent) clicked-card event *** -->
    <div class="card" @click="$emit('clicked-card')">
        <div id="top">
            <h4 id="header">{{products[0].title}}</h4>
            <img id="icon" src="@/assets/icon-bag-black.svg">
        </div>
        <label>{{products[0].shortDesc}}</label>
        <div id="picture-container">
            <div id="price">{{products[0].price}} sek</div>
            <!-- <img v-bind:src="'@/assets/' + getImage"/>  -->
            <img src="@/assets/skateboard-generic.png">
        </div>
    </div>
</template>

<script>
// *** Import Products from database json file *** 
import Products from '/database/productsSeed.json'

export default {
    name: 'ProductCard',
    data() {
        return {
            products: Products
        }
    },
}
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(238, 231, 231, 0.829);
    transition: 0.3s;
    width: 100%;
    background-color: white;
}
#top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    #header {
        align-self: flex-start;
        width: 100%;
    }
    #icon {
        align-self: flex-end;
        // left: 15px;
        width: 20%;
    }
}
label {
    float: left;
    font-size: 12px;
}
#picture-container {
    position: relative;
    img {
        width: 100%;
    }
}
#price {
    background-color: black;
    color: white;
    height: 1rem;
    width: 5rem;
    border: 2px;
    border-radius: 25px;
    position: absolute;
    bottom: 20%;
    left: 35%;
    transform: translate(-50%, -50%);
}
#icon {
    background-color: lightgrey;
    border-radius: 50px;
    margin-right: 2px;
}
</style>