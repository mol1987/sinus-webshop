<template>
    <div class="make-order">
        <Nav />
        <div class="main">
            <h3>Pay</h3>
            <div class="information">
                <div class="items">   
                    <h3>Your order</h3>
                    <div class="board">
                            <div class="product-item-main" v-for="item in orderItems" :key="item.id">
                              <hr>
                               <div class="product-item">
                                    <div class="left">
                                        <div class="img-board">
                                             <!-- <img :src="getImage(item.imgFile)"> -->
                                             <img :src="getImage(item.imgFile)" :alt="tom">
                                        </div>
                                        <div class="text-two-part">
                                            <h3>Gretas Fury</h3>
                                            <p>Unisex</p>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <div class="text-two-part">
                                            <p>999 kr</p>
                                            <p>123141245</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="line"></div>
                        <div class="total-part">
                            <h3>Total</h3>
                            <p>12312 kr</p>
                        </div>
                    </div>
                </div>
                <div class="input-field">
                    <form>
                        <h3>Your details</h3>
                            <label for="fname">Your name:</label>
                            <input type="text" id="fname" name="fname">
                            <label for="street">Street:</label>
                            <input type="text" id="street" name="street">
                        <div class="two-inputs">
                            <label for="zip">Zip code:</label>
                            <input type="text" id="zip" name="zip">
                            <label for="city">City:</label>
                            <input type="text" id="city" name="city">
                        </div><hr><br>
                        <h3>Payment</h3>
                            <label for="card-owner">Card owner:</label>
                            <input type="text" id="card-owner" name="card-owner">
                            <label for="card-number">Card number:</label>
                            <input type="text" id="card-number" name="card-number">
                        <div class="two-inputs">
                            <label for="expire-date">Valid until:</label>
                            <input type="text" id="expire-date" name="expire-date">
                            <label for="cvv">CVV:</label>
                            <input type="text" id="cvv" name="cvv"> 
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
    name: " ",
    components: {
        Nav
    },
    data() {
        return {
            orderItems: [  
            {
                _id: '39y7gbbZk1u4ABnv', // generated serverside
                title: 'Gretas Fury',
                price: 999,
                shortDesc: 'Unisex',
                longDesc: 'Skate ipsum dolor sit amet...',
                imgFile: 'skateboard-greta.png' // Asset logic on clientside
            },
            {
                _id: '39y7gbbZk1u4ABnv', // generated serverside
                title: 'Gretas Fury',
                price: 999,
                shortDesc: 'Unisex',
                longDesc: 'Skate ipsum dolor sit amet...',
                imgFile: 'skateboard-greta.png' // Asset logic on clientside
            }, 
            {
                _id: '39y7gbbZk1u4ABnv', // generated serverside
                title: 'Gretas Fury',
                price: 999,
                shortDesc: 'Unisex',
                longDesc: 'Skate ipsum dolor sit amet...',
                imgFile: 'skateboard-greta.png' // Asset logic on clientside
            } 
            ]
        }
    },
    methods: {
        getImage(path) {
              return require(`../assets/${path}`)
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
    .input-field {
        max-width: 50%;
        min-width: 400px;
        display: flex;
        flex-direction: column;
        input {
            margin-bottom: 15px;
            margin-right: 10px;
        }
        >form {
            display: flex;
            flex-direction: column;
        }
        button {
            background-color: black;
            color: white;
            margin-top: 25px;
            margin-left: 165px;
            height: 40px;
            width: 130px;
            border-radius: 50px;
        }
    }
}
.main {
    text-align: left;
}
.make-order {
    width: 100%;
}
</style>