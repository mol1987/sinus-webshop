<template>
    <div class="Nav">
        <div class="nav-bar">
            <router-link id="logo" to="/">
                <img src="@/assets/sinus-logo.svg">
            </router-link>

            <div class="right-side" v-if="NavBarStateUser">
                <router-link to="/Products" v-bind:class="{activated: flagActivated('/Products')}">Products</router-link>
                <!-- <router-link to="/" v-bind:class="{activated: flagActivated('/')}">Register me</router-link> -->
                <img v-if="!inloggedUser" id="login" src="@/assets/icons8-customer-64.png" @click="openLogin">
                <p v-if="inloggedUser" @click="showProfilePopup">{{this.inloggedUser.name}}</p>
                <profile-popup id="profilePopup-modal" v-if="inlogged"/>
                <login id="login-modal" v-if="showLogin && !inloggedUser"/>
                <div class="cart-section">
                    <img id="cart" src="@/assets/icon-bag-white.svg" @click="openCart">
                    <cart id="cart-modal" v-if="showCart" v-on:proceed="ProceedBuy"/>
                    <div class="circle-number"><p>{{cartItemAmount}}</p></div>
                </div>
            </div>
            <div class="right-side" v-if="NavBarStateAdmin">
                <router-link to="/AdminProducts" v-bind:class="{activated: flagActivated('/AdminProducts')}">Admin Products</router-link>
                <router-link to="/Admin" v-bind:class="{activated: flagActivated('/Admin')}">Orders</router-link>
                <a href="#">My Account</a>
            </div>
            
        </div>
    </div>
</template>

<script>
import Cart from './Cart.vue'
import Login from './Login.vue'
import ProfilePopup from './ProfilePopup.vue'

export default {
  components: { 
      Cart, 
      Login, 
      ProfilePopup 
    },
    name: "Nav",
    props: ["navBarState"],
    data() { return {
        showCart: false,
        showLogin: false,
        inlogged: false,
    }},
    computed: {
        cartItemAmount() {
            let cart = this.$store.getters.GetCart
            let amount = 0
            if (cart != null) {
                cart.forEach(element => {
                    amount += element.amount
                });
            }
            return amount
        },
        NavBarStateAdmin() {
            if (this.navBarState == 'admin') return true
            return false
        },
        NavBarStateUser() {
            if (this.navBarState == 'user') return true
            if (this.navBarState == null) return true
            return false
        },
        inloggedUser() {
            return this.$store.getters.inloggedUser
        }
    },
    methods: {
        flagActivated(routeName) {
            if (routeName == this.$router.currentRoute.path) return true
            return false
        }, 
        openCart() {
            if (this.showLogin) {
                this.showLogin = false
            }
            if (this.inlogged) {
                this.inlogged = false
            }
            this.showCart = !this.showCart
        },
        openLogin() {
            if (this.showCart) {
                this.showCart = false
            }
            if (this.inlogged) {
                this.inlogged = false
            }
            this.showLogin = !this.showLogin
        },
        showProfilePopup() {
            if (this.showCart) {
                this.showCart = false
            }
            this.inlogged = !this.inlogged
        },
        ProceedBuy() {
            if (this.$store.getters.inloggedUser) {
                this.$router.push('BuyView')
            } else {
                this.$router.push('MakeOrder')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.activated {
    font-weight: 700;
}
#cart-modal {
    margin-top: 45px;
    margin-right: 55px;
    z-index: 10;
}

.Nav {
    width: 100%;
    padding: 0;
}

.right-side {
        display: flex;
        justify-content: space-evenly;
        justify-items: center;
        align-items: center;
        width: 15rem;
    }
    #login-modal {
        position: absolute;
        top: 55px;
        right: 60px;        
        z-index: 10;
        cursor: pointer;
    }
    #profilePopup-modal {
        position: absolute;
        top: 55px;
        right: 70px;        
        z-index: 10;
    }
    p {
        cursor: pointer;
    }

.nav-bar {
    display: flex;
    justify-content: space-between;
    height: 50px;
    #logo {
    height: 100%;
    width: 100px; 
}
}
a {
    margin: 2px;
}
button {
    margin: 2px;
}
#login {
    height: 25px;
    width: 25px;
    background-color: grey;
    border-radius: 50px;
    margin: 2px;
}
#cart {
    height: 25px;
    width: 25px;
    background-color: red;
    border-radius: 50px;
}

.cart-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    cursor: pointer;

    .circle-number {
        display: flex;
        flex-direction: column;
        justify-content: center;

        position: absolute;
        background-color: white;
        width: 15px;
        height: 15px;
        border-radius: 50px;
        margin-left: 18px;
        margin-bottom: 20px;
        >p {
            font-size: 10px;
        }
    }
}

</style>