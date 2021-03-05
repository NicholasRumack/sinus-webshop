<template>
<!-- MODAL -->
  <div class="single-product">

    <img src="@/assets/skateboard-greta.png" alt="">

    <h1>{{singleProductHeading}}</h1>

    <p>{{longDesc}}</p>

    <p>{{getProductById}}</p>

    <router-link to="/shopCart" class="button">Take my money!</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        singleProductHeading: String,
        title: String,
        price: Number,
        longDesc: String,
        imgFile: String,
        
    }, 
     computed: {
       ...mapGetters([
         'getProductById'
       ])
     },
}
     
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.single-product {
  display: grid;
  grid-template-columns: 1fr repeat(4);
  grid-template-rows: 1fr repeat(4);
  background-color: white;
  width: 768px;
  height: 508px;
}
h1 {
  font-size: 32px;
  font-weight: bold;
  grid-column: 2/4;
  grid-row: 1;
}
p {
  font-size: 22px;
  grid-column: 2/4;
  grid-row: 2;

}
img {
  max-width: 221px;
  max-height: 315px;
  grid-row: 1/5;
  grid-column: 1/3;
  align-content: bottom;

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
  grid-column: 2/3;
  grid-row: 4;
  }

</style>
