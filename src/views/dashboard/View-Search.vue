<template>
  <v-app>
    <NavDrag /> 
    <Search />
  </v-app>
</template>

<script>
import NavDrag from "../../components/dashboard/NavDrag";
import Search from "../../components/dashboard/search/DashboardSearch";
export default {
  name: "View-Feed",
  components: {
    NavDrag,
    Search
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
