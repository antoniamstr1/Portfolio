<script setup>
import Navbar from "./components/Navbar.vue";

</script>

<template>
  <Navbar />
  <div>
    <router-view />
  </div>
</template>

<style>
.velvet-container {
  display: flex;
  flex-direction: row;
  margin-top: 5vh;
}
@media (max-width: 768px) {
  .velvet-container {
    display: flex;
    flex-direction: column;
  }
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

.teckstack {
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

  @media (max-width: 800px) {
  .velvet-container {
    align-items: center;
  }
  .panel-container {
    flex-direction: column;
    align-items: center;
  }
  .photo-panel {
    height: auto;
    width: 100%;
  }
  .vertical-title {
    writing-mode: horizontal-tb;
    transform: none;
    font-size: 3rem;
    position: static;
    margin: 0;
  }
  
  .card-velvet{
    font-size: smaller;
  }
  .buttons-container {
    margin-left: 0;
    width: fit-content;
    gap: 1vh;
  }


}
</style>