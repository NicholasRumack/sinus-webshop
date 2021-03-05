<template>
  <div class="reg-form">
    <h1>{{ regFormHeading }}</h1>
    <form action="">

    <label for="Name">Full Name</label>
    <input id="firstName" placeholder="First Name"><input id="lastName" placeholder="Last Name">

    <label for="adress">Adress</label>

    <input id="streetAdress" placeholder="Street Adress">
    <input id="city" placeholder="City">
    <input id="zipcode" placeholder="Zipcode">

    <input id="email" placeholder="Email">
    <input id="password" placeholder="Password">
    <button>Register</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    regFormHeading: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label {
  display: block;
  align-self: start;
}

input, textarea {
  display: inline-block;
  width: 400px;
  margin: 10px;
  padding: 20px 10px;
  border-radius: 10px;
  border-width: 1px;
}

button{
  border-style: solid;
  border-radius: 5px;
  width: 150px;
  height: 50px;
  padding: 15px 50px 15px 50px;
}

</style>