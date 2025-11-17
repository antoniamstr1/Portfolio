<script setup>
import Card from "primevue/card";
import Carousel from "primevue/carousel";
import { useRouter } from "vue-router";

const router = useRouter();

const products = [
  {
    title: "Velvet",
    description: "Chrome extension with dashboard",
    link: "/velvet",
  },
  {
    title: "TheTranslator",
    description: "Translates and analyzes Italian/Spanish to English ",
    link: "/TheTranslator",
  },
  {
    title: "FeelGPT",
    description: "ChatBOT based on your emotions",
    link: "/feelGPT",
  },
  {
    title: "Masters thesis",
    description: "Clustering algorithms and their aplication",
    link: "/masters-thesis",
  },
  {
    title: "This",
    description: "Portfolio page",
    link: "/portfolio",
  },
];

const carouselProjectsData = [
  {
    breakpoint: "600px",
    numVisible: 1,
    numScroll: 1,
  },
];
</script>

<template>
  <div class="home-page">
    <h2 class="carousel-title">Projects</h2>

    <Carousel
      :value="products"
      :numVisible="2"
      :numScroll="2"
      :responsiveOptions="carouselProjectsData"
      class="carousel"
    >
      <template #item="slotProps">
        <Card class="clickable-card" @click="router.push(slotProps.data.link)">
          <template #title>{{ slotProps.data.title }}</template>
          <template #content>
            <p>{{ slotProps.data.description }}</p>
          </template>
        </Card>
      </template>
    </Carousel>
  </div>
</template>

<style scoped>
.carousel-title {
  padding-left: 50px;
}
.home-page {
  text-align: left;
}

@media(max-width:800px){
  .home-page{
    width: 80vw;
  }
  
}

.clickable-card {
  cursor: pointer;
  height: 30vh;
  margin: 5px;
  transition: transform 0.3s ease;
}

.clickable-card:hover{
  transform: scale(1.02); 
}
</style>
