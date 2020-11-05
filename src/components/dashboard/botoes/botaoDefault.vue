<template>
  <v-btn :class="typeButton.color" class="white--text" 
  slot="activator" 
  @click="generico(data)">{{ typeButton.text }}</v-btn>
</template>
<script>
export default {
  name: "botaoDefault",
  props: {
    typeButton: {
        type: Object
    },
    data: {
      type: Object
    }
  },
  methods: {
      generico(data) {
      console.log(data);
      console.log(this.typeButton);
    }
  }
};
</script>