<template>
    <div class="product-vue">
        <div class="fade-layer">
            <div class="content">
                <div id="product-picture">
                    <slot name="img-file"/>
                </div>
                <div id="body">
                    <slot id="header" name="header"/>
                    <slot name="short-desc"/>
                    <slot name="long-desc" />
                    <slot name="price"/>
                    <div id="button-div">
                        <img src="@/assets/icon-bag-white.svg">
                        <label id="order-label">Order now</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        //show: Boolean
    }
}
</script>

<style lang="scss" scoped>
#body {
    color: red;
}
// .fade-layer {
//     position: fixed;
//     top: 0; left: 0; bottom: 0; right: 0;
//     background-color: rgba(0,0,0,0.25);
//     transition: opacity 0.25s;
//     pointer-events: none;
//     opacity: 0;
// }
// .fade-layer.show {
//     pointer-events: all;
//     opacity: 1;
// }
// .content {
//     padding: 2rem;
//     transition: opacity 0.25s;
//     opacity: 0;
//     position: fixed;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
// }
// .content.show {
//     opacity: 1;
// }
</style>