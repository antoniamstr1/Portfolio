<script setup>
import Card from "primevue/card";
import Panel from "primevue/panel";
import Button from "primevue/button";
import { ref, onMounted } from "vue";
import TechStackPanel from "../components/TechStackPanel.vue";

const hovered = ref({});

const features = [
  {
    title: "",
    text: "Displayed in the top-right corner of each page, it can be expanded for options or hidden when not needed.",
    img: "/images/velvet/start.png",
    gif: "/videos/velvet/start.gif",
    textClass: "velvet-start-text",
    imageClass: "velvet-start-image",
    asRow: true,
  },
  {
    title: "Writings",
    text: "Allows you to leave notes directly on any page, just like jotting thoughts or scribbles.",
    img: "/images/velvet/writings.png",
    gif: "/videos/velvet/writings.gif",
    textClass: "velvet-writings-text",
    imageClass: "velvet-writings-image",
  },
  {
    title: "Notes",
    text: "You can create post-it notes that always stay visible in the bottom-right corner of the screen.",
    img: "/images/velvet/notes.png",
    gif: "/videos/velvet/notes.gif",
    textClass: "velvet-notes-text",
    imageClass: "velvet-notes-image",
    absolutePosition: true,
  },
  {
    title: "Highlights",
    text: "Selected text can be highlighted in desired color.",
    img: "/images/velvet/highlights.png",
    gif: "/videos/velvet/highlights.gif",
    textClass: "velvet-highlights-text",
    imageClass: "velvet-highlights-image",
  },
  {
    title: "Connections",
    text: "On desired position, leave a reference — a step in a chain of references accessed by arrows.",
    img: "/images/velvet/connections.png",
    gif: "/videos/velvet/connections.gif",
    textClass: "velvet-connections-text",
    imageClass: "velvet-connections-image",
    absolutePosition: true,
  },
  {
    title: "AI Search",
    text: "Selected text is processed through Gemini LLM and returns a short explanation.",
    img: "/images/velvet/ai-search.png",
    gif: "/videos/velvet/ai-search.gif",
    textClass: "velvet-ai-search-text",
    imageClass: "velvet-ai-search-image",
  },
  {
    title: "Groups",
    text: "Group each page by its content or meaning to a custom group.",
    img: "/images/velvet/groups.png",
    gif: "/videos/velvet/groups.gif",
    textClass: "velvet-groups-text",
    imageClass: "velvet-groups-image",
    asRow: true,
  },
];

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 800;
});
</script>

<template>
  <div class="portfolio-container">
    <h1 class="vertical-title">Velvet</h1>

    <Panel class="photo-panel" style="border: none">
      <div>
        <Card :style="{ marginBottom: '20px' }">
          <template #title>The Velvet Project</template>
          <template #content>
            <p class="m-0">
              It is a Chrome extension that allows users to easily store their
              notes, thoughts, and ideas directly in the browser. It is also an
              organizational tool for managing and categorizing saved URLs,
              making it simple to keep track of important links and information
              in one place using Velvet Dashboard.
            </p>
          </template>
        </Card>
      </div>
      <div
        v-for="(feature, index) in features"
        :key="index"
        :class="
          feature.asRow ? 'container-image-text-as-row' : 'container-image-text'
        "
        :style="{
          paddingTop: feature.absolutePosition ? '20vh' : '0',
        }"
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
    </Panel>
    <TechStackPanel
      :data="[
        'js',
        'node',
        'express',
        'react',
        'vite',
        'vitest',
        'docker',
        'render',
        'materialui',
        'postgres',
        'supabase',
        'gemini',
      ]"
      :layout="isMobile ? 'grid-mobile' : 'grid-column'"
    />

    <div class="buttons-container">
      <Button
        label="Github Repo"
        icon="pi pi-github"
        as="a"
        href="https://github.com/antoniamstr1/Velvet"
        target="_blank"
        :style="{ backgroundColor: 'rgb(50, 11, 68)', border: 'none' }"
        rel="noopener noreferrer"
      ></Button>

      <Button
        label="Dashboard"
        icon="pi pi-external-link"
        as="a"
        href="https://velvet-dashboard.onrender.com/"
        target="_blank"
        :style="{ backgroundColor: 'rgb(50, 11, 68)', border: 'none' }"
        rel="noopener noreferrer"
      ></Button>
    </div>
  </div>
</template>

<style scoped>
/* custom design classes for each element */
/* start */
.velvet-start-image {
  width: 40%;
  height: auto;
}
.velvet-start-text {
  width: 20vw;
}
/* writings */
.velvet-writings-image {
  width: 100%;
  height: auto;
}
.velvet-writings-text {
  width: 70%;
  margin-left: auto;
}
/* notes */
.velvet-notes-image {
  width: 80%;
  height: auto;
}
.velvet-notes-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 20vw;
}
/* highlights */
.velvet-highlights-image {
  width: 100%;
  height: auto;
}
.velvet-highlights-text {
  width: 100%;
}
/* connections */
.velvet-connections-image {
  width: 90%;
  height: auto;
}
.velvet-connections-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 35%;
}
/* ai searh */
.velvet-ai-search-image {
  width: 90%;
  height: auto;
}
.velvet-ai-search-text {
  width: 75%;
}
/* groups */
.velvet-groups-image {
  width: 30%;
  height: auto;
}
.velvet-groups-text {
  width: 45%;
}

@media (max-width: 800px) {
  /* videos and images */
  .velvet-start-image {
    width: 70%;
    height: auto;
  }
  .velvet-start-text {
    width: 60%;
  }
  .velvet-writings-text {
    width: 95%;
  }
  .velvet-writings-image {
    width: 90vw;
  }
  .velvet-notes-text {
    width: 90%;
  }

  .velvet-connections-text {
    width: 100%;
  }

  .velvet-groups-image {
    height: 100%;
    width: auto;
  }
}
</style>
