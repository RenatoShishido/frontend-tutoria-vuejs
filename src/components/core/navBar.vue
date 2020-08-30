<template>
  <v-app-bar app color="#007cba" dark height="60">
    <a href="/" class="d-flex flex-row">
      <v-icon xLarge color="white" left>mdi-school</v-icon>
      <v-toolbar-title class="headline white--text hidden-md-and-down">TUTORIA EM PARES</v-toolbar-title>
    </a>
    <v-spacer />
    <v-flex xs12 sm8 md6>
      <Search v-if="showSearch" />
    </v-flex>
    <v-spacer />
    <Avatar v-if="showSearch" />
    <v-row class="d-flex justify-end px-10" v-if="showButtonLogin">
      <v-btn
        color="#007cba"
        class="white--text"
        :elevation="10"
        xMedium
        router
        to="/login"
      >Fazer login</v-btn>
    </v-row>
  </v-app-bar>
</template>

<script>
import Search from "../search/SearchComponent";
import Avatar from "../avatar";
export default {
  name: "NavDrag",
  components: {
    Search,
    Avatar
  },
  props: {},
  data: () => ({
    fields: {}
  }),
  computed: {
    showSearch() {
      return this.$store.getters["user/GettersId"] != "";
    },
    showButtonLogin() {
      return this.$store.getters["user/GettersId"] == "";
    }
  },
  methods: {}
};
</script>

<style>
</style>
