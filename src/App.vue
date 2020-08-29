<template>
  <v-app>
    <navBar />
    <snack-bar />
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
  mounted() {
    this.$store.dispatch("user/loadLoggedUser");
  }
};
</script>
<style>
</style>
