<template>
  <div class="product-list">
    
    <ProductItem v-bind:product="products" 
    v-for="prod in products" :key="prod.id"
    v-bind:title="prod.title"
    v-bind:price="prod.price"
    v-bind:shortDesc="prod.shortDesc"
    
     />
  <SingleProduct />

  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'
import SingleProduct from '@/components/SingleProduct.vue'
import {mapState} from 'vuex'

export default {
    components: {
        ProductItem,
        SingleProduct,
    },
    computed: {
      ...mapState([
        'products'

      ])
    },
  data(){return{
    
  }},

    methods: {
      
    },
    mounted: function(){
      this.$store.dispatch('loadProducts')
    },
    
}
    
</script>

<style scoped>
.product-list{
  display: flex;
  max-width: 1000px;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-between;
  background-color: lightgrey;
}

</style>