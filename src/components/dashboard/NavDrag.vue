<template>
    <v-app-bar app color="#007cba" dark height="70">
    <v-snackbar v-model="snackbar" :timeout="4000" top :color="color">
      <span>{{texto}}</span>
      <v-btn text color="white" @click="snackbar= false">Close</v-btn>
    </v-snackbar>
      <v-icon xLarge color="white" left>mdi-school</v-icon>
      <router-link router to="/">
        <h1 class="headline white--text hidden-md-and-down">TUTORIA EM PARES</h1>
      </router-link>
      <v-spacer />
      <v-flex xs12 sm8 md6>
        <Search />
      </v-flex>
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="mr-5" icon v-bind="attrs" v-on="on">
            <v-icon  dark>mdi-account-circle</v-icon>
          </v-btn>
        </template>

         <v-list flat>
        <v-list-item v-for="n in 1" :key="n.title" link router :to="`/dashboard/perfil/${id}`">
          <v-list-item-action>
            <v-icon class="black--text">mdi-face-profile</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="black--text">Perfil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="my-4" v-for="item in items" :key="item.text" :to="item.route" link>
          <v-list-item-action>
            <v-icon class="black--text" :class="item.color">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title :class="item.color">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout()" v-for="n in 1" :key="n.title" link>
          <v-list-item-action>
            <v-icon class="red--text">mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="red--text">Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </v-menu>
    </v-app-bar>
</template>

<script>
import Search from "../search/SearchComponent";
import tutorias from "../../service/tutorias";
export default {
  name: "NavDrag",
  components: {
    Search,
  },
  data: () => ({
    drawer: null,
    snackbar: false,
    fields: {},
    color: "",
    texto: "",
    link: "",
    id: "",
    items: [
      {
        icon: "mdi-plus-circle",
        text: "Tutorias",
        route: `/dashboard/pagina/1`,
      },
      {
        icon: "mdi-clock",
        text: "Tutorias agendadas",
        route: `/dashboard/tutorias/pagina/1`,
      },
      {
        icon: "mdi-face",
        text: "Tutores",
        route: "/dashboard/tutores",
      },
      {
        icon: "mdi-email",
        text: "Enviar sugestao",
        route: "/dashboard/sugestao",
      },
    ],
  }),
  mounted() {
    this.pickUser();
  },
  methods: {
    logout() {
      this.$session.destroy();
      localStorage.removeItem("token");
      this.$router.push("/");
    },
    pickUser() {
      tutorias
        .listarUsers()
        .then((response) => {
          this.user = this.$session.get("user");
          this.id = this.user._id;
          response.forEach((element) => {
            if (this.user._id === element._id) {
              this.fields = element;
            }
          });
          this.link = this.fields.profile;
        })
        .catch((err) => err);
    },
  },
};
</script>

<style>
</style>
