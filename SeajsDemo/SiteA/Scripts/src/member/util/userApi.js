
/// <reference path="/scripts/_rels.js" />
/*!*
*
*  Name     :       User
*  Author   :       luojh	
*  Email    :       luojianhe@139.com
*  Date     :       
*  Desc     :       用户API
*
***************************************/
define(function (require, exports, module) {
    var $ = require('$');

    function User(options) {
        /// <summary>
        /// User 构造函数
        /// </summary>

        if (!(this instanceof User)) {
            return new User(options);
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

    User.prototype.getUserById = function (userId) {
        /// <summary>
        /// 获取用户信息
        /// </summary>
        /// <param name="userId"></param>
        /// <returns type=""></returns>
        return {
            UserID : userId,
            UserName : "小李飞刀",
        };
    }

    User.prototype.setAvator = function (userId, avator) {
        /// <summary>
        /// update avator
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="avator"></param>
        /// <returns type=""></returns>
        return true;
    }

    User.prototype.init = function () {
        /// <summary>
        /// User 初始化方法   
        /// </summary> 
    }

    module.exports = new User();

});
