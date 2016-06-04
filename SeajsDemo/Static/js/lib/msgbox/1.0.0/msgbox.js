
/// <reference path="/scripts/_rels.js" />
/*!*
*
*  Name     :       MsgBox
*  Author   :       luojh	
*  Email    :       luojianhe@139.com
*  Date     :       
*  Desc     :       提供一般的小题弹出框
*
***************************************/
define(function (require, exports, module) {

    function MsgBox(options) {
        /// <summary>
        /// MsgBox 构造函数
        /// </summary>

        if (!(this instanceof MsgBox)) {
            return new MsgBox(options);
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

    MsgBox.prototype.alert = function (message) {
        /// <summary>
        ///  alert
        /// </summary>
        /// <param name="message"></param>

        alert(message);
    }

    MsgBox.prototype.confirm = function (message, callBack) {
        /// <summary>
        ///  confirm
        /// </summary>
        /// <param name="message"></param>
        if (confirm(message)) {
            if(callBack)
                callBack();
        }
    }

    MsgBox.prototype.init = function () {
        /// <summary>
        /// MsgBox 初始化方法   
        /// </summary> 
    }

    module.exports = new MsgBox();

});
