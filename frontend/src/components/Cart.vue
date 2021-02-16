// *** This is modal component. Popups when user opens cart via navbar

<template>
    <main class="cart">
        <div id="arrow"></div>
        <div id="product-list">
            <div id="product-item" v-for="item in addedItems" :key="item.product.id">
                <div id="imgFile">
                    <slot name="imgFile"/>
                    <img src="@/assets/skateboard-greta.png">
                    <!-- {{item.imgFile}} -->
                </div>
                <div id="item-info">
                    <div id="title">
                        <slot name="title"/>
                        {{item.product.title}}
                    </div>
                    <div id="shortDesc">
                        <slot name="shortDesc"/>
                        {{item.product.shortDesc}}
                    </div>
                    <div id="serial">
                        <slot name="serial"/>
                        {{item.product.serial}}
                    </div>
                </div>
                <div id="price">
                    <slot name="price"/>
                    {{item.product.price}}
                </div>
                <hr>
                <div id="amount">
                    <slot name="amount"/>
                    - {{item.amount}} st
                </div>
            </div>
        </div>
        <span id="total-field">
            <label>TOTAL</label>
            <p><strong>{{calculateTotal}}</strong> sek</p>
        </span>
        <div id="btn" @click="$emit('proceed')">
            <img src="@/assets/icon-bag-white.svg">
            Proceed
        </div>
    </main>
</template>

<script>

export default {
    name: "Cart", 
    data() {
        return {
            // *** Edit addedItems to pupulate list by clicking on items from Products.vue
            total: 0,
        }
    },
    computed: {
        // *** Method to calculate total price from the addedItems list
        calculateTotal() {
            if (this.addedItems != null) {
                this.addedItems.forEach(e => {
                    this.total += e.product.price
                });
            }
            return this.total
        },
        addedItems() {
            return this.$store.getters.GetCart
        }
    }
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
    background-color: beige;
    width: 170px;
    height: 250px;
    box-shadow: 7px 2px 8px rgba(0, 0, 0, 0.45);

    #arrow {
        height: 1rem;
        width: 22px;
        background-color: beige;
        transform: rotate(45deg);
        position: relative;
        bottom: 1;
        }
    #btn {
        background-color: black;
        color: white;
        font-size: 15px;
        width: 85%;
        margin-bottom: 10px;
        border-radius: 50px;
        img {
            width: 10%;
        }
    }
    #product-list {
        height: 180px;
        overflow-y: auto;

        #total-field {
            display: flex;
            flex-direction: row;
        }
    }
    #product-item {
        display: flex;
        #imgFile {
            width: 25px;
            height: 30px;
            border: 4px;
            img {
                width: 100%;
            }
        }
    }
    #item-info {
        display: flex;
        flex-direction: column;
        #title {
            font-size: 15px;
        }
        #shortDesc {
            font-size: 10px;
        }
        #serial {
            font-size: 6px;
        }
    }
}
</style>