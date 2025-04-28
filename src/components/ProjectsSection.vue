<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import SkyVoyage from '/assets/images/SkyVoyage.png'
import ToughCookie from '/assets/images/ToughCookie.png'
import FlawlessForever from '/assets/images/FlawlessForever.png'
import Quiz from '/assets/images/school-project-quiz.png'

</script>

<template>
  <section class="projects-wrapper">
    <div class="projects-heading">
      <h2>{{ $t('projects-heading') }}</h2>
    </div>

    <!-- Wrapper för produktkorten -->
    <div class="projects-grid">
      <ProjectCard
        :image="SkyVoyage"
        link="https://axandranathalie.github.io/SkyVoyage-webshop/"
        githubLink="https://github.com/axandranathalie/SkyVoyage-webshop"
        :description="$t('skyvoyage-description')"
        title="SkyVoyage"
      />

      <ProjectCard
        :image="ToughCookie"
        link="https://axandranathalie.github.io/web-client-project/"
        githubLink="https://github.com/axandranathalie/web-client-project"
        :description="$t('project-description')"
        title="Tough Cookie"
      />

      <ProjectCard
        :image="FlawlessForever"
        link="https://axandranathalie.github.io/FlawlessForever-webshop/"
        githubLink="https://github.com/axandranathalie/FlawlessForever-webshop"
        :description="$t('shop-description')"
        title="Flawless Forever"
      />

      <ProjectCard
        :image="Quiz"
        link="https://axandranathalie.github.io/school-project-quiz/"
        githubLink="https://github.com/axandranathalie/school-project-quiz"
        :description="$t('quiz-description')"
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
  margin-bottom: 50px;
  width: 280px;
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
  grid-template-columns: repeat(2, 1fr); /* Standard: två kolumner på större skärmar */
  justify-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* På mobil: ett kort per rad */
  }
}



</style>
