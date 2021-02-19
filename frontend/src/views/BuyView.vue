<template>
    <div class="buy-view">
        <Nav />
        <div class="main">
            <h1>Your cart</h1>
            <div class="information">
                <div class="items">   
                    <p>Items</p><hr>
                    <div class="board">
                            <div class="product-item-main" v-for="item in orderItems" :key="item.product.id">
                              <hr>
                               <div class="product-item">
                                    <div class="left">
                                        <div class="img-board">
                                             <!-- <img :src="getImage(item.imgFile)"> -->
                                             <img :src="getImage(item.product.imgFile)" :alt="tom">
                                        </div>
                                        <div class="text-two-part">
                                            <h3>{{item.product.title}}</h3>
                                            <p>{{item.product.shortDesc}}</p>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <div class="text-two-part">
                                            <p>{{item.product.price}}</p>
                                            <p>{{item.product._id}}</p>
                                            <p>Amount: </p>
                                            <p>{{item.amount}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="line"></div>
                        <div class="total-part">
                            <h3>Total</h3>
                            <p>{{totalPrice}} kr</p>
                        </div>
                    </div>
                </div>
                <div class="delivery">
                    <form>
                        <p>Delivery</p><hr>
                        <label for="fname">Name:</label>
                        <input type="text" id="fname" v-model="user.name">
                        <label for="street">Street adress:</label>
                        <input type="text" id="street" v-model="user.adress.street">
                        <div class="two-inputs">
                            <div id="city-info">
                                <label for="city">City:</label>
                                <input type="text" id="city" v-model="user.adress.city" >
                            </div>
                            <div id="zip-info">
                                <label for="zip">Zip Code:</label>
                                <input type="text" id="zip" v-model="user.adress.zip" >
                            </div>
                        </div>
                    </form>
                </div>
                <div class="payment">
                    <form>
                        <p>Payment details</p><hr>
                        <label for="fname">Card owner:</label>
                        <input type="text" id="owner" name="owner" v-model="cardOwner">
                        <label for="lname">Card number:</label>
                        <input type="text" id="card-number" name="card-number" v-model="cardNumber">
                        <div class="two-inputs">
                            <div id="validation-info">
                                <label for="validation">Expire date:</label>
                                <input type="text" id="validation" name="validation" v-model="expireDate">
                            </div>
                            <div id="ccv-info">
                                <label for="ccv">CCV:</label>
                                <input type="text" id="ccv" name="ccv" v-model="cvv"> 
                            </div>
                        </div>
                    </form>
                    <div id="buttons">
                        <button :disabled="checkVal" @click="GotoPay">Pay Now</button>
                        <button @click="GotoContinueShopping">Continue shopping</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
    name: "BuyView",
    components: {
        Nav
    },
    data() {
        return {
            cardOwner: '',
            cardNumber: '',
            expireDate: '',
            cvv: '',
            total: 0
        }
    },
    methods: {
        getImage(path) {
              return require(`../assets/${path}`)
        },
        GotoPay() {
            this.$store.dispatch('CreateOrder')
            // this.$router.push('')
        },
        GotoContinueShopping() {
            this.$router.push('Products')
        }
    },
    computed: {
        orderItems() {
            return this.$store.getters.GetCart
        },
        totalPrice() {
            if (this.orderItems != null) {
                this.orderItems.forEach(e => {
                    this.total += e.product.price
                });
            }
            return this.total
        },
        user() {
            return this.$store.getters.inloggedUser
        },
        checkVal() {
            if (this.cardOwner == '' || this.cardNumber == '' || this.expireDate == '' || this.cvv == '') {
                return true
            }
            return false
        }
    }

}
</script>

<style lang="scss" scoped>
.line {
    background-color: black;
    height: 2px;
    margin: 10px 0px;
}

.information {
    display: flex;
    
    .board {
        background-color: white;
        height: 100%;
        width: 95%;
        .product-item {
            display: flex;
            justify-content: space-between;
            margin: 20px 0px;
            .left{
                display: flex;
                img {
                    width: 100px;
                    height: 100px;
                }
                .img-board {
                    height: 100px;
                    width: 100px;
                    background-color: rgb(211, 211, 211); 
                }
            } 
            .right {
                text-align: right;
            }
            .text-two-part {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
            }
        }
        padding: 30px;
    }
    .items {
        width: 50%;
        min-width: 400px;
        .total-part {
            display: flex;
            justify-content: space-between;
        }
        
    }
    .delivery {
        width: 50%;
        min-width: 400px;
        display: flex;
        flex-direction: column;

        input {
            width: 265px;
        }
        form {
            display: flex;
            flex-direction: column;
            .two-inputs {
                display: flex;
                input {

                    width: 82px;
                }
                #city-info, #zip-info {
                    margin-inline: 20px;
                    display: flex;
                    flex-direction: column;
                }
            }
        }
    }
    .payment {
        width: 50%;
        min-width: 400px;
        display: flex;
        flex-direction: column;

        input {
            width: 265px;
        }
        form {
            display: flex;
            flex-direction: column;
            .two-inputs {
                display: flex;
                input {
                    width: 82px;
                }
                #validation-info, #ccv-info {
                    margin-inline: 20px;
                    display: flex;
                    flex-direction: column;
                }
            }
        }
    }
}
.main {
    text-align: left;
}
.make-order {
    width: 100%;
}
#buttons {
    margin-top: 80px;
    button {
        width: 145px;
        height: 35px;
        border-radius: 50px;
        background-color: black;
        color: white;
        margin: 25px;
    }
    button:disabled {
        background-color: lightgrey;
        color: black;
    }
}

</style>