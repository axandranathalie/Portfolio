<template>
  <div class="social-links">
    <a href="https://github.com/axandranathalie" target="_blank" aria-label="GitHub">
      <img src="/src/assets/svg/github-142-svgrepo-com.svg" alt="GitHub" />
    </a>
    <a href="https://linkedin.com/in/alexandra-johansen-245422251" target="_blank" aria-label="LinkedIn">
      <img src="/src/assets/svg/linkedin-svgrepo-com.svg" alt="LinkedIn" />
    </a>
    <a href="mailto:alexandra.johansen@medieinstitutet.se" aria-label="Email">
      <img src="/src/assets/svg/mail-svgrepo-com.svg" alt="Email" />
    </a>
    <a href="tel:+46722711198" aria-label="Phone">
      <img src="/src/assets/svg/phone-rounded-svgrepo-com.svg" alt="Phone" />
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
