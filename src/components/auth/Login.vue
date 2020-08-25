<template>
  <v-container fill-height class="my-12">
    <v-snackbar v-model="$store.state.snackbar" :timeout="4000" top :color="$store.state.color">
      <span>{{$store.state.texto}}</span>
      <v-btn text color="white" @click="$store.state.snackbar= false">Close</v-btn>
    </v-snackbar>
    <v-layout class="d-flex flex-wrap justify-space-around align-center">
      <v-flex xs12 sm12 md6>
        <carrossel />
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs12 sm8 md4>
        <v-card outlined class="px-12 py-12" :elevation="10">
          <h2 class="d-flex justify-center blue--text">TUTORIA EM PARES</h2>
          <h3 class="d-flex justify-center mb-5">Fazer login</h3>
          <v-text-field id="email" label="Email" name="email" type="email" outlined v-model="fields.email"></v-text-field>
          <v-text-field
            id="password"
            label="Password"
            name="password"
            type="password"
            outlined
            v-model="fields.password"
            @keypress.enter="enviar()"
          ></v-text-field>
          <a class="body-1 blue--text"  href="/forgot_password">Esqueci minha senha?</a>
          <v-card-actions class="d-flex justify-space-around mt-5">
          <v-btn color="blue" outlined class="white--text" href="/register">Criar conta</v-btn>   
          <v-btn color="blue" class="white--text" @click="enviar()">Acessar</v-btn>  
          </v-card-actions>
      </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import tutorias from "../../service/auth";
import AXIOS_INSTANCE from "../../service/config";
import Carrossel from "../Carrossel.vue";
export default {
  name: "login",
  components: {
    Carrossel,
  },
  data() {
    return {
      fields: {},
      drawer: null,
    };
  },
  methods: {
    enviar() {
      if(this.fields.password === undefined && this.fields.email === undefined) {
        this.$store.getters.snackbarErr
        this.$store.state.texto = 'Informe o e-mail institucional da UFMS e a Senha'
        this.fields = {};
      } 
      const email = this.fields.email
      const palavra = email.split(/[.@]/gi)
      if(palavra[2] === 'ufms' && palavra[3] === 'br' && palavra.length === 4){
         tutorias
        .logar(this.fields)
        .then(response => {
            this.$session.start()
            this.$session.set('jwt', response.data.token)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('usuario', JSON.stringify(response.data.user))
            AXIOS_INSTANCE.defaults.headers.common = {
              'Authorization': 'Bearer ' + response.data.token
            }
            this.$session.set('user',response.data.user)
           if(response.data.user.admin) {
             this.$router.push('/admin/administrativa')
             this.fields = {};
           }else {
             this.$router.push('/dashboard/pagina/1')
             this.fields = {};
           }
        })
        .catch(err => {
          this.$store.getters.snackbarErr
          this.$store.state.texto = err
          this.fields = {};
        });
      }else{
        this.$store.getters.snackbarErr
        this.$store.state.texto = 'Informe o e-mail institucional da ufms'
        this.fields = {};
      }
     
    },
  },
};
</script>

<style>
</style>
