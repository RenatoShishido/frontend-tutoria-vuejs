<template>
  <v-content app>
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

    <v-container class="d-flex flex-column justify-center">
      <v-card
        flat
        class="mb-10 zoom"
        v-for="project in projects"
        :key="project.nome"
      >
        <v-divider></v-divider>
        <v-layout row wrap :class="`pa-3 project ${project.status} `">
          <v-flex xs12 sm4 md1>
            <div class="caption grey--text">Bloco</div>
            <div>{{ project.institution }}</div>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <div class="caption grey--text">Disciplina</div>
            <div>{{ project.discipline }}</div>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <div class="caption grey--text">Conteudo</div>
            <p class="text-justify">{{ project.content }}</p>
          </v-flex>
          <v-flex xs12 sm4 md1>
            <div class="caption grey--text">Data</div>
            <div>{{ project.data | moment("DD/MM/YYYY") }}</div>
            <div class="caption grey--text">Horário</div>
              <div>{{ project.data | moment("HH:mm") }}</div>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <a v-on="on" @click="rotacionar(project)">
                  <div class="d-flex justify-center caption grey--text">
                    Aluno
                  </div>
                  <p class="d-flex justify-center text-justify black--text">
                    {{ project.user.nome }}
                  </p>
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
          <v-flex xs12 sm4 md2>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <a v-on="on" @click="rotacionar(project)">
                  <div class="d-flex justify-center caption grey--text">
                    Tutor
                  </div>
                  <p class="d-flex justify-center text-justify black--text">
                    {{ project.tutor.nome }}
                  </p>
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
            <v-flex xs12 sm8 md1>
            <div v-if="project.tutor._id === user._id ? true : false">
              <v-list-item class="d-flex justify-start align-end">
                <horario 
                :data="project"
                :typeButton="{color: 'green', text: 'Agendar Horario'}"
                @cadastrarHorario="cadastrarHorario" 
                />
              </v-list-item>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
      <div class="text-center" v-if="paginas !== 0">
        <a @click="refresh()">
          <v-pagination
            v-model="page"
            :value="page"
            :length="paginas"
          ></v-pagination>
        </a>
      </div>
    </v-container>
  </v-content>
</template>

<script>
import horario from '../dashboard/dialogs/horario'
import tutorias from "../../service/tutorias";
export default {
  components: {
    horario
  },
  data() {
    return {
      page: 1,
      paginas: 0,
      projects: {},
      tutoria: {},
      user: {},
    };
  },
  mounted() {
    this.refresh();
  },
  methods: {
    calcularNumeroPagina(totalPages) {
      const numeroPaginas = totalPages / 10;
      this.paginas = Math.ceil(numeroPaginas);
    },
    refresh() {
      tutorias
        .paginationAgendado(this.page)
        .then((response) => {
          this.projects = response.data.data;
          this.calcularNumeroPagina(response.data.count);
          this.user = this.$store.getters["user/GetUser"];
        })
        .catch((err) => err);
      this.$router.push(`/dashboard/tutorias/pagina/${this.page}`);
    },
    async cadastrarHorario(data) {
      try {
        await tutorias.updateTutoria(data._id, data)

        this.$store.dispatch("snackbar/show", {
          content: 'Horario Agendado com sucesso!',
          color: "green"
        });

      } catch (error) {
        this.$store.dispatch("snackbar/show", {
          content: 'Nao foi possivel agendar o horario!',
          color: "error"
        });
      }
      
    },
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
    rotacionar(project) {
      this.$router.push(`/dashboard/perfil/${project.user._id}`);
    },
  },
};
</script>

<style>
.project.Agendado {
  border-left: 4px solid green;
  border-right: 4px solid green;
}

.zoom:hover {
  -moz-transform: scale(1.01);
  -webkit-transform: scale(1.01);
  transform: scale(1.01);
  background: whitesmoke;
}
</style>
