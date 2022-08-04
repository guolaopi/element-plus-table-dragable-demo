import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import "./index.css";

const app = createApp(App);

app.use(ElementPlus, {
    locale: zhCn,
});

app.mount("#app");
