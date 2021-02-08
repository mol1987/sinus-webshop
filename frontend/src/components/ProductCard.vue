<template>
    <div class="card">
        <div id="top">
            <h2 id="header">Tricky</h2>
            <img id="icon" src="@/assets/icon-bag-white.svg">
        </div>
        <label>Unisex</label>
        <img id="image" src="@/assets/skateboard-generic.png">
    </div>
</template>

<script>
    export default {
        name: 'ProductCard',
    }
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    max-width: 100%;
}
#image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}
#top {
    display: flex;
    h2 {
        align-self: flex-start;
    }
    img {
        align-self: flex-end;
    }
}
label {
    align-self: flex-start;
    font-size: 12px;
}
</style>