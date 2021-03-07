<template>
  <div class="product-list">
    
    <h3 v-if="user">Inloggad som {{user.name}}</h3>
    <h3 v-if="!user">Ej inloggad</h3>

    <ProductItem v-bind:product="products" 
    v-for="prod in products" :key="prod.id"
    v-bind:title="prod.title"
    v-bind:price="prod.price"
    v-bind:shortDesc="prod.shortDesc"
    v-bind:img="prod.imgFile"
     />
  <SingleProduct />

  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'
import SingleProduct from '@/components/SingleProduct.vue'
import {mapState} from 'vuex'
import axios from 'axios'
import {mapGetters} from 'vuex'

export default {
    
    components: {
        ProductItem,
        SingleProduct,
    },
    computed: {
      ...mapState([
        'products'

      ]),
      ...mapGetters(['user'])
    },
    async created() {
    const response = await axios.get('http://localhost:5000/api/me/', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
        
      }
      

    });
    this.$store.dispatch('user', response.data)
    console.log(response)
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
}

</style>