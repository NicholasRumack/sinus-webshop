<template>
  <div class="logged-in">
    <h1>{{ contactPayFormHeading }}</h1>

       <div class="delivery">
    <h2>DELIVERY</h2>
    <label for="name">Name</label>
    <input type="text">
    <label for="streetAdress">Street adress</label>
    <input type="text">
    <label for="city">City</label>
    <input type="text">
    <label for="zipCode">Zip Code</label>
    <input type="text">
</div>
<div class="payment">
    <h2>PAYMENT DETAILS</h2>
    <label for="cardOwner">Card owner</label>
    <input type="text">
    <label for="cardNumber">Card Number</label>
    <input type="numbers">
    <label for="validUntil">Valid Until</label>
    <input type="numbers">
    <label for="ccv">CCV</label>
    <input type="numbers">
</div> 
  </div>
</template>

<script>
export default {
  props: {
    contactPayFormHeading: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shop-cart {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;

}

.delivery {
 grid-column: 2;
}

.payment {
  grid-column: 3;
}

h1 {
  display: flex;
  align-self: flex-start;
}

h2 {
  color: gray;
  font-size: 16px;
}

label {
  display: block;
  color: gray;
}

input, textarea {
  display: block;
  width: 400px;
  margin: 10px;
  padding: 20px 10px;
  border-color: light-gray;
  border-radius: 3px;
  border-width: 1px;
}
</style>