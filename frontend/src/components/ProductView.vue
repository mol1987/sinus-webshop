<template>
    <div class="product-vue">
        <div id="product-picture">
            <slot name="item-img">
             <img src="@/assets/skateboard-greta.png">
            </slot>
        </div>
        <div id="body">
            <slot name="header3">
                <h3>Greta Fury</h3>
            </slot> 
            <slot name="label">
                <label>Unisex</label>
            </slot>
            <slot name="paragraph">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente deleniti excepturi mollitia, explicabo voluptate accusantium corrupti pariatur dolorem animi.</p>
            </slot>
                <slot name="header4">
                <h4><strong>999sek</strong></h4>
            </slot>
            <div id="button-div">
                <img src="@/assets/icon-bag-white.svg">
                <label id="order-label">Order now</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.product-view {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: auto auto;
    align-content: center;
}
#button-div {
    align-items: center;
    align-self: center;
    background-color: black;
    width: 12rem;
    height: 3rem;
    border-radius: 50px;
    label {
        margin: 8px;
        color: white;
    }
}
</style>