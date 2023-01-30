import { Amplify } from "aws-amplify";

import { createApp } from "vue";
import awsExports from "./aws-exports";
import store from "./app.store/index";

import App from "./App.vue";
import router from "./router/index";

Amplify.configure(awsExports);

createApp(App).use(router).use(store).mount("#app");
