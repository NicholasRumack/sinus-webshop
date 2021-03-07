<template>
  <div class="account">
    <!--<LoggedIn v-bind:loggedInHeading="'<LoggedIn />'"/> -->
    <LoginForm />
    
    
    <li class="linktoregister">
      <router-link to="/register">Sign up</router-link>
    </li>

  </div>
</template>

<script>
//import LoggedIn from '@/components/LoggedIn.vue'
import LoginForm from '@/components/LoginForm.vue'
export default {
    components: {
        //LoggedIn,
        LoginForm,
        
    }
}
</script>
