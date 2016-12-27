/**
 * Created by Fehrim on 2015/12/26.
 */

/**
 * ai是一个提供基础常用函数的单体。各个函数的功能见各个函数的注释。
 * @author 黄浩明
 * @version 3.0.1
 */
var ai = {
    ovb: {
        /**
         * 该对象用于判断系统，系统版本，浏览器，苹果设备等等功能。ovb是单词 Os Version Browser 的头字母缩写。
         * @author 黄浩明
         */
        _version_value: false,
        _bversion_value: false,
        _ua: navigator.userAgent,
        android: function() {
            /**
             * 该方法用于判断是否为安卓平台，如果是返回ture 否 返回 false
             * @author 黄浩明
             * @return ture或者false
             */
            var regular_result = this._ua.match(/(Android)\s+([\d.]+)/),
                os_boolean = !!regular_result;
            if(!this._version_value && os_boolean){
                this._version_value = regular_result[2];
            }
            this.android = function(){return os_boolean;};
            return os_boolean;
        },
        ipod: function() {
            /**
             * 该方法用于判断是否为ipod设备，如果是返回ture 否 返回 false
             * @author 黄浩明
             * @return ture或者false
             */
            var regular_result = this._ua.match(/(iPod).*OS\s([\d_]+)/),
                os_boolean = !!regular_result;
            if(!this._version_value && os_boolean){
                this._version_value = regular_result[2].replace(/_/g, '.');
            }
            this.ipod = function(){return os_boolean;};
            return os_boolean;
        },
        ipad: function() {
            /**
             * 该方法用于判断是否为ipad设备，如果是返回ture 否 返回 false
             * @author 黄浩明
             * @return ture或者false
             */
            var regular_result = this._ua.match(/(iPad).*OS\s([\d_]+)/),
                os_boolean = !!regular_result;
            if(!this._version_value && os_boolean){
                this._version_value = regular_result[2].replace(/_/g, '.');
            }
            this.ipad = function(){return os_boolean;};
            return os_boolean;
        },
        iphone: function() {
            /**
             * 该方法用于判断是否为iphone设备，如果是返回ture 否 返回 false
             * @author 黄浩明
             * @return ture或者false
             */
            var regular_result = this._ua.match(/(iPhone);.*OS\s([\d_]+)/),
                os_boolean = !!regular_result;
            if(!this._version_value && os_boolean){
                this._version_value = regular_result[2].replace(/_/g, '.');
            }
            this.iphone = function(){return os_boolean;};
            return os_boolean;
        },
        webkit: function() {
            /**
             * 该方法用于判断是否为webkit内核的浏览器，如果是返回ture 否 返回 false
             * @author 黄浩明
             * @return ture或者false
             */
            var regular_result = this._ua.match(/WebKit\/([\d.]+)/),
                os_boolean = !!regular_result;
            if(!this._version_value && os_boolean){
                this._bversion_value = regular_result[1];
            }
            this.webkit = function(){return os_boolean;};
            return os_boolean;
        },
        mQQ: function() {
            /**
             * 该方法用于判断是否为webkit内核的浏览器，如果是返回ture 否 返回 false
             * @author 黄浩明
             * @return ture或者false
             */
            var regular_result = this._ua.match(/MQQBrowser\/([\d.]+)/),
                os_boolean = !!regular_result;
            if(!this._version_value && os_boolean){
                this._bversion_value = regular_result[1];
            }
            this.webkit = function(){return os_boolean;};
            return os_boolean;
        },
        operaMini: function() {
            /**
             * 该方法用于判断是否为webkit内核的浏览器，如果是返回ture 否 返回 false
             * @author 黄浩明
             * @return ture或者false
             */
            //var regular_result = this._ua.match(/iPhone;Opera Mini\/([\d.]+)/),
            var regular_result = this._ua.match(/Opera Mini\/([\d.]+)/),
                os_boolean = !!regular_result;
            if(!this._version_value && os_boolean){
                this._bversion_value = regular_result[1];
            }
            this.webkit = function(){return os_boolean;};
            return os_boolean;
        },
        Web20: function() {
            /**
             * 该方法用于判断是否为webkit内核的浏览器，如果是返回ture 否 返回 false
             * @author 黄浩明
             * @return ture或者false
             */
            //var regular_result = this._ua.match(/iPhone;Opera Mini\/([\d.]+)/),
            var regular_result = this._ua.match(/Android\/([\d.]+)/),
                os_boolean = !!regular_result;
            if(!this._version_value && os_boolean){
                this._bversion_value = regular_result[1];
            }
            this.webkit = function(){return os_boolean;};
            return os_boolean;
        }
    }
}
if((ai.ovb.ipod()||ai.ovb.ipad()||ai.ovb.android()||ai.ovb.iphone()||ai.ovb.mQQ()||ai.ovb.operaMini()||ai.ovb.Web20())&&ai.ovb.webkit()) {
//    window.location.href = 'http://m.bayram.cn';
    window.location.href = '/site/';
}