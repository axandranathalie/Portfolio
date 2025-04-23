<template>
  <section class="tech-section">
    <h2 class="tech-title">Tech</h2>
    <div class="tech-icons">
      <div class="row">
        <img src="/src/assets/svg/html-5-svgrepo-com.svg" alt="HTML" />
        <img src="/src/assets/svg/css-3-svgrepo-com.svg" alt="CSS" />
        <img src="/src/assets/svg/js-official-svgrepo-com.svg" alt="JavaScript" />
        <img src="/src/assets/svg/typescript-official-svgrepo-com.svg" alt="TypeScript" />
        <img src="/src/assets/svg/sass-svgrepo-com.svg" alt="Sass" />
        <img src="/src/assets/svg/vue-svgrepo-com.svg" alt="Vue" />
      </div>
      <div class="row">
        <img src="/src/assets/svg/vite-svgrepo-com.svg" alt="Vite" />
        <img src="/src/assets/svg/sql-database-generic-svgrepo-com.svg" alt="SQL" />
        <img src="/src/assets/svg/atom-svgrepo-com.svg" alt="Atom" />
        <img src="/src/assets/svg/github-142-svgrepo-com.svg" alt="GitHub" />
        <img src="/src/assets/svg/figma-svgrepo-com.svg" alt="Figma" />
      </div>
    </div>
    <!-- Lägg till bottom-border här -->
    <div class="bottom-border"></div>
  </section>
</template>

<style lang="scss" scoped>
.tech-section {
  text-align: center; /* Centrerar hela sektionen */
  margin: 2rem 0; /* Lite avstånd ovan och nedan */
}

.tech-title {
  background-color: #9BCFF6; /* Boxens bakgrundsfärg */
  border: 2px solid #3D65E9; /* Ramfärg runt boxen */
  display: inline-block; /* Gör att boxen anpassar sig efter innehållet */
  padding: 0.5rem 1rem;
  font-size: 1.8rem;
  margin-bottom: 2rem; /* Avstånd till ikonerna */
  width: 150px; // <-- Välj en fast bredd
  text-align: center; // Så texten centreras i boxen
}

.tech-icons {
  display: flex;
  flex-direction: column; /* Ser till att vi får rader */
  justify-content: center; /* Centrerar horisontellt */
  gap: 1rem; /* Avstånd mellan raderna */
  margin-bottom: 2rem; /* Avstånd under ikonerna */
  padding-bottom: 2rem; /* Lite extra padding under strecket */
}

.row {
  display: flex;
  justify-content: center; /* Centrerar ikonerna horisontellt */
  gap: 1rem; /* Avstånd mellan ikonerna */
}

.tech-icons img {
  width: 50px; /* Storlek på ikonerna */
  height: 50px;
  object-fit: contain;
}

/* Bottom border */
.bottom-border {
  width: 100%;
  height: 4px;
  background-color: #8B7E65; /* Färg på linjen */
  margin-bottom: 20px; /* Lite avstånd under linjen */
}
</style>
