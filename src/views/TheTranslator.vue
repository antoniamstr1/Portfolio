<script setup>
import Card from "primevue/card";
import Panel from "primevue/panel";
import Button from "primevue/button";
import Fieldset from "primevue/fieldset";
import { ref, onMounted } from "vue";
import TechStackPanel from "../components/TechStackPanel.vue";

const hovered = ref({});

const features = [
  {
    title: "",
    text: "User text is divided into words, and for each word, its type, translation, and verb conjugation (if applicable) are retrieved.",
    img: "/images/thetranslator/italian-translation.png",
    gif: "/videos/thetranslator/italian-translation.gif",
    textClass: "thetranslator-italian-text",
    imageClass: "thetranslator-italian-image",
  },
];

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 800;
});
</script>

<template>
  <div class="portfolio-container">
    <h1 class="vertical-title">TheTranslator</h1>

    <Panel class="photo-panel" style="border: none">
      <div>
        <Card :style="{ marginBottom: '20px' }">
          <template #title>The Translator Project</template>
          <template #content>
            <p class="m-0">
              Web application build with .NET and React for multilanguage
              analysis and translation of texts using 3rd party API and Python
              library from Flask service.
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
        <img
          :src="hovered[index] ? feature.gif : feature.img"
          @mouseenter="hovered[index] = true"
          @mouseleave="hovered[index] = false"
          :class="['hover-gif', feature.imageClass]"
          loading="lazy"
        />
      </div>
      <div class="additional-info">
        <Card :style="{ marginBottom: '20px' }">
          <template #content>
            <p class="m-0">
              Words are displayed as clickable elements which are expanded with
              its details.
            </p>
          </template>
        </Card>
        <Card :style="{ marginBottom: '20px' }">
          <template #content>
            <p class="m-0">Users can choose between Italian and Spanish.</p>
          </template>
        </Card>
        <Card :style="{ marginBottom: '20px' }">
          <template #content>
            <p class="m-0">Words are deduplicated and normalized.</p>
          </template>
        </Card>
      </div>

      <Fieldset class="left" legend="Features to be added">
        <div class="responsive-info">
          <img src="/images/checkbox.png" class="responsive-img" />
          <p>
            mark words by level of dificulty (easy, medium, hard) and their
            display
          </p>
        </div>
        <div class="responsive-info">
          <img src="/images/checkbox.png" class="responsive-img" />
          <p>pin the most interesting words in translation</p>
        </div>
        <div class="responsive-info">
          <img src="/images/checkbox.png" class="responsive-img" />
          <p>
            user profiles with option to save translated texts and marked words
          </p>
        </div>

        <div class="responsive-info">
          <img src="/images/checkbox.png" class="responsive-img" />
          <p>responsivness</p>
        </div>
      </Fieldset>
    </Panel>
    <TechStackPanel
      :data="[
        'ts',
        'react',
        'vite',
        'c#',
        'dotnet',
        'docker',
        'render',
        'supabase',
        'postgres',
        'python',
        'flask',
        'mlconjug3',
        'freedictapi',
      ]"
      :layout="isMobile ? 'grid-mobile' : 'grid-column'"
    />

    <div class="buttons-container">
      <Button
        label="The Translator Github Repo"
        icon="pi pi-github"
        as="a"
        href="https://github.com/antoniamstr1/TheTranslator"
        target="_blank"
        :style="{ border: 'none' }"
        rel="noopener noreferrer"
      ></Button>
      <Button
        label="Flask Github Repo"
        icon="pi pi-github"
        as="a"
        href="https://github.com/antoniamstr1/ConjugationsAPI"
        target="_blank"
        :style="{ border: 'none' }"
        rel="noopener noreferrer"
      ></Button>

      <Button
        label="TheTranslator"
        icon="pi pi-external-link"
        as="a"
        href="https://thetranslatorapp.onrender.com/"
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
  width: fit-content;
}
.thetranslator-italian-image {
  width: 100%;
}

.thetranslator-italian-text {
  width: 70%;
  margin-left: auto;
}
.additional-info {
  display: flex;
  gap: 1.5rem;
}
.responsive-info {
  display: flex;
  align-items: center;
  gap: 1vw;
}
.responsive-img {
  width: 1rem;
  height: auto;
}

@media (max-width: 800px) {
  .feelgpt-mood-tracker-image {
    width: 100%;
    left: 0;
    margin-right: auto;
  }
}
</style>
