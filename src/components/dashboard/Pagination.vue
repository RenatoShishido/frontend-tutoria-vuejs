<template>
    <div class="text-center">
    <a @click="navigate()">
    <v-pagination
      v-model="page"
      :value="page"
      :length="paginas"
    ></v-pagination>
    </a>
  </div>
</template>

<script>
import tutorias from "../../service/tutorias";
export default {
  props: {
    tutorias: Array,
  },
    data () {
      return {
        page: 1,
        pages: [],
        projects: [],
        paginas: '',
      }
    },
    created(){
      tutorias
      .paginationTutoria(this.page)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
      
       

    },
    methods: {
    // previousPage() {
    //   if (this.data.current_page > 1) {
    //     this.ajax(this.data.current_page - 1);
    //   }
    // },
    // nextPage() {
    //   if (this.data.total / this.data.current_page !== this.data.per_page) {
    //     this.ajax(this.data.current_page + 1);
    //   }
    // },
    calcularNumeroPagina(){
      const numeroTotalPaginas = this.pages[this.projects.length - 1]
      const numeroPaginas = numeroTotalPaginas   / 10
      this.paginas = Math.ceil(numeroPaginas)
    }
    }
  }
</script>

<style>

</style>