<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "./components/MainHeader.vue";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
import AboutMe from "./components/AboutMe.vue";
import TechSection from "./components/TechSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ContactSection from "./components/ContactSection.vue";
import SocialLinks from "./components/SocialLinks.vue";
</script>

<template>
  <div>
    <header>
      <MainHeader />
      <LanguageSwitcher />
      <AboutMe />
      <TechSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <SocialLinks /> 
    </header>

    <RouterView />
  </div>
</template>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
}

body {
  background-color: #EAE2D2;
}
</style>

