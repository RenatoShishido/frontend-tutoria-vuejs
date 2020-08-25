<template>
  <v-container fill-height>
  <v-snackbar v-model="$store.state.snackbar" :timeout="4000" top :color="$store.state.color">
    <span>{{$store.state.texto}}</span>
    <v-btn text color="white" @click="$store.state.snackbar= false">Close</v-btn>
  </v-snackbar>
    <v-layout align-center justify-space-around>
      <v-flex xs12 sm8 md4>
        <v-card  outlined class="px-12 py-6" :elevation="10">
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
          ></v-text-field>
          <v-text-field
            v-model="fields.email"
            type="email"
            id="email"
            label="Email"
            name="email"
            outlined
            required
          ></v-text-field>

          <v-text-field
            v-model="fields.password"
            id="password"
            label="Password"
            name="password"
            type="password"
            required
            outlined
            @keypress.enter="enviar()"
          ></v-text-field>
          <a class="body-1 blue--text"  href="/login">Tenho uma conta</a>
          <v-card-actions class="d-flex justify-center mt-5">
          <v-btn color="primary" class="white--text" @click="enviar()">Cadastrar</v-btn>  
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import tutorias from "../../service/auth";
export default {
  name: "Register",
  data() {
    return {
      fields: {},
      drawer: null
    };
  },
  methods: {
    enviar() {
      const email = this.fields.email
      const palavra = email.split(/[.@]/gi)
      if(palavra[2] === 'ufms' && palavra[3] === 'br' && palavra.length === 4){
      tutorias
        .registrar(this.fields)
        .then(response => {
          response;
          this.$store.getters.snackbarRes;
          this.$store.state.texto = "Usuario cadastrado com sucesso!";
          this.fields = {};
        })
        .catch(err => {
          err;
          this.$store.getters.snackbarErr
          this.$store.state.texto = err
          this.fields = {}
        });
      }else{
        this.$store.getters.snackbarErr
        this.$store.state.texto = 'Utilize o e-mail institucional da ufms'
        this.fields = {};
      }
    },
  }
};
</script>

