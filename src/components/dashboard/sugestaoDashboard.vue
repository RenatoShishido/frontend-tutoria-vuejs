<template>
  <v-content app>
    <v-container>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-card class="py-12 px-12">
          <h1 class="d-flex justify-center blue--text mb-5">Envie sua sugestao</h1>
          <v-text-field
            id="assunto"
            placeholder="Assunto"
            type="text"
            outlined
            v-model="fields.assunto"
            :loading="loading"
          />
          <quill-editor
            class="quill"
            id="content"
            ref="myQuillEditor"
            type="text"
            v-model="fields.content"
            :options="editorOption"
            :loading="loading"
          />
          <v-list class="grey lighten-2 mt-10 px-5">
            <v-btn
              @click="descartar()"
              :loading="loading"
              medium
              outlined
              class="blue--text mr-5"
            >Descartar</v-btn>
            <v-btn @click="sendEmail()" :loading="loading" medium color="blue white--text">Enviar</v-btn>
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
import tutorias from "../../service/tutorias";
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
      loading: false,
      fields: {},
      editorOption: {}
    };
  },
  methods: {
    descartar() {
      this.fields = {};
    },
    sendEmail() {
      this.fields.email = this.$store.getters["user/GettersEmail"];
      this.loading = true
      tutorias
        .sendEmail(this.fields)
        .then(response => {
          response;
          this.$store.dispatch("snackbar/show", {
            content: "Email enviado com sucesso!",
            color: "green"
          });
          this.fields = {};
        })
        .catch(error => {
          this.$store.dispatch("snackbar/show", {
            content: error.error,
            color: "error"
          });
          this.fields = {};
        });
        this.loading = false
    }
  }
};
</script>

<style>
.quill {
  height: 500px;
}
</style>
