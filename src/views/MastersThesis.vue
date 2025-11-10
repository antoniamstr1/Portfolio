<script setup>
import Card from "primevue/card";
import Panel from "primevue/panel";
import Button from "primevue/button";
import { ref, onMounted } from "vue";
import TechStackPanel from "../components/TechStackPanel.vue";
import Fieldset  from "primevue/fieldset";

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 800;
});
</script>

<template>
  <div class="portfolio-container">
    <h1 class="vertical-title">MSc thesis</h1>

    <Panel class="photo-panel" style="border: none">
      <div>
        <Card :style="{ marginBottom: '20px' }">
          <template #title>Spectral Data Clustering</template>
          <template #content>
            <p class="m-0">
This paper explains selected clustering methods with an emphasis on spectral
clustering. Alongside the 𝑘-means algorithm as a partitioning clustering method, spectral
clustering methods using the Fiedler vector of the Laplacian matrix and three alternative
methods are presented: the normalized cut method, the NJW method, and the KVV method.
In the second part of the paper, the mentioned algorithms are implemented and analyzed
depending on input parameters and similarity measures. Applications of spectral clustering
are demonstrated on examples of image segmentation and high-dimensional data from the
MNIST dataset.            </p>
          </template>
        </Card>
        <Fieldset class="left" legend="Content">
    <p >
        Work in progress..</p>
</Fieldset>
      </div>
      <!-- <div
        v-for="(feature, index) in features"
        :key="index"
        :class="['container-image-text']"
      >
        <div class="gif-wrapper">
          <img
            :src="hovered[index] ? feature.gif : feature.img"
            @mouseenter="hovered[index] = true"
            @mouseleave="hovered[index] = false"
            :class="['hover-gif', feature.imageClass]"
            loading="lazy"
          />
        </div>

        <Card :class="['card-velvet', feature.textClass]">
          <template #title>{{ feature.title }}</template>
          <template #content>
            <p>{{ feature.text }}</p>
          </template>
        </Card>
      </div> -->
    </Panel>
    <TechStackPanel
      :data="[
        'python', 'scipy','numpy','scikit','matplotlib','jupyter'
      ]"
      :layout="isMobile ? 'grid-mobile' : 'column'"
    />

    <div class="buttons-container">
      <Button
        label="Github Repo"
        icon="pi pi-github"
        as="a"
        href="https://github.com/antoniamstr1/diplomski_rad"
        target="_blank"
        :style="{ border: 'none' }"
        rel="noopener noreferrer"
      ></Button>

      
    </div>
  </div>
</template>

<style scoped>

@media (max-width: 800px) {

}
</style>
