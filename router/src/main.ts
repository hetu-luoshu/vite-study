import { createApp } from "vue";
import App from "./App.vue";
import router, { setupRouter } from "./router";

async function bootstrap() {
  const app = createApp(App);
  setupRouter(app);

  // 确认路由是否挂载，挂载好了再挂载节点
  await router.isReady();
  app.mount("#app");
}

bootstrap();

