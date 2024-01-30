import './assets/main.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/jquery/dist/jquery.js';
import '../src/assets/parallax/jquery.parallax.js';
import '../src/assets/parallax/jquery.parallax.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
