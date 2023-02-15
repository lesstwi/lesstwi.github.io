JavaScript
var userAgent = window.navigator.userAgent.toLowerCase();

if(userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1) {
    window.location.href('https://less-log.com/eos-ie/')
}