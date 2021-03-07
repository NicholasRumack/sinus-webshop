<template>
  <div class="reg-form">
    

     <form @submit.prevent="handleSubmit">
    <h3>Sign Up</h3>
   
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="email" placeholder="Email"/>
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password"/>
    </div>

    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" v-model="name" placeholder="Name"/>
    </div>

<h4>Address</h4>
    <div class="form-group">
      <label>Street</label>
      <input type="text" class="form-control" v-model="address.street" placeholder="Street"/>
    </div>

    <div class="form-group">
      <label>Zip</label>
      <input type="number" class="form-control" v-model="address.zip" placeholder="Zip"/>
    </div>

    <div class="form-group">
      <label>City</label>
      <input type="text" class="form-control" v-model="address.city" placeholder="City"/>
    </div>

    <button class="btn btin-primary btn-block">Sign Up</button>
     </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    
  }, 
  data(){return{
    email: '',
    password: '', 
    name: '',
    address: {
    street: '',
    zip: '',
    city: '',}
  }},

  methods: {
    async handleSubmit(){
  
       await axios.post('http://localhost:5000/api/register', {
        email: this.email,
        password: this.password,
        name:  this.name,
        address: this.address,
        street: this.address.street, 
        zip: this.address.zip,
        city: this.address.city,

      });  
       
       this.$router.push('/login')
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>