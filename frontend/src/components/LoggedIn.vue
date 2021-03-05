<template>
  <div class="logged-in">
    <p>{{ loggedInHeading }}</p>
    <h1>Orders</h1>
    <p>IN PROGRESS</p>
    <div class="box"></div>
    <p>Om användaren är inloggad, kommer här info om kundens konto och orderhistorik.
    </p>
    <p>DONE</p>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  props: {
    loggedInHeading: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.box {
  background: white;
  width: 1064px;
  height: 159px;
}

</style>