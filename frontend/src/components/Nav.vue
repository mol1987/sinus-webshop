<template>
    <div class="Nav">
        <div class="nav-bar">
            <img src="~@/assets/sinus-logo.svg">
            <div class="right-side">
                <router-link to="/Products">Products</router-link>
                <router-link to="/">Register</router-link>
                <img id="login" src="@/assets/icons8-customer-64.png">
                <img id="cart" src="@/assets/icon-bag-white.svg">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style lang="scss" scoped>
.Nav {
    width: 100%;
}
img {
    height: 50px;
    width: 50px;
}
.nav-bar {
    display: flex;
    justify-content: space-between;
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

</style>