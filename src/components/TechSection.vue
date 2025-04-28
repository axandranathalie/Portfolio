<template>
  <section class="tech-section">
    <h2 class="tech-title">{{ $t('tech-heading') }}</h2>
    <div class="tech-icons">
      <div class="row">
        <img src="/assets/svg/html-5-svgrepo-com.svg" alt="HTML" />
        <img src="/assets/svg/css-3-svgrepo-com.svg" alt="CSS" />
        <img src="/assets/svg/js-official-svgrepo-com.svg" alt="JavaScript" />
        <img src="/assets/svg/typescript-official-svgrepo-com.svg" alt="TypeScript" />
        <img src="/assets/svg/sass-svgrepo-com.svg" alt="Sass" />
        <img src="/assets/svg/vue-svgrepo-com.svg" alt="Vue" />
      </div>
      <div class="row">
        <img src="/assets/svg/vite-svgrepo-com.svg" alt="Vite" />
        <img src="/assets/svg/sql-database-generic-svgrepo-com.svg" alt="SQL" />
        <img src="/assets/svg/atom-svgrepo-com.svg" alt="Atom" />
        <img src="/assets/svg/github-142-svgrepo-com.svg" alt="GitHub" />
        <img src="/assets/svg/figma-svgrepo-com.svg" alt="Figma" />
      </div>
    </div>
    <div class="bottom-border"></div>
  </section>
</template>

<style lang="scss" scoped>
.tech-section {
  text-align: center;
  margin: 2rem 0;
}

.tech-title {
  background-color: #9BCFF6;
  border: 2px solid #3D65E9;
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1.8rem;
  margin-bottom: 40px;
  margin-top: 20px;
  width: 280px;
  text-align: center;
}

.tech-icons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
}

.row {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.tech-icons img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}


.bottom-border {
  width: 100%;
  height: 4px;
  background-color: #8B7E65;
  margin-bottom: 20px;
}
</style>
