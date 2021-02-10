<template>
    <div class="admin">
        <Nav navBarState="admin"/>
        <div class="body">
            <div class="section">
                <h2>Orders</h2>
                <div class="in-progress">  
                    <p>IN PROGRESS</p>
                    <div class="line"></div>
                </div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
            </div>

            <div class="section">
                <div class="in-progress">  
                    <p>DONE</p>
                    <div class="line"></div>
                </div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
    name: "Admin",
    components: {
        Nav
    }
}
</script>

<style lang="scss" scoped>
.admin {
    width: 100%;    
}
.box {
    width: 100%;
    height: 150px;
    margin-bottom: 10px;

    background-color: white;
}
.section {
    margin-bottom: 20px;

    >h2 {
        text-align: left;
        font-weight: 700;
        margin-bottom: 10px;
    }
}
.line {
    background-color: rgba(0,0,0,0.3);
    width: 100%;
    height: 1px;
}
.body{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    .in-progress {
        display: flex;
        align-items: center;
        >p {
            text-align: left;
            
            color: rgba(0,0,0,0.6);
            font-size: 11px;
        }
        margin-bottom: 10px;
    }

    
}

</style>