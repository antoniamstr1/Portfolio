<script setup>
import Card from "primevue/card";
import Panel from "primevue/panel";
import Button from "primevue/button";
import { ref } from "vue";

const hovered = ref({});

const features = [
  {
    title: "",
    text: "Displayed in the top-right corner of each page, it can be expanded for options or hidden when not needed.",
    img: "/images/velvet-start.png",
    gif: "/videos/velvet-start.gif",
    textClass: "velvet-start-text",
    imageClass: "velvet-start-image",
    containerHeight: "65vh",
  },
  {
    title: "Writings",
    text: "Allows you to leave notes directly on any page, just like jotting thoughts or scribbles.",
    img: "/images/velvet-writings.png",
    gif: "/videos/velvet-writings.gif",
    textClass: "velvet-writings-text",
    imageClass: "velvet-writings-image",
    containerHeight: "40vh",
  },
  {
    title: "Notes",
    text: "You can create post-it notes that always stay visible in the bottom-right corner of the screen.",
    img: "/images/velvet-notes.png",
    gif: "/videos/velvet-notes.gif",
    textClass: "velvet-notes-text",
    imageClass: "velvet-notes-image",
    containerHeight: "40vh",
  },
  {
    title: "Highlights",
    text: "Selected text can be highlighted in desired color.",
    img: "/images/velvet-highlights.png",
    gif: "/videos/velvet-highlights.gif",
    textClass: "velvet-highlights-text",
    imageClass: "velvet-highlights-image",
    containerHeight: "40vh",
  },
  {
    title: "Connections",
    text: "On desired position, leave a reference — a step in a chain of references accessed by arrows.",
    img: "/images/velvet-connections.png",
    gif: "/videos/velvet-connections.gif",
    textClass: "velvet-connections-text",
    imageClass: "velvet-connections-image",
    containerHeight: "50vh",
  },
  {
    title: "AI Search",
    text: "Selected text is processed through Gemini LLM and returns a short explanation.",
    img: "/images/velvet-ai-search.png",
    gif: "/videos/velvet-ai-search.gif",
    textClass: "velvet-ai-search-text",
    imageClass: "velvet-ai-search-image",
    containerHeight: "40vh",
  },
  {
    title: "Groups",
    text: "Group each page by its content or meaning to a custom group.",
    img: "/images/velvet-groups.png",
    gif: "/videos/velvet-groups.gif",
    textClass: "velvet-groups-text",
    imageClass: "velvet-groups-image",
    containerHeight: "50vh",
  },
];
</script>

<!--     title: "What exactly is it?",
    text: "It is a Chrome extension that allows users to easily store their notes, thoughts, and ideas directly in the browser..." -->
<template>
  <div class="page">
    <h1 class="vertical-title">Velvet</h1>
    <div class="panel-container">
      <Panel class="photo-panel" style="border: none">
        <div>
          <Card :style="{ marginBottom: '20px' }">
            <template #title>What exactly is it?</template>
            <template #content>
              <p class="m-0">
                It is a Chrome extension that allows users to easily store their
                notes, thoughts, and ideas directly in the browser. It is also
                an organizational tool for managing and categorizing saved URLs,
                making it simple to keep track of important links and
                information in one place using Velvet Dashboard.
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
      <Card class="techstack-panel">
        <template #content>
          <div class="techstack">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/techstack-icons/js.png"
                alt="js"
                class="techstack-image"
              />
            </a>
            <a
              href="https://nodejs.org/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/techstack-icons/node.png"
                alt="node"
                class="techstack-image"
              />
            </a>
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/techstack-icons/express.png"
                alt="express"
                class="techstack-image"
              />
            </a>
            <a
              href="https://supabase.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/techstack-icons/supabase.png"
                alt="supabase"
                class="techstack-image"
              />
            </a>
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/techstack-icons/react.png"
                alt="react"
                class="techstack-image"
              />
            </a>
            <a
              href="https://mui.com/material-ui/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/techstack-icons/materialui.png"
                alt="react"
                class="techstack-image"
              />
            </a>
            <a
              href="https://vite.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/techstack-icons/vite.png"
                alt="vite"
                class="techstack-image"
              />
            </a>
            <a
              href="https://vitest.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/techstack-icons/vitest.png"
                alt="vitest"
                class="techstack-image"
              />
            </a>
            <a
              href="http://docker.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/techstack-icons/docker.png"
                alt="render"
                class="techstack-image"
              />
            </a>
            <a
              href="https://render.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/techstack-icons/render.png"
                alt="render"
                class="techstack-image"
              />
            </a>
          </div>
        </template>
      </Card>
    </div>

    <div class="buttons-container">
      <Button
        label="Github Repo"
        icon="pi pi-github"
        as="a"
        href="https://github.com/antoniamstr1/Velvet"
        target="_blank"
        rel="noopener noreferrer"
      />

      <Button
        label="Dashboard"
        icon="pi pi-external-link"
        as="a"
        href="https://velvet-dashboard.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  </div>
</template>

<style scoped>
.buttons-container {
  position: absolute;
  top: 30vh;
  left: 3em;
  display: flex;
  flex-direction: column;
  gap: 5vh;
}
.vertical-title {
  /* vertical direction */
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 5rem;
  font-weight: bold;
  transform: rotate(180deg);

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
.panel-container {
  display: flex;
  flex-direction: row;
  gap: 4rem;
}

@media (max-width: 800px) {
  .panel-container {
    flex-direction: column;
    align-items: center;
  }
}

.photo-panel {
  width: 50vw;
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

.techstack-panel {
  height: auto;
}

.hover-gif {
  height: auto;
  transition: opacity 0.3s ease;
  object-fit: cover;
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.1);
}

.card-velvet {
  position: absolute;
  background-color: rgb(248, 248, 248);
  z-index: 1;
}
/* custom design classes for each element */
/* start */
.velvet-start-image {
  position: absolute;
  right: 0;
  top: 0;
  width: 60%;
  height: auto;
}
.velvet-start-text {
  left: 0;
  top: 40%;
  width: 20vw;
}
/* writings */
.velvet-writings-image {
  width: 100%;
  height: auto;
  top: 10%;
}
.velvet-writings-text {
  left: 10%;
  top: -5%;
  width: 20vw;
}
/* notes */
.velvet-notes-image {
  position: absolute;
  right: 0;
  top: 0;
  width: 80%;
  height: auto;
}
.velvet-notes-text {
  left: 5%;
  top: 35%;
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
  top: 1vh;
  width: 100%;
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
  top: 30%;
  right: 0;
  width: 90%;
  height: auto;
}
.velvet-ai-search-text {
  top: 0%;
  width: 75%;
  right: 0%;
}
/* groups */
.velvet-groups-image {
  position: absolute;
  top: 5vh;
  right: 10vw;
  width: 15vw;
  height: auto;
  margin-bottom: 20vh;
}
.velvet-groups-text {
  top: 20vh;
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
