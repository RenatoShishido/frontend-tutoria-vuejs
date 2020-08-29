<template>
  <v-container fill-height class="my-12">
    <v-layout class="d-flex flex-wrap justify-space-around align-center">
      <v-flex xs12 sm12 md6>
        <carrossel />
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs12 sm8 md4>
        <v-card outlined class="px-12 py-12" :elevation="10">
          <h2 class="d-flex justify-center blue--text">TUTORIA EM PARES</h2>
          <h3 class="d-flex justify-center mb-5">Fazer login</h3>
          <v-text-field
            id="email"
            label="Email"
            name="email"
            type="email"
            outlined
            v-model="fields.email"
            :loading="loading"
          ></v-text-field>
          <v-text-field
            id="password"
            label="Password"
            name="password"
            type="password"
            outlined
            v-model="fields.password"
            @keypress.enter="enviar()"
            :loading="loading"
          ></v-text-field>
          <a class="body-1 blue--text" href="/forgot_password">Esqueci minha senha?</a>
          <v-card-actions class="d-flex justify-space-around mt-5">
            <v-btn color="blue" :loading="loading" outlined class="white--text" href="/register">Criar conta</v-btn>
            <v-btn color="blue" :loading="loading" class="white--text" @click="enviar()">Acessar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import Carrossel from "../carrossel.vue";
export default {
  name: "login",
  components: {
    Carrossel
  },
  data() {
    return {
      fields: {},
      drawer: null,
      loading: false,
    };
  },
  methods: {
    async enviar() {
      this.loading = true
      try {
        await this.$store.dispatch("user/chargeLoginUser", this.fields);

        this.$router.push('/dashboard/pagina/1')
        this.fields = {};

      } catch (error) {
        this.$store.dispatch("snackbar/show", {
          content: error,
          color: "error"
        });
      }
      this.loading = false
    }
  }
};
</script>

<style>
</style>
