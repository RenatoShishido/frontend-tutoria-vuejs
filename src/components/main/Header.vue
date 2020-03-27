<template>
  <v-card flat tile class="margin">
    <Nav />
    <img src="../../assets/Banner-site-_-programacao3-01-4.png" 
    aspect-ratio="4" 
    class="blur"
    />
  </v-card>
</template>

<script>
import Nav from "./Nav";
export default {
  name: "Header",
  components: {
    Nav
  }
};
</script>

<style>
/* .blur {
  filter: blur(8px);
} */

img {
  width: 100%;
}
</style>
