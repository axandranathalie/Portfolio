import "./style/style.scss"

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";  // Importera vue-i18n

import App from "./App.vue";
import router from "./router";

// Importera språkfilerna
import sv from "./locales/sv.json";
import en from "./locales/en.json";

// Konfigurera vue-i18n
const i18n = createI18n({
  legacy: false,  // Använd Composition API (Vue 3)
  locale: 'sv', // Standard språk
  messages: {
    sv,
    en
  }
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);  // Lägg till vue-i18n här

app.mount("#app");
