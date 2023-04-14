import "vant/lib/index.css";
import {Button, Space, Field, CellGroup, Icon, Form, Badge} from "vant";

const components = [Button, Space, Field, CellGroup, Icon, Form, Badge];
export const vComponents = {
    install: (Vue) => {
        // 按需引入组件库
        for (const component of components) {
            Vue.component(component.name, component);
        }
    }
};

export default vComponents;
