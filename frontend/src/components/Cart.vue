<template>
    <div class="cart">
        <div id="product-list">
            <div id="product-item" v-for="item in addedItems" :key="item.id">
                <div id="imgFile">
                    <slot name="imgFile"/>
                    <img src="@/assets/skateboard-greta.png">
                    <!-- {{item.imgFile}} -->
                </div>
                <div id="item-info">
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
                </div>
                <div id="price">
                    <slot name="price"/>
                    {{item.price}}
                </div>
            </div>
        </div>
        <span>
            <label>TOTAL</label>
            <p><strong>{{calculateTotal}}</strong> sek</p>
        </span>
        <div id="btn">
            <img src="@/assets/icon-bag-white.svg">
            Proceed
        </div>
    </div>
</template>

<script>
import Products from '/database/productsSeed.json'

export default {
    name: "Cart", 
    data() {
        return {
            // *** Edit addedItems to pupulate list by clicking on items from Products.vue
            addedItems: Products,
            total: 0,
        }
    },
    computed: {
        // *** Method to calculate total price from the addedItems list
        calculateTotal() {
            this.addedItems.forEach(e => {
                this.total += e.price
            });
            return this.total
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
    background-color: white;
    width: 150px;
    height: 250px;
    box-shadow: 7px 2px 8px rgba(0, 0, 0, 0.33);

    #btn {
        background-color: black;
        color: white;
        font-size: 15px;
        width: 85%;
        border-radius: 50px;
        img {
            width: 10%;
        }
    }
    #product-list {
        height: 180px;/* or any height you want */
        overflow-y: auto;
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