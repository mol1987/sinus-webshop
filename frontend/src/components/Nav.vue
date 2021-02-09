<template>
    <div class="Nav">
        <div class="nav-bar">
            <img src="~@/assets/sinus-logo.svg">
            <div class="right-side">
                <a href="#">Products</a>
                <a href="">Register</a>
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

</style>