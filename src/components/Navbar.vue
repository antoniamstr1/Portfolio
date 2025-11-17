<script setup>
import Menubar from "primevue/menubar";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const items = ref([
  {
    label: "Antonia",
    command: () => router.push("/"),
    img: "/images/antonia.png"
  },
  {
    label: "Projects",
    items: [
      { label: "Velvet", command: () => router.push("/velvet") },
      { label: "FeelGPT", command: () => router.push("/feelGPT") },
      { label: "TheTranslator", command: () => router.push("/theTranslator") },
      { label: "Master's thesis", command: () => router.push("/masters-thesis") },
      { label: "Portfolio", command: () => router.push("/portfolio") },
      
    ],
  },
  {
    label: "CV",
    command: () => router.push("/cv"),
  },
]);
</script>

<template>
  <Menubar :model="items" class="menubar">
  <!-- <template #item="{ item }">
    <a @click="item.command">
      <img v-if="item.img" :src="item.img" class="menu-icon" />
      <span v-else>{{ item.label }}</span>
    </a>
  </template> -->
  </Menubar>
</template>

<style scoped>

.menubar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
.menu-icon{
  height: 3rem;
  width: auto;
}
</style>
