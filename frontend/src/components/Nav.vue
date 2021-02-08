<template>
    <div class="Nav">
        <div class="nav-bar">
            <img src="~@/assets/sinus-logo.svg">
            <div class="right-side">
                <router-link to="/Products">Products</router-link>
                <router-link to="/">Register</router-link>
                <button>hello</button>
                <button>hello</button>
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

</style>