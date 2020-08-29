<template>
  <v-app>
    <Nav />
    <Register />
  </v-app>
</template>

<script>
import Register from "../../components/auth/register";
import Nav from "../../components/core/navBar";
export default {
  name: "View-Register",
  components: {
    Register,
    Nav
  }
};
</script>

