const isIe = function (userAgent) {
  return (userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1)
}
if (isIe(window.navigator.userAgent.toLowerCase())) { location.href = "https://less-log.com/eos-ie/" }