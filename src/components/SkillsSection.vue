<script setup lang="ts">
// Du kan importera ikoner eller props här om du vill göra det återanvändbart senare
</script>

<template>
  <section class="skills-section">
    <div class="skills-heading">
      <h2>Färdigheter</h2>
    </div>
    <div class="skills-content">
      <div class="skills-group">
        <h3>Tekniker & Språk</h3>
        <ul>
          <li>HTML</li>
          <li>CSS / Sass</li>
          <li>JavaScript / TypeScript</li>
          <li>Vue</li>
          <li>Vite</li>
          <li>SQL</li>
          <li>Git / GitHub</li>
        </ul>
      </div>

      <div class="skills-group">
        <h3>Design & UX</h3>
        <ul>
          <li>Figma</li>
          <li>Responsiv design</li>
          <li>UI/UX-tänk</li>
        </ul>
      </div>

      <div class="skills-group">
        <h3>Övrigt</h3>
        <ul>
          <li>Tillgänglighet</li>
          <li>Agilt arbetssätt</li>
          <li>Scrum</li>
          <li>Kommunikation</li>
        </ul>
      </div>
    </div>
  </section>
  <div class="bottom-border"></div>
</template>

<style scoped lang="scss">
.skills-section {
  padding: 2rem 1rem;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.skills-heading {
  background-color: #ACF191;
  border: 2px solid #1A6E22;
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1.8rem;
  margin-bottom: 40px;
  width: 200px;
  text-align: center;

  h2 {
    margin: 0;
    font-size: inherit;
    color: #000;
  }
}

.skills-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  .skills-group {
    flex: 1 1 250px;
    min-width: 200px;

    h3 {
      margin-bottom: 0.5rem;
      color: black;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin: 0.3rem 0;
      }
    }
  }
}

.bottom-border {
  width: 100%;
  height: 4px;
  background-color: #8B7E65;
  margin-bottom: 20px;
}
</style>
