<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === "sv" ? "en" : "sv"
}
</script>

<template>
  <header>
    <div class="header-img-wrapper">
      <img class="header-img" src="/assets/images/portfolio.img.jpg" alt="Bakgrundsbild med texten 'portfolio'" />
    </div>

    <div class="bottom-border"></div>

    <div class="profile-pic-wrapper">
      <img class="profile-pic" src="/assets/images/alexandra.jpeg" alt="Alexandra Johansen" />
    </div>

    <button class="language-switcher" @click="toggleLanguage">
      {{ locale === "sv" ? "English" : "Svenska" }}
    </button>

    <div class="profile-container">
      <h1 class="intro-text">{{ $t("intro") }}</h1>
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
  aspect-ratio: 16 / 6;
  overflow: hidden;
  position: relative;
  border-bottom: 5px solid #8b7e65;

  .header-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
}

.bottom-border {
  width: 100%;
  height: 4px;
  background-color: #8b7e65;
}

.profile-pic-wrapper {
  display: flex;
  justify-content: center;
  margin-top: -60px; 
  z-index: 3;
  position: relative;
}

.profile-pic {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 4px solid #8b7e65;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.language-switcher {
  display: block;
  width: fit-content;
  margin: -50px 0 0 5px;
  padding: 12px 30px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  font-size: 17px;
  transition: background-color 0.3s ease;
  position: relative;
  z-index: 5;

  &:hover {
    background-color: #f0f0f0;
  }
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;

  .intro-text {
    font-size: 2rem;
    font-weight: bold;
    color: #000;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    max-width: 90%;
    margin-bottom: 40px;
    margin-top: 40px;
  }
}

@media (min-width: 768px) {
  .profile-pic {
    width: 150px;
    height: 150px;
  }

  .profile-pic-wrapper {
    margin-top: -75px;
  }

  .intro-text {
    font-size: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .profile-pic {
    width: 180px;
    height: 180px;
  }

  .profile-pic-wrapper {
    margin-top: -90px;
  }
}

@media (max-width: 600px) {
  .language-switcher {
    font-size: 14px;
    padding: 8px 16px;
  }
}

@media (min-width: 800px) {
  .language-switcher {
    margin: -70px 0 0 5px;
  }
}
</style>
