<template>
  <v-container fluid>
    <v-btn @click="newForm()">ADICIONAR</v-btn>
    <v-card class="my-5" v-for="(employe, index) in employes" :key="employe.key">
      <div class="mx-5">
      <span class="float-right headline mt-5" style="cursor:pointer"
      @click="deleteForm(index)"
      >
        X</span>
      <h1 class="display-2">Exercicio {{index + 1}}</h1>
      <v-radio-group v-model="employe.radios" :mandatory="false">
        <div class="d-flex flex-row">
        <v-radio value="1"></v-radio>
        <v-text-field
        label="Question"
        v-model="employe.exercicio1"
        outlined
        ></v-text-field>
        </div>
        <div class="d-flex flex-row">
        <v-radio value="2"></v-radio>
        <v-text-field
        label="Question"
        v-model="employe.exercicio2"
        outlined
        ></v-text-field>
        </div>
        <div class="d-flex flex-row">
        <v-radio value="3"></v-radio>
        <v-text-field
        label="Question"
        v-model="employe.exercicio3"
        outlined
        ></v-text-field>
        </div>
        <div class="d-flex flex-row">
        <v-radio value="4"></v-radio>
        <v-text-field
        label="Question"
        v-model="employe.exercicio4"
        outlined
        ></v-text-field>
        </div>
      </v-radio-group>
      </div>
    </v-card>
    <v-btn @click="enviarForm()">Enviar</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      employes: [
        {
          radios: "",
          exercicio1: "",
          exercicio2: "",
          exercicio3: "",
          exercicio4: "",
        }
      ]
    };
  },
  methods: {
    newForm(){
      if(this.employes.length < 5){
        this.employes.push({
            radios: "1",
            exercicio1: "",
            exercicio2: "",
            exercicio3: "",
            exercicio4: "",
        })
      }else {
        confirm("Nao e possivel fazer mais 5 questoes")
      }
    },
    deleteForm(index){
      this.employes.splice(index, 1)
    },
    enviarForm(){
    }
  }
};
</script>