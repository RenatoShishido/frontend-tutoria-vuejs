<template>
  <v-container fill-height>
    <v-layout align-center justify-space-around>
      <v-flex xs12 sm8 md4>
        <v-card outlined class="px-12 py-6" :elevation="10">
          <h2 class="d-flex justify-center blue--text mb-3">TUTORIA EM PARES</h2>
          <h3 class="d-flex justify-center black--text mb-10">Register</h3>
          <v-text-field
            v-model="fields.nome"
            id="nome"
            label="Nome"
            name="nome"
            type="nome"
            outlined
            required
            :loading="loading"
          ></v-text-field>
          <v-text-field
            v-model="fields.email"
            type="email"
            id="email"
            label="Email"
            name="email"
            outlined
            required
            :loading="loading"
          ></v-text-field>

          <v-text-field
            v-model="fields.password"
            id="password"
            label="Password"
            name="password"
            type="password"
            required
            outlined
            :loading="loading"
            @keypress.enter="enviar()"
          ></v-text-field>
          <a class="body-1 blue--text" href="/login">Tenho uma conta</a>
          <v-card-actions class="d-flex justify-center mt-5">
            <!-- <v-btn
              color="primary"
              :loading="loading"
              class="white--text"
              @click="enviar()"
            >Cadastrar</v-btn> -->
            <privacity :loading="loading" @cadastrarUsuario="cadastrar"/>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import privacity from "../dashboard/dialogs/privacity"
export default {
  name: "Register",
  components: {
    privacity
  },
  data() {
    return {
      fields: {},
      loading: false
    };
  },
  methods: {
    async cadastrar() {
      this.loading = true;
      try {
        await this.$store.dispatch('user/registerUser', this.fields)

        this.$store.dispatch("snackbar/show", {
          content: "Usuario cadastrado com sucesso!",
          color: "green"
        });
        this.fields = {};
      } catch (error) {
        this.$store.dispatch("snackbar/show", {
          content: error.error,
          color: "error"
        });
        this.fields = {};
      }
      this.loading = false;
    }
  }
};
</script>

