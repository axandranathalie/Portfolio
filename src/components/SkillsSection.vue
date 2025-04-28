<script setup lang="ts">
// Du kan importera ikoner eller props här om du vill göra det återanvändbart senare
</script>

<template>
  <section class="skills-section">
    <div class="skills-heading">
      <h2>{{ $t('skills-heading') }}</h2>
    </div>
    <div class="skills-content">
      <div class="skills-group">
        <h3>{{ $t('technologies-languages-heading') }}</h3>
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
          <li>{{ $t('responsive-design') }}</li>
          <li>{{ $t('ui-ux-thinking') }}</li>

        </ul>
      </div>

      <div class="skills-group">
        <h3>{{ $t('others-heading') }}</h3>
        <ul>
          <li>{{ $t('accessibility') }}</li>
          <li>{{ $t('agile-methodology') }}</li>
          <li>Scrum</li>
          <li>{{ $t('communication') }}</li>
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
  width: 280px;
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
