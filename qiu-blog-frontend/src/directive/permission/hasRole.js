/**
 * v-hasRole 角色权限处理
 */
import {useUserStore} from "@/stores/user";

function checkPermission(el, binding) {
    const {value} = binding;
    const userStore = useUserStore();
    const {roles} = userStore;
    if (Array.isArray(value)) {
        if (value.length > 0) {
            let permission = value;
            const hasPermission = roles.toString().includes(permission);
            if (!hasPermission && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        }
    } else {
        throw new Error(`need roles! Like v-permission="['admin','user']"`);
    }
}

export default {
    mounted(el, binding) {
        checkPermission(el, binding);
    },
    updated(el, binding) {
        checkPermission(el, binding);
    }
};
