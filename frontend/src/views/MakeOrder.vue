<template>
    <div class="make-order">
        <Nav />
        <div class="main">
            <h3>Pay</h3>
            <div class="information">
                <div class="items">   
                    <p>Your order</p>
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
                        <p>Your details</p>
                        <label for="fname">Name:</label>
                        <input type="text" id="fname" name="fname">
                        <label for="lname">Email:</label>
                        <input type="text" id="lname" name="lname">
                        <div class="two-inputs">
                            <label for="lname">Password:</label>
                            <input type="text" id="lname" name="lname">
                            <label for="lname">Password:</label>
                            <input type="text" id="lname" name="lname">
                        </div>
                        <p>Your details</p>
                        <label for="fname">Name:</label>
                        <input type="text" id="fname" name="fname">
                        <label for="lname">Email:</label>
                        <input type="text" id="lname" name="lname">
                        <div class="two-inputs">
                            <label for="lname">Password:</label>
                            <input type="text" id="lname" name="lname">
                            <label for="lname">Password:</label>
                            <input type="text" id="lname" name="lname"> 
                        </div>
                        <input type="submit" value="Submit">
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
    name: "MakeOrder",
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
        width: 50%;
        min-width: 400px;
        display: flex;
        flex-direction: column;
        >form {
            display: flex;
            flex-direction: column;
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