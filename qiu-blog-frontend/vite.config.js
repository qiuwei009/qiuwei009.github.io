import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css:{
    // css模块化配置项
    modules:{
      // ....
    },
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        additionalData:`@import "@/assets/css/base.less";`,
        math: "always",
      }
    },
    devSourcemap:false,
  },
  server: {
    https: false,
    port: 1573,
    host: "0.0.0.0",
    open: false,
    cors: true,
    proxy: {
      "/dev_api": {
        target: `http://localhost:8080`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev_api/, "")
      }
    }
  },
  build: {
    target: "es2015", // 设置最终构建的浏览器兼容目标
    sourcemap: false, // 构建后是否生成 source map 文件
    chunkSizeWarningLimit: 2000, //  chunk 大小警告的限制（以 kbs 为单位）
    reportCompressedSize: false, // 启用/禁用 gzip 压缩大小报告
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (!id.toString().split("node_modules/")[1].split("/")[0].toString().includes("vue")) return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        }, // 最小化拆分包
        assetFileNames: (assetInfo) => {
          let info = assetInfo.name.split(".");
          let extType = info[info.length - 1];
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
            extType = "media";
          } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
            extType = "img";
          } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
            extType = "fonts";
          }
          return `${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js"
      }
    }
  }
})
