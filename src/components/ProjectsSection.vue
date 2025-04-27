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
        githubLink=https://github.com/axandranathalie/SkyVoyage-webshop
        description="En responsiv webbapplikation byggd i Vue.js utifrån en färdig design i Figma.
        Fokus låg på pixelperfekt implementation, responsivitet och interaktiv funktionalitet som t.ex. bokningsformulär,
        recensioner och animationer."
        title="SkyVoyage"
      />

      <ProjectCard
        image="/src/assets/images/ToughCookie.png"
        link="https://axandranathalie.github.io/web-client-project/"
        githubLink=https://github.com/axandranathalie/web-client-project
        description="En responsiv onepager byggd med HTML och SCSS, baserad på en given design."
        title="Tough Cookie"
      />

      <ProjectCard
        image="/src/assets/images/FlawlessForever.png"
        link="https://axandranathalie.github.io/FlawlessForever-webshop/"
        githubLink=https://github.com/axandranathalie/FlawlessForever-webshop
        description="En enkel och responsiv webshop byggd i HTML, SASS och JavaScript.
        Användare kan lägga till och ta bort produkter i varukorgen, justera antal,
        välja betalningsmetod och skicka en order via ett validerat formulär."
        title="Flawless Forever"
      />

      <ProjectCard
        image="/src/assets/images/school-project-quiz.png"
        link="https://axandranathalie.github.io/school-project-quiz/"
        githubLink=https://github.com/axandranathalie/school-project-quiz
        description="Ett frågesportspel om geografi byggt i TypeScript och SASS.
        Spelet visar 10 slumpade frågor åt gången, ger direkt feedback på svaren och
        visar en sammanställning med poäng och tid när spelet är klart."
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
  grid-template-columns: repeat(2, 1fr); // två kort på rad som standard
  justify-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // ett kort på rad på mobil
  }
}

</style>
