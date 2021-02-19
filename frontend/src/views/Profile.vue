<template>
    <main class="profile">
        <Nav id="nav"/>

        <div class="container">
            <header id="header"><h1>{{getUser.name}} profile</h1></header>
            <aside id="aside">
                <h1>Order History</h1><hr>
                <ul v-for="order in getOrderHistory" :key="order._id">
                    <p>Date: {{toDate(order.timeStamp)}}</p>
                    <li v-for="item in order.items" :key="item._id">
                        <img :src="getImage(item.imgFile)">
                        {{item.title}}
                        {{item.shortDesc}}
                        {{item.price}} sek
                    </li><hr>
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
        },
         getImage(path) {          
            return require(`../assets/${path}`)
        },
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
            padding: 2% 0;
        }
        #aside {
            // grid-area: aside;
            // border: 1px solid;
            // //background-color: hotpink;
            // display: flex;
            // flex-direction: column;
            // font-size: 18px;
            // padding: 40% 20%;
            justify-content: flex-start;
            text-align: left;
            //margin-top: 4rem;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            border-style: solid;
            height: 700px;
            width: 500px;
            background-color: beige;
            border: none;
            box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06),
                0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                0 100px 80px rgba(0, 0, 0, 0.12);
            overflow-y: auto;
            li {
                height: 45px;
            }
            img {
                width: 30px;
            }
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