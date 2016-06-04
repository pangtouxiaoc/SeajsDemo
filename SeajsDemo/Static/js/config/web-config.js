seajs.config({
    // 别名配置
    alias: {
        '$': 'js/lib/jquery/1.8.2/jquery',
        'msgbox': "js/lib/msgbox/1.0.0/msgbox",
    },


    // 路径配置
    paths: {
        'css': 'css',
        'tmpl': 'tmpl',

        //这里是上线后的配置，开发配置可在各个项目配置到本地的 script/src
        'order': 'js/module/order/1.0.0',
        'member': 'js/module/member/1.0.0',
        'merchant': 'js/module/merchant/1.0.0'
    },

    // 变量配置
    //vars: {
    //    'locale': 'zh-cn'
    //},

    // 映射配置，用于CDN 缓存版本修改， 如果nginx 配置了合并请求的模块（nginx-http-concat），那么可以使用 seajs-combo.js 插件解决版本问题
    map: [
        [/^(.*\/(css)\/.*\.(?:css))(?:.*)$/i, '$1?v=201511021556'],
        [/^(.*\/(tmpl)\/.*\.(?:htmlhtm))(?:.*)$/i, '$1?v=201511021445'],
        [/^(.*\/(order)\/.*\.(?:css|js))(?:.*)$/i, '$1?v=201511021445'],
        [/^(.*\/(member)\/.*\.(?:css|js))(?:.*)$/i, '$1?v=201511021445'],
        [/^(.*\/(merchant)\/.*\.(?:css|js))(?:.*)$/i, '$1?v=201511021445']
    ],

    // 预加载项
    preload: [
      Function.prototype.bind ? '' : 'es5-safe',
      this.JSON ? '' : 'json',
      "$" //这里把jquery 预加载出来了
    ],

    // 调试模式
    //debug: true,

    // Sea.js 的基础路径
    // 开发时，js使用的是本地的路径，例如： /scripts/src 所以这里不要指定base，而是让seajs 自自动配置
    // 为了css 资源文件也可以通过require加载，我们把 seajs 的目录放到资源站的根目录下，这样seajs 会自动配置根路径为 http://localhost:1969/
    //base: 'http://localhost:1969/',

    // 文件编码
    charset: 'utf-8'

})