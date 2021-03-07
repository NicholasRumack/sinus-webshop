<template>
  <div class="account">
    <ShopCart v-bind:ShopCartHeading="'<ShopCart />'"/>
    <ContactPayForm v-bind:contactPayFormHeading="'<ContactPayForm />'"/>
  </div>
</template>

<script>
import ShopCart from '@/components/ShopCart.vue'
import ContactPayForm from '@/components/ContactPayForm.vue'
export default {
    components: {
        ContactPayForm,
        ShopCart
    }, 
}
</script>
