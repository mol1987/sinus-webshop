<template>
    <div class="product-vue">
        <div class="fade-layer">
            <div class="content">
                <div id="product-picture">
                    <slot name="img-file"/>
                </div>
                <div id="body">
                    <div id="header">
                        <slot name="header"/>
                    </div>
                    <div id="short-desc">
                        <slot name="short-desc"/>
                    </div>
                    <div id="long-desc">
                        <slot name="long-desc" />
                    </div>
                    <div id="price">
                        <slot name="price"/>
                    </div>
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
.content {
    display: flex;
    flex-direction: row;
    #product-picture {
        align-self: flex-end;
    }
    #body {
        padding: 10%;
        align-self: center;
        background-color: white;
        #header {
            margin-bottom: 10px;
            font-size: 18px;
        }
        #short-desc {
            margin-bottom: 10px;
        }
        #long-desc {
            margin-bottom: 10px;
        }
        #price {
            font-size: 22px;
            margin-bottom: 10px;
        }
    }
}
#button-div {
    height: 60px;
    width: 210px;
    background-color: black;
    border-radius: 50px;
    color: white;
    margin-left: 20%;
    margin-top: 35px;
    padding: 12px;
    img {
        margin-right: 8px;
    }
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