<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section class="projects-wrapper">
    <div class="projects-heading">
      <h2>Mina projekt</h2>
    </div>

    <div class="projects-grid">
      <ProjectCard
        image="/src/assets/images/SkyVoyage.png"
        link="https://axandranathalie.github.io/SkyVoyage-webshop/"
        description="En webshop med flygtema byggd i HTML, CSS och JS."
        title="SkyVoyage"
      />

      <ProjectCard
        image="/src/assets/images/ToughCookie.png"
        link="https://axandranathalie.github.io/web-client-project/"
        description="En receptsida jag skapade under kursen Web Client."
        title="Tough Cookie"
      />

      <ProjectCard
        image="/src/assets/images/FlawlessForever.png"
        link="https://axandranathalie.github.io/FlawlessForever-webshop/"
        description="En stilren skönhetswebshop."
        title="Flawless Forever"
      />

      <ProjectCard
        image="/src/assets/images/school-project-quiz.png"
        link="https://axandranathalie.github.io/school-project-quiz/"
        description="Quizprojekt där jag använde JavaScript och DOM-manipulation."
        title="Quiz"
      />
    </div>
  </section>
  <div class="bottom-border"></div>
</template>

<style scoped lang="scss">
.projects-wrapper {
  padding: 2rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.projects-heading {
  background-color: #E697D0;
  border: 2px solid #7F4470;
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1.8rem;
  margin: 0 auto 2rem;
  width: 200px;
  text-align: center;

  h2 {
    margin: 0;
    color: #000;
    font-size: inherit;
  }
}
.bottom-border {
  width: 100%;
  height: 4px;
  background-color: #8B7E65;
  margin-bottom: 20px;
}

.projects-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  justify-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
}
</style>
