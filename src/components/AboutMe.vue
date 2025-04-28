<script setup lang="ts">
</script>

<template>
  <section class="about-wrapper">
    <div class="about-heading">
      <h2>{{ $t('about-heading') }}</h2>
    </div>
    <p class="about-text">{{ $t('about') }}
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
  margin-top: 10px;
  margin-bottom: 30px;
  width: 281px;
  text-align: center;

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
