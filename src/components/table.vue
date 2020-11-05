<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Instituicao
          </th>
          <th class="text-left">
            Disciplina
          </th>
          <th class="text-left">
            Conteudo
          </th>
          <th class="text-left">
            Aluno
          </th>
          <th class="text-left">
            RGA
          </th>
          <th class="text-left">
            Horario
          </th>
          <th class="text-left">
            Local
          </th>
          <th class="text-left">
            Agendada
          </th>
          <th class="text-left">
            BOTOES
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.name">
          <td>{{ item.institution }}</td>
          <td>{{ item.discipline }}</td>
          <td>{{ item.content }}</td>
          <td v-if="item.status === 'AguardandoAluno'">
            {{ item.tutor.nome }}
          </td>
          <td v-else>{{ item.user.nome }}</td>
          <td v-if="item.status === 'AguardandoAluno'">
            {{ item.tutor.rga }}
          </td>
          <td v-else>{{ item.user.rga }}</td>
          <td>
            {{ item.data | moment("DD/MM/YYYY") }}
            {{ item.data | moment("HH:mm") }}
          </td>
          <td>{{ item.local }}</td>
          <td>{{ item.agendada }}</td>
          <td v-if="item.local !== undefined ? true : false">
            <div v-if="item.qrcode === undefined ? false : true">
              <div v-if="item.tutor._id === $store.getters['user/GettersId'] ? true : false">
                <v-btn small @click="dialog = !dialog" class="green">
                  QRCode
                </v-btn>
                <v-row justify="center" v-if="dialog === true">
                  <v-dialog v-model="dialog" max-width="250">
                    <v-card>
                      <img :src="item.qrcode" alt="qrcode" />
                    </v-card>
                  </v-dialog>
                </v-row>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  data() {
    return {
      param: "",
      dialog: false,
      dateTutoria: "",
      dayTutoria: "",
    };
  },
  mounted() {
    const params = location.pathname.split("/");
    this.param = params[3];
  },
  methods: {},
};
</script>

<style></style>
