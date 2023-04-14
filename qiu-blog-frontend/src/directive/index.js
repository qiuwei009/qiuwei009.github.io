import hasRole from "./permission/hasRole";
import hasPermission from "./permission/hasPermission";
import handleAnimation from "./animation/animation";
import markdown from "./markdown/markdown";

export default {
    install(Vue) {
        Vue.directive("hasRole", hasRole);
        Vue.directive("hasPermission", hasPermission);
        Vue.directive("animation", handleAnimation);
        Vue.directive("markdown", markdown);
    }
};
