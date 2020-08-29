<template>
  <v-btn class="green black--text" text @click="tornarAluno(tutoria)">TORNAR-SE ALUNO</v-btn>
</template>
<script>
export default {
  name: "botaoTornarAluno",
  props: {
    tutoria: {
        type: Object        
    },
  },
  methods: {
    tornarAluno(tutoria) {       
      this.$emit('tornarAluno', tutoria)
    }
  }
};
</script>