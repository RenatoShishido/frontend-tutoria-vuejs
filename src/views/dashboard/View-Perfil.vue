<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <DashPerfil />
          <h1>Desempenho</h1>
          <RatingValue :RateValue="RateValue" />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <h1>Minhas Tutorias</h1>
          <TableTutoria :data="myTutoria" />
        </v-col>
        <v-col>
          <h1>Tutorias Oferecidas</h1>
          <TableTutoria :data="offerTutoria" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import serviceTutoria from "../../service/tutorias";
import DashPerfil from "../../components/dashboard/perfilDashboard";
import TableTutoria from "../../components/table";
import RatingValue from "../../components/rating";


export default {
  name: "View-Perfil",
  components: {
    DashPerfil,
    TableTutoria,
    RatingValue,
  },
  data() {
    return {
      myTutoria: [],
      offerTutoria: [],
      markTutoria: [],
      RateValue: Number,
    };
  },
  mounted() {
    this.findTutoria();
  },
  methods: {
    async findTutoria() {
      const response = await serviceTutoria.findTutoriaAll();
      const params = location.pathname.split("/");

      response.tutorias.forEach((element) => {
        if (element.tutor !== undefined) {
          if (element.tutor._id === params[3]) {
            this.offerTutoria.push(element);
          }
        }
      });

      response.tutorias.forEach((element) => {
        if (element.status !== "AguardandoAluno")
          if (element.user._id === params[3]) {
            this.myTutoria.push(element);
          }
      });

      this.RateValue = this.myTutoria.length + this.offerTutoria / 5;
    },
  },
  watch: {
    async $route(to, from) {
      if (to.params.id) {
        if (to.params.id != from.params.id) {
          await document.location.reload();
        }
      }
    },
  },
};
</script>

<style></style>
