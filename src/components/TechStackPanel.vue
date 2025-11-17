<script setup>
import { computed } from "vue";
import Card from "primevue/card";

const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: [],
  },
  layout: {
    type: String,
    required: false,
    default: "column",
  },
});

const techList = [
  {
    name: "visage",
    link: "https://visagetechnologies.com/visage-sdk/",
    icon: "/images/techstack-icons/visage.png",
  },
  {
    name: "js",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "/images/techstack-icons/js.png",
  },
  {
    name: "ts",
    link: "",
    icon: "/images/techstack-icons/ts.png",
  },
    {
    name: "html",
    link: "",
    icon: "/images/techstack-icons/html.png",
  },
  {
    name: "css",
    link: "",
    icon: "/images/techstack-icons/css.png",
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
    name: "react",
    link: "https://react.dev/",
    icon: "/images/techstack-icons/react.png",
  },
  {
    name: "vue",
    link: "https://vuejs.org/",
    icon: "/images/techstack-icons/vue.png",
  },
  {
    name: "primevue",
    link: "https://primevue.org/",
    icon: "/images/techstack-icons/primevue.png",
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
    name: "jest",
    link: "https://jestjs.io/",
    icon: "/images/techstack-icons/jest.webp",
  },
  {
    name: "postgres",
    link: "https://www.postgresql.org/download/",
    icon: "/images/techstack-icons/postgres.png",
  },
  {
    name: "supabase",
    link: "https://supabase.com/",
    icon: "/images/techstack-icons/supabase.png",
  },
  {
    name: "mongodb",
    link: "https://www.mongodb.com/",
    icon: "/images/techstack-icons/mongodb.png",
  },
  {
    name: "c",
    link: "",
    icon: "/images/techstack-icons/c.png",
  },
  {
    name: "c++",
    link: "",
    icon: "/images/techstack-icons/c++.webp",
  },
  {
    name: "c#",
    link: "",
    icon: "/images/techstack-icons/csharp.png",
  },
  {
    name: "dotnet",
    link: "https://dotnet.microsoft.com/en-us/",
    icon: "/images/techstack-icons/dotnet.png",
  },
  {
    name: "python",
    link: "https://www.python.org/",
    icon: "/images/techstack-icons/python.png",
  },
  {
    name: "flask",
    link: "https://flask.palletsprojects.com/en/stable/",
    icon: "/images/techstack-icons/flask.webp",
  },

  //python modules
  {
    name: "scipy",
    link: "https://scipy.org/",
    icon: "/images/techstack-icons/scipy.png",
  },
  {
    name: "numpy",
    link: "https://numpy.org/",
    icon: "/images/techstack-icons/numpy.png",
  },
  {
    name: "scikit",
    link: "https://scikit-learn.org/stable/",
    icon: "/images/techstack-icons/scikit-learn.png",
  },
  {
    name: "matplotlib",
    link: "https://matplotlib.org/",
    icon: "/images/techstack-icons/matplotlib.png",
  },
  {
    name: "jupyter",
    link: "https://jupyter.org/",
    icon: "/images/techstack-icons/jupyter.png",
  },
  
  {
    name: "mlconjug3",
    link: "https://mlconjug3.readthedocs.io/en/latest/usage.html",
    icon: "/images/techstack-icons/mlconjug.png",
  },
  {
    name: "freedictapi",
    link: "https://freedictionaryapi.com/",
    icon: "/images/techstack-icons/freedictapi.png",
  },

  {
    name: "git",
    link: "https://git-scm.com/",
    icon: "/images/techstack-icons/git.png",
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
  {
    name: "azure",
    link: "https://azure.microsoft.com/en-us/",
    icon: "/images/techstack-icons/azure.png",
  },

  {
    name: "gemini",
    link: "https://www.npmjs.com/package/@google/genai",
    icon: "/images/techstack-icons/gemini.webp",
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
      <div :class="['techstack', layout]">
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
.techstack-panel {
  height: fit-content;
}
.techstack.column {
  display: flex;
  flex-direction: column;
  gap: 2vh;
  align-items: center;
}
.techstack.row {
  display: flex;
  flex-direction: row;
  gap: 2vh;
  align-items: center;
}

.techstack.grid-mobile {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 5vh;
  justify-content: center;
  align-items: center;
}

.techstack.grid-row {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: auto;
  gap: 1vw;
  justify-content: center;
  align-items: center;
}
.techstack.grid-column {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(9, auto);
  gap: 1vw;
  grid-auto-flow: column;
}
.techstack-image {
  width: 6vh;
}
</style>
