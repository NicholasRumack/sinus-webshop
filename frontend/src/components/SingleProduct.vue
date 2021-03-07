<template>
<!-- MODAL -->
  <div v-on:click="isHidden = !isHidden" class="single-product">
    <h1>{{singleProductHeading}}</h1>
    <img src="@/assets/skateboard-greta.png" alt="">
    <p>beskrivning av produkten.
    </p>

    <p>{{product}}</p>
<!--870HVE1qIZ4lb3Kf-->
<!--      <router-link to="/ShopCart" class="button">Take my money!</router-link> -->
<button>TAKE MY MONEY!</button>
  </div>
</template>

<script>

export default {
    props: {
        singleProductHeading: String
    }, 
     computed: {
       product(){
         return this.$store.getters.getProductById(this.id)
       }
     },
     data() {
       return{
/*        id: "870HVE1qIZ4lb3Kf", */
        isHidden: true
     }}
}
     
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.single-product {
  display: grid;
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
  background: lightgray;
  max-width: 356px;
  max-height: 507px;
  grid-row: 1/4;
  grid-column: 1/2;
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
  grid-row: 3/4;
  margin-bottom: 10px;
  }

</style>
