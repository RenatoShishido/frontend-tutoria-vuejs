<template>
  <v-content>
    <v-snackbar v-model="$store.state.snackbar" :timeout="4000" top :color="$store.state.color">
      <span>{{$store.state.texto}}</span>
      <v-btn text color="white" @click="$store.state.snackbar= false">Close</v-btn>
    </v-snackbar>
    <v-container>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-card class="py-12 px-12">
         <h1 class="d-flex justify-center black--text mb-5">Envie sua sugestao</h1>
          <v-text-field
            id="assunto"
            placeholder="Assunto"
            type="text"
            outlined
            v-model="fields.assunto"
          />
          <quill-editor
            class="quill"
            id="content"
            ref="myQuillEditor"
            type="text"
            v-model="fields.content"
            :options="editorOption"
          />
          <v-list class="grey lighten-2 mt-10 px-5">
            <v-btn @click="descartar()" medium outlined class="blue--text mr-5">Descartar</v-btn>
            <v-btn @click="sendEmail()" medium color="blue white--text">Enviar</v-btn>
            <v-btn text fab color="black">
              <v-icon size="30px">mdi-paperclip</v-icon>
            </v-btn>
          </v-list>
        </v-card>
      </v-flex>
    </v-container>
  </v-content>
</template>

<script>
import tutorias from "../../../service/tutorias";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
export default {
  name: "DashSugestao",
  components: {
    quillEditor
  },
  data() {
    return {
      menu: false,
      fields: {},
      editorOption: {}
    };
  },
  methods: {
    descartar() {
      this.fields = {};
    },
    sendEmail() {
      const usuario = JSON.parse(localStorage.getItem('usuario'))
      this.fields.email = usuario.email
      tutorias
        .sendEmail(this.fields)
        .then(response => {
          response;
          this.$store.getters.snackbarRes;
          this.$store.state.texto = "Email enviado com sucesso!";
          this.fields = {};
        })
        .catch(err => {
          this.$store.getters.snackbarErr;
          this.$store.state.texto = "Falha ao enviar email";
          this.fields = {};
          err;
        });
    }
  }
};
</script>

<style>
.altura {
  margin-top: 5%;
}
.caixa {
  width: 100%;
  height: 60px;
}
.quill {
  height: 500px;
}
.margin {
  margin-top: -1;
}
</style>
