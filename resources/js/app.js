require("./bootstrap");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp({
    components: {
        App,
    },
})
    .use(router)
    .mount("#app");
