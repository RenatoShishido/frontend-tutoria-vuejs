<template>
  <v-app-bar app color="purple darken-4" dark height="80">
      <v-icon xLarge color="white" router to="/" left>mdi-school</v-icon>
        <v-toolbar-title class="headline white--text hidden-md-and-down">Tutoria</v-toolbar-title>
      <v-spacer />
      <v-row class="d-flex justify-end">
        <div class="mx-4">
        <v-btn class="purple darken-4 " text xLarge  router to="/login">Login</v-btn>
        </div>
        <div class="mx-4">
        <v-btn  class="purple darken-4 " text xLarge router to="/register">Register</v-btn>
        </div>
      </v-row>
    </v-app-bar>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      hrefLogo: "/"
    };
  }
};
</script>

<style>
</style>
