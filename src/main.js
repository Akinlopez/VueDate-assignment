// main.js

import { createApp } from 'vue';
import App from './App.vue';
import DateComponent from './components/DateComponent.vue';


const app = createApp(App);

app.component('DateComponent', DateComponent);

app.mount('#app');
