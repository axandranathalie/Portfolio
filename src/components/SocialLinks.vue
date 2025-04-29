<template>
  <div class="social-links">
    <a href="https://github.com/axandranathalie" target="_blank" aria-label="GitHub">
      <img src="/assets/svg/github-142-svgrepo-com.svg" alt="GitHub" />
    </a>
    <a href="https://linkedin.com/in/alexandra-johansen-245422251" target="_blank" aria-label="LinkedIn">
      <img src="/assets/svg/linkedin-svgrepo-com.svg" alt="LinkedIn" />
    </a>
    <a
      href="/Portfolio/assets/cv/CV.pdf"
      target="_blank"
      aria-label="CV"
    >
      <img src="/assets/svg/cv-file-interface-symbol-svgrepo-com.svg" alt="CV" />
    </a>
  </div>
</template>


<style scoped lang="scss">
.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  padding: 2rem 0;

  a {
    width: 32px;
    height: 32px;
    display: inline-block;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;

      &:hover {
        opacity: 0.7; /* Exempel på hover-effekt */
      }
    }
  }
}
</style>
