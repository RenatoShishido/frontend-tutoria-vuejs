<template>
   <v-menu offset-y :close-on-content-click="closeOnContentClick">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mr-5" icon v-bind="attrs" v-on="on">
          <v-avatar 
          color="orange" 
          v-if="showAvatar">
         <span class="white--text headline">{{letterNouns}}</span>
        </v-avatar>
          <div v-else>
            <v-avatar>
              <img :src="user.profile" alt="img indisponivel" />
            </v-avatar>
          </div>
        </v-btn>
      </template>
      <v-list shaped>
        <v-list-item class="my-4">
          <v-avatar
          color="orange" 
          v-if="showAvatar">
           <span class="white--text headline">{{letterNouns}}</span>
        </v-avatar>
         <v-avatar  v-else>
           <v-img :src="user.profile"></v-img>
        </v-avatar>
           <p class="d-flex flex-column px-4">
             <strong>{{user.nome}}</strong>
              <span>{{user.email}}</span>
           </p>
        </v-list-item>


         <v-divider color="black--text"></v-divider>

        <!-- ADMINISTRADOR -->

        <div v-if="showAdministrator">
         <v-list-group
          prepend-icon="mdi-tools"
          no-action
        >
        <template v-slot:activator>
          <v-list-item-title>Administrador</v-list-item-title>
        </template>
         <v-container>
          <v-list-item
            v-for="([title, icon, route], i) in admins"
            :key="i"
            :to="route"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>
            <v-list-item-icon>
              <v-icon  v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
         </v-container>
        </v-list-group>
        </div>

        <!-- Lista dos items? -->
        <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>


        <!-- LOGOUT -->
        <v-divider color="black--text"></v-divider>
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
import serviceUser from '../service/user'
export default {
  data() {
    return {
      letterNouns: '',
      closeOnContentClick: false,
      user: {},
      admins: [
        ['Users', 'mdi-account-multiple-outline', '/admin/dashboard/user'],
        ['Scanned Qr Code ', 'mdi-qrcode-scan', '/admin/dashboard/validate'],
        ['Settings', 'mdi-cog-outline'],
      ],
      items: [
      {
        icon: "mdi-face-profile",
        text: "Perfil",
        route: `/dashboard/perfil/${this.$store.getters['user/GettersId']}`,
      },
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
  mounted() {
    const email = this.$store.getters['user/GettersEmail'].split('.') 
    const primeira = email[0]
    const segunda = email[1]

    this.letterNouns = primeira[0].toUpperCase() + segunda[0].toUpperCase()

    this.findUser()

  },
  methods: {
    logout() {
      this.$store.dispatch('user/logoutUser')
      this.$router.push('/')
    },
    async findUser() {
      this.user = await serviceUser.listarUserId(this.$store.getters['user/GettersId'])
    },
  },
  computed: {
    showAdministrator() {
      return this.$store.getters['user/GettersAdmin'] === true
    },
    showAvatar() {
      return this.user.profile === undefined
    }
  },

}
</script>

<style>

</style>