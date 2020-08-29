<template>
  <v-row justify="center">
      <v-btn
        :class="color"
        class="white--text"
        @click.stop="dialog = true"
      >
        <v-icon left >mdi-file-document</v-icon>{{msg}}
      </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="1000"
    >
      <v-card>
          <v-card-items>
            <div v-if="msg === 'Elaborar Prova' ? true : false" class="py-5 px-5">
             
            </div>
            <div v-else>
              <div v-if="project.iframe === undefined ? true : false"
              class="py-12 px-12"
              >
              <v-card-title class="display-1 d-flex justify-center">Prova nao Elaborada!!</v-card-title>
                <p class="headline text-justify">Ola parece que o tutor ainda nao elaborou a sua prova
                  entre em contanto com ele para realizar a sua prova.
                  para que seja feito o relatorio e no final do semestre
                  obtenha as cargas horarias.
                </p>
              </div>
              <div v-else>
                <iframe  :src="project.iframe" width="1000" height="1346" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
              </div>
            </div>
          </v-card-items>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import tutorias from "../../../service/tutorias";
export default {
  name: "Prova",
  props: {
    msg: String,
    color: String,
    project: Array
  },
  components: {
  },
   data () {
      return {
        tutoria: {},
        dialog: false,
        includeFiles: true,
        fields: {},
        user: {},
        snackbar: false,
        cor: '',
        texto: '',
      }
    },
    methods: {
      enviarProva(project){
      this.tutoria = project
      project.iframe = this.fields.iframe
      tutorias.updateTutoria(project._id, project)
        .then(response => {
          response
          this.snackbar = true
          this.cor = 'green'
          this.texto = 'Prova elaborada com sucesso!!'
          this.fields = {}
        })
        .catch(err => {
          err
          this.snackbar = true
          this.cor = 'red'
          this.texto = 'Falha ao elabor a prova!!'
          this.fields = {}
        })
      },
  }
}
</script>

<style>

</style>
