<template>
    <div class="admin-products">
        <Nav navBarState="admin"/>
        <div class="body">
                <h2>ADMIN PRODUCTS</h2>
                <div class="line-section">  
                    <p>ADD/EDIT</p>
                    <div class="line"></div>
                </div>
                <div class="selected-box">
                    <div class="left-input">
                        <p>Product Photo</p>
                        <input type="image">
                   </div>
                    
                   <div class="middle-input">
                       <label>Product name</label>
                       <input type="text">
                       <label>Product short desc</label>
                       <input type="text">
                       <label>Product Price</label>
                       <input type="text">
                       <label>Product Serial</label>
                       <input type="text">

                   </div>
                   <div class="right-input">
                        <p>Product Description</p>
                        <textarea></textarea>
                   </div>
                   
                </div>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
    name: "AdminProducts",
    components: {
        Nav
    }
}
</script>

<style lang="scss" scoped>
.admin-products {
    width: 100%;    
}
label {
    color: rgba(255,255,255,0.7);
    text-align: left;
}
input {
    background-color: rgba(0,0,0,0);
    border-style: solid;
}
textarea {
    background-color: rgba(0,0,0,0);
    border-style: solid;
}
.selected-box {
    display: grid;
    grid-template-columns: auto auto auto;
    width: 100%;
    height: 250px;
    margin-bottom: 10px;
    color: rgba(255,255,255,0.8);
    background-color: #404040;
    padding: 20px;

    .left-input {
        text-align: left;
        >input {
            width: 100%;
            height: 90%;
        }
    }
    .middle-input {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-left: 10px;
        margin-right: 10px;
        > input {
            height: 30px;
        }
    }
    .right-input {
        text-align: left;
        >textarea {
            color: rgba(255,255,255,0.8);
            width: 100%;
            height: 90%;

            padding-top: 0;
            padding-left: 0;
        }
    }
    
}
.line {
    background-color: rgba(0,0,0,0.8);
    width: 100%;
    height: 1px;
}
.body{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    .line-section   {
        display: flex;
        align-items: center;
        >p {
            text-align: left;
            
            color: rgba(0,0,0,0.6);
            font-size: 11px;
        }
        margin-bottom: 10px;
    }

    >h2{
        text-align: left;
    }
}

</style>