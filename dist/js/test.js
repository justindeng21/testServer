(function(url, async) {
    var d = document, sn = 'script', f = d.getElementsByTagName(sn)[0];
    if (!f) f = d.head;
    var s = d.createElement(sn);
    s.async = async;
    s.src = url;
    s.charset = 'utf-8';
    f.parentNode.insertBefore(s, f);
})("https://www.google.com/recaptcha/api.js?render=6Lcj2d8ZAAAAAHDjr-WrSH4_zL607V0O652zt16Q", true)