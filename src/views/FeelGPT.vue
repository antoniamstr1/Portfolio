<script setup>
import Card from "primevue/card";
import Panel from "primevue/panel";
import Button from "primevue/button";
import Fieldset  from "primevue/fieldset";
import { ref, onMounted } from "vue";
import TechStackPanel from "../components/TechStackPanel.vue";

const hovered = ref({});

const features = [
  {
    title: "",
    text: "This project develops an AI-powered chatbot that adapts its communication style based on the user's emotional state, detected through real-time facial analysis with emotion-detection technology (visage|SDK FaceAnalysis) using a webcam or selfie camera.",
    img: "/images/feelgpt/chat.png",
    gif: "/videos/feelgpt/chat.gif",
    textClass: "feelgpt-chat-text",
    imageClass: "feelgpt-chat-image",
  },
  {
    title: "",
    text: "Additional features include a comprehensive chat history, enabling users to revisit past conversations...",
    img: "/images/feelgpt/chat-history.png",
    gif: "/videos/feelgpt/chat-history.gif",
    textClass: "feelgpt-chat-history-text",
    imageClass: "feelgpt-chat-history-image",
  },
  {
    title: "",
    text: "...a graph and a mood tracker that visually map emotional trends over time, providing insights into their emotional journey.",
    img: "/images/feelgpt/mood-tracker.png",
    gif: "/videos/feelgpt/mood-tracker.gif",
    textClass: "feelgpt-mood-tracker-text",
    imageClass: "feelgpt-mood-tracker-image",
  },
];

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 800;
});
</script>

<template>
  <div class="portfolio-container">
    <h1 class="vertical-title">The FeelGPT</h1>

    <Panel class="photo-panel" style="border: none">
      <div>
        <Card :style="{ marginBottom: '20px' }">
          <template #title>The FeelGPT Project</template>
          <template #content>
            <p class="m-0">
              University project done for the Distributed Software Development
              course under the mentorship of the Visage technologies with the
              MDU univesity in Sweden.
            </p>
          </template>
        </Card>
        
      </div>
      <div
        v-for="(feature, index) in features"
        :key="index"
        :class="['container-image-text']"
        
      >
      <Card :class="['card-velvet', feature.textClass]">
          <template #title>{{ feature.title }}</template>
          <template #content>
            <p>{{ feature.text }}</p>
          </template>
        </Card>
        <div class="gif-wrapper">
          <img
            :src="hovered[index] ? feature.gif : feature.img"
            @mouseenter="hovered[index] = true"
            @mouseleave="hovered[index] = false"
            :class="['hover-gif', feature.imageClass]"
            loading="lazy"
          />
        </div>

        
      </div>

      <Fieldset class="left" legend="Deployment">
    <p >
        The preview of the project is not possible because the visage|SDK
            licence expired.</p>
</Fieldset>
    </Panel>
    <TechStackPanel
      :data="[
        'js',
        'node',
        'express',
        'react',
        'jest',
        'docker',
        'azure',
        'postgres',
        'monogodb',
        'jest',
        'visage',
      ]"
      :layout="isMobile ? 'grid-mobile' : 'column'"
    />

    <div class="buttons-container">
      <Button
        label="Github Repo"
        icon="pi pi-github"
        as="a"
        href="https://github.com/AntonioMisic77/FeelGPT"
        target="_blank"
        :style="{border: 'none' }"
        rel="noopener noreferrer"
      ></Button>

      <Button
        label="DSD Project page"
        icon="pi pi-external-link"
        as="a"
        href="https://www.fer.unizg.hr/rasip/dsd/feelgpt/project_description#"
        target="_blank"
        :style="{ border: 'none' }"
        rel="noopener noreferrer"
      ></Button>
    </div>
  </div>
</template>

<style scoped>
.left{
  text-align: left;
  width: fit-content;
}
.feelgpt-chat-image{
  width:100%;

}
.feelgpt-chat-text{
  max-width:100%;

}

.feelgpt-chat-history-image{
  width:100%;
}
.feelgpt-chat-history-text{
  max-width:90%;
  margin-left: auto;
}

.feelgpt-mood-tracker-image{
  width:80%;
  left:0;
  margin-right: auto;

}
.feelgpt-mood-tracker-text{
  max-width:90%;
  margin-left: auto;
}
@media (max-width: 800px) {

  .feelgpt-mood-tracker-image{
  width:100%;
  left:0;
  margin-right: auto;

}
}
</style>
