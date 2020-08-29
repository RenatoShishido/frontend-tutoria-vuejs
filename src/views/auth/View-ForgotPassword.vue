<template>
<v-app>
  <Nav/>
  <ForgotPassword/>
</v-app>
</template>

<script>
import ForgotPassword from '../../components/auth/forgotPassword'
import Nav from '../../components/core/navBar'
export default {
  components: {
    ForgotPassword,
    Nav
  }
};
</script>

<style>
</style>
