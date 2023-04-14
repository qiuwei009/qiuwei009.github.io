import utils from "@/utils/utils";
(function () {
    // js 监听系统主题模式
    const scheme = window.matchMedia("(prefers-color-scheme: dark)");
    // 本地当前主题
    let setting = utils.localCache.getJSON("theme") === undefined ? scheme.matches : utils.localCache.getJSON("theme");
    if (!setting) {
        // 恢复亮色主题
        document.body.setAttribute("class", "light-scheme");
        document.body.removeAttribute("arco-theme");
        utils.localCache.setJSON("theme", false);
    } else {
        // 设置为暗黑主题
        document.body.setAttribute("class", "dark-scheme");
        document.body.setAttribute("arco-theme", "dark");
        utils.localCache.setJSON("theme", true);
    }
})();
