<script setup lang="ts">
</script>

<template>
  <section class="contact-wrapper">
    <div class="contact-heading">
      <h2>Kontakta mig</h2>
    </div>
    <div class="contact-info">
      <p>Alexandra Johansen</p>
      <a href="tel:+46722711198">+46 722 711 198</a>
      <p><a href="mailto:Alexandra.Johansen@medieinstitutet.se">Alexandra.Johansen@medieinstitutet.se</a></p>
    </div>
  </section>

  <div class="bottom-border"></div>
</template>

<style scoped lang="scss">
.contact-wrapper {
  text-align: center;
  padding: 2rem 1rem;
}

.contact-heading {
  background-color: #DBA1F7;
  border: 2px solid #8B399B;
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;

  h2 {
    margin: 0;
    font-size: inherit;
    color: #000;
  }
}

.contact-info {
  font-size: 1.3rem;
  font-weight: 600;

  p {
    margin: 0.5rem 0;
    padding: 0.5rem 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 600;


    &:hover {
      text-decoration: underline;
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
