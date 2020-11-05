<template>
  <div>
    <v-btn  medium @click="dialog = !dialog" 
    :class="typeButton.color"
    class="white--text"
    >
      {{typeButton.text}}
    </v-btn>

    <v-row justify="center" v-if="dialog === true">
      <v-dialog v-model="dialog" max-width="700">
        <v-card>
          <v-form class="px-5 py-8" ref="form">
            <h1 class="d-flex justify-center align-center">Cadastrar Horario</h1>
            <v-text-field
              v-model="data.local"
              label="Local"
              prepend-icon="mdi-castle"
            ></v-text-field>
           
              <v-card-title>Data da Tutoria</v-card-title>
              <v-layout class="mb-5" wrap>
                <v-flex xs8 sm6>
                  <v-date-picker 
                  light color="blue" 
                  v-model="date.day" 
                  :value="data.data"
                   class="mr-3 pb-4"
                   ></v-date-picker>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs8 sm6>
                  <v-time-picker 
                  dark color="blue" 
                  v-model="date.time" 
                  :value="data.data"
                  ></v-time-picker>
                </v-flex>
              </v-layout>
         
            <v-btn
              class="success mx-0 mt-3"
              text
              @click="dialog = false, atualizarDashoboard(data)"
            >Cadastrar</v-btn>
            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      date: {},
      dataLocal: {},
    };
  },
  props: {
    data: {},
    typeButton: {}
  },
  methods: {
    dateFormate() {
      const hours = this.date.time.match(/^(\d+)/)[1];
      const minutes = this.date.time.match(/:(\d+)/)[1];
      const year = this.date.day.match(/^(\d+)/)[1];
      const month = this.date.day.match(/-(\d+)/)[1];
      const day = this.date.day.match(/(\d+)(?!.*\d)/)[1];

      const dateVar = new Date(year, month - 1, day, hours, minutes, "00");
      this.data.data = dateVar;
    },
    atualizarDashoboard(data) {
    if(data.local === '' 
    || this.date.time === undefined 
    || this.date.day === undefined)
    {
      return this.$store.dispatch("snackbar/show", {
          content: 'Precisa ter um local e um horario!',
          color: "error"
        });
    }else {
      data.agendada = true
      this.dateFormate();
      this.$emit('cadastrarHorario', data)
    }
      
    }
  }
};
</script>>