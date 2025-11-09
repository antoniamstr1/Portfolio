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
    <h1 class="vertical-title">Portfolio</h1>

    
    <TechStackPanel
        :data="['js','node','express','react','vite','vitest', 'docker','render']"
        layout="row"/>
  </div>

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
    </div>

</template>

<style scoped>
.velvet-container {
  display: flex;
  flex-direction: column;
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

</style>
