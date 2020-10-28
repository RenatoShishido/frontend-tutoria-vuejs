<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Esqueci senha</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip bottom></v-tooltip>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Coloque o seu email"
                  name="email"
                  prepend-icon="mdi-email"
                  v-model="fields.email"
                  type="text"
                  :loading="loading"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" :loading="loading" @click="sendPassword()">Enviar</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      fields: {},
      loading: false
    };
  },
  methods: {
    async sendPassword() {
      this.loading = true
      try {
        await this.$store.dispatch('user/forgotPasswordUser', this.fields)

        this.$router.push('/resetPassword')
        this.$store.dispatch("snackbar/show", {
          content: "Email enviado com sucesso! É necessario pegar o token no email para mudar a senha!!!",
          color: "green"
        });
      } catch (error) {
        this.$store.dispatch("snackbar/show", {
          content: error.error,
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
