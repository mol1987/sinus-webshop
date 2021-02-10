<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
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
    </transition>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    #product-picture {
        align-self: flex-end;
        width: 100%;
    }
    #body {
        padding: 25%;
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

// *** To make modal component
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: table;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.content {
  width: auto;
  max-width: 800px;
  margin: 0px auto;
  padding: 0px 30px;
  background-color: rgba(247, 243, 243, 0.959);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
</style>