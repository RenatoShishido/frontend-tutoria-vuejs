<template>
  <v-app>
    <Nav/>
    <v-content>
    <Content />
    </v-content>
  </v-app>
</template>


<script>
import Nav from '../../components/core/navBar'
import Content from "../../components/content";
export default {
  name: "View-Home",
  components: {
    Nav,
    Content,
  },
  data: () => ({})
};
</script>
<style>
</style>
