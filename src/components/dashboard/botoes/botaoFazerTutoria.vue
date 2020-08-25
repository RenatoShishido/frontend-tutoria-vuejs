<template>
  <v-btn class="green white--text" slot="activator" @click="doTutoriaUpdate(tutoria)">Fazer tutoria</v-btn>
</template>
<script>
export default {
  name: "botaoFazerTutoria",
  props: {
    tutoria: {
      type: Object
    }
  },
  methods: {
      doTutoriaUpdate(tutoria) {
      const user = this.$session.get('user');
      tutoria.status = "Agendado";
      tutoria.tutor = user._id
      this.$emit("updateTutoria", tutoria)
    }
  }
};
</script>