<template>
  <div id="app">
    <div class="nav">
      <div class="logo">
        <img src="@/assets/sinus-logo.svg" alt="Logo">
        </div>
        
        <div class="links">
      <router-link to="/" class="a">Produkter</router-link> 
      <router-link to="/account" class="a">Mitt konto</router-link> 
      <router-link to="/cart" class="a"><img src="@/assets/icon-bag-black.svg" alt=""></router-link>
      <router-link to="/" class="a" v-if="user" @click="handleClick" >Logga ut</router-link> 

    </div></div>
    <router-view/>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  components: {
    
  },
  methods: {
    handleClick(){
      localStorage.removeItem('token')
      //this.$store.dispatch('user', null)
      this.$router.push('/')
    }
  },
  
    mounted: function(){
      this.$store.dispatch('loadProducts')
    },
    computed: {
      ...mapGetters(['user'])
    }
}
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



.modal {
  color: red;
}

.logo{
  width: 13vh;
  display:flex;

}

.nav{
  display: flex;
  flex-direction: row;
  width: 900px;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 6vh;
  
}

.links{
  display: flex; 
  justify-content: center;
  align-items: flex-start;
}

.a{
  margin: 1vh;
  cursor: pointer;
  text-decoration: none;
  color: black;
}

</style>
