<script setup>
import Card from "primevue/card";
import Panel from "primevue/panel";
import Button from "primevue/button";
import { ref } from "vue";
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
    containerHeight: "65vh",
  },
  {
    title: "Writings",
    text: "Allows you to leave notes directly on any page, just like jotting thoughts or scribbles.",
    img: "/images/velvet/writings.png",
    gif: "/videos/velvet/writings.gif",
    textClass: "velvet-writings-text",
    imageClass: "velvet-writings-image",
    containerHeight: "40vh",
  },
  {
    title: "Notes",
    text: "You can create post-it notes that always stay visible in the bottom-right corner of the screen.",
    img: "/images/velvet/notes.png",
    gif: "/videos/velvet/notes.gif",
    textClass: "velvet-notes-text",
    imageClass: "velvet-notes-image",
    containerHeight: "40vh",
  },
  {
    title: "Highlights",
    text: "Selected text can be highlighted in desired color.",
    img: "/images/velvet/highlights.png",
    gif: "/videos/velvet/highlights.gif",
    textClass: "velvet-highlights-text",
    imageClass: "velvet-highlights-image",
    containerHeight: "40vh",
  },
  {
    title: "Connections",
    text: "On desired position, leave a reference — a step in a chain of references accessed by arrows.",
    img: "/images/velvet/connections.png",
    gif: "/videos/velvet/connections.gif",
    textClass: "velvet-connections-text",
    imageClass: "velvet-connections-image",
    containerHeight: "50vh",
  },
  {
    title: "AI Search",
    text: "Selected text is processed through Gemini LLM and returns a short explanation.",
    img: "/images/velvet/ai-search.png",
    gif: "/videos/velvet/ai-search.gif",
    textClass: "velvet-ai-search-text",
    imageClass: "velvet-ai-search-image",
    containerHeight: "40vh",
  },
  {
    title: "Groups",
    text: "Group each page by its content or meaning to a custom group.",
    img: "/images/velvet/groups.png",
    gif: "/videos/velvet/groups.gif",
    textClass: "velvet-groups-text",
    imageClass: "velvet-groups-image",
    containerHeight: "50vh",
  },
];
</script>

<template>
  <div class="velvet-container">
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
        :class="['container-image-text']"
        :style="{ height: feature.containerHeight }"
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
            <p class="m-0">{{ feature.text }}</p>
          </template>
        </Card>
      </div>
    </Panel>
    <TechStackPanel
        :data="['js','node','express','react','vite','vitest', 'docker','render']"
    />
    

    <div class="buttons-container" >
      <Button
        label="Github Repo"
        icon="pi pi-github"
        as="a"
        href="https://github.com/antoniamstr1/Velvet"
        target="_blank"
        :style="{ backgroundColor:  'rgb(50, 11, 68)', border:'none' }"
        rel="noopener noreferrer"

      ></Button>

      <Button
        label="Dashboard"
        icon="pi pi-external-link"
        as="a"
        href="https://velvet-dashboard.onrender.com/"
        target="_blank"
        :style="{ backgroundColor: 'rgb(50, 11, 68)', border:'none' }"
        rel="noopener noreferrer"
      ></Button>
    </div>
  </div>
</template>

<style scoped>
.velvet-container {
  display: flex;
  flex-direction: row;
  margin-top: 5vh;

}
.buttons-container {

  display: flex;
  flex-direction: column;
  gap: 5vh;
  margin-left: 5vh;
  margin-top: 5vh;
}
.vertical-title {
  /* vertical direction */
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 5rem;
  font-weight: bold;
  transform: rotate(180deg);
  color: rgb(50, 11, 68);

  /* positioning to the left */
  position: absolute;
  left: 0;
  bottom: 10vh; 
}

@media (max-width: 800px) {
  .vertical-title {
    writing-mode: horizontal-tb;
    text-orientation: mixed;
    transform: none;
    font-size: 3rem;
    position: static;
    bottom: auto;
  }
}

@media (max-width: 800px) {
  .panel-container {
    flex-direction: column;
    align-items: center;
  }
}

.teckstack{
  margin-top: 5vh;
}

.photo-panel {
  width: 60vw;
  height: 80vh;
  overflow-y: scroll;
  box-sizing: border-box;
  scrollbar-width: none;
}

.container-image-text {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10vh;
}

.hover-gif {
  height: auto;
  transition: opacity 0.3s ease;
  object-fit: cover;
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.2);
}

.card-velvet {
  position: absolute;
  background-color: rgb(249, 249, 249);
  z-index: 1;
}
/* custom design classes for each element */
/* start */
.velvet-start-image {
  position: absolute;
  right: 5vw;
  top: 0;
  width: 50%;
  height: auto;
}
.velvet-start-text {
  left: 3vh;
  top: 40%;
  width: 20vw;
}
/* writings */
.velvet-writings-image {
  width: 100%;
  height: auto;
  top: 20%;
}
.velvet-writings-text {
  left: 15%;
  top: -5%;
  width: 20vw;
}
/* notes */
.velvet-notes-image {
  position: absolute;
  right: 0;
  top: -5%;
  width: 80%;
  height: auto;
}
.velvet-notes-text {
  left: 5%;
  top: 25%;
  width: 20vw;
}
/* highlights */
.velvet-highlights-image {
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
}
.velvet-highlights-text {
  width: 100%;
  top: 5%;
}
/* connections */
.velvet-connections-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 90%;
  height: auto;
}
.velvet-connections-text {
  top: 10%;
  width: 35%;
  left: 0%;
}
/* ai searh */
.velvet-ai-search-image {
  position: absolute;
  top: 60%;
  right: 0;
  width: 90%;
  height: auto;
}
.velvet-ai-search-text {
  top: 30%;
  width: 75%;
  right: 0%;
}
/* groups */
.velvet-groups-image {
  position: absolute;
  top: 40%;
  right: 20%;
  width: 30%;
  height: auto;
  margin-bottom: 20vh;
}
.velvet-groups-text {
  top: 60%;
  width: 45%;
  left: 10%;
}

.techstack {
  display: flex;
  flex-direction: column;
  gap: 2vh;
  align-items: center;
}

.techstack-image {
  width: 6vh;
}
</style>
