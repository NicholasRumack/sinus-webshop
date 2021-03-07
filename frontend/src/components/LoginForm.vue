<template>
<!-- MODAL -->


  <form @submit.prevent="handleLoginSubmit">
    <h3>Login</h3>
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="email" placeholder="Email"/>
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password"/>
    </div>

    <button class="btn btn-primary btn-block">Login</button>
  </form>

 
  
</template>

<script>
//import axios from 'axios'
export default {
  props: {
    
  },
  data(){return{
    email: '',
    password: '', 
  }}, 
  methods: {
    handleLoginSubmit(){
      
      this.$store.dispatch('logIn', {email: this.email, password: this.password})
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label {
  display: block;
}



button{
 border-style: none;
 width: 15vh;
 height: 5vh;
}

.form-group{
  margin: 30px;
  
}

</style>