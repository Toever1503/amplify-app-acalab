import { Amplify } from "aws-amplify";

import { createApp } from "vue";
import { createPinia } from "pinia";
import awsExports from "./aws-exports";

import App from "./App.vue";
import router from "./router";

import "./app.style/main.css";

Amplify.configure(awsExports);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
