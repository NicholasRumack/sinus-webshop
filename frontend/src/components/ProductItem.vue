<template>

<div class="wrapper">
    <div class="oneProduct">
        <p>{{title}}</p>
    
        <h5>{{shortDesc}}</h5>
    
        <img :src="require('../assets/' + img)" alt="">
        
        <button class="button is-success"
        @click="addProductToCart(product)"> {{price}}kr</button>
    </div>
</div>

</template>


<script>



export default {
    components: {

    }, 
    methods: {
        addProductToCart (product){
            this.$store.dispatch('addProductToCart', product)
        }
    },

    props: {
        product: Array,
        title: String,
        price: Number,
        shortDesc: String,
        img: String,
    },
    computed: {
/*         products () {
            return this.$store.getters.avaiableProducts
        } */
    },
    data(){return{
       
    }},
}
</script>

<style scoped>
* {
    margin: 0;
    display: block;
    
}

.wrapper{
    flex: 0 1 auto;
    flex-direction: row;
    border-style: solid;
    margin-top: 5vh;
    
}

.oneProduct{
    width: 35vh;
    height: 40vh;
    
}

img{
    height: 315px;
}

button{
  font-size: 28px;
  font-weight: bold;
  color: white;
  background-color: black;
  border-radius: 25px;
  margin-left: 10px;
  min-width: 122px;
  max-height: 47px;
  }

</style>