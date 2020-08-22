<template>
  <v-footer color="#313233"  dark padless>
    <v-card-text class="d-flex flex-wrap flex-row justify-space-between">
      <v-flex xs12 sm4 md1   />
      <v-flex xs12 sm4 md3 class="d-flex justify-left">
        <Card/>
      </v-flex>
      <v-flex xs12 sm2 md2 >
        <div>
        <h2 class="d-flex justify-left py-3 grey--text" >SOBRE</h2>
        <a
          href="#HOME"
          text
          large
          class="d-flex justify-left white--text body-1 mb-3"
        >O que e Tutoria em Pares?</a>
        <v-divider color="blue-grey darken-3"></v-divider>
        <a
          href="#HOME"
          text
          large
          class="d-flex justify-left white--text body-1 mb-3"
        >O que e o PET Sistemas</a>
        <v-divider color="blue-grey darken-3"></v-divider>
        <a href="#HOME" text large class="d-flex justify-left white--text body-1 mb-3">Blog</a>
        <v-divider color="blue-grey darken-3"></v-divider>
        <a
          href="#HOME"
          text
          large
          class="d-flex justify-left white--text body-1 mb-3"
        >Pessoas que colaboraram!</a>
        <v-divider color="blue-grey darken-3"></v-divider>

        </div>
      </v-flex>
      <v-flex xs12 sm4 md2 >
        <h2 class="d-flex justify-left py-3 grey--text" >UFMS</h2>
        <p class="d-flex justify-left text-justify subtitle-1">
          Universidade Federal de Mato Grosso do Sul | Av. Costa e Silva, s/nº | Bairro Universitário | 79070-900 | Campo Grande - MS |
          Telefone: +55 (67) 3345-7000
        </p>
      </v-flex>
      <v-flex xs12 sm4 md2 >
        <h2 class="d-flex justify-left py-3 grey--text" >LOCALIZACAO CTEI</h2>
        <a href="http://capivara.ctei.ufms.br/">
        <img src="../../assets/logoctei-1024x700.jpg" alt="logoctei" width="100%" height="50%">
        </a>
      </v-flex>
       <v-flex xs12 sm4 md1 />
    </v-card-text>
  </v-footer>
</template>

<script>
import Card from "./Card"
export default {
  name: "Footer",
  components: {
    Card
  },
  data: () => ({
  })
};
</script>

<style>

</style>
