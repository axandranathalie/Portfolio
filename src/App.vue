<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "./components/MainHeader.vue";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
</script>

<template>
  <div>
    <header>
      <MainHeader />
      <LanguageSwitcher />
    </header>

    <div>
      <h1>{{ $t('Welcome') }}</h1>
    </div>

    <RouterView />
  </div>
</template>
