<template>
  <v-card>
      <v-card-text v-for="content in contents" :key="content.title"
      class="d-flex justify-center"
      >
        <v-flex xs12 sm8 md4 >
          <div class="d-flex headline flex-column align-center">
            <v-icon size="150px" :class="content.color" class="black--text">{{ content.icon }}</v-icon>
            {{content.texto}}
          </div>
        </v-flex>
      </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      contents: [
        {
          ref: "/",
          icon: "mdi-history",
          texto:
            "O objetivo do tutoria em pares e para quando pessoas estao com dificuldades",
          color: "yellow--text"
        },
        {
          ref: "/",
          icon: "mdi-diamond",
          texto:
            "Contribuir entre os tutores as ações de prática de ensino, como mais uma alternativa de carreira dentro de suas respectivas áreas de estudo/atuação Colaborar e criar oportunidades para o desenvolvimento prático da ato professoral entre os acadêmicos dos cursos de licenciaturas. Propiciar uma maior interação entre os acadêmicos de mesmos cursos de diferentes semestres, assim como acadêmicos de diferentes cursos, mas que possuem uma exigências conteudistas semelhantes.",
          color: "indigo--text"
        },
        {
          ref: "/",
          icon: "mdi-recycle",
          texto:
            "O objetivo do tutoria em pares e para quando pessoas estao com dificuldades",
          color: "blue--text"
        }
      ]
    };
  }
};
</script>

<style>
</style>
