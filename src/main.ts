import { createApp } from "vue";
import { createPinia } from "pinia";
//@ts-ignore
import App from "./App.vue";
// import router from "./router";

const app = createApp(App)
.use(createPinia())
// .use(router)
.mount("#app")
