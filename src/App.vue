<template>
  <v-app>
    <snack-bar />
    <navBar />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import navBar from "./components/core/navBar";
import SnackBar from "./components/core/snackBar";
import Footer from "./components/core/footer";
export default {
  name: "App",
  components: {
    Footer,
    SnackBar,
    navBar
  },
  beforeCreate() {
    this.$store.dispatch("user/loadLoggedUser");
  }
};
</script>
<style>
</style>
