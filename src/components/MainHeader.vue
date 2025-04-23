<script setup lang="ts">
</script>

<template>
  <header>
    <div class="header-img-wrapper">
      <img
        class="header-img"
        src="/src/assets/images/portfolio.img.jpg"
        alt="Bakgrundsbild med texten 'portfolio'"
      />
    </div>
    <div class="profile-container">
      <img
        class="profile-pic"
        src="/src/assets/images/alexandra.jpeg"
        alt="Alexandra Johansen"
      />
      <p class="intro-text">
        <h1>{{ $t('intro') }}</h1>
      </p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.header-img-wrapper {
  width: 100%;
  aspect-ratio: 16 / 6; // Anpassar höjden automatiskt
  overflow: hidden;
  border-bottom: 5px solid #8B7E65;

  .header-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;

  .profile-pic {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 4px solid #8B7E65;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-top: -80px; // Flytta upp halva sin egen höjd
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
}


  .intro-text {
    font-size: 1.2rem;
    color: #000;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    max-width: 90%;
  }
}
</style>
