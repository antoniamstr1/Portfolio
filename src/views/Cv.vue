<script setup>
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";
import Card from "primevue/card";
import Button from "primevue/button";
import TechStackPanel from "../components/TechStackPanel.vue";
import Fieldset from "primevue/fieldset";
import { useRouter } from "vue-router";
const router = useRouter();
const openPDF = (type) => {
  if (type === "mdu") window.open("/pdfs/mdu.pdf", "_blank");
  if (type === "cv") window.open("/pdfs/cv.pdf", "_blank");
  if (type === "cv") window.open("/pdfs/letter.pdf", "_blank");
};
</script>

<template>
  <div class="cv-container">
    <Tabs value="0">
      <TabList>
        <Tab value="0">About me</Tab>
        <Tab value="1">Professional experience</Tab>
        <Tab value="2">Education</Tab>
        <Tab value="3">Skills</Tab>
        <Tab value="4">Languages</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <p class="left">
            Software Engineering Master’s graduate seeking an opportunity to
            grow as a developer, apply academic knowledge, and gain hands-on
            experience in full-stack development.
            <Card class="contact-card">
              <template #title>Contact</template>
              <template #content>
                <p class="left">
                  Velika Gorica, Croatia<br />
                  0093145837<br />
                  <a href="mailto:mestrovic.antonia@gmail.com">
                  mestrovic.antonia@gmail.com</a>
                </p>
              </template>
            </Card>
            <Button style="margin-top: 5vh" @click="openPDF('cv')">CV</Button>
          </p>
        </TabPanel>
        <TabPanel value="1">
          <p class="left">February 2025 - July 2025</p>
          <Fieldset
            legend="STUDENT WEB DEVELOPER – VISAGE TECHNOLOGIES"
            class="left"
          >
            <p class="left">
              Collaborated in two cross-functional teams on separate projects in
              two divisions using different tech stacks:
              <br /><br /><b>React, JavaScript, Node.js:</b> Contributed to the
              development of an LLMpowered web application. <br /><br /><b
                >Vue, TypeScript, Directus:</b
              >
              Assisted in building and maintaining a content management system
              (CMS). <br /><br /><Button @click="openPDF('letter')"
                >letter of recommendation</Button
              >
            </p>
          </Fieldset>
        </TabPanel>
        <TabPanel value="2">
          <p class="left">October 2023 - July 2025</p>
          <Fieldset legend="MASTER OF ENGINEERING IN COMPUTING" class="left">
            <p class="left">
              FACULTY OF ELECTRICAL ENGINEERING AND COMPUTING, UNIVERSITY OF
              ZAGREB, ZAGREB
              <br />
              Graduate Study Programme: Software Engineering and Information
              Systems
            </p>
          </Fieldset>
          <br />
          <p class="left">September 2020 - July 2023</p>
          <Fieldset legend="BACHELOR OF ENGINEERING IN COMPUTING" class="left">
            <p class="left">
              FACULTY OF ELECTRICAL ENGINEERING AND COMPUTING, UNIVERSITY OF
              ZAGREB, ZAGREB
              <br />
              Undergraduate Study Programme: Computing
            </p>
          </Fieldset>
        </TabPanel>
        <TabPanel value="3">
          <TechStackPanel
            :data="[
              'python',
              'js',
              'ts',
              'react',
              'vue',
              'node',
              'express',
              'postgres',
              'mongodb',
              'c',
              'c++',
              'git',
            ]"
            layout="grid-row"
          ></TechStackPanel>
          <Fieldset
            legend="Academic projects"
            class="left academic-projects-container"
          >
            <p class="left">
              <u>CROZ project</u>
              <br />
              As part of the Software Engineering course, I participated in the
              development of a full-stack application under the mentorship from
              CROZ. My role was <b>backend developer</b> – Spring Boot.
            </p>
            <p class="left">
              <u>Visage project</u>
              <br />
              As part of the Distributed Software Development course, I worked
              on the FeelGPT project under the guidance of Visage Technologies
              in collaboration with Mälardalen University (MDU). My role was
              <b>frontend developer</b> in React.js (a full-stack web
              application using React and Node.js that integrates a LLM).
            </p>
            <div class="buttons-container">
              <Button @click="openPDF('letter')"
                >Course Certificate from MDU</Button
              >
              <Button label="Open PDF" @click="() => router.push('/FeelGPT')"
                >FeelGPT</Button
              >
            </div>
          </Fieldset>
        </TabPanel>
        <TabPanel value="4">
          <div class="left flag-container">
            <img
              class="flag"
              src="/images/languages/english.png"
              alt="English"
            />
            <p>English</p><p style="color: gray;">(C1)</p>
          </div>
          <div class="left flag-container">
            <img class="flag" src="/images/languages/italy.png" alt="Italian" />
            <p>Italian</p><p style="color: gray;">(B1)</p>
          </div>
          <div class="left flag-container">
            <img class="flag" src="/images/languages/german.png" alt="German" />
            <p>German</p><p style="color: gray;">(B1)</p>
          </div>
          <div class="left flag-container">
            <img class="flag" src="/images/languages/spain.png" alt="German" />
            <p>Spanish</p><p style="color: gray;">(beginner)</p>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<style scoped>
.cv-container{
  position: fixed;
  top: 10vh;
  left: 50%;
  transform: translateX(-50%);
}
.left {
  text-align: left;
}

.contact-card {
  padding: 0 5vw 0 5vw;
  width: fit-content;
  margin-top: 5vh;
}

.academic-projects-container {
  margin-top: 1rem;
}

.buttons-container {
  display: flex;
  gap: 1rem;
}

.flag-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.flag {
  width: 3rem;
  height: 2rem;
  margin-right: 1rem;
}
@media(max-width: 800px){
  .cv-container{
    width: 100vw;
  }
}
</style>
