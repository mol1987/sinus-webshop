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
                    <vsa-list>
                    <!-- Here you can use v-for to loop through items  -->
                    <vsa-item>
                        <vsa-heading>
                        <p>Date: {{toDate(order.timeStamp)}}</p>
                        <p>Cost: {{order.orderValue}}</p>
                        <p>Id: {{order._id}}</p>
                        </vsa-heading>

                        <vsa-content>
                        <ul v-for="(item, index) in order.items" :key="index">
                            <div class="img-class">
                                <img :src="getImage(item.imgFile)">
                            </div>
                            <li>Title: {{item.title}}</li> 
                            <li>Price: {{item.price}}</li> 
                            <li>Short Description: {{item.shortDesc}}</li> 
                            <li>Long Description: {{item.longDesc}}</li> 
                        </ul>
                        </vsa-content>
                    </vsa-item>
                    </vsa-list>
                </div>
            </div>

            <div class="section">
                <div class="in-progress">  
                    <p>DONE</p>
                    <div class="line"></div>
                </div>
               <div class="box" v-for="order in doneOrders" :key="order._id">
                    <vsa-list>
                    <!-- Here you can use v-for to loop through items  -->
                    <vsa-item>
                        <vsa-heading>
                        <p>Date: {{toDate(order.timeStamp)}}</p>
                        <p>Cost: {{order.orderValue}}</p>
                        <p>Id: {{order._id}}</p>
                        </vsa-heading>

                        <vsa-content>
                        <ul v-for="(item, index) in order.items" :key="index">
                            <div class="img-class">
                                <img :src="getImage(item.imgFile)">
                            </div>
                            <li>Title: {{item.title}}</li> 
                            <li>Price: {{item.price}}</li> 
                            <li>Short Description: {{item.shortDesc}}</li> 
                            <li>Long Description: {{item.longDesc}}</li> 
                        </ul>
                        </vsa-content>
                    </vsa-item>
                    </vsa-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav'
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
//   VsaIcon
} from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';

export default {
    name: "Admin",
    components: {
        Nav,
        VsaList,
        VsaItem,
        VsaHeading,
        VsaContent,
        // VsaIcon
    },
    mounted() {
        this.$store.dispatch('GetAllProducts')
        this.$store.dispatch('GetAllOrders')
    },
    computed: {
        orders() {
            let temp = this.$store.getters.GetOrders
            let data = null
            if (temp.length != null) {
                    data = temp.filter(f => f.status == 'inProcess')
                }
            return data
        },
        doneOrders() {
            let temp = this.$store.getters.GetOrders
            let data = null
            if (temp.length != null) {
                    data = temp.filter(f => f.status == 'done')
                }
            return data
        }
    },
    methods: {
    // Just get an image from the assets. Should be reassigned by the fetch or axios later on.
    getImage(path) {          
      return require(`../assets/${path}`)
    },
    toDate(ms) {
        let date = new Date(ms)
        return date.toDateString()
    }
  },
}
</script>

<style lang="scss" scoped>

.img-class {
    height: 10rem;
    width: 10rem;
    >img {
        height: 100%;
        width: 100%;
    }
}

.vsa-item {
    width: 100%;
}
.vsa-list {
    width: 100%;
    --vsa-max-width: auto;
    --vsa-min-width: 300px;
    --vsa-text-color: rgba(55, 55, 55, 1);
    --vsa-highlight-color: rgb(68, 66, 66); 
    --vsa-bg-color: rgba(255, 255, 255, 1);
    --vsa-border-color: rgba(0, 0, 0, 0.2);
    --vsa-border-width: 1px;
    --vsa-border-style: solid;
    --vsa-heading-padding: 1rem 1rem;
    --vsa-content-padding: 1rem 1rem;
    --vsa-default-icon-size: 0;
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