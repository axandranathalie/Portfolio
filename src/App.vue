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

    <RouterView />
  </div>
</template>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
}

body {
  background-color: #fff; // eller vilken färg du vill
}
</style>

