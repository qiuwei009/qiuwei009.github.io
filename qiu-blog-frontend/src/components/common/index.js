export const common = {
    install: (Vue) => {
        // 引入common组件
        const modules = import.meta.glob("./*.vue", {eager: true});
        Object.keys(modules).forEach((key) => {
            Vue.component(key.split("./")[1].split(".vue")[0], modules[key].default);
        });
    }
};

export default common;
