<template>
    <v-card-text class="d-flex flex-row" >
      <v-autocomplete
        v-model="model"
        :items="states"
        :label="`Search`"
        persistent-hint
        class="text-justify"
        @keypress.enter="ola()"
      >
      </v-autocomplete>
      <v-btn icon  xLarge @click.prevent="ola()">
        <v-icon>mdi-magnify</v-icon></v-btn>
    </v-card-text>
</template>

<script>
import tutorias from '../../service/tutorias'
  export default {
    data () {
      return {
        model: '',
        states: [],
        searchResults: [],
        options: {
          shouldSort: true,
          includeMatches: true,
          threshold: 0.5,
          location: 0,
          distance: 500,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: ['institution', 'content']
      },
      }
    },
    created(){
      tutorias.listar()
        .then(res => {
          res.forEach(element => {
            const string = element.institution+ " " 
            + element.discipline
            
            this.states.push(string)
          });
    
        
        })
        .catch(err => err)
    },
    methods:{
      //  performSearch() {
      //   this.$search(this.model, this.states, this.options)
      //     .then(results => {
      //       this.searchResults = results
      //       console.log(results)
      //     })
      // },
    }
  }
</script>