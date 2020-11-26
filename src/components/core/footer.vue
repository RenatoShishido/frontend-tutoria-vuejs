<template>
  <v-footer color="#313233" dark padless>
    <v-card-text class="d-flex flex-wrap flex-row justify-space-between">
      <v-flex xs12 sm4 md1 />
      <v-flex xs12 sm4 md3 class="d-flex justify-left">
        <v-card color="white" class="mx-auto">
          <v-img class="white--text align-end" src="../../assets/logosos.png">
            <v-card-actions>
              <a
                href="https://www.facebook.com/petsistemas/"
                class="white--text d-flex justify-start headline"
              >
                <v-btn color="white" class="black--text" xSmall>Curtir Pagina</v-btn>
              </a>
            </v-card-actions>
          </v-img>

          <div class="black--text py-5 px-5">
            <p>Seja a primeira pessoa entre seus amigos a curtir isso.</p>
          </div>
        </v-card>
      </v-flex>
      <v-flex xs12 sm2 md2>
        <div>
          <h2 class="d-flex justify-left py-3 grey--text">SOBRE</h2>
          <a
            href="#HOME"
            text
            large
            class="d-flex justify-left white--text body-1 mb-3"
          >O que é Tutoria em Pares?</a>
          <v-divider color="blue-grey darken-3"></v-divider>
          <a
            href="#HOME"
            text
            large
            class="d-flex justify-left white--text body-1 mb-3"
          >O que é o PET Sistemas</a>
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
          <h2 class="d-flex justify-left py-3 grey--text">Ajuda e Contatos</h2>
          <p class="d-flex justify-left white--text subtitle-1 mb-3"
          >Gmail: progrenato@gmail.com </p>
          <v-divider color="blue-grey darken-3"></v-divider>
          <p class="d-flex justify-left white--text subtitle-1 mb-3"
          >Gmail: petsistemas@gmail.com </p>
          <v-divider color="blue-grey darken-3"></v-divider>
        </div>
      </v-flex>
      <v-flex xs12 sm4 md2>
        <h2 class="d-flex justify-left py-3 grey--text">UFMS</h2>
        <p class="d-flex justify-left text-justify subtitle-1">
          Universidade Federal de Mato Grosso do Sul | Av. Costa e Silva, s/nº | Bairro Universitário | 79070-900 | Campo Grande - MS |
          Telefone: +55 (67) 3345-7000
        </p>
      </v-flex>
      <v-flex xs12 sm4 md2>
        <h2 class="d-flex justify-left py-3 grey--text">LOCALIZACAO CTEI</h2>
        <a href="http://capivara.ctei.ufms.br/">
          <img src="../../assets/logoctei-1024x700.jpg" alt="logoctei" width="100%" height="50%" />
        </a>
      </v-flex>
      <v-flex xs12 sm4 md1 />
    </v-card-text>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data: () => ({}),
};
</script>

<style>
</style>
