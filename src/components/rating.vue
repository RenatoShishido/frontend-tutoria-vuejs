<template>
  <v-rating
    v-model="rating"
    color="yellow darken-3"
    background-color="grey darken-1"
    large
    readonly
  ></v-rating>
</template>

<script>
export default {
  props: {
    RateValue: Number,
  },
  data: () => ({
    rating: 1.4,
  }),
};
</script>
