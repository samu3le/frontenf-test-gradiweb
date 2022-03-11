import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSplide from "@splidejs/vue-splide";

import '@splidejs/splide/dist/css/splide.min.css';


import "./sass/app.scss";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueSplide);

app.mount("#app");
