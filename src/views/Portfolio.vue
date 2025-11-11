<script setup>
import Card from "primevue/card";
import Panel from "primevue/panel";
import Button from "primevue/button";
import { ref, onMounted } from "vue";
import TechStackPanel from "../components/TechStackPanel.vue";

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 800;
});
</script>

<template>
  <div class="portfolio-container">
    <h1 class="vertical-title">Portfolio</h1>
    <Panel class="photo-panel" style="border: none">
      <Card :style="{ marginBottom: '20px' }">
        <template #title>The Portfolio Project</template>
        <template #content>
          <p class="m-0">
            It is a Vue 3 web page made to showcase the previus project and give
            progress info on the current ones. Gives info about the features
            throught animations, used technologies and project links.
          </p>
        </template>
      </Card>
      <div class="responsive-info">
        <img src="/images/responsive.png" class="responsive-img" />
        <p class="left">Responsive design for mobile and desktop</p>
      </div>
      <div class="responsive-info">
        <img src="/images/mode.png" class="responsive-img" />
        <p class="left">Dark and light mode</p>
      </div>
      <div class="responsive-info">
        <img src="/images/video.png" class="responsive-img" />
        <p class="left">Video snippets of features on hover</p>
      </div>
    </Panel>

    <TechStackPanel
      :data="['js', 'vue', 'primevue', 'vite', 'render']"
      :layout="isMobile ? 'grid-mobile' : 'column'"
    />

    <div class="buttons-container">
      <Button
        label="Github Repo"
        icon="pi pi-github"
        as="a"
        href="https://github.com/antoniamstr1/Portfolio"
        target="_blank"
        :style="{ border: 'none' }"
        rel="noopener noreferrer"
      ></Button>
    </div>
  </div>
</template>

<style scoped>
.left {
  text-align: left;
  margin-left: 1rem;
}
.responsive-info {
  display: flex;
  align-items: center;
  gap: 1vw;
}

@media (max-width) {
  .responsive-info {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
.responsive-img {
  width: 2rem;
  height: auto;
}
</style>
