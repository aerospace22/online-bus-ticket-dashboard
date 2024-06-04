import { defineConfig, loadEnv } from "vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import { unheadVueComposablesImports } from "@unhead/vue";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const API_BASEURL = env.VITE_APP_NODE_ENV !== "production" ? env.VITE_APP_API_BASEURL : env.VITE_APP_API_BASEURL_PROD;

  return {
    plugins: [
      vue(),
      AutoImport({
        imports: [unheadVueComposablesImports],
      }),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
          }),
        ],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      proxy: {
        "/api": {
          target: API_BASEURL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
