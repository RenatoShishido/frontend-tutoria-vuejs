<template>
  <v-app>
    <Nav />
    <Login />
  </v-app>
</template>

<script>
import Login from "../../components/auth/login";
import Nav from "../../components/core/navBar";
export default {
  name: "View-Login",
  components: {
    Login,
    Nav
  }
};
</script>
