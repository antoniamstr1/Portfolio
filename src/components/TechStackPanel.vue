<script setup>
import { computed } from "vue";
import Card from "primevue/card";

const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: [],
  },
});

const techList = [
  {
    name: "js",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "/images/techstack-icons/js.png",
  },
  {
    name: "node",
    link: "https://nodejs.org/en",
    icon: "/images/techstack-icons/node.png",
  },
  {
    name: "express",
    link: "https://expressjs.com/",
    icon: "/images/techstack-icons/express.png",
  },
  {
    name: "supabase",
    link: "https://supabase.com/",
    icon: "/images/techstack-icons/supabase.png",
  },
  {
    name: "react",
    link: "https://react.dev/",
    icon: "/images/techstack-icons/react.png",
  },
  {
    name: "materialui",
    link: "https://mui.com/material-ui/",
    icon: "/images/techstack-icons/materialui.png",
  },
  {
    name: "vite",
    link: "https://vite.dev/",
    icon: "/images/techstack-icons/vite.png",
  },
  {
    name: "vitest",
    link: "https://vitest.dev/",
    icon: "/images/techstack-icons/vitest.png",
  },
  {
    name: "docker",
    link: "http://docker.com/",
    icon: "/images/techstack-icons/docker.png",
  },
  {
    name: "render",
    link: "https://render.com/",
    icon: "/images/techstack-icons/render.png",
  },
];

const displayedTechList = computed(() => {
  return techList.filter((el) => props.data.includes(el.name));
});
</script>

<template>
  <Card class="techstack-panel">
    <template #title></template>
    <template #content>
      <div class="techstack">
        <a
          v-for="tech in displayedTechList"
          :key="tech.name"
          :href="tech.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="tech.icon" :alt="tech.name" class="techstack-image" />
        </a>
      </div>
    </template>
  </Card>
</template>

<style scoped>
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
