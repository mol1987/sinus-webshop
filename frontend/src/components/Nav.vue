<template>
    <div class="Nav">
        <div class="nav-bar">
            <img src="~@/assets/sinus-logo.svg">
            <div class="right-side" v-if="NavBarStateUser">
                <router-link to="/Products" v-bind:class="{activated: flagActivated('/Products')}">Products</router-link>
                <router-link to="/" v-bind:class="{activated: flagActivated('/')}">Register</router-link>
                <img id="login" src="@/assets/icons8-customer-64.png">
                <div class="cart-section">
                    <img id="cart" src="@/assets/icon-bag-white.svg" @click="openCart">
                    <cart id="cart-modal" v-if="show"/>
                    <div class="circle-number"><p>{{cartItemAmount}}</p></div>
                </div>
            </div>
            <div class="right-side" v-if="NavBarStateAdmin">
                <router-link to="/AdminProducts" v-bind:class="{activated: flagActivated('/AdminProducts')}">Admin Products</router-link>
                <router-link to="/Admin" v-bind:class="{activated: flagActivated('/admin')}">Orders</router-link>
                <a href="#">My Account</a>
            </div>
            
        </div>
    </div>
</template>

<script>
import Cart from './Cart.vue'

export default {
  components: { Cart },
    name: "Nav",
    props: ["navBarState"],
    data() { return {
        show: false,
    }},
    computed: {
        cartItemAmount() {
            return 2
        },
        NavBarStateAdmin() {
            if (this.navBarState == 'admin') return true
            return false
        },
        NavBarStateUser() {
            if (this.navBarState == 'user') return true
            if (this.navBarState == null) return true
            return false
        }
    },
    methods: {
        flagActivated(routeName) {
            if (routeName == this.$router.currentRoute.path) return true
            return false
        }, 
        openCart() {
            this.show = !this.show
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
    margin-right: 35px;
}

.Nav {
    width: 100%;
}

.right-side {
        display: flex;
        justify-content: space-evenly;
        justify-items: center;
        align-items: center;
        width: 15rem;
    }

.nav-bar {
    display: flex;
    justify-content: space-between;
    height: 50px;
    >img {
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