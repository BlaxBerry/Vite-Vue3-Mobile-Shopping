module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    // 导出 下载的 babel-plugin-import
    plugins: [
        ['import', {
            "libraryName": "vant",
            "libraryDirectory": "es",
            "style": true
        }, 'vant']
    ]
}