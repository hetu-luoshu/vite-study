import { App } from "vue";
import { setupTailwindcss } from "./tailwindcss";

export function setupPlugin(app: App) {
  setupTailwindcss();
}