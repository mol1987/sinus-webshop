<template>
    <div class="cart">
        <div id="product-list">
            <div id="product-item" v-for="item in addedItems" :key="item.id">
                <div id="imgFile">
                    <slot name="imgFile"/>
                    image
                    <!-- {{item.imgFile}} -->
                </div>
                <div id="title">
                    <slot name="title"/>
                    {{item.title}}
                </div>
                <div id="shortDesc">
                    <slot name="shortDesc"/>
                    {{item.shortDesc}}
                </div>
                <div id="serial">
                    <slot name="serial"/>
                    {{item.serial}}
                </div>
                <div id="price">
                    <slot name="price"/>
                    {{item.price}}
                </div>
            </div>
        </div>
        <span>
            <label for="total">TOTAL</label>
            <p>{{total}}</p>
        </span>
        <button id="btn">Buy now</button>
    </div>
</template>

<script>
import Products from '/database/productsSeed.json'

export default {
    name: "Cart", 
    data() {
        return {
            addedItems: Products,
            total: 0,
        }
    },
}
</script>

<style lang="scss" scoped>
.cart {
    position: absolute;
    top: 0;
    bottom: 0.1;
    left: 1;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 150px;
    height: 250px;
    box-shadow: 7px 2px 8px rgba(0, 0, 0, 0.33);

    #btn {
        background-color: black;
        color: white;
    }
}
</style>