<template>
  <v-content>
    <v-container>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Nome
              </th>
              <th class="text-left">
                Email
              </th>
              <th class="text-left">
                RGA
              </th>
              <th class="text-left">
                Data
              </th>
              <th class="text-left">
                Administrador
              </th>
              <th class="text-center">
                Botoes
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.name">
              <td>{{ user.nome }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.rga }}</td>
              <td>{{ user.data }}</td>
              <td>{{ user.admin }}</td>
              <td>
                <v-row>
                  <v-col>
                    <div v-if="user.admin === true">
                      <v-btn
                        @click="adicionarAdmin('admin', user)"
                        fab
                        small
                        class="error"
                      >
                        <v-icon>mdi-tooltip-edit</v-icon>
                      </v-btn>
                    </div>
                    <div v-else>
                      <v-btn
                        @click="adicionarAdmin('', user)"
                        fab
                        small
                        class="green"
                      >
                        <v-icon>mdi-tooltip-edit</v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                  <v-col>
                    <v-btn fab small @click="dialog = !dialog" class="error">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-row justify="center" v-if="dialog === true">
                      <v-dialog v-model="dialog" persistent max-width="500">
                        <v-card>
                          <v-card-title class="body-1"
                            >Voce tem certeza que deseja deletar este usuario
                            ?</v-card-title
                          >
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="red darken-1"
                              text
                              @click="dialog = false"
                              >Discordar</v-btn
                            >
                            <v-btn
                              color="green darken-1"
                              text
                              @click="(dialog = false), deletarCampos(user)"
                              >Aceito</v-btn
                            >
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                  </v-col>
                </v-row>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-content>
</template>

<script>
import serviceUser from "../../service/user";

export default {
  data() {
    return {
      users: [],
      dialog: false,
    };
  },
  mounted() {
    this.listarUsers();
  },
  methods: {
    async adicionarAdmin(comparador, user) {
      try {
        if (comparador === "admin") {
          user.admin = false
          try {
            await serviceUser.updateUser(user._id, user);

            this.$store.dispatch("snackbar/show", {
              content: "Usuario nao é mais administrador!",
              color: "green",
            });
            this.listarUsers();
          } catch (error) {
            this.$store.dispatch("snackbar/show", {
              content: error,
              color: "red",
            });
          }
        } else {
           user.admin = true
          try {
            await serviceUser.updateUser(user._id, user);

            this.$store.dispatch("snackbar/show", {
              content: "Usuario virou adminstrador!",
              color: "green",
            });
            this.listarUsers();
          } catch (error) {
            this.$store.dispatch("snackbar/show", {
              content: error,
              color: "red",
            });
          }
        }
      } catch (error) {
        error
      }
    },
    async deletarCampos(user) {
      try {
        await serviceUser.removeUser(user._id);

        this.$store.dispatch("snackbar/show", {
          content: "Usuario deletado com sucesso!",
          color: "green",
        });
        this.listarUsers();
      } catch (error) {
        this.$store.dispatch("snackbar/show", {
          content: error,
          color: "red",
        });
      }
    },
    async listarUsers() {
      try {
        this.users = await serviceUser.listarUser();
      } catch (error) {
        error
      }
    },
  },
};
</script>

<style></style>
