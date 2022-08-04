import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
    alias: {
        "@": resolve(__dirname, "src"),
    },
    build: {
        outDir: "./docs",
    },
    plugins: [vue()],
});
