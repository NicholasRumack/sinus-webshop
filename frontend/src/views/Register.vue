<template>
  <div class="register">
    <h1>{{registerHeading}}</h1>
    <p>Om användaren inte är inloggad, visas <router-link to="/register">en länk till registrerings-viewn</router-link>
    <RegForm v-bind:regFormHeading="'<RegForm />'"/>
    </p>
  </div>
</template>

<script>
import RegForm from './RegForm.vue'
export default {
  components: {
      RegForm
  },
  props: {
    registerHeading: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>