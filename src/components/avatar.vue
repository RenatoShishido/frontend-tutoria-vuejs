<template>
   <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mr-5" icon v-bind="attrs" v-on="on">
          <div v-if="$store.getters['user/GettersProfile'] === undefined">
            <v-icon dark>mdi-account-circle</v-icon>
          </div>
          <div v-else>
            <v-avatar>
              <img :src="$store.getters['user/GettersProfile']" alt="img indisponivel" />
            </v-avatar>
          </div>
        </v-btn>
      </template>

      <v-list flat>
        <v-list-item v-for="n in 1" :key="n.title" link router :to="`/dashboard/perfil/${$store.getters['user/GettersId']}`">
          <v-list-item-action>
            <v-icon class="blue--text">mdi-face-profile</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="black--text">Perfil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="my-4" v-for="item in items" :key="item.text" :to="item.route" link>
          <v-list-item-action>
            <v-icon class="blue--text">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="black--text">{{ item.text }}</v-list-item-title>
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
</template>

<script>
export default {
  data() {
    return {
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
        route: "/dashboard/tutores/pagina/1",
      },
      {
        icon: "mdi-email",
        text: "Enviar sugestao",
        route: "/dashboard/sugestao",
      },
    ],
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logoutUser')
      this.$router.push('/')
    },
  }
}
</script>

<style>

</style>