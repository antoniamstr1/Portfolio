<script setup>
import Menubar from "primevue/menubar";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const items = ref([
  {
    label: "Antonia",
    command: () => router.push("/"),
  },
  {
    label: "Projects",
    items: [
      { label: "Velvet", command: () => router.push("/velvet") },
      { label: "FeelGPT", command: () => router.push("/feelGPT") },
    ],
  },
  {
    label: "CV",
    command: () => router.push("/cv"),
  },
]);
</script>

<template>
  <Menubar :model="items" class="menubar" />
</template>

<style scoped>
.menubar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>
