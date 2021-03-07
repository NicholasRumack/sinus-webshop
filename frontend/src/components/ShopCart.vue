<template>
<!-- MODAL -->
<div class="shop-cart">
    <h1>YOUR CART.</h1>
    <p>{{shopCartHeading}}</p>
<div class="items">
    <h2>ITEMS</h2>
    <ul>
      <li v-for="product in products">
        {{product.title}}
        {{product.shortDesc}}
        {{product.price}}
      </li>  
    </ul> 
    <p>TOTAL</p>  

</div>

    <p>
      <router-link to="/checkout">Take my money!</router-link>
    </p>      
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  components: {
    products () {
      return this.$store.getters.cartProducts
    }
  },
  props: {
    shopCartHeading: String
  },
  computed: {
    ...mapState([
        'products'

      ]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
