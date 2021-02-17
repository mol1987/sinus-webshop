// *** This component is a product card template. This model is used in the Product component

<template>
    <!-- *** Click event emits to Product.vue (parent) clicked-card event *** -->
    <main>
        <div class="card" @click="$emit('clicked-card')">
            <div id="top">
                <h4 id="header">{{product.title}}</h4>
                <img id="icon" src="@/assets/icon-bag-black.svg">
            </div>
            <label>{{product.shortDesc}}</label>
            <div id="picture-container">
                <div id="price">{{product.price}} sek</div>
                <img :src="getImage(product.imgFile)">
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        product: null
    },

    methods: {
        getImage(path) {          
            return require(`../assets/${path}`)
        },
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
        width: 35px;
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