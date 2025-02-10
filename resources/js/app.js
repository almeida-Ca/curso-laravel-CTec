import { createApp } from "vue";
import Primevue from 'primevue/config';
import App from "./App.vue";



//Criacao da aplicacao Vue

createApp(App).mount('#app');

const app = createApp(App);
app.use(Primevue);