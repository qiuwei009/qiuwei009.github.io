import {defineStore} from 'pinia';

export const useStore = defineStore('use', {
    state: () => {
        return {
            loading: false,
            dark: sessionStorage.getItem('isDark')
        };
    },
    actions: {
        setLoading(val) {
            this.loading = val;
        },
        setDark(val) {
            this.dark = val;
            sessionStorage.setItem('dark', JSON.stringify(val));
        }
    }
});