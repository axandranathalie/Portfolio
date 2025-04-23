<script setup lang="ts">
</script>

<template>
  <section class="about-wrapper">
    <div class="about-heading">
      <h2>Om mig</h2>
    </div>
    <p class="about-text">
      Hej! Jag heter Alexandra och studerar till frontendutvecklare.  Min bakgrund inom förskola, vård och som egen företagare i skönhetsbranschen har gett mig ett starkt intresse för människor – och ett öga för detaljer.
      Jag drivs av att skapa snygga och användarvänliga webbplatser, där både funktion och form samspelar. Design och UX är områden jag gärna utforskar, men mitt fokus ligger på att växa som utvecklare och ständigt lära mig nya tekniker.
    </p>
  </section>
  <div class="bottom-border"></div>
</template>

<style scoped lang="scss">
.about-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  text-align: center;
}

.about-heading {
  background-color: #FDFAA1;
  border: 2px solid #CEAA1B;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;

  h2 {
    margin: 0;
    font-size: 1.8rem;
    color: #000000;
  }
}

.about-text {
  max-width: 600px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #000000;
}

.bottom-border {
  width: 100%;
  height: 4px;
  background-color: #8B7E65;
  margin-bottom: 20px;
}
</style>
