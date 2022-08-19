import vue from "@vitejs/plugin-vue";
import { ConfigEnv, loadEnv } from "vite";
import alias from "./vite/alias";
import setupPlugin from "./vite/plugin";
import { parseEnv } from "./vite/utils";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias,
//   },
// });

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build';
  const root = process.cwd();
  const env = parseEnv(loadEnv(mode, root));
  return {
    // plugins: [vue()],
    plugins: setupPlugin(isBuild, env),
    resolve: {
      alias,
    },
  };
};
