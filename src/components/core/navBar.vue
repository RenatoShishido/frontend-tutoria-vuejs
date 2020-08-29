<template>
  <v-app-bar app color="#007cba" dark height="50">
      <a href="/" class="d-flex flex-row">
      <v-icon xLarge color="white" left >mdi-school</v-icon>
        <v-toolbar-title class="headline white--text hidden-md-and-down">
           TUTORIA EM PARES
        </v-toolbar-title>
        </a>
      <v-spacer />
      <v-row class="d-flex justify-end px-10">
        <v-btn color="#007cba" class="white--text"  :elevation="10" xMedium  router to="/login">Fazer login</v-btn>
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
