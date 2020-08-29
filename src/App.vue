<template>
  <v-app>
    <snack-bar />
    <v-content>
    <router-view/>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import SnackBar from './components/core/snackBar'
import Footer from "./components/core/footer";
export default {
  name: "App",
  components: {
    Footer,
    SnackBar,
  },
  mounted() {
    this.$store.dispatch('user/loadLoggedUser')
  }
};
</script>
<style>
</style>
