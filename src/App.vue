<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useI18n } from "vue-i18n"; // Importera useI18n för att hantera språket
import MainHeader from "./components/MainHeader.vue";

// Få tillgång till $i18n och metoder från vue-i18n
const { t, locale } = useI18n();

// Metod för att byta språk
const changeLanguage = (event: Event) => {
  const lang = (event.target as HTMLSelectElement).value;
  locale.value = lang; // Uppdatera språkval
};
</script>

<template>
  <div>
    <!-- Språkväxlare -->
    <header>
      <MainHeader />
      <div class="wrapper">
        <select @change="changeLanguage" v-model="locale">
          <option value="sv">Svenska</option>
          <option value="en">English</option>
        </select>
      </div>
    </header>

    <!-- Använda översättningar -->
    <div>
      <h1>{{ t('Welcome') }}</h1>
    </div>

    <!-- Vue Router View för dynamiska sidor -->
    <RouterView />
  </div>
</template>

<style scoped>
/* Lägg till lite stil för språkväxlaren */
.wrapper {
  padding: 10px;
}

select {
  font-size: 16px;
  padding: 5px;
}
</style>
