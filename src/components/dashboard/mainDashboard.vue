<template>
  <v-content app>
    <v-flex xs12 sm12 md12>
      <v-container>
        <registerTutoria @adicionarTutoria="adicionar" />
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
          <v-layout row wrap :class="`d-flex flex-wrap pa-3 project ${project.status}`">
            <v-flex xs12 sm4 md1>
              <div class="caption grey--text">Bloco</div>
              <div class="body-1 black--text">{{ project.institution }}</div>
            </v-flex>
            <v-flex xs12 sm4 md1 class="mr-4">
              <div class="caption grey--text">Disciplina</div>
              <div class="body-1 black--text">{{ project.discipline }}</div>
            </v-flex>
            <v-flex xs12 sm4 md3>
              <div class="caption grey--text">Conteudo</div>
              <div class="body-1 black--text text-justify">{{ project.content }}</div>
            </v-flex>
            <v-flex xs12 sm4 md1 class="ml-4">
              <div class="caption grey--text" link>Data</div>
              <div class="body-1 black--text">{{ project.data | moment("DD/MM/YYYY") }}</div>
            </v-flex>
            <v-flex xs12 sm4 md3>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <a v-on="on" @click="rotacionar(project)">
                    <div class="d-flex justify-center caption grey--text">Nome</div>
                    <p class="d-flex justify-center text-justify black--text">{{project.user.nome}}</p>
                    <div
                      v-if="project.user.profile === undefined ? true : false"
                      class="d-flex justify-center"
                    >
                      <v-avatar size="100">
                        <img src="../../assets/silhueta-interrogação.jpg" />
                      </v-avatar>
                    </div>
                    <div v-else class="d-flex justify-center">
                      <v-avatar size="80">
                        <img :src="project.user.profile" />
                      </v-avatar>
                    </div>
                  </a>
                </template>
                <span>Perfil</span>
              </v-tooltip>
            </v-flex>
            <v-flex xs12 sm4 md1>
              <div class="caption grey--text">Status</div>
              <div class="body-1 black--text">{{ project.status }}</div>
            </v-flex>

            <!-- BOTOES DO DASHBOARD -->

            <v-flex
              xs6
              sm4
              md2
              lg1
              xl1
              v-if="project.user._id === user._id ? true : false"
              class="d-flex align-self-center ml-10"
            >
              <btnAlterarTutoria
                :fields="project"
                @atualizartutoria="atualizarCampos"
                class="px-5"
              />
              <btnDeletarTutoria :fields="project" @deletarcampo="deletarCampos" />
            </v-flex>
            <!-- FINAL DOS BOTOES -->
            <v-list-item
              v-if="project.user._id !== user._id ? true : false"
              class="d-flex justify-start align-end"
            >
              <botaoFazerTutoria :tutoria="project" @updateTutoria="fazerTutoria" />
            </v-list-item>
          </v-layout>
          <v-divider></v-divider>
        </v-card>
        <div class="text-center" v-if="paginas !== 0">
          <a @click="refresh(), offset()">
            <v-pagination v-model="page" :value="page" :length="paginas" bottom></v-pagination>
          </a>
        </div>
      </v-container>
    </v-flex>
  </v-content>
</template>

<script>
import tutorias from "../../service/tutorias";
import registerTutoria from "../dashboard/registerTutoria";
import botaoFazerTutoria from "../dashboard/botoes/botaoFazerTutoria";
import btnAlterarTutoria from "../dashboard/botoes/btnAlterarTutoria";
import btnDeletarTutoria from "../dashboard/botoes/btnDeletarTutoria";

export default {
  components: {
    btnAlterarTutoria,
    botaoFazerTutoria,
    btnDeletarTutoria,
    registerTutoria
  },
  data() {
    return {
      page: 1,
      paginas: 0,
      projects: {},
      fields: {},
      user: {},
      tutoria: {},
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
        .paginationTutoria(this.page)
        .then(response => {
          this.projects = response.data.data;
          this.calcularNumeroPagina(response.data.count);
          this.user = this.$store.getters["user/GetUser"];
        })
        .catch(err => err);

      this.$router.push(`/dashboard/pagina/${this.page}`);
    },
    deletarCampos(fields) {
      tutorias
        .removerTutoria(fields)
        .then(response => {
          response;
          this.refresh();
          this.$store.dispatch("snackbar/show", {
            content: "Tutoria removida com sucesso!",
            color: "green"
          });
        })
        .catch(err => {
          this.$store.dispatch("snackbar/show", {
            content: err,
            color: "error"
          });
        });
    },
    atualizarCampos(fields) {
      tutorias
        .updateTutoria(fields._id, fields)
        .then(response => {
          response;
          this.$store.dispatch("snackbar/show", {
            content: "Tutoria alterada com sucesso!",
            color: "green"
          });
        })
        .catch(err => {
          this.$store.dispatch("snackbar/show", {
            content: err,
            color: "error"
          });
        });
    },
    adicionar(fields) {
      tutorias
        .createTutoria(fields)
        .then(response => {
          response;
          this.refresh();
          this.$store.dispatch("snackbar/show", {
            content: "Tutoria adicionada com sucesso!",
            color: "green"
          });
        })
        .catch(err => {
          err;
          this.$store.dispatch("snackbar/show", {
            content: err,
            color: "error"
          });
        });
    },
    fazerTutoria(tutoria) {
      tutorias
        .updateTutoria(tutoria._id, tutoria)
        .then(response => {
          response;
          this.$store.dispatch("snackbar/show", {
            content: "Tutoria agendada com sucesso!",
            color: "green"
          });
          this.refresh();
        })
        .catch(err => {
          this.$store.dispatch("snackbar/show", {
            content: err,
            color: "error"
          });
        });
    }
  }
};
</script>

<style>
.project.Aguardando {
  border-left: 4px solid blue;
  border-right: 4px solid blue;
}

.zoom:hover {
  -moz-transform: scale(1.01);
  -webkit-transform: scale(1.01);
  transform: scale(1.01);
  background: whitesmoke;
}
</style>
