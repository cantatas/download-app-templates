var $ = function (ele) {
    return document.querySelector(ele);
}
//配置
var config = {
    cover: '', //封面图片默认：。./imgs/cover4.jpg,替换cover4.jpg即可
    iPhone_download_name: 'iPhone下载', // iPhone下载名称
    android_download_name: 'Android下载', // Android下载名称
    iPhone_download_url: '', // iPhone下载链接
    android_download_url: '', // Android下载链接
    android_schema: '', // 打开协议：scheme://host/path?query
    ios_schema: '', // 打开协议：scheme://host/path?query
}
window.onload = function () {
    var iphone = $('#eIphone');
    var android = $('#eAndroid');
    var cover = $('#eCover');

    //设置封面
    cover.style.backgroundImage = 'url(./imgs/cover1.jpg)';
    //iphone 下载链接设置
    iphone.href = config.iPhone_download_url;
    //iphone 下载链接名称设置
    iphone.querySelector('span').innerText = config.iPhone_download_name;
    //android 下载链接设置
    android.href = config.android_download_url;
    //android 下载链接名称设置
    android.querySelector('span').innerText = config.android_download_name;

    var env = function () {
        var inBrowser = typeof window !== 'undefined'
        var UA = inBrowser && window.navigator.userAgent.toLowerCase();
        return {
            isAndroid: UA && UA.indexOf('android') > 0,
            isIOS: UA && /iphone|ipad|ipod|ios/.test(UA),
            isWechat: UA && UA.match(/MicroMessenger/i) == 'micromessenger'
        }
    }

    iphone.onclick = function (e) {

      if (env().isWechat) {

      }

      e.preventDefault();
    }
}