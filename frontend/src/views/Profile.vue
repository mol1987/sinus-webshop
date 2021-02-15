<template>
    <div class="profile">
            <header id="header"><h1>{{getUser.name}} profile</h1></header>
            <aside id="aside">
                <!-- <a href="order-history">View order history</a>
                <a href="personal">Personal info</a>
                <a href="delivery">Delivery info</a>
                <a href="payment">Payment info</a> -->

                <ul v-for="getUser.orderHistory" :key="getUser._id">
                    <li>
                        {{getUser.orderHistory.title}}
                    </li>
                </ul>
            </aside>
            <body id="body">
                <label type="text" name="name" placeholder="name">{{getUser.name}}</label>
                <!-- <label type="text" name="password" placeholder="password">{{getUser.password}}</label> -->
                <label type="text" name="email" placeholder="email">{{getUser.email}}</label>
                <label type="text" name="street" placeholder="street">{{getUser.adress.street}}</label>
                <label type="number" name="zip" placeholder="zip">{{getUser.adress.zip}}</label>
                <label type="text" name="city" placeholder="city">{{getUser.adress.city}}</label>
                <!-- <label type="text" name="cardOwner" placeholder="card owner">{{getUser.payment.cardOwner}}</label>
                <label type="number" name="cardNumber" placeholder="card number">{{getUser.payment.cardNumber}}</label>
                <label type="text" name="validUntil" placeholder="expire date">{{getUser.payment.validUntil}}</label>
                <label type="text" name="cvv" placeholder="cvv">{{getUser.payment.cvv}}</label> -->
            </body>
            <footer id="footer">
                dfg
            </footer>
    </div>
</template>

<script>
export default {
    name: "Profile",
    data() {
        return {
            userData: {
                //name: getUser.name
            }
        }
    },

    computed: {
        getUser() {
            return this.$store.getters.inloggedUser
        }
    }
}
</script>

<style lang="scss" scoped>
.profile {
    width: 100%;  
    height: 100%;
    display: grid;
    grid-template-areas:
        'header header header header'
        'aside body body body'
        'aside body body body'
        'footer footer footer footer';

        #header {
            grid-area: header;
            background-color: lightgreen;
            padding: 6% 0;
        }
        #aside {
            grid-area: aside;
            background-color: orange;
            display: flex;
            flex-direction: column;
            font-size: 24px;
        }
        #body {
            grid-area: body;
            background-color: lightblue;
            padding: 40% 0;
        }
        #footer {
            grid-area: footer;
            background-color: hotpink;
            height: 20%;
            padding: 6% 0;
        }
}
</style>