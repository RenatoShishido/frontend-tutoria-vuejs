<template>
   <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "carrosel",
  data() {
    return {
       items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      slides: [
        {
          src: '../assets/logoctei-1024x700.jpg'
        },
        {
          src: '../assets/20191031_093751.jpg'
        },
        {
          src: "../assets/20191031_095752.jpg"
        },
        {
          src: "../assets/IMG_20191101_082857.jpg"
        }, 
        {
          src: "../assets/IMG_20191101_082859.jpg"
        }
      ]
    };
  }
};
</script>
