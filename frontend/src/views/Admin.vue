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
                <div class="box" v-for="order in orders" :key="order._id">
                    <button type="button" class="collapsible">
                        <p>{{order.timeStamp}}</p>
                        <p>{{order.status}}</p>
                        <p>{{order.orderValue}}</p>
                    </button>
                    <div class="content">
                        <ul v-for="(item, index) in order.items" :key="index">
                            <li>{{item}}</li> 
                        </ul>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="in-progress">  
                    <p>DONE</p>
                    <div class="line"></div>
                </div>
                <div class="box" v-for="order in doneOrders" :key="order._id">
                    <p>{{order.timeStamp}}</p>
                    <p>{{order.status}}</p>
                    <p>{{order.orderValue}}</p>
                    <ul v-for="(item, index) in order.items" :key="index">
                       <li>{{item}}</li>
                       <li>{{item}}</li> 
                       <li>{{item}}</li>
                       <li>{{item}}</li>   
                    </ul>
                </div>
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
    },
    mounted() {
        this.$store.dispatch('GetAllProducts')
        this.$store.dispatch('GetAllOrders')
    },
    computed: {
        orders() {
            let temp = this.$store.getters.GetOrders
            let data = null
            console.log(temp)
            if (temp.length != null) {
                    data = temp.filter(f => f.status == 'inProcess')
                }
            return data
        },
        doneOrders() {
            let temp = this.$store.getters.GetOrders
            let data = null
            console.log(temp)
            if (temp.length != null) {
                    data = temp.filter(f => f.status == 'done')
                }
            return data
        }
    }
}
</script>

<style lang="scss" scoped>
.collapsible {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .collapsible:hover {
  background-color: #ccc;
}

/* Style the collapsible content. Note: hidden by default */
.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
}

.admin {
    width: 100%;    
}
.box {
    width: 100%;
    height: auto;
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