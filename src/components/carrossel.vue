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
            src: 'https://uploaddeimagens.com.br/images/002/847/994/original/20191031_093751.jpg?1598380919',
          },
          {
            src: 'https://uploaddeimagens.com.br/images/002/847/997/original/20191031_095752.jpg?1598380983',
          },
          {
            src: 'https://uploaddeimagens.com.br/images/002/848/009/original/logoctei-1024x700.jpg?1598381318',
          },
          {
            src: 'https://uploaddeimagens.com.br/images/002/848/011/original/IMG_20191101_082857.jpg?1598381340',
          },
          {
            src: 'https://uploaddeimagens.com.br/images/002/848/012/original/IMG_20191101_082859.jpg?1598381360',
          },
        ],
    };
  }
};
</script>
