import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VueNativeSock from "vue-native-websocket-vue3";

createApp(App)
  .use(router)
  .use(ElementPlus)
  .use(VueNativeSock, "wss://test.relabs.ru/event")
  .mount("#app");
