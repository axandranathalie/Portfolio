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
      <h1 class="intro-text">{{ $t('intro') }}</h1>

    </div>
    <div class="bottom-border"></div>
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
    margin-top: -80px;
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
  }

  .intro-text {
    font-size: 2rem;
    font-weight: bold;
    color: #000;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    max-width: 90%;
    margin-bottom: 20px;
  }
}

.bottom-border {
  width: 100%;
  height: 4px;
  background-color: #8B7E65;
}

@media (min-width: 768px) {
  .profile-container .profile-pic {
    width: 150px;
    height: 150px;
    margin-top: -100px;
  }
  .intro-text {
    font-size: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .profile-container .profile-pic {
    width: 180px;
    height: 180px;
    margin-top: -120px;
  }
}

</style>
