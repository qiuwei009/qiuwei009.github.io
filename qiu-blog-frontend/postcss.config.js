module.exports = {
  plugins: {
    'postcss-import':{},
    autoprefixer: {},
    // 'postcss-pxtorem': {
    //   rootValue: 75, // 75表示750设计稿，37.5表示375设计稿
    //   propList: ['*'],//（数组）可以从 px 更改为 rem 的属性  使用通配符*启用所有属性。例子：['*']
    //   unitPrecision: 5,
    //   selectorBlackList: [],
    //   replace: true,
    //   mediaQuery: false,
    //   minPixelValue: 0,
    //   exclude: /node_modules/i
    // }
  },
}
