
/// <reference path="/scripts/_rels.js" />
/*!*
*
*  Name     :       Page
*  Author   :       luojh	
*  Email    :       luojianhe@139.com
*  Date     :       
*  Desc     :       描述
*
***************************************/
define(function (require, exports, module) {
    var msgbox = require("msgbox");

    function Page(options) {
        /// <summary>
        /// Page 构造函数
        /// </summary>

        if (!(this instanceof Page)) {
            return new Page(options);
        }

        //默认配置
        var config = {};

        if (options) {
            //合并配置
            config = $.extend(true, config, options);
        }

        this.config = config;

        this.init();
    }

    Page.prototype.init = function () {
        /// <summary>
        /// Page 初始化方法   
        /// </summary> 

        //动态加载模板
        $("#j-btn-loadTmpl").on("click", function (e) {
            e.preventDefault();
            require.async("./testTmpl.html", function (tmpl) {
                $("#j-tmpl").html(tmpl)

                //console.log(tmpl);
            });
            
        });

        $("#j-btn-welcome").on("click", function (e) {
            e.preventDefault();

            msgbox.confirm("确定要将Welcome变红色吗？", function () {
                require.async("css/test.css", function () {
                    $("#j-welcome").addClass("testred");
                });
            });
        });
    }

    module.exports = Page;

});
