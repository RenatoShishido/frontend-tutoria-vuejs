<template>
  <v-content>
    <v-flex xs12 sm12 md12>
      <v-container>
        <v-row justify="center">
          <v-card>
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card-title class="cyan darken-1">
                <span class="headline white--text">{{fields.nome}}</span>

                <v-spacer></v-spacer>
                <v-btn
                  v-if="$store.getters['user/GettersId'] === userParam ? true : false"
                  fab
                  small
                  @click="isEditing = !isEditing"
                >
                  <v-icon v-if="isEditing">mdi-close</v-icon>
                  <v-icon v-else>mdi-pencil</v-icon>
                </v-btn>
              </v-card-title>
            </v-flex>
            <v-list>
              <div class="d-flex flex-row">
                <v-flex xs12 sm12 md6 lg6 xl6>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon>mdi-face</v-icon>
                    </v-list-item-action>

                    <v-text-field
                      :disabled="!isEditing"
                      :value="fields.nome"
                      v-model="fields.nome"
                      color="white"
                      label="Nome"
                    ></v-text-field>

                    <v-list-item-action>
                      <v-icon>mdi-message-text</v-icon>
                    </v-list-item-action>
                  </v-list-item>
                </v-flex>
                <v-flex xs12 sm12 md6 lg6 xl6>
                  <v-list-item>
                    <v-text-field :disabled="true" color="white" :value="semestre" label="Semestre"></v-text-field>
                    <v-list-item-action>
                      <v-icon>mdi-message-text</v-icon>
                    </v-list-item-action>
                  </v-list-item>
                </v-flex>
              </div>
              <v-flex xs12 sm12 md12 lg12 xl12>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon>mdi-whatsapp</v-icon>
                  </v-list-item-action>

                  <v-text-field
                    :disabled="!isEditing"
                    :value="fields.telefone"
                    v-model="fields.telefone"
                    color="white"
                    label="Whatsapp"
                  ></v-text-field>

                  <v-list-item-action>
                    <v-icon>mdi-message-text</v-icon>
                  </v-list-item-action>
                </v-list-item>
              </v-flex>

              <v-flex xs12 sm12 md12 lg12 xl12>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon>mdi-email</v-icon>
                  </v-list-item-action>

                  <v-text-field
                    :disabled="!isEditing"
                    :value="fields.email"
                    v-model="fields.email"
                    color="white"
                    label="Email"
                  ></v-text-field>

                  <v-list-item-action>
                    <v-icon>mdi-message-text</v-icon>
                  </v-list-item-action>
                </v-list-item>
              </v-flex>

              <v-flex xs12 sm12 md12 lg12 xl12>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon>mdi-lock</v-icon>
                  </v-list-item-action>

                  <v-text-field
                    :disabled="!isEditing"
                    color="white"
                    :value="fields.rga"
                    v-model="fields.rga"
                    label="Rga"
                  ></v-text-field>
                  <v-list-item-action>
                    <v-icon>mdi-message-text</v-icon>
                  </v-list-item-action>
                </v-list-item>
              </v-flex>

              <v-flex xs12 sm12 md12 lg12 xl12>
                <v-card-actions class="d-flex justify-end align-center">
                  <v-btn :disabled="!isEditing" color="success" @click="alterarPerfilUser()" large>Salvar</v-btn>
                  <input
                    style="display: none;"
                    type="file"
                    id="file"
                    ref="file"
                    v-on:change="handleFileUpload()"
                  />
                  <v-btn fab large :disabled="!isEditing" text @click="$refs.file.click()">
                    <v-icon>mdi-paperclip</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-list>
            <v-flex xs12 sm12 md12 lg12 xl12>
              <div v-if="fields.profile === undefined">
                <v-img src="../../assets/silhueta-interrogação.jpg" height="500px" width="100%"></v-img>
              </div>
              <div v-else>
                <v-img :src="fields.profile" height="500px" width="100%"></v-img>
              </div>
            </v-flex>
          </v-card>
        </v-row>
      </v-container>
    </v-flex>
  </v-content>
</template>


<script>
import tutorias from "../../service/tutorias";
export default {
  name: "DashPerfil",
  data() {
    return {
      isEditing: null,
      fields: {},
      semestre: "",
      userParam: {}
    };
  },
  mounted() {
    this.refresh();
  },
  methods: {
    refresh() {
      const params = location.pathname.split("/");
      this.userParam = params[3];
      tutorias
        .listarPerfil(params[3])
        .then(response => {
          this.fields = response;
          this.verificarRga();
        })
        .catch(err => err);
    },
    async alterarPerfilUser() {
      try {
        this.isEditing = !this.isEditing;
        this.fields.semestre = this.semestre;
        await this.$store.dispatch("user/alterLoggedUser", this.fields);

        this.$store.dispatch("snackbar/show", {
          content: "Perfil alterado com sucesso",
          color: "green"
        });

        this.refresh();
      } catch (error) {
        this.$store.dispatch("snackbar/show", {
          content: "Nao foi possivel alterar o Perfil",
          color: "error"
        });
      }
    },
    handleFileUpload() {
      this.fields.file = this.$refs.file.files[0];
    },
    verificarRga() {
      const rga = this.fields.rga.substring(0, 4);
      if (
        this.fields.rga === "" ||
        this.fields.rga === null ||
        this.fields.rga === undefined
      ) {
        this.semestre = "";
      } else {
        this.semestre = this.calcularSemestre(rga);
      }
    },
    calcularSemestre(rga) {
      const data = new Date();
      const strings = data.toJSON();
      const dataAtual = strings.split("-");

      const mesAtual = dataAtual[1];
      const anoAtual = dataAtual[0];

      if (mesAtual < 6) {
        return (anoAtual - rga) * 2 + 1;
      } else {
        return (anoAtual - rga) * 2 + 2;
      }
    }
  },
  watch: {
    async $route(to, from) {
      if (to.params.id) {
        if (to.params.id != from.params.id) {
          await this.refresh();
        }
      }
    }
  }
};
</script>

