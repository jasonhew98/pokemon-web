import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// repositories
import englishPokemonRepository from "@/infrastructures/repositories/englishPokemonRepository";
import japanesePokemonRepository from "@/infrastructures/repositories/japanesePokemonRepository";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.provide("englishPokemonRepository", englishPokemonRepository);
app.provide("japanesePokemonRepository", japanesePokemonRepository);

app.mount('#app');
