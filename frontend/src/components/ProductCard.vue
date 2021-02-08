<template>
    <section>
    <div class="card-skateboard">
        <div id="top">
            <h2 id="header">Tricky</h2>
            <img id="icon" src="@/assets/icon-bag-black.svg">
        </div>
        <label>Unisex</label>
        <div id="picture-container">
            <div id="price">599sek</div>
            <img id="skateboard" src="@/assets/skateboard-generic.png">
        </div>
    </div>
    <!-- *** Hoodie card  *** -->
    <!-- <div class="card">
        <div id="top">
            <h2 id="header">Tricky</h2>
            <img id="icon" src="@/assets/icon-bag-white.svg">
        </div>
        <label>Unisex</label>
        <img id="hoodie-ash" src="@/assets/hoodie-ash.png">
    </div> -->
    </section>
</template>

<script>
    export default {
        name: 'ProductCard',
    }
</script>

<style lang="scss" scoped>
section {
    background-color: white;
}
.card {
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(238, 231, 231, 0.829);
    transition: 0.3s;
    max-width: 100%;
}
#skateboard {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}
#hoodie-ash {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
}
#top {
    display: flex;
    justify-content: space-between;
    #header {
        align-self: flex-start;
    }
    #icon {
        align-self: flex-end;
        left: 15px;
    }
}
label {
    float: left;
    font-size: 12px;
}
#picture-container {
    position: relative;
}
#price {
    background-color: black;
    color: white;
    height: 2rem;
    width: 6rem;
    border: 2px;
    border-radius: 25px;
  position: absolute;
  bottom: 2%;
  left: 35%;
    transform: translate(-50%, -50%);
}
</style>