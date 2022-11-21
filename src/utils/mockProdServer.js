import {createProdMockServer} from 'vite-plugin-mock/es/createProdMockServer';
import testMock from '../../mock/test';

// 逐一导入您的mock.js文件
// 如果使用vite.mock.config.js，只需直接导入文件
// 可以使用 import.meta.glob功能来进行全部导入
export const mockModules = [...testMock];

export function setupProdMockServer() {
    createProdMockServer(mockModules);
}
