<template>
  <v-content>
    <v-container>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Bloco
              </th>
              <th class="text-left">
                Local
              </th>
              <th class="text-left">
                Aluno
              </th>
              <th class="text-left">
                Tutor
              </th>
              <th class="text-left">
                Data de Inicio
              </th>
              <th class="text-left">
                Data de Finalizacao
              </th>
              <th class="text-left">
                Valido
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="tutoria in tutorias" :key="tutoria.name">
              <td>{{ tutoria.institution}}</td>
              <td>{{ tutoria.local}}</td>
              <td>{{ tutoria.user.nome}}</td>
              <td>{{ tutoria.tutor.nome }}</td>
              <td>
                {{ tutoria.qrcode_valido.data_ini | moment("DD/MM/YYYY") }}
                {{ tutoria.qrcode_valido.data_ini | moment("HH:mm")}}
            </td>
              <td>
                {{ tutoria.qrcode_valido.data_fim | moment("DD/MM/YYYY") }}
                {{ tutoria.qrcode_valido.data_fim | moment("HH:mm")}}
            </td>
              <td>{{ tutoria.qrcode_valido.valido }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-content>
</template>

<script>
import serviceTutoria from "../../service/tutorias";

export default {
  data() {
    return {
      tutorias: [],
      dialog: false,
    };
  },
  mounted() {
    this.listarTutoria();
  },
  methods: {
    async listarTutoria() {
      try {
        const array = await serviceTutoria.listar();

        array.forEach(element => {
            if(element.qrcode_valido !== undefined){
                this.tutorias.push(element)
            }
        });
        

      } catch (error) {
        error
      }
    },
  },
};
</script>

<style></style>
