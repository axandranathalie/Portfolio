<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const toggleLanguage = () => {
  locale.value = locale.value === "sv" ? "en" : "sv";
};
</script>

<template>
  <button class="language-switcher" @click="toggleLanguage">
    {{ locale === 'sv' ? 'English' : 'Svenska' }}
  </button>
</template>

<style scoped>
.language-switcher {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  padding: 8px 12px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
}
</style>
