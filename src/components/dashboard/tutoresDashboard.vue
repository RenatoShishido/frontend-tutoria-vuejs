<template>
  <v-content app>
    <v-flex xs12 sm12 md12>
      <v-container class="d-flex flex-column justify-center">
        <v-layout class="d-flex flex-wrap justify-center align-center py-5">
          <v-flex xs12 sm8 md4>
            <v-btn text class="mb-4" @click="sortBy('institution')">
              <v-icon left xMedium color="blue">mdi-folder</v-icon>
              <span class="body-1">Ordenar por Bloco</span>
            </v-btn>
          </v-flex>
          <v-flex xs12 sm8 md4>
            <v-btn text class="mb-4" @click="sortBy('discipline')">
              <v-icon left xMedium color="blue">mdi-file-document</v-icon>
              <span class="body-1">Ordenar por disciplina</span>
            </v-btn>
          </v-flex>
        </v-layout>

        <v-card flat class="mb-10 zoom" v-for="project in projects" :key="project.id">
          <v-divider></v-divider>
          <v-layout row wrap :class="`pa-3 project ${project.status}`">
            <v-flex xs6 sm4 md1>
              <div class="caption grey--text">Bloco</div>
              <div>{{ project.institution }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Disciplina</div>
              <div>{{ project.discipline }}</div>
            </v-flex>
            <v-flex xs12 md4>
              <div class="caption grey--text">Conteudo</div>
              <p class="text-justify mr-12">{{ project.content }}</p>
            </v-flex>
            <v-flex xs2 sm4 md1>
              <div class="caption grey--text">Data da Tutoria</div>
              <div>{{ project.data | moment("DD/MM/YYYY") }}</div>
              <div class="caption grey--text">Horário</div>
              <div>{{ project.data | moment("HH:mm") }}</div>
            </v-flex>
            <v-flex xs12 sm4 md3>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <a v-on="on" @click="rotacionar(project)">
                    <div class="d-flex justify-center caption grey--text">Nome</div>
                    <p class="d-flex justify-center text-justify black--text">{{project.tutor.nome}}</p>
                    <div
                      v-if="project.tutor.profile === undefined ? true : false"
                      class="d-flex justify-center"
                    >
                      <v-avatar size="100">
                        <img src="../../assets/silhueta-interrogação.jpg" />
                      </v-avatar>
                    </div>
                    <div v-else class="d-flex justify-center">
                      <v-avatar size="80">
                        <img :src="project.tutor.profile" />
                      </v-avatar>
                    </div>
                  </a>
                </template>
                <span>Perfil</span>
              </v-tooltip>
            </v-flex>
            <v-flex xs2 sm4 md1>
              <div class="caption grey--text">Alunos</div>
              <p>{{ project.users.length }}/10</p>
            </v-flex>

            <!-- BOTOES DO DASHBOARD -->

            <v-flex xs6 sm4 md6 lg6 xl1 v-if="project.tutor._id === user._id ? true : false">
              <div class="d-flex">
                <btnAlterarTutoria :fields="project" class="mx-4" />
                <btnDeletarTutoria :fields="project" />
              </div>
            </v-flex>
            <!-- FINAL DOS BOTOES -->

            <v-list-item
              v-if="project.tutor._id !== user._id ? false : true"
              class="d-flex justify-start align-end"
            >
              <botaoTornarAluno :tutoria="project" @tornarAluno="virarAluno" />
            </v-list-item>
          </v-layout>
          <v-divider></v-divider>
        </v-card>
        <div class="text-center" v-if="paginas !== 0">
          <a @click="refresh(), offset()">
            <v-pagination v-model="page" :value="page" :length="paginas"></v-pagination>
          </a>
        </div>
      </v-container>
    </v-flex>
  </v-content>
</template>

<script>
import btnDeletarTutoria from "./botoes/btnDeletarTutoria";
import btnAlterarTutoria from "./botoes/btnAlterarTutoria";
import botaoTornarAluno from "./botoes/botaoTornarAluno";
import tutorias from "../../service/tutorias";
export default {
  components: {
    btnAlterarTutoria,
    btnDeletarTutoria,
    botaoTornarAluno
  },
  data() {
    return {
      projects: {},
      tutoria: {},
      nomes: {},
      isActive: false,
      user: {},
      dialogs: false,
      page: 1,
      paginas: 0
    };
  },
  mounted() {
    this.refresh();
  },
  methods: {
    offset() {
      window.scroll(0, 0);
    },
    rotacionar(project) {
      this.$router.push(`/dashboard/perfil/${project.user._id}`);
    },
    calcularNumeroPagina(totalPages) {
      const numeroPaginas = totalPages / 10;
      this.paginas = Math.ceil(numeroPaginas);
    },
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
    refresh() {
      tutorias
        .listarTutoriasOferecidas()
        .then(response => {
          this.projects = response;
          this.calcularNumeroPagina(response.data.count);
          this.user = this.$store.getters["user/GetUser"];
        })
        .catch(err => err);

      this.$router.push(`/dashboard/tutores/pagina/${this.page}`);
    },
    virarAluno(tutoria) {
      tutorias
        .updateTutoriaOferecida(tutoria._id, tutoria)
        .then(response => {
          response;
          this.$store.dispatch("snackbar/show", {
            content: "Incluído à Tutoria com sucesso!",
            color: "green"
          });
          this.refresh();
        })
        .catch(err => {
          err;
          this.$store.dispatch("snackbar/show", {
            content: "Falha na Inclusão à Tutoria!",
            color: "error"
          });
          this.refresh();
        });
    }
  }
};
</script>

<style>
.project.AguardandoAluno {
  border-left: 4px solid yellowgreen;
  border-right: 4px solid yellowgreen;
}

.zoom:hover {
  -moz-transform: scale(1.01);
  -webkit-transform: scale(1.01);
  transform: scale(1.01);
  background: whitesmoke;
}
</style>
