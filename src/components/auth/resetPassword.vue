<template>
  <v-container fill-height>
    <v-layout align-center justify-space-around>
      <v-flex xs12 sm8 md4>
        <v-card outlined class="px-12 py-6" :elevation="10">
          <h2 class="d-flex justify-center blue--text mb-3">TUTORIA EM PARES</h2>
          <h3 class="d-flex justify-center black--text mb-10">Register</h3>
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
            v-model="fields.token"
            id="token"
            label="Token"
            name="token"
            type="token"
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
          <v-card-actions class="d-flex justify-center mt-5">
            <v-btn
              color="primary"
              :loading="loading"
              class="white--text"
              @click="sendAlterPassword()"
            >Alterar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "ResetPassword",
  data() {
    return {
      fields: {},
      loading: false
    };
  },
  methods: {
    async sendAlterPassword() {
      this.loading = true;
      try {
        await this.$store.dispatch("user/resetPasswordUser", this.fields);

        this.$store.dispatch("snackbar/show", {
          content: "Senha alterada com sucesso!",
          color: "green"
        });
        this.$router.push('/login')
        this.fields = {}
      } catch (error) {
        this.$store.dispatch("snackbar/show", {
          content: error,
          color: "error"
        });
        this.fields = {}
      }
      this.loading = false;
    }
  }
};
</script>