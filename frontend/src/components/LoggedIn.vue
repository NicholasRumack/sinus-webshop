<template>
  <div class="logged-in">
    <h1>{{ loggedInHeading }}</h1>
    <p>Om användaren är inloggad, kommer här info om kundens konto och orderhistorik.
    </p>
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
<style scoped lang="scss">

</style>