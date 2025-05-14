import "./style/style.scss"

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";


import sv from "./locales/sv.json";
import en from "./locales/en.json";


const i18n = createI18n({
  legacy: false,
  globalInjection: true, 
  locale: 'sv',
  messages: { sv, en }
});


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
