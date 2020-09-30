<template >
  <v-card outlined class="px-5" :elevation="10">
    <h1 class="d-flex justify-center blue--text py-4">Cadastramento de Tutoria</h1>
    <v-card-text>
      <v-form max-width="800px" class="px-3" ref="form">
        <v-text-field
          v-model="fields.institution"
          label="Bloco"
          outlined
          prepend-icon="mdi-castle"
          :loading="loading"
        ></v-text-field>
        <v-text-field
          v-model="fields.discipline"
          label="Disciplina"
          outlined
          prepend-icon="mdi-folder"
          :loading="loading"
        ></v-text-field>
        <v-textarea
          v-model="fields.content"
          label="Dúvida ou Conteúdo"
          outlined
          prepend-icon="mdi-table-edit"
          :loading="loading"
        ></v-textarea>
        <v-spacer></v-spacer>
        <div v-if="showDateTime">
          <v-card-title>Data da Tutoria</v-card-title>
          <v-layout class="mb-5" wrap>
            <v-flex xs8 sm6>
              <v-date-picker v-model="date.day" light color="grey"  flat class="mr-3 pb-4"></v-date-picker>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs8 sm6>
              <v-time-picker light color="grey" v-model="date.time"  flat></v-time-picker>
            </v-flex>
          </v-layout>
        </div>
        <v-layout class="mx-0 mt-3" wrap>
          <v-row align="center">
            <v-flex xs6 sm4 md6 class="ml-5">
              <v-select
                :loading="loading"
                outlined
                v-model="fields.oferecida"
                item-text="opcao"
                item-value="value"
                :items="items"
                menu-props="auto"
                label="Select"
                hide-details
                prepend-icon="mdi-table-edit"
                single-line
                @change="showDateTime =fields.oferecida"
              ></v-select>
            </v-flex>
          </v-row>
          <v-flex xs6 sm4 md4>
            <v-btn @click="submit()" color="green" :loading="loading">Salvar tutoria</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      date: {},
      showDateTime: false,
      items: [
        {
          opcao: "Ofereço Tutoria",
          value: true
        },
        {
          opcao: "Quero Tutoria",
          value: false
        }
      ],
      fields: {},
      menu: false,
      loading: false,
      dialog: false
    };
  },

  methods: {
    dateFormate() {
      const hours = this.date.time.match(/^(\d+)/)[1];
      const minutes = this.date.time.match(/:(\d+)/)[1];
      const year = this.date.day.match(/^(\d+)/)[1];
      const month = this.date.day.match(/-(\d+)/)[1];
      const day = this.date.day.match(/(\d+)(?!.*\d)/)[1];
      const dateVar = new Date(year, month - 1, day, hours, minutes, "00");
      this.fields.data = dateVar;
    },
    submit() {
      if (this.fields.oferecida) this.dateFormate();
      this.$emit("adicionarTutoria", this.fields);
      this.clearMemory();
    },
    clearMemory() {
      this.fields = {};
      this.date = {};
      this.showDateTime = false;
    }
  }
};
</script>


