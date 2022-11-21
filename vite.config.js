import vue from '@vitejs/plugin-vue';
import {defineConfig} from 'vite';
import viteCompression from 'vite-plugin-compression';
import {viteMockServe} from 'vite-plugin-mock';
import OptimizationPersist from 'vite-plugin-optimize-persist';
import PkgConfig from 'vite-plugin-package-config';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
// import postCssPxToRem from "postcss-pxtorem";
 import AutoImport from 'unplugin-auto-import/vite'// 自动引入ref
const localEnabled = process.env.USE_MOCK || false;
const prodEnabled = process.env.USE_CHUNK_MOCK || false;

export default defineConfig({
    productionSourceMap: false,
    resolve: {
        alias: {
            '~': new URL('./src', import.meta.url).pathname,
            '@': new URL('./src', import.meta.url).pathname
        }
    },
    plugins: [
        vue(),
        VueSetupExtend(),// setup 语法糖name
        PkgConfig(),
        OptimizationPersist(),
        viteCompression(),
        // Components({ // 组件自动按需引入
        //     extensions: ['md', 'tsx'], /**'md', 'tsx'*/
        //     include: [/\.md$/, /\.vue$/, /\.tsx$/],
        //     resolvers: [VueUseComponentsResolver()]
        // }),
        viteMockServe({
            mockPath: './mock/', //mock文件地址
            localEnabled: localEnabled, // 开发打包开关
            prodEnabled: prodEnabled, // 生产打包开关
            injectCode: `import { setupProdMockServer } from '~/utils/mockProdServer.js';setupProdMockServer();`,
            logger: false, //是否在控制台显示请求日志
            supportTs: false //打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件
        }),
        AutoImport({
            imports:['vue'],
            dts:'src/auto-import.d.ts'
        })
    ],
    css: {
        preprocessorOptions: {
            less: {
                // javascriptEnabled: true,
                // additionalData: `@import "${path.resolve(__dirname, 'src/assets/style/variable.less')}";`
                additionalData: `@import "~/assets/style/variable.less";`
            }
        }
        // postcss: {
        //     plugins: [
        //         postCssPxToRem({
        //             rootValue: 192, // （设计稿/10）1rem的大小
        //             propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        //         })
        //     ]
        // }
    },
    server: {
        // port: 22,
        host: '0.0.0.0',
        open: false,
        http: true,
        ssr: false, // 设置代理
        proxy: {
            '/api': {
                target: 'http://192.168.1.69:8000',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    },
    build: {
        chunkSizeWarningLimit: 1500,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        }
    }
});
