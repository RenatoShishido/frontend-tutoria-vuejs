<template>
  <div>
    <v-app v-if="showError">
      <ViewError/>
    </v-app>
    <v-app v-else>
      <snack-bar />
      <navBar />
      <router-view />
      <Footer />
    </v-app>
  </div>
</template>

<script>
import ViewError from "./views/View-Error";
import navBar from "./components/core/navBar";
import SnackBar from "./components/core/snackBar";
import Footer from "./components/core/footer";
export default {
  name: "App",
  components: {
    ViewError,
    Footer,
    SnackBar,
    navBar,
  },
  beforeCreate() {
    this.$store.dispatch("user/loadLoggedUser");
  },
  watch: {
    async $route(to, from) {
      if (to.fullPath != from.fullPath) window.scroll(0, 0);
    },
  },
  computed: {
    showError() {
      return this.$route.name == "View-Error";
    },
  },
};
</script>
<style>
.completo {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
  height: 100%;
}
</style>
