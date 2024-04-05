(function append() {
    let d = document, sn = "script", f = d.getElementsByTagName(sn)[0];
    if (!f) f = d.head;
    let s = d.createElement(sn);
    s.src ="https://c.evidon.com/dg/dg.js";
    s.charset = "utf-8";
    s.setAttribute("companyid","3714");
    f.parentNode.insertBefore(s, f);
})()