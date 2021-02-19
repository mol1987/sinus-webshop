<template>
    <main class="profile">
        <Nav id="nav"/>

        <div class="container">
            <header id="header"><h1>{{getUser.name}} profile</h1></header>
            <aside id="aside">
                <ul v-for="order in getOrderHistory" :key="order._id">
                    <p>Date: {{toDate(order.timeStamp)}}</p>
                    <li v-for="item in order.items" :key="item._id">
                        {{item.title}}
                        {{item.shortDesc}}
                        {{item.price}} sek
                    </li>
                    <hr>
                </ul>
            </aside>
            <body id="body">
                <label type="text" name="name" placeholder="name">{{getUser.name}}</label>
                <label type="text" name="email" placeholder="email">{{getUser.email}}</label>
                <label type="text" name="street" placeholder="street">{{getUser.adress.street}}</label>
                <label type="number" name="zip" placeholder="zip">{{getUser.adress.zip}}</label>
                <label type="text" name="city" placeholder="city">{{getUser.adress.city}}</label>
                <!-- <label type="text" name="cardOwner" placeholder="card owner">{{getUser.payment.cardOwner}}</label>
                <label type="number" name="cardNumber" placeholder="card number">{{getUser.payment.cardNumber}}</label>
                <label type="text" name="validUntil" placeholder="expire date">{{getUser.payment.validUntil}}</label>
                <label type="text" name="cvv" placeholder="cvv">{{getUser.payment.cvv}}</label> -->
            </body>
            </div>
    </main>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
  components: { Nav },
    name: "Profile",
    data() {
        return {
        }
    },
    beforeCreate() {
        
    },
    mounted() {   
        this.$store.dispatch('GetAllProducts')
        this.$store.dispatch('GetAllOrders')
    },
    computed: {
        getUser() {
            return this.$store.getters.inloggedUser
        },
        getOrderHistory() {
            return this.$store.getters.GetOrders
        }
    }, 
    methods: {
        toDate(ms) {
            let date = new Date(ms)
            return date.toDateString()
        }
    },
}
</script>

<style lang="scss" scoped>
#nav {
    padding: 0 !important;
}
.profile {
    width: 100%;  
    height: 100%;
    justify-content: center;
}
.container {
    width: 100%;  
    height: 50%;
    //justify-content: center;
    background-color: snow;
    display: grid;
    box-shadow: 0 0 2rem rgba(0,0,0,.6);
    grid-template-areas:
        'header header header header'
        'aside body body body'
        'aside body body body';

        #header {
            grid-area: header;
            //background-color: hotpink;
            border: 1px solid;
            padding: 6% 0;
        }
        #aside {
            grid-area: aside;
            border: 1px solid;
            //background-color: hotpink;
            display: flex;
            flex-direction: column;
            font-size: 18px;
            padding: 40% 20%;
        }
        #body {
            grid-area: body;
            border: 1px solid;
            font-size: 24px;
            background-color: snow;
            padding: 40% 0;
        }
}
</style>