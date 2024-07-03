(function() {
    var a9 = window.evidon.notice;
    var a = a9.isMobile();
    var ba = a9.noticeGpcEnabled;
    var cw = a9.userGpcEnabled;
    var cv = null;
    var i = {};
    if (a9.iabEnabled && a9.iabVersion == 1) {
        i = window.evidon.cmp
    } else {
        if (a9.iabEnabled && a9.iabVersion == 2) {
            i = window.evidon.cmpv2
        }
    }
    var aT = "//c.evidon.com/sitenotice/images";
    var j = 18
      , o = 19
      , e = 30
      , k = 23
      , aY = 24
      , a0 = 32
      , a1 = 45
      , aZ = 46
      , aX = 47
      , a2 = 48;
    var p = {
        CUSTOM_FORM: 0,
        EVIDON_FORM: 1
    };
    var p = {
        CUSTOM_FORM: 0,
        EVIDON_FORM: 1
    };
    var cr = 1
      , cq = 2
      , cs = 3
      , cp = 4;
    var bd = "evidon-prefdiag-overlay"
      , d = "evidon-prefdiag-background"
      , h = "evidon-prefdiag-closeicon"
      , a6 = "evidon-prefdiag-navcontainer"
      , a5 = "evidon-prefdiag-navcontainer-icon"
      , a7 = "evidon-prefdiag-nav-"
      , a8 = "evidon-navigation-list"
      , f = "evidon-prefdiag-breadcrumb"
      , cj = "evidon-prefdiag-tabcontainer"
      , ck = "evidon-prefdiag-tab-"
      , cm = "evidon-prefdiag-tabheader-"
      , cl = "evidon-prefdiag-tabcontent-"
      , cn = "evidon-prefdiag-tabfooter"
      , c = "evidon-prefdiag-accept"
      , r = "evidon-prefdiag-decline"
      , bb = "evidon-prefdiag-notification"
      , bc = "evidon-prefdiag-notification-msg"
      , cf = 1
      , cg = 2
      , bs = "prc-title"
      , br = "prc-message"
      , bq = "prc-fp-cat-panel"
      , bo = "prc-fp-cat-header"
      , bp = "prc-fp-cat-message"
      , bk = "prc-fp-cat-all"
      , bl = "prc-fp-cat-all-toggle"
      , bm = "prc-fp-cat-all-toggle-label"
      , bn = "prc-fp-cat-container"
      , bh = "prc-fp-cat-"
      , bj = "prc-fp-cat-name-"
      , bg = "prc-fp-cat-desc-"
      , bi = "prc-fp-cat-learnmore-"
      , bA = "prc-tp-cat-panel"
      , by = "prc-tp-cat-header"
      , bz = "prc-tp-cat-message"
      , bu = "prc-tp-cat-all"
      , bv = "prc-tp-cat-all-toggle"
      , bw = "prc-tp-cat-all-toggle-label"
      , bx = "prc-tp-cat-container"
      , bC = "prc-tp-cat-"
      , bE = "prc-tp-cat-name-"
      , bB = "prc-tp-cat-desc-"
      , bD = "prc-tp-cat-learnmore-"
      , cc = "prc-vendors-panel"
      , ca = "prc-vendors-header"
      , cb = "prc-vendors-message"
      , b6 = "prc-vendors-all"
      , b7 = "prc-vendors-all-toggle"
      , b8 = "prc-vendors-all-toggle-label"
      , b9 = "prc-vendors-container"
      , b3 = "prc-vendor-"
      , b5 = "prc-vendor-name-"
      , b4 = "prc-vendor-link-"
      , bt = "prc-toggle-label"
      , bS = "evidon-vendordisplay-panel"
      , bV = "evidon-vendordisplay-logo"
      , bZ = "evidon-vendordisplay-title"
      , bX = "evidon-vendordisplay-parentdisplay"
      , bY = "evidon-vendordisplay-parenttitle"
      , bW = "evidon-vendordisplay-parent"
      , b0 = "evidon-vendordisplay-website"
      , b1 = "evidon-vendordisplay-website-title"
      , b2 = "evidon-vendordisplay-website-url"
      , bU = "evidon-vendordisplay-itow-title"
      , bT = "evidon-vendordisplay-itow"
      , bP = "evidon-vendordisplay-data"
      , bH = "evidon-vendordisplay-data-panel"
      , bI = "evidon-vendordisplay-data-title"
      , bG = "evidon-vendordisplay-data-body"
      , bM = "evidon-vendordisplay-sharing-title"
      , bL = "evidon-vendordisplay-sharing-body"
      , bK = "evidon-vendordisplay-retention-title"
      , bJ = "evidon-vendordisplay-retention-body"
      , bR = "evidon-vendordisplay-use-title"
      , bQ = "evidon-vendordisplay-use-body"
      , bO = "evidon-vendordisplay-storage-title"
      , bN = "evidon-vendordisplay-storage-body"
      , bF = "evidon-vendordisplay-coplink"
      , be = "evidon-cookiedisplay-panel"
      , bf = "evidon-cookiedisplay-table"
      , cy = "evidon-withdraw-confirmation-display"
      , cB = "evidon-withdraw-consent-title"
      , cz = "evidon-withdraw-consent-message"
      , cA = "evidon-withdraw-consent-no-button"
      , cC = "evidon-withdraw-consent-yes-button"
      , cx = "withdraw-background"
      , K = "iab-purpose-panel"
      , J = "iab-purpose-header"
      , F = "iab-purpose-all"
      , G = "iab-purpose-all-toggle"
      , H = "iab-purpose-all-toggle-label"
      , I = "iab-purpose-container"
      , D = "iab-purpose-"
      , E = "iab-purpose-name-"
      , C = "iab-purpose-desc-"
      , M = "iab-seeall-vendors"
      , ai = "iab-vendors-panel"
      , ah = "iab-vendors-header"
      , ad = "iab-vendors-all"
      , ae = "iab-vendors-all-toggle"
      , af = "iab-vendors-all-toggle-label"
      , ag = "iab-vendors-container"
      , Z = "iab-vendor-"
      , ac = "iab-vendor-name-"
      , aa = "iab-vendor-learnmore-"
      , ab = "iab-vendor-link-"
      , L = "iab-seeall-purposes"
      , Q = "iab-vendor-details-"
      , X = "iab-vendor-details-purpose-header"
      , Y = "iab-vendor-details-purpose-name-"
      , W = "iab-vendor-details-purpose-desc-"
      , S = "iab-vendor-details-legint-header"
      , T = "iab-vendor-details-legint-name-"
      , R = "iab-vendor-details-legint-desc-"
      , O = "iab-vendor-details-feature-header"
      , P = "iab-vendor-details-feature-name-"
      , N = "iab-vendor-details-feature-desc-"
      , U = "iab-vendor-details-privacypolicy-header"
      , V = "iab-vendor-details-privacypolicy-link-"
      , n = "data-request-panel"
      , m = "data-request-iframe"
      , w = "dns-request-panel"
      , v = "dns-request-iframe"
      , at = "iabv2-purposes-panel"
      , ar = "iabv2-purpose-header"
      , an = "iabv2-purpose-all"
      , ao = "iabv2-purpose-all-toggle"
      , ap = "iabv2-purpose-all-toggle-label"
      , aq = "iabv2-purpose-container"
      , al = "iabv2-purpose-"
      , am = "iabv2-purpose-name-"
      , ak = "iabv2-purpose-desc-"
      , av = "iabv2-seeall-vendors"
      , aR = "iabv2-vendors-panel"
      , aQ = "iabv2-vendors-header"
      , aM = "iabv2-vendors-all"
      , aN = "iabv2-vendors-all-toggle"
      , aO = "iabv2-vendors-all-toggle-label"
      , aP = "iabv2-vendors-container"
      , aI = "iabv2-vendor-"
      , aL = "iabv2-vendor-name-"
      , aJ = "iabv2-vendor-learnmore-"
      , aK = "iabv2-vendor-link-"
      , au = "iabv2-seeall-purposes"
      , az = "iabv2-vendor-details-"
      , aG = "iabv2-vendor-details-purpose-header"
      , aH = "iabv2-vendor-details-purpose-name-"
      , aF = "iabv2-vendor-details-purpose-desc-"
      , aB = "iabv2-vendor-details-legint-header"
      , aC = "iabv2-vendor-details-legint-name-"
      , aA = "iabv2-vendor-details-legint-desc-"
      , ax = "iabv2-vendor-details-feature-header"
      , ay = "iabv2-vendor-details-feature-name-"
      , aw = "iabv2-vendor-details-feature-desc-"
      , aD = "iabv2-vendor-details-privacypolicy-header"
      , aE = "iabv2-vendor-details-privacypolicy-link-"
      , z = "gdpr-request-panel"
      , y = "gdpr-request-iframe"
      , u = "evidon-prefdiag-breadcrumb-nav";
    var g = {};
    g[d] = "evidon-prefdiag-background";
    g[bd] = "evidon-prefdiag-overlay";
    g[h] = "evidon-prefdiag-closeimage";
    g[f] = "evidon-prefdiag-breadcrumb";
    g[a6] = "evidon-prefdiag-sidebar";
    g[a7] = "evidon-prefdiag-sidebarlink";
    g[a7 + "-evidon-prefdiag-active"] = "sidebarlink evidon-prefdiag-active";
    g[a5] = "evidon-prefdiag-logo";
    g[ck] = "evidon-prefdiag-tabcontainer";
    g[cn] = "evidon-prefdiag-tabfooter";
    g[c] = "evidon-prefdiag-acceptbtn";
    g[r] = "evidon-prefdiag-declinebtn";
    g[bs] = "evidon-prefdiag-title";
    g[br] = "evidon-prefdiag-message";
    g[bo] = "evidon-prefdiag-title";
    g[bp] = "evidon-prefdiag-message";
    g[bk] = "evidon-prefdiag-subtitle, accordian";
    g[bn] = "panel";
    g[bj] = "evidon-prefdiag-categoryheader";
    g[bg] = "evidon-prefdiag-categorydesc";
    g[bi] = "evidon-prefdiag-link";
    g[by] = "evidon-prefdiag-title";
    g[bz] = "evidon-prefdiag-message";
    g[bu] = "evidon-prefdiag-subtitle";
    g[bE] = "evidon-prefdiag-categoryheader";
    g[bB] = "evidon-prefdiag-categorydesc";
    g[bD] = "evidon-prefdiag-link";
    g[ca] = "evidon-prefdiag-categoryheader";
    g[cb] = "evidon-prefdiag-message";
    g[b6] = "evidon-prefdiag-subtitle";
    g[b3] = "evidon-prefdiag-categoryheader";
    g[b4] = "evidon-prefdiag-link";
    g[J] = "evidon-prefdiag-title";
    g[F] = "evidon-prefdiag-subtitle";
    g[E] = "evidon-prefdiag-categoryheader";
    g[C] = "evidon-prefdiag-categorydesc";
    g[M] = "evidon-prefdiag-link";
    g[ah] = "evidon-prefdiag-title";
    g[ad] = "evidon-prefdiag-subtitle";
    g[ac] = "evidon-prefdiag-categoryheader";
    g[aa] = "evidon-prefdiag-link";
    g[ab] = "evidon-prefdiag-link";
    g[L] = "evidon-prefdiag-link";
    g[X] = "evidon-prefdiag-subtitle";
    g[Y] = "evidon-prefdiag-categoryheader";
    g[W] = "evidon-prefdiag-categorydesc";
    g[S] = "evidon-prefdiag-subtitle";
    g[T] = "evidon-prefdiag-categoryheader";
    g[R] = "evidon-prefdiag-categorydesc";
    g[O] = "evidon-prefdiag-subtitle";
    g[P] = "evidon-prefdiag-categoryheader";
    g[N] = "evidon-prefdiag-categorydesc";
    g[U] = "evidon-prefdiag-subtitle";
    g[V] = "evidon-prefdiag-link";
    g[ar] = "evidon-prefdiag-title";
    g[an] = "evidon-prefdiag-subtitle";
    g[am] = "evidon-prefdiag-categoryheader";
    g[ak] = "evidon-prefdiag-categorydesc";
    g[av] = "evidon-prefdiag-link";
    g[aQ] = "evidon-prefdiag-title";
    g[aM] = "evidon-prefdiag-subtitle";
    g[aL] = "evidon-prefdiag-categoryheader";
    g[aJ] = "evidon-prefdiag-link";
    g[aK] = "evidon-prefdiag-link";
    g[au] = "evidon-prefdiag-link";
    g[aG] = "evidon-prefdiag-subtitle";
    g[aH] = "evidon-prefdiag-categoryheader";
    g[aF] = "evidon-prefdiag-categorydesc";
    g[aB] = "evidon-prefdiag-subtitle";
    g[aC] = "evidon-prefdiag-categoryheader";
    g[aA] = "evidon-prefdiag-categorydesc";
    g[ax] = "evidon-prefdiag-subtitle";
    g[ay] = "evidon-prefdiag-categoryheader";
    g[aw] = "evidon-prefdiag-categorydesc";
    g[aD] = "evidon-prefdiag-subtitle";
    g[aE] = "evidon-prefdiag-link";
    g[bc] = "evidon-prefdiag-title";
    var ci = {};
    ci.showDeclineButton = true;
    ci[bd] = "";
    ci[d] = "";
    ci[h] = "position: absolute; right: 18px; top: 6px; width: 14px; height: 14px; cursor: pointer; z-index: 5;";
    ci[a6] = "display: inline-block; width: 225px; height: 450px; background: #d8d8d8;";
    ci[a5] = "height: 80px;";
    ci[a7] = "white-space: nowrap; padding: 12px; cursor: pointer; display: block; box-sizing: border-box;";
    ci[a7 + "-active"] = "white-space: nowrap; padding: 12px; cursor: pointer; border-top: 1px solid #D3D3D3; border-bottom: 1px solid #D3D3D3; display: block; box-sizing: border-box;";
    ci[f] = "";
    ci[cj] = "position:absolute; top:0; left: 226px; bottom:0;right:0; vertical-align: top;";
    ci[ck] = "height: 100%; width: 100%; display: none; box-sizing: border-box; overflow-y: scroll; padding: 8px 8px 20px 8px;";
    ci[cl] = "";
    ci[cm] = "width: 100%; padding: 24px 0px; box-sizing: border-box; font-size: 1.1em;";
    ci[cn] = "position:absolute; bottom: 0; left: 0; right:0; height: 50px; width: 100%; text-align: right; border-top: 1px solid #D3D3D3; padding: 4px 0;";
    ci[c] = "";
    ci[r] = "";
    ci[bb] = "margin-top:35px;height: 28px;display: flex;align-items: center;padding-left: 8px;font-size:14px;font-weight:600;";
    ci[bq] = "display:none;width: 100%;";
    ci[bo] = "";
    ci[bp] = "";
    ci[bk] = "";
    ci[bl] = "float: right;";
    ci[bm] = "float: right; padding: 2px 8px;";
    ci[bn] = " margin-top: 12px;";
    ci[bj] = "";
    ci[bg] = "";
    ci[bi] = "";
    ci[bA] = "width: 100%;";
    ci[by] = "";
    ci[bz] = "";
    ci[bu] = "";
    ci[bv] = "float: right;";
    ci[bw] = "float: right; padding: 2px 8px;";
    ci[bx] = "margin-top: 12px;";
    ci[bE] = "";
    ci[bB] = "";
    ci[bD] = "";
    ci[cc] = "width: 100%; display: none;";
    ci[ca] = "";
    ci[cb] = "";
    ci[b6] = "";
    ci[b7] = "float: right;";
    ci[b8] = "float: right; padding: 2px 8px;";
    ci[b9] = "margin-top: 12px;";
    ci[b3] = "margin-left: 12px; border-bottom: 2px solid #D3D3D3;";
    ci[b5] = "";
    ci[b4] = "";
    ci[bt] = "float: right; padding: 0px 8px;";
    ci[bS] = "width: 100%; display: none; padding: 8px;";
    ci[be] = "width: 100%; display: none; padding: 8px;";
    ci[bf] = "width: 90%; border: 0; border-collapse: collapse;";
    ci[K] = "width: 100%;";
    ci[J] = "";
    ci[F] = "";
    ci[G] = "float: right;";
    ci[H] = "float: right; padding: 2px 8px;";
    ci[I] = "margin-top: 32px;";
    ci[E] = "";
    ci[C] = "";
    ci[M] = "padding-left: 6px;";
    ci[ai] = "display: none;";
    ci[ad] = "";
    ci[ae] = "float: right;";
    ci[af] = "float: right; padding: 2px 8px;";
    ci[ag] = "margin-top: 32px;";
    ci[ac] = "";
    ci[aa] = "";
    ci[ab] = "";
    ci[L] = "padding-left: 6px;";
    ci[Q] = "border: 1px solid #CACACA; padding: 8px;";
    ci[X] = "";
    ci[Y] = "";
    ci[W] = "";
    ci[S] = "";
    ci[T] = "";
    ci[R] = "";
    ci[O] = "";
    ci[P] = "";
    ci[N] = "";
    ci[U] = "";
    ci[V] = "";
    ci[n] = "display: block; padding: 12px 0px; margin: 0px 12px;";
    ci[m] = "";
    ci[at] = "width: 100%;";
    ci[ar] = "";
    ci[an] = "";
    ci[ao] = "float: right;";
    ci[ap] = "float: right; padding: 5px 8px;";
    ci[aq] = "";
    ci[am] = "";
    ci[ak] = "";
    ci[av] = "padding-left: 6px;";
    ci[aR] = "display: none;";
    ci[aM] = "";
    ci[aN] = "float: right;";
    ci[aO] = "float: right; padding: 2px 8px;";
    ci[aP] = "";
    ci[aL] = "";
    ci[aJ] = "";
    ci[aK] = "";
    ci[au] = "padding-left: 6px;";
    ci[az] = "border: 1px solid #CACACA; padding: 8px;";
    ci[aG] = "";
    ci[aH] = "";
    ci[aF] = "";
    ci[aB] = "";
    ci[aC] = "";
    ci[aA] = "";
    ci[ax] = "";
    ci[ay] = "";
    ci[aw] = "";
    ci[aD] = "";
    ci[aE] = "";
    ci[z] = "display: block; padding: 12px 0px; margin: 0px 12px;";
    ci[y] = "";
    ci[w] = "display: block; padding: 12px 0px; margin: 0px 12px;";
    ci[v] = "";
    if (a) {
        ci[ck] = "height: 325px; width: 100%; display: none; box-sizing: border-box; overflow-y: scroll; padding: 8px; position: relative;";
        ci[cn] = "box-sizing: border-box; min-height: 50x; height: 50px; width: 100%; text-align: right; border-top: 1px solid #D3D3D3; position: absolute; bottom: 0px;left:0;"
    }
    ci[u] = "background:transparent;color: #3f5a87;font-size: 12px;padding: 0;text-decoration: underline;";
    var s = {
        snL2ConsentTitle: "Withdraw consent for cookie use",
        snL2ConsentMessage: "Under the GDPR you have the right to withdraw consent for this site to use cookies to gather information about you and your browsing activities.  Do you want to exercise your right to withdraw consent?",
        snL2ConsentYesButton: "Yes, withdraw consent",
        snL2ConsentNoButton: "No, keep consent",
        snL2OptInTitle: "Opt Back In to Cookie Use",
        snL2OptInMessage: "You've previously chosen to opt-out of consent for this site to use technologies to gather information about you and your browsing activities. Do you want to opt back in to this type of tracking?",
        snL2OptInYesButton: "Yes, Opt Back in",
        snL2OptInNoButton: "No, Remain Opted-Out",
        mobilesnL2ConsentTitle: "Withdraw consent for cookie use",
        mobilesnL2ConsentMessage: "Under the GDPR you have the right to withdraw consent for this site to use cookies to gather information about you and your browsing activities.  Do you want to exercise your right to withdraw consent?",
        mobilesnL2ConsentYesButton: "Yes, withdraw consent",
        mobilesnL2ConsentNoButton: "No, keep consent",
        mobilesnL2OptInTitle: "Opt Back In to Cookie Use",
        mobilesnL2OptInMessage: "You've previously chosen to opt-out of consent for this site to use technologies to gather information about you and your browsing activities. Do you want to opt back in to this type of tracking?",
        mobilesnL2OptInYesButton: "Yes, Opt Back in",
        mobilesnL2OptInNoButton: "No, Remain Opted-Out",
        mobilesnL2ConsentLink: "Withdraw Consent",
        snL2ConsentLink: "Withdraw Consent",
        mobilesnL2OptInLink: "Opt-In",
        snL2OptInLink: "Opt-In",
        optoutButtonText: "Opt-Out",
        mobileOptoutButtonText: "Opt-Out",
        snL2L3CookiePolicy: "Cookie Policy",
        mobilesnL2L3CookiePolicy: "Cookie Policy",
        snL2L3RequiredCategory: "All current vendors in this category are required.",
        mobilesnL2L3RequiredCategory: "All current vendors in this category are required.",
        snL2L3GPCMessage: "Global Privacy Control enabled.",
        snL2L3ConflictMessage: "Global Privacy Control Conflict.",
        mobilesnL2L3GPCMessage: "Global Privacy Control enabled.",
        mobilesnL2L3ConflictMessage: "Global Privacy Control Conflict."
    };
    function l(cG, cE, cH) {
        var cF = document.createElement(cG);
        if (!cE) {
            cE = {}
        }
        for (var cD in cE) {
            if (cD === "css") {
                cF.style.cssText = cE[cD]
            } else {
                if (cD === "crossorigin" || cD.indexOf("data") === 0 || cD.indexOf("aria") === 0 || cD.indexOf("role") === 0) {
                    cF.setAttribute(cD, cE[cD])
                } else {
                    cF[cD] = cE[cD]
                }
            }
        }
        if (cH) {
            cH.appendChild(cF)
        }
        return cF
    }
    function B(cD) {
        if (!cv || !cv.hasOwnProperty(cD)) {
            if (s.hasOwnProperty(cD)) {
                return s[cD]
            } else {
                return "UNK: " + cD
            }
        }
        return a9.formatTranslation(cv[cD])
    }
    function aV(cD) {
        for (var cE in cD) {
            if (cD.hasOwnProperty(cE)) {
                return false
            }
        }
        return JSON.stringify(cD) === JSON.stringify({})
    }
    function aW(cD) {
        return typeof cD === "string" ? cD.toLowerCase().split(" ").join("_").split("/").join("_") : cD
    }
    function ch(cG) {
        var cE = 5
          , cF = 500
          , cI = new Date().getTime()
          , cH = cG.style.cssText;
        function cD() {
            var cL = new Date().getTime();
            var cJ = cL - cI;
            var cK = cJ / cF;
            if (cK < 1) {
                var cM = cE * Math.sin(cK * 4 * Math.PI);
                cG.style.left = cM + "px";
                setTimeout(cD, Math.min(25, cF - cJ))
            } else {
                cG.style.cssText = cH
            }
        }
        cG.style.position = "relative";
        cD()
    }
    function aU(cE) {
        var cH, cF, cD, cG;
        if (cE.match(/^rgb/)) {
            cE = cE.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
            cH = cE[1];
            cF = cE[2];
            cD = cE[3]
        } else {
            cE = +("0x" + cE.slice(1).replace(cE.length < 5 && /./g, "$&$&"));
            cH = cE >> 16;
            cF = cE >> 8 & 255;
            cD = cE & 255
        }
        cG = Math.sqrt(0.299 * (cH * cH) + 0.587 * (cF * cF) + 0.114 * (cD * cD));
        if (cG > 127.5) {
            return false
        } else {
            return true
        }
    }
    function A() {
        var cE = aT + "/new-window.png";
        var cF = document.getElementById(a6);
        if (cF) {
            var cD = "";
            if (typeof window.getComputedStyle === "function") {
                cD = window.getComputedStyle(cF).getPropertyValue("background-color")
            } else {
                cD = cF.styles.backgroundColor
            }
            if (cD) {
                if (aU(cD)) {
                    return aT + "/new-window-w.png"
                } else {
                    return cE
                }
            } else {
                return cE
            }
        } else {
            return cE
        }
    }
    var b = false;
    var cu = function(cD, cE) {
        this.id = cD;
        this.onchange = cE || null;
        this.categoryId = null;
        this._label = null;
        this._checkbox = null;
        this._slider = null;
        this._addStyles = function() {
            if (b === true) {
                return
            }
            b = true;
            var cF = '.evidon-switch {position: relative;display: inline-block;width: 40px;height: 23px; margin:2px;}\n.evidon-switch input {display: none;}\n.evidon-switch-slider {position: absolute;cursor: pointer;top: 0;left: 0;right: 0;bottom: 0;border-radius: 12px;background-color: #ccc;-webkit-transition: .4s;transition: .4s;}\n.evidon-switch-slider:before {position: absolute;content: "";height: 15px;width: 15px;left: 4px;bottom: 4px;border-radius: 9px;background-color: white;-webkit-transition: .4s;transition: .4s;}\n.slideron {background-color: #2196F3;}\n.slideron:before {-webkit-transform: translateX(17px);-ms-transform: translateX(17px);transform: translateX(17px);}\n.disabled { background-color: #ccc; }\n.disabled:before { background-color: #e4e4e4; }\ninput:focus + .evidon-switch-slider {box-shadow: 0 0 1px #ccc;}\n';
            l("style", {
                id: "toggle-style",
                innerHTML: cF
            }, document.head)
        }
        ;
        this._create = function(cF) {
            var cG = this;
            this._label = l("label", {
                id: this.id,
                className: "evidon-switch",
                css: "float: right",
                tabIndex: 0,
                role: "switch",
                "aria-checked": "false",
                "aria-label": cF,
                onkeyup: function(cH) {
                    if (cH.keyCode === 32) {
                        cH.preventDefault();
                        cG._checkbox.checked = !cG._checkbox.checked;
                        cG._checkbox.onchange(cH)
                    }
                },
                onkeydown: function(cH) {
                    if (cH.keyCode === 32) {
                        cH.preventDefault()
                    }
                }
            });
            this._checkbox = l("input", {
                id: this.id + "-chk",
                type: "checkbox",
                role: "switch",
                onchange: function(cH) {
                    cG._toggleChange(cH)
                }
            }, this._label);
            this._slider = l("div", {
                className: "evidon-switch-slider",
                "aria-label": cF,
                role: "switch",
            }, this._label);
            return this._label
        }
        ;
        this._toggleChange = function(cG) {
            this._slider.className = "evidon-switch-slider";
            if (this.checked) {
                this._slider.className += " slideron"
            }
            this._slider.ariaChecked = this.checked;
            this._label.setAttribute("aria-checked", this.checked);
            if (this.disabled) {
                this._slider.className += " disabled"
            }
            if (typeof this.onchange === "function" && cG) {
                var cF = {
                    id: this.id,
                    checked: this.checked
                };
                this.onchange(cF);
                this._label.setAttribute("aria-checked", this.checked);
                window.evidon.notice.consentChangedCallbackExecuted = true
            }
        }
    };
    Object.defineProperties(cu.prototype, {
        checked: {
            get: function() {
                return this._checkbox.checked
            },
            set: function(cD) {
                if (this.disabled) {
                    return
                }
                this._checkbox.checked = cD;
                this._toggleChange()
            }
        },
        disabled: {
            get: function() {
                return this._checkbox.disabled
            },
            set: function(cD) {
                this._checkbox.disabled = cD;
                this._toggleChange()
            }
        }
    });
    cu.prototype.build = function(cD) {
        this._addStyles();
        if (typeof cD === "undefined") {
            cD = ""
        }
        return this._create(cD)
    }
    ;
    var co = function(cE, cD) {
        this.type = cE;
        this.message = cD;
        this._raiseInterval = null;
        this._lowerInterval = null;
        this._closeTimeout = null;
        this._init = function() {
            var cH = this;
            var cG = t._tabContainer;
            if (a) {
                cG = t._overlay
            }
            this._container = l("div", {
                id: "toast",
                css: "position: absolute; bottom: -24px; left: 12px; right: 12px; border-radius: 5px; display: none;",
                onclick: function(cI) {
                    if (cH._raiseInterval) {
                        clearInterval(cH._raiseInterval)
                    }
                    if (cH._lowerInterval) {
                        clearInterval(cH._lowerInterval)
                    }
                    if (cH._closeTimeout) {
                        clearTimeout(cH._closeTimeout)
                    }
                    cH._destroy();
                    cI.stopPropagation()
                }
            }, cG);
            var cF = "";
            switch (cE) {
            case cr:
                break;
            case cq:
                cF = "/ic_info_white.png";
                break;
            case cs:
            case cp:
                cF = "/ic_error_white.png";
                break
            }
            l("img", {
                id: "toast-icon",
                src: aT + cF,
                css: "display: inline-block; width: 14px; height: 14px; margin: 6px; vertical-align: middle;"
            }, this._container);
            l("div", {
                id: "toast-message",
                css: "display: inline-block; vertical-align: middle; width: calc(100% - 26px);",
                innerText: this.message
            }, this._container);
            switch (cE) {
            case cr:
                break;
            case cq:
                this._container.style.background = "lightgrey";
                this._container.style.color = "black";
                break;
            case cs:
                this._container.style.background = "#dddd00";
                this._container.style.color = "black";
                break;
            case cp:
                this._container.style.background = "red";
                this._container.style.color = "white";
                break
            }
        }
        ;
        this._close = function() {
            var cG = this;
            var cF = parseInt(this._container.style.bottom);
            this._container.style.display = "";
            this._lowerInterval = setInterval(function() {
                cF -= 3;
                cG._container.style.bottom = cF + "px";
                if (cF <= -24) {
                    clearInterval(cG._lowerInterval);
                    cG._destroy()
                }
            }, 50)
        }
        ;
        this._destroy = function() {
            var cF = this._container.parentElement;
            if (cF) {
                cF.removeChild(this._container)
            }
        }
        ;
        this._init()
    };
    co.prototype.display = function(cE) {
        var cF = this;
        if (!cE) {
            cE = 3
        }
        var cD = parseInt(this._container.style.bottom);
        this._container.style.display = "";
        this._raiseInterval = setInterval(function() {
            cD += 3;
            cF._container.style.bottom = cD + "px";
            if (cD >= 9) {
                clearInterval(cF._raiseInterval)
            }
        }, 50);
        this._closeTimeout = setTimeout(function() {
            cF._close()
        }, cE * 1000)
    }
    ;
    co.show = function(cF, cE, cD) {
        new co(cF,cE).display(cD)
    }
    ;
    var ce = function() {
        var cD = this;
        this._id = "prior-consent";
        this.TITLE_TEXT_ID = a ? "mobilesnL2L3InformationWeCollect" : "snL2L3InformationWeCollect";
        this._firstPartyCookiesPanel = null;
        this._lblAllFPCookies = null;
        this._tglAllFPCookies = null;
        this._fpCookieToggles = [];
        this._firstPartyCookiesContainer = null;
        this._thirdPartyCategoriesPanel = null;
        this._lblAllTPCategories = null;
        this._tglAllTPCategories = null;
        this._tpCategoryToggles = [];
        this._thirdPartyCategoriesContainer = null;
        this._vendorsPanel = null;
        this._vendorDetailPanel = null;
        this._lblAllVendors = null;
        this._tglAllVendors = null;
        this._vendorToggles = [];
        this._vendorsContainer = null;
        this._state = {};
        this._displayCookies = function(cE) {
            var cF = this;
            var cG = this._firstPartyCookiesContainer;
            while (cG.firstChild) {
                cG.removeChild(cG.firstChild)
            }
            this._fpCookieToggles = [];
            a9.getOptOutCookies(function(cK, cJ) {
                if (aV(cJ)) {
                    cF._firstPartyCookiesPanel.style.display = "none";
                    return
                } else {
                    cF._firstPartyCookiesPanel.style.display = "block"
                }
                for (var cI in cJ) {
                    var cH = cF._createCookieContent(cJ[cI]);
                    cG.appendChild(cH)
                }
                cF._onCookieToggle();
                if (cE) {
                    cE()
                }
            })
        }
        ;
        this._createCookieContent = function(cG) {
            var cF = l("div", {
                id: bj,
                className: g[b3],
                css: ci[b3]
            });
            var cE = window.evidon.notice._parseCss(ci[b4]);
            cE.background = "transparent";
            cE.border = "none";
            cE.cursor = "pointer";
            cE.display = "inline-block";
            var cH = l("button", {
                id: b4 + cG.id,
                className: g[b4],
                css: window.evidon.notice._joinCss(cE),
                innerText: cG.name,
                onclick: function() {
                    cD._showCookieDetails(cG)
                }
            }, cF);
            var cI = new cu(cG.id + "-toggle",function(cJ) {
                cD._onCookieToggle(cJ)
            }
            );
            cI.cookieId = cG.id;
            cF.appendChild(cI.build(cG.name));
            this._fpCookieToggles.push(cI);
            if (cG.required) {
                cI.checked = true;
                cI.disabled = true;
                cI._label.style.display = "none";
                l("label", {
                    css: ci[bt],
                    innerText: B(a ? "mobilesnL2L3Required" : "snL2L3Required")
                }, cF)
            } else {
                if (!a9.consentDetailCategories && !a9.consentDetailVendors) {
                    cI.disabled = true;
                    cI._label.style.display = "none";
                    l("label", {
                        css: ci[bt]
                    }, cF)
                } else {
                    cI.checked = this._state.current.cookies[cG.id]
                }
            }
            return cF
        }
        ;
        this._toggleAllCookies = function(cG) {
            for (var cE = 0; cE < this._fpCookieToggles.length; cE++) {
                var cF = this._fpCookieToggles[cE];
                if (cF.disabled) {
                    continue
                }
                this._state.current.cookies[cF.cookieId] = cF.checked = cG
            }
            this._onCookieToggle(null)
        }
        ;
        this._onCookieToggle = function(cG) {
            var cE = false;
            var cJ = 0;
            var cF = 0;
            for (var cH = 0; cH < this._fpCookieToggles.length; cH++) {
                var cI = this._fpCookieToggles[cH];
                if (cI.disabled) {
                    continue
                }
                cE = cI.checked || cE;
                if (cG && cI.id === cG.id) {
                    this._state.current.cookies[cI.cookieId] = cI.checked
                }
                cJ++;
                if (cI.checked) {
                    cF++
                }
            }
            if (this._tglAllFPCookies) {
                this._tglAllFPCookies.checked = cE;
                this._lblAllFPCookies.innerText = B(a ? "mobilesnL2L3CountAllowed" : "snL2L3CountAllowed").replace("{count}", cF).replace("{total}", cJ)
            }
            t._adjustFooter()
        }
        ;
        this._showCookieDetails = function(cF) {
            var cK = this;
            function cG(cQ, cS) {
                var cP = document.createElement("tr");
                cP.style.cssText = "border-bottom: 1px solid #aaaaaa;";
                var cR = document.createElement("td");
                cR.style.cssText = "width: 30%; padding: 8px;";
                cR.innerText = cQ;
                cP.appendChild(cR);
                var cO = document.createElement("td");
                cO.innerText = cS;
                cO.style.cssText = "padding: 8px;";
                cP.appendChild(cO);
                cK._firstPartyDetailTable.appendChild(cP)
            }
            var cN = document.getElementById(bs);
            if (cN) {
                cN.style.display = "none"
            }
            document.getElementById(br).style.display = "none";
            document.getElementById(bq).style.display = "none";
            document.getElementById(bA).style.display = "none";
            this._firstPartyDetailTable.innerHTML = "";
            cG("Name", cF.name);
            var cH = cF.description || "";
            cG("Description", cH);
            var cM = (cF.required) ? "Yes" : "No";
            cG("Required", cM);
            var cL = cF.optout || "None";
            cG("Opt-Out", cL);
            var cJ = cF.host || "";
            cG("Host", cJ);
            var cI = (cF.duration) ? cF.duration + " Days" : "";
            cG("Duration", cI);
            var cE = cF.category || "";
            cG("Category", cE);
            cD._firstPartyDetailPanel.style.display = "block";
            document.getElementById("evidon-prefdiag-tab-0").scrollTo({
                top: 0,
                behavior: "smooth"
            });
            t.hideBreadcrumb();
            t.showBreadcrumb(B(a ? "mobilesnL2L3FirstPartyTitle" : "snL2L3FirstPartyTitle"), function() {
                cD._firstPartyDetailPanel.style.display = "none";
                var cO = document.getElementById(bs);
                if (cO) {
                    cO.style.display = "block"
                }
                document.getElementById(br).style.display = "block";
                document.getElementById(bq).style.display = "block";
                document.getElementById(bA).style.display = "block";
                t.hideBreadcrumb()
            })
        }
        ;
        this._displayCategories = function(cE) {
            var cF = this;
            var cG = this._thirdPartyCategoriesContainer;
            while (cG.firstChild) {
                cG.removeChild(cG.firstChild)
            }
            this._tpCategoryToggles = [];
            a9.getOptOutCategories(function(cL, cH) {
                
                if (cL) {} else {
                    for (var cK in cH) {
                        var cI = cH[cK];
                        if (!cI.name || cI.name === "") {
                            cI.name = "Uncategorized"
                        }
                        if (a9.activecategorySet && a9.activecategorySet[cH[cK].id]) {
                            cI.dataSharing = a9.activecategorySet[cH[cK].id].dataSharing
                        }
                        var cJ = cF._createCategoryContent(cI);
                        cJ.setAttribute("id",cK.replace(/[^a-zA-Z ]/g, "-"));
                        cG.appendChild(cJ);
                        console.log(cK);
                    }
                    if (a9.consentDetailCategories) {
                        cF._onCategoryToggle(null, "thirdparty")
                    }
                }
                if (cE) {
                    cE()
                }
            })
        }
        ;
        this._createCategoryContent = function(cE) {
            var cF = l("div", {});
            var cI = aW(cE.id);
            if (a) {
                var cL = a9._parseCss(ci[bE]);
                cL.display = "flex";
                cL["align-items"] = "center";
                ci[bE] = a9._joinCss(cL);
                cL = a9._parseCss(ci[bD]);
                cL.width = "calc(100% - 40px)";
                ci[bD] = a9._joinCss(cL)
            }
            var cM = l("div", {
                id: bE + cI,
                className: g[bE],
                css: ci[bE]
            }, cF);
            var cK = ci[bD];
            var cJ = window.evidon.notice._parseCss(cK);
            cJ.display = "inline-block";
            l("a", {
                id: bD + cI,
                className: g[bD],
                css: window.evidon.notice._joinCss(cJ),
                href: "#",
                innerText: cE.name,
                onclick: function(cP) {
                    cP.preventDefault();
                    cP.stopPropagation();
                    cD._showVendorScreen(cE)
                }
            }, cM);
            var cH = a9._isAllVendorsRequired(cE.vendors);
            if (a9.consentDetailCategories && !a9._isConsentGiven() && a9.isGPCApply() && cE.dataSharing === 1) {
                var cN = new cu(cI + "-toggle",function(cP) {
                    cD._onCategoryToggle(cP)
                }
                );
                cN.categoryId = cE.id;
                cM.appendChild(cN.build(cE.name + " category"));
                this._tpCategoryToggles.push(cN);
                cN.checked = false;
                this._state.current.categories[cE.id] = false;
                this._onCategoryToggle({
                    id: cI + "-toggle",
                    checked: false
                })
            } else {
                if (a9.consentDetailCategories && a9._isConsentGiven() && a9.isGPCApply() && cE.dataSharing === 1) {
                    var cN = new cu(cI + "-toggle",function(cP) {
                        cD._onCategoryToggle(cP)
                    }
                    );
                    cN.categoryId = cE.id;
                    cM.appendChild(cN.build(cE.name + " category"));
                    this._tpCategoryToggles.push(cN);
                    cN.checked = this._state.current.categories[cE.id]
                } else {
                    if (a9.consentDetailVendors && a9.isGPCApply() && cE.dataSharing === 1) {} else {
                        if (cE.required || (a9.consentDetailCategories && !a9.consentRequired) || a9.consentTypeId == 0) {
                            l("label", {
                                css: ci[bt],
                                innerText: B(a ? "mobilesnL2L3Required" : "snL2L3Required")
                            }, cM)
                        } else {
                            if (cH) {
                                l("label", {
                                    css: ci[bt],
                                    innerText: B(a ? "mobilesnL2L3Required" : "snL2L3Required") + "*",
                                    title: B(a ? "mobilesnL2L3RequiredCategory" : "snL2L3RequiredCategory")
                                }, cM)
                            } else {
                                if (a9.consentDetailCategories) {
                                    var cN = new cu(cI + "-toggle",function(cP) {
                                        cD._onCategoryToggle(cP)
                                    }
                                    );
                                    cN.categoryId = cE.id;
                                    cM.appendChild(cN.build(cE.name + " category"));
                                    this._tpCategoryToggles.push(cN);
                                    cN.checked = this._state.current.categories[cE.id]
                                }
                            }
                        }
                    }
                }
            }
            for (var cO = 0; cO < cE.vendors.length; cO++) {
                if (cE.vendors[cO].Required == 1) {
                    this._state.current.vendors[cE.vendors[cO].CompanyId] = true
                }
            }
            var cG = cE.description || "";
            l("div", {
                id: bB + cI,
                className: g[bB],
                css: ci[bB],
                innerHTML: cG
            }, cF);
            return cF
        }
        ;
        this._toggleAllCategories = function(cI) {
            for (var cF = 0; cF < this._tpCategoryToggles.length; cF++) {
                var cG = this._tpCategoryToggles[cF];
                if (cG.disabled) {
                    continue
                }
                this._state.current.categories[cG.categoryId] = cG.checked = cI;
                var cE = a9.getOptOutCategory(cG.categoryId);
                if (cE) {
                    for (var cH = 0; cH < cE.vendors.length; cH++) {
                        if (cE.vendors[cH].Required == 1) {
                            this._state.current.vendors[cE.vendors[cH].CompanyId] = true
                        } else {
                            this._state.current.vendors[cE.vendors[cH].CompanyId] = cG.checked
                        }
                    }
                }
            }
            this._onCategoryToggle(null)
        }
        ;
        this._onCategoryToggle = function(cH) {
            var cE = false;
            var cK = 0;
            var cG = 0;
            for (var cI = 0; cI < this._tpCategoryToggles.length; cI++) {
                var cJ = this._tpCategoryToggles[cI];
                if (cJ.disabled) {
                    continue
                }
                cE = cJ.checked || cE;
                if (cH && cJ.id === cH.id) {
                    this._state.current.categories[cJ.categoryId] = cJ.checked;
                    var cF = a9.getOptOutCategory(cJ.categoryId);
                    if (cF) {
                        for (var cL = 0; cL < cF.vendors.length; cL++) {
                            if (cF.vendors[cL].Required == 1) {
                                this._state.current.vendors[cF.vendors[cL].CompanyId] = true
                            } else {
                                this._state.current.vendors[cF.vendors[cL].CompanyId] = cJ.checked
                            }
                        }
                    }
                }
                cK++;
                if (cJ.checked) {
                    cG++
                }
            }
            if (this._tglAllTPCategories) {
                this._tglAllTPCategories.checked = cE
            }
            if (this._lblAllTPCategories) {
                this._lblAllTPCategories.innerText = B(a ? "mobilesnL2L3CountAllowed" : "snL2L3CountAllowed").replace("{count}", cG).replace("{total}", cK)
            }
            t._adjustFooter()
        }
        ;
        this._showVendorScreen = function(cE) {
            this._firstPartyCookiesPanel.style.display = "none";
            this._thirdPartyCategoriesPanel.style.display = "none";
            this._vendorsPanel.style.display = "block";
            var cF = document.getElementById(bs);
            if (cF) {
                cF.style.display = "none"
            }
            document.getElementById(br).style.display = "none";
            document.getElementById(cb).style.display = "block";
            t.hideBreadcrumb();
            t.showBreadcrumb(B(a ? "mobilesnL2L3FirstPartyTitle" : "snL2L3FirstPartyTitle"), function() {
                cD._hideVendorScreen()
            });
            document.getElementById(ca).innerHTML = cE.name;
            document.getElementById(cb).innerHTML = cE.description;
            this._displayVendors(cE)
        }
        ;
        this._showVendorDetails = function(cF, cE) {
            a9.pullVendorDetails(cF.CompanyIdentifier, function(cS, c0) {
                if (cS) {} else {
                    if (!c0) {} else {
                        t.hideBreadcrumb();
                        t.showBreadcrumb("Back to " + cE.name, function() {
                            cD._vendorDetailPanel.style.display = "none";
                            cD._showVendorScreen(cE)
                        });
                        var cZ = document.getElementById(bs);
                        if (cZ) {
                            cZ.style.display = "none"
                        }
                        document.getElementById(br).style.display = "none";
                        cD._vendorsPanel.style.display = "none";
                        cD._vendorDetailPanel.style.display = "block";
                        document.getElementById("evidon-prefdiag-tab-0").scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });
                        var cX = document.getElementById(bV);
                        if (c0.logourl) {
                            cX.src = c0.logourl
                        } else {
                            cX.style.display = "none"
                        }
                        document.getElementById(bZ).innerHTML = c0.name;
                        var cY = document.getElementById(bX);
                        if (c0.parentcompany) {
                            cY.style.display = "block";
                            document.getElementById(bY).innerHTML = (c0.translations.owned_by || "Owned By");
                            document.getElementById(bW).innerHTML = c0.parentcompany.name
                        } else {
                            cY.style.display = "none"
                        }
                        var c1 = document.getElementById(b0);
                        if (c0.website) {
                            c1.style.display = "block";
                            document.getElementById(b1).innerHTML = (c0.translations.page.website || "Website:");
                            document.getElementById(b2).href = c0.website;
                            document.getElementById(b2).innerText = c0.website;
                            document.getElementById(b2).target = "_blannk"
                        } else {
                            c1.style.display = "none"
                        }
                        var cV = document.getElementById(bU);
                        var cU = document.getElementById(bT);
                        if (c0.intheirownwords) {
                            cV.innerHTML = (c0.translations.in_their_own_words || "In Their Own Words");
                            cU.innerHTML = c0.intheirownwords
                        } else {
                            cU.style.display = "none";
                            cV.style.display = "none"
                        }
                        document.getElementById(bP).innerHTML = (c0.translations.company_collection_header || "What data does this company collect?");
                        var cI = document.getElementById(bI);
                        var cH = document.getElementById(bG);
                        if (c0.datacollected && c0.datacollected.length > 0) {
                            cI.innerHTML = (c0.translations.data_collected || "Data Collected");
                            var cR = "";
                            for (var cT = 0; cT < c0.datacollected.length; cT++) {
                                var cW = c0.datacollected[cT];
                                cR += cW.name;
                                if (cW.subcategories.length > 0) {
                                    cW.subcategories.sort(function(c2, c3) {
                                        if (c2 < c3) {
                                            return -1
                                        } else {
                                            return 1
                                        }
                                    });
                                    cR += " : " + cW.subcategories.join(", ") + "<br /><br />"
                                }
                            }
                            cH.innerHTML = cR;
                            cI.style.display = "block";
                            cH.style.display = "block"
                        } else {
                            cI.style.display = "none";
                            cH.style.display = "none"
                        }
                        var cM = document.getElementById(bM);
                        var cL = document.getElementById(bL);
                        if (c0.datasharing && c0.datasharing.length > 0) {
                            cM.innerHTML = (c0.translations.data_sharing || "Data Sharing");
                            c0.datasharing.sort(function(c2, c3) {
                                if (c2 < c3) {
                                    return -1
                                } else {
                                    return 1
                                }
                            });
                            cL.innerHTML = c0.datasharing.join(", ");
                            cM.style.display = "block";
                            cL.style.display = "block"
                        } else {
                            cM.style.display = "none";
                            cL.style.display = "none"
                        }
                        var cK = document.getElementById(bK);
                        var cJ = document.getElementById(bJ);
                        if (c0.dataretention && c0.dataretention.length > 0) {
                            cK.innerHTML = (c0.translations.data_retention || "Data Retention");
                            c0.dataretention.sort(function(c2, c3) {
                                if (c2 < c3) {
                                    return -1
                                } else {
                                    return 1
                                }
                            });
                            cJ.innerHTML = c0.dataretention.join(", ");
                            cK.style.display = "block";
                            cJ.style.display = "block"
                        } else {
                            cK.style.display = "none";
                            cJ.style.display = "none"
                        }
                        var cQ = document.getElementById(bR);
                        var cP = document.getElementById(bQ);
                        if (c0.datause && c0.datause.length > 0) {
                            cQ.innerHTML = (c0.translations.data_use_title || "Data Use");
                            c0.datause.sort(function(c2, c3) {
                                if (c2 < c3) {
                                    return -1
                                } else {
                                    return 1
                                }
                            });
                            cP.innerHTML = c0.datause.join(", ");
                            cQ.style.display = "block";
                            cP.style.display = "block"
                        } else {
                            cQ.style.display = "none";
                            cP.style.display = "none"
                        }
                        var cO = document.getElementById(bO);
                        var cN = document.getElementById(bN);
                        if (c0.datastoragelocation && c0.datastoragelocation.length > 0) {
                            cO.innerHTML = (c0.translations.data_storage || "Data Storage");
                            cN.innerHTML = c0.datastoragelocation.join(", ");
                            cO.style.display = "block";
                            cN.style.display = "block"
                        } else {
                            cO.style.display = "none";
                            cN.style.display = "none"
                        }
                        var cG = document.getElementById(bF);
                        cG.href = "https://cop.evidon.com/companies/" + c0.permalink;
                        cG.innerHTML = "Read more about " + c0.name + "&nbsp;&gt;"
                    }
                }
            })
        }
        ;
        this._hideVendorScreen = function() {
            this._firstPartyCookiesPanel.style.display = "block";
            this._thirdPartyCategoriesPanel.style.display = "block";
            this._vendorsPanel.style.display = "none";
            var cE = document.getElementById(bs);
            if (cE) {
                cE.style.display = "block"
            }
            document.getElementById(br).style.display = "block";
            this._displayCookies();
            this._displayCategories();
            t.hideBreadcrumb()
        }
        ;
        this._displayVendors = function(cE) {
            var cI = this._vendorsContainer;
            while (cI.firstChild) {
                cI.removeChild(cI.firstChild)
            }
            this._vendorsContainer.setAttribute("data-category-id", cE.id);
            this._vendorToggles = [];
            var cH = a9._isAllVendorsRequired(cE.vendors);
            if (this._tglAllVendors && this._lblAllVendors) {
                var cF = (cE.required === 1 || cH) ? "none" : "";
                this._tglAllVendors._label.style.display = cF;
                this._lblAllVendors.style.display = cF
            }
            for (var cG = 0; cG < cE.vendors.length; cG++) {
                var cJ = cE.vendors[cG];
                var cK = this._createVendorContent(cJ, cE);
                cI.appendChild(cK)
            }
            if (a9.consentDetailVendors) {
                this._onVendorToggle()
            }
        }
        ;
        this._createVendorContent = function(cI, cF) {
            var cG = l("div", {
                id: b3 + cI.CompanyIdentifier,
                className: g[b3],
                css: ci[b3]
            });
            var cE = window.evidon.notice._parseCss(ci[b4]);
            cE.background = "transparent";
            cE.border = "none";
            cE.cursor = "pointer";
            cE.display = "inline-block";
            var cJ = l("button", {
                id: b4 + cI.CompanyIdentifier,
                className: g[b4],
                css: window.evidon.notice._joinCss(cE),
                innerText: cI.CompanyName,
                onclick: function() {
                    cD._showVendorDetails(cI, cF)
                }
            }, cG);
            if (a9.consentDetailVendors && !a9._isConsentGiven() && a9.isGPCApply() && cF.dataSharing === 1) {
                var cH = new cu("vendor-" + cI.CompanyIdentifier + "-toggle",function(cK) {
                    cD._onVendorToggle(cK)
                }
                );
                cH.vendorId = cI.CompanyId;
                cG.appendChild(cH.build(cI.CompanyName));
                this._vendorToggles.push(cH);
                cH.checked = false;
                this._state.current.vendors[cI.CompanyId] = false;
                this._onVendorToggle({
                    id: "vendor-" + cI.CompanyIdentifier + "-toggle",
                    checked: false
                })
            } else {
                if (a9.consentDetailVendors && a9._isConsentGiven() && a9.isGPCApply() && cF.dataSharing === 1) {
                    var cH = new cu("vendor-" + cI.CompanyIdentifier + "-toggle",function(cK) {
                        cD._onVendorToggle(cK)
                    }
                    );
                    cH.vendorId = cI.CompanyId;
                    cG.appendChild(cH.build(cI.CompanyName));
                    this._vendorToggles.push(cH);
                    cH.checked = this._state.current.vendors[cI.CompanyId]
                } else {
                    if (a9.consentDetailCategories && a9.isGPCApply() && cF.dataSharing === 1) {
                        this._state.current.vendors[cI.CompanyId] = false
                    } else {
                        if (cI.CategoryRequired || cI.Required || (a9.consentDetailVendors && !a9.consentRequired) || a9.consentTypeId == 0) {
                            l("label", {
                                css: ci[bt],
                                innerText: B(a ? "mobilesnL2L3Required" : "snL2L3Required")
                            }, cG)
                        } else {
                            if (a9.consentDetailVendors) {
                                var cH = new cu("vendor-" + cI.CompanyIdentifier + "-toggle",function(cK) {
                                    cD._onVendorToggle(cK)
                                }
                                );
                                cH.vendorId = cI.CompanyId;
                                cG.appendChild(cH.build(cI.CompanyName));
                                this._vendorToggles.push(cH);
                                cH.checked = this._state.current.vendors[cI.CompanyId]
                            }
                        }
                    }
                }
            }
            return cG
        }
        ;
        this._onVendorToggle = function(cG) {
            var cE = false;
            var cJ = 0;
            var cF = 0;
            for (var cH = 0; cH < this._vendorToggles.length; cH++) {
                var cI = this._vendorToggles[cH];
                if (cI.disabled) {
                    continue
                }
                cE = cI.checked || cE;
                if (cG && cI.id === cG.id) {
                    this._state.current.vendors[cI.vendorId] = cI.checked
                }
                cJ++;
                if (cI.checked) {
                    cF++
                }
            }
            if (this._tglAllVendors) {
                this._tglAllVendors.checked = cE
            }
            if (this._lblAllVendors) {
                this._lblAllVendors.innerText = B(a ? "mobilesnL2L3CountAllowed" : "snL2L3CountAllowed").replace("{count}", cF).replace("{total}", cJ)
            }
            t._adjustFooter()
        }
        ;
        this._toggleAllVendors = function(cG) {
            for (var cE = 0; cE < this._vendorToggles.length; cE++) {
                var cF = this._vendorToggles[cE];
                if (cF.disabled) {
                    continue
                }
                this._state.current.vendors[cF.vendorId] = cF.checked = cG
            }
            this._onVendorToggle()
        }
        ;
        this._initState = function(cE) {
            var cF = this;
            var cG = {
                categories: {},
                cookies: {},
                vendors: {},
            };
            a9.getOptOutCategories(function(cN, cH) {
                var cS = [];
                for (var cJ in cH) {
                    var cI = cH[cJ];
                    if (cI.dataSharing && a9.isGPCApply()) {
                        cG.categories[cI.id] = false
                    } else {
                        cG.categories[cI.id] = cI.required === 1
                    }
                    for (var cO = 0; cO < cI.vendors.length; cO++) {
                        cS.push(cI.vendors[cO])
                    }
                }
                var cL = a9._getConsentedCategories();
                if (cL) {
                    if (cL === true) {
                        for (var cJ in cG.categories) {
                            cG.categories[cJ] = true
                        }
                    } else {
                        if (typeof cL === "object") {
                            if (cL.hasOwnProperty("all")) {
                                for (var cJ in cH) {
                                    var cI = cH[cJ];
                                    cG.categories[cI.id] = cL.all
                                }
                            } else {
                                for (var cK in cL) {
                                    cG.categories[cK] = cL[cK]
                                }
                            }
                        }
                    }
                }
                for (var cO = 0; cO < cS.length; cO++) {
                    var cP = cS[cO];
                    cG.vendors[cP.CompanyId] = (cP.CategoryRequired === 1 || cP.Required === 1)
                }
                var cM = a9._getConsentedVendors();
                if (cM) {
                    if (Array.isArray(cM)) {
                        for (var cO = 0; cO < cM.length; cO++) {
                            var cR = cM[cO];
                            cG.vendors[cR] = true
                        }
                    } else {
                        if (typeof cM === "object") {
                            if (cM.hasOwnProperty("all")) {
                                for (var cQ in cG.vendors) {
                                    cG.vendors[cQ] = cM.all
                                }
                            } else {
                                for (var cR in cM) {
                                    cG.vendors[cR] = cM[cR]
                                }
                            }
                        }
                    }
                }
                a9.getOptOutCookies(function(cY, cW) {
                    if (cY) {} else {
                        for (var cU in cW) {
                            cG.cookies[cU] = cW[cU].required === 1
                        }
                        var cT = a9._getConsentedCookies();
                        if (cT) {
                            if (cT === true) {
                                for (var cU in cG.cookies) {
                                    cG.cookies[cU] = true
                                }
                            } else {
                                if (typeof cT === "object") {
                                    if (cT.hasOwnProperty("all")) {
                                        for (var cU in cW) {
                                            cG.cookies[cU] = true
                                        }
                                    } else {
                                        var cX = {};
                                        for (var cU in cW) {
                                            cX[cW[cU].name] = cW[cU]
                                        }
                                        for (var cV in cX) {
                                            var cU = cX[cV].id;
                                            if (cT.hasOwnProperty(cU)) {
                                                cG.cookies[cU] = cT[cU]
                                            }
                                        }
                                    }
                                } else {
                                    console.error("invalid consented cookie format", typeof cT)
                                }
                            }
                        }
                        cF._state = {
                            pristine: cG
                        };
                        cF._revertState();
                        cE()
                    }
                })
            })
        }
        ;
        this._revertState = function() {
            var cH = this._state.pristine;
            var cG = {
                categories: {},
                cookies: {},
                vendors: {}
            };
            for (var cE in cH.categories) {
                cG.categories[cE] = cH.categories[cE]
            }
            for (var cF in cH.cookies) {
                cG.cookies[cF] = cH.cookies[cF]
            }
            for (var cI in cH.vendors) {
                cG.vendors[cI] = cH.vendors[cI]
            }
            this._state.current = cG
        }
        ;
        this._saveState = function() {
            var cG = this._state.current;
            var cH = {
                categories: {},
                cookies: {},
                vendors: {}
            };
            for (var cE in cG.categories) {
                cH.categories[cE] = cG.categories[cE]
            }
            for (var cF in cG.cookies) {
                cH.cookies[cF] = cG.cookies[cF]
            }
            for (var cI in cG.vendors) {
                cH.vendors[cI] = cG.vendors[cI]
            }
            this._state.pristine = cH
        }
    };
    ce.prototype.createContent = function(cK) {
        var cR = this;
        var cT = document.getElementById(cK);
        if (ci.showTitle) {
            l("h1", {
                id: bs,
                className: g[bs],
                css: ci[bs],
                innerHTML: B(a ? "mobilesnL2L3Header" : "snL2L3Header")
            }, cT)
        }
        l("div", {
            id: br,
            className: g[br],
            css: ci[br],
            innerHTML: B(a ? "mobilesnL2L3Message" : "snL2L3Message")
        }, cT);
        this._firstPartyCookiesPanel = l("div", {
            id: bq,
            css: ci[bq]
        }, cT);
        if (ci.showTitle) {
            l("div", {
                id: bo,
                className: g[bo],
                css: ci[bo],
                innerText: B(a ? "mobilesnL2L3FirstPartyTitle" : "snL2L3FirstPartyTitle")
            }, this._firstPartyCookiesPanel)
        }
        l("div", {
            id: bp,
            className: g[bp],
            css: ci[bp],
            innerHTML: B(a ? "mobilesnL2L3FirstPartyMessage" : "snL2L3FirstPartyMessage")
        }, this._firstPartyCookiesPanel);
        var cM = aT + "/caretup.png";
        var cL = "click to expand";
        var cH = "click to collapse";
        var cD = l("div", {
            id: bk,
            className: g[bk],
            css: ci[bk],
            innerText: B(a ? "mobilesnL2L3Cookies" : "snL2L3Cookies"),
            onclick: function(cU) {
                var cV = document.getElementById("accordiancaret");
                this.classList.toggle("active");
                var cW = this.nextElementSibling;
                if (cW.style.display === "block" || cW.style.display === "") {
                    cW.style.display = "none";
                    cV.src = aT + "/caretdown.png";
                    cV.alt = cL;
                    cV.title = cL
                } else {
                    cW.style.display = "block";
                    cV.src = aT + "/caretup.png";
                    cV.alt = cH;
                    cV.title = cH
                }
            }
        }, this._firstPartyCookiesPanel);
        var cG = l("img", {
            id: "accordiancaret",
            src: cM,
            css: "width: 24px; height: 24px; margin: 0px 0px 2px 12px; vertical-align: middle;",
            alt: cH,
            title: cH
        }, cD);
        if (a9.consentDetailCategories) {
            this._tglAllFPCookies = new cu(bl,function(cU) {
                cR._toggleAllCookies(cU.checked)
            }
            );
            cD.appendChild(this._tglAllFPCookies.build("All Cookies"));
            this._tglAllFPCookies._label.style.cssText = ci[bl];
            this._lblAllFPCookies = l("label", {
                id: bm,
                css: ci[bm]
            }, cD)
        }
        this._firstPartyCookiesContainer = l("div", {
            id: bn,
            css: ci[bn],
            className: "panel"
        }, this._firstPartyCookiesPanel);
        this._firstPartyDetailPanel = l("div", {
            id: be,
            className: "",
            css: ci[be]
        }, cT);
        this._firstPartyDetailTable = l("table", {
            id: bf,
            className: "",
            css: ci[bf]
        }, this._firstPartyDetailPanel);
        this._thirdPartyCategoriesPanel = l("div", {
            id: bA,
            css: ci[bA]
        }, cT);
        if (ci.showTitle) {
            l("h1", {
                id: by,
                className: g[by],
                css: ci[by],
                innerText: B(a ? "mobilesnL2L3ThirdPartyTitle" : "snL2L3ThirdPartyTitle")
            }, this._thirdPartyCategoriesPanel)
        }
        l("div", {
            id: bz,
            className: g[bz],
            css: ci[bz],
            innerHTML: B(a ? "mobilesnL2L3ThirdPartyMessage" : "snL2L3ThirdPartyMessage")
        }, this._thirdPartyCategoriesPanel);
        var cE = l("div", {
            id: bu,
            className: g[bu],
            css: ci[bu],
            innerText: B(a ? "mobilesnL2L3Categories" : "snL2L3Categories")
        }, this._thirdPartyCategoriesPanel);
        if (a9.consentDetailCategories && a9.consentRequired) {
            this._tglAllTPCategories = new cu(bv,function(cU) {
                cR._toggleAllCategories(cU.checked)
            }
            );
            cE.appendChild(this._tglAllTPCategories.build("All vendor categories"));
            this._tglAllTPCategories._label.style.cssText = ci[bv];
            this._lblAllTPCategories = l("label", {
                id: bw,
                css: ci[bw]
            }, cE)
        }
        this._thirdPartyCategoriesContainer = l("div", {
            id: bx,
            css: ci[bx]
        }, this._thirdPartyCategoriesPanel);
        this._vendorsPanel = l("div", {
            id: cc,
            css: ci[cc]
        }, cT);
        l("div", {
            id: ca,
            className: g[ca],
            css: ci[ca],
        }, this._vendorsPanel);
        l("div", {
            id: cb,
            className: g[cb],
            css: ci[cb] + "display: none;",
        }, this._vendorsPanel);
        var cF = l("div", {
            id: b6,
            className: g[b6],
            css: ci[b6],
            innerText: B(a ? "mobilesnL2L3Vendors" : "snL2L3Vendors")
        }, this._vendorsPanel);
        if (a9.consentDetailVendors && a9.consentRequired) {
            this._tglAllVendors = new cu(b7,function(cU) {
                cR._toggleAllVendors(cU.checked)
            }
            );
            cF.appendChild(this._tglAllVendors.build("All vendors"));
            this._tglAllVendors._label.style.cssText = ci[b7];
            this._lblAllVendors = l("label", {
                id: af,
                css: ci[af],
            }, cF)
        }
        this._vendorsContainer = l("div", {
            id: b9,
            css: ci[b9]
        }, this._vendorsPanel);
        var cJ = ci[bS];
        var cN = a9.getL2Style();
        var cO = "";
        if (cN.hasOwnProperty("messageStyle")) {
            var cP = window.evidon.notice._getStyleValue(cN.messageStyle, "color");
            if (cP) {
                cJ += "color:" + cP + ";"
            }
        }
        if (cN.hasOwnProperty("linkStyle")) {
            cO = window.evidon.notice._getStyleValue(cN.linkStyle, "color")
        }
        if (cO) {
            cO = "color:" + cO + ";"
        }
        this._vendorDetailPanel = l("div", {
            id: bS,
            className: "",
            css: cJ
        }, cT);
        l("img", {
            id: bV,
            className: "",
            css: "display:block; height: 60px; margin: 8px auto;"
        }, this._vendorDetailPanel);
        l("h3", {
            id: bZ,
            className: "",
            css: "text-align:center;"
        }, this._vendorDetailPanel);
        var cQ = l("div", {
            id: bX,
            className: "",
            css: "display:none; margin: 8px 0;"
        }, this._vendorDetailPanel);
        l("div", {
            id: bY,
            className: "",
            css: "display:inline-block; font-weight: 600;"
        }, cQ);
        l("div", {
            id: bW,
            className: "",
            css: "display:inline-block; margin-left: 8px;"
        }, cQ);
        var cS = l("div", {
            id: b0,
            className: "",
            css: "display:none; margin: 8px 0;"
        }, this._vendorDetailPanel);
        l("div", {
            id: b1,
            className: "",
            css: "display:inline-block; font-weight: 600;"
        }, cS);
        l("a", {
            id: b2,
            className: "",
            css: "display:inline-block; margin-left: 8px;" + cO
        }, cS);
        l("h4", {
            id: bU,
            className: "",
            css: "margin: 18px 0 8px;"
        }, this._vendorDetailPanel);
        l("div", {
            id: bT,
            className: "",
            css: "line-height: 1.5;"
        }, this._vendorDetailPanel);
        l("h4", {
            id: bP,
            className: "",
            css: "margin: 18px 0 8px; font-size: 20px;"
        }, this._vendorDetailPanel);
        l("div", {
            id: bH,
            className: "",
            css: ""
        }, this._vendorDetailPanel);
        l("h4", {
            id: bI,
            className: "",
            css: "margin: 18px 0 8px;"
        }, this._vendorDetailPanel);
        l("div", {
            id: bG,
            className: "",
            css: ""
        }, this._vendorDetailPanel);
        l("h4", {
            id: bM,
            className: "",
            css: "margin: 18px 0 8px;"
        }, this._vendorDetailPanel);
        l("div", {
            id: bL,
            className: "",
            css: ""
        }, this._vendorDetailPanel);
        l("h4", {
            id: bK,
            className: "",
            css: "margin: 18px 0 8px;"
        }, this._vendorDetailPanel);
        l("div", {
            id: bJ,
            className: "",
            css: ""
        }, this._vendorDetailPanel);
        l("h4", {
            id: bR,
            className: "",
            css: "margin: 18px 0 8px;"
        }, this._vendorDetailPanel);
        l("div", {
            id: bQ,
            className: "",
            css: ""
        }, this._vendorDetailPanel);
        l("h4", {
            id: bO,
            className: "",
            css: "margin: 18px 0 8px;"
        }, this._vendorDetailPanel);
        l("div", {
            id: bN,
            className: "",
            css: ""
        }, this._vendorDetailPanel);
        var cI = l("div", {
            id: "",
            className: "",
            css: "display:block;margin:18px 0; 0;text-align:left; width: 80%;"
        }, this._vendorDetailPanel);
        l("a", {
            id: bF,
            className: "",
            css: cO,
            target: "_blank"
        }, cI);
        cR._initState(function() {
            cR._displayCookies();
            cR._displayCategories()
        })
    }
    ;
    ce.prototype.getFooterConfig = function() {
        var cM = this
          , cL = this.isDirty();
        var cE = {
            acceptEnabled: true,
            declineEnabled: true,
        };
        function cG() {
            if (cE.acceptTranslationId === "snL2L3AcceptAll" || cE.acceptTranslationId === "mobilesnL2L3AcceptAll") {
                var cT = cM._state.current;
                for (var cR in cT.categories) {
                    cT.categories[cR] = true
                }
                for (var cS in cT.cookies) {
                    cT.cookies[cS] = true
                }
                for (var cU in cT.vendors) {
                    cT.vendors[cU] = true
                }
                cM._state.current = cT
            }
            cM._saveState();
            a9.shouldCallCMP = true;
            if (window.evidon.notice.regulationConsentTypeId === cg) {
                window.evidon.notice.consentGiven(true, false, false, false, cg);
                a9.dropPixel(a0);
                a9.postVendorChoices(a0)
            } else {
                a9.consentGiven(true, cM.getConsentCategoryInfo(), cM.getConsentVendorInfo(), cM.getConsentCookieInfo());
                a9.dropPixel(aX);
                a9.postVendorChoices(aX)
            }
            t._isVirgin = false;
            if (cM._vendorsPanel.style.display !== "none") {
                cM._hideVendorScreen();
                return
            }
            t.close()
        }
        function cI() {
            cM._revertState();
            a9.shouldCallCMP = true;
            a9.declineGiven();
            a9.postVendorChoices(a0);
            a9.dropPixel(a0);
            t.close()
        }
        function cJ() {
            cM._saveState();
            var cR = (a9.consentIsGiven === false);
            if (cR) {
                a9.shouldCallCMP = false;
                a9.consentGiven(true, cM.getConsentCategoryInfo(), cM.getConsentVendorInfo(), cM.getConsentCookieInfo());
                t._isVirgin = false
            }
            a9._updateConsentedCategories(cM.getConsentCategoryInfo());
            a9._updateConsentedCookies(cM.getConsentCookieInfo());
            a9._updateConsentedVendors(cM.getConsentVendorInfo());
            if (!cR) {
                a9.consentChanged(cM.getConsentCategoryInfo(), cM.getConsentVendorInfo(), cM.getConsentCookieInfo())
            }
            if (cM._vendorsPanel.style.display !== "none") {
                cM._hideVendorScreen();
                window.evidon.notice.consentChangedCallbackExecuted = false;
                co.show(cq, B(a ? "mobilesnL2L3PreferencesSaved" : "snL2L3PreferencesSaved"));
                a9.dropPixel(a1);
                return
            }
            if (t._isVirgin === false) {
                t.close()
            }
            a9.dropPixel(a2);
            a9.postVendorChoices(a2);
            if (window.evidon.banner) {
                window.evidon.banner.destroyNotice()
            }
        }
        function cH() {
            cM._revertState();
            t.close()
        }
        function cK(cR) {
            var cU = 'div, svg, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
            var cW = document.getElementById(cR);
            var cT = cW.querySelectorAll(cU);
            var cS = cT[0];
            var cV = cT[cT.length - 1];
            document.addEventListener("keydown", function(cX) {
                var cY = cX.key === "Tab" || cX.keyCode === 9;
                if (!cY) {
                    return
                }
                if (cX.shiftKey) {
                    if (document.activeElement === cS) {
                        cV.focus();
                        cX.preventDefault()
                    }
                } else {
                    if (document.activeElement === cV) {
                        cS.focus();
                        cX.preventDefault()
                    }
                }
            });
            cS.focus()
        }
        function cQ() {
            document.getElementById(cx).style.display = "block";
            document.getElementById(cy).style.display = "block";
            cK(cy)
        }
        var cD = a9._getConsentCookie();
        if (cD && cD.value.consent_type === 2) {
            a9.consentIsGiven = false
        }
        var cF = ((a9.regulationConsentTypeId === cg && !a9.consentIsGiven) || (a9.regulationConsentTypeId === cf && a9.consentIsGiven) || (a9.regulationConsentTypeId === cg && a9.consentIsGiven && cD && cD.value.consent_type === 1));
        var cN = (!cL && !cF && !a9.isGPCApply());
        var cP = (cF && !a9.consentDetailCategories && !a9.consentDetailVendors);
        var cO = (!cP && !cN);
        if (cN) {
            if (a9.regulationConsentTypeId === cf || a9.regulationConsentTypeId === 0) {
                cE.acceptTranslationId = a ? "mobilesnL2L3AcceptAll" : "snL2L3AcceptAll";
                cE.onaccept = cG;
                cE.declineTranslationId = a ? "mobilesnL2L3DeclineAll" : "snL2L3DeclineAll";
                cE.ondecline = cI
            } else {
                if (a9.regulationConsentTypeId === cg) {
                    cE.acceptTranslationId = a ? "mobileOptoutButtonText" : "optoutButtonText";
                    cE.onaccept = cG;
                    cE.declineTranslationId = a ? "mobilegdprl2Cancel" : "gdprl2Cancel";
                    cE.ondecline = cH
                }
            }
        } else {
            if (cO) {
                cE.acceptTranslationId = a ? "mobilesnL2L3SavePreferences" : "snL2L3SavePreferences";
                cE.onaccept = cJ;
                cE.declineTranslationId = a ? "mobileCancelButton" : "cancelButton";
                cE.ondecline = cH
            } else {
                if (cP) {
                    if (!a9.consentDetailVendors && !a9.consentDetailCategories) {
                        cE.acceptTranslationId = a ? "mobilesnL2ConsentLink" : "snL2ConsentLink";
                        if (a9.regulationConsentTypeId === cg) {
                            cE.acceptTranslationId = a ? "mobilesnL2OptInLink" : "snL2OptInLink"
                        }
                        cE.onaccept = cQ;
                        cE.acceptEnabled = true
                    } else {
                        cE.acceptTranslationId = a ? "mobilesnL2L3SavePreferences" : "snL2L3SavePreferences";
                        cE.onaccept = cJ;
                        cE.acceptEnabled = cL
                    }
                    cE.declineTranslationId = a ? "mobileCancelButton" : "cancelButton";
                    cE.ondecline = cH
                } else {
                    cE.acceptEnabled = false;
                    cE.declineEnabled = false
                }
            }
        }
        return cE
    }
    ;
    ce.prototype.onShow = function() {
        var cD = this;
        if (typeof t.TAB_SECONDARY_ID !== "undefined" && t.TAB_SECONDARY_ID !== null && t.TAB_SECONDARY_ID !== a9.PREFDIAG_TABS.PURPOSES && t.TAB_SECONDARY_ID !== a9.PREFDIAG_TABS.VENDORS) {
            a9.getOptOutCategories(function(cG, cE) {
                if (cG) {
                    if (cD._vendorsPanel.style.display !== "none") {
                        cD._hideVendorScreen()
                    }
                } else {
                    var cF = false;
                    for (var cH in cE) {
                        if (cH == t.TAB_SECONDARY_ID) {
                            cD._showVendorScreen(cE[cH]);
                            cF = true;
                            break
                        }
                    }
                    if (!cF && cD._vendorsPanel.style.display !== "none") {
                        cD._hideVendorScreen()
                    }
                }
            })
        } else {
            if (this._vendorsPanel.style.display !== "none") {
                this._hideVendorScreen()
            }
        }
    }
    ;
    ce.prototype.isDirty = function() {
        var cD = this._state.pristine;
        var cE = this._state.current;
        if (!cD || !cE) {
            return false
        }
        for (var cF in cE.categories) {
            if (!cD.categories.hasOwnProperty(cF) || cD.categories[cF] !== cE.categories[cF]) {
                return true
            }
        }
        for (var cF in cE.cookies) {
            if (!cD.cookies.hasOwnProperty(cF) || cD.cookies[cF] !== cE.cookies[cF]) {
                return true
            }
        }
        for (var cG in cE.vendors) {
            if (cE.vendors[cG] === false) {
                continue
            }
            if (!cD.vendors.hasOwnProperty(cG) || cD.vendors[cG] !== cE.vendors[cG]) {
                return true
            }
        }
        for (var cF in cD.categories) {
            if (!cE.categories.hasOwnProperty(cF) || cE.categories[cF] !== cD.categories[cF]) {
                return true
            }
        }
        for (var cF in cD.cookies) {
            if (!cE.cookies.hasOwnProperty(cF) || cE.cookies[cF] !== cD.cookies[cF]) {
                return true
            }
        }
        for (var cG in cD.vendors) {
            if (!cE.vendors.hasOwnProperty(cG) || cE.vendors[cG] !== cD.vendors[cG]) {
                return true
            }
        }
        return false
    }
    ;
    ce.prototype.getStateInfo = function(cE) {
        var cD = {};
        var cG = this._state.pristine[cE];
        for (var cF in cG) {
            cD[cF] = cG[cF]
        }
        return cD
    }
    ;
    ce.prototype.getConsentCategoryInfo = function() {
        return this.getStateInfo("categories")
    }
    ;
    ce.prototype.getConsentVendorInfo = function() {
        return this.getStateInfo("vendors")
    }
    ;
    ce.prototype.getConsentCookieInfo = function() {
        return this.getStateInfo("cookies")
    }
    ;
    var aj = function() {
        var cE = this;
        var cD = window.evidon.events;
        this._id = "iab";
        this.TITLE_TEXT_ID = a ? "mobilesnL2L3IABEurope" : "snL2L3IABEurope";
        this._purposes = [];
        this._vendors = [];
        this._purposesPanel = null;
        this._lblAllPurposes = null;
        this._tglAllPurposes = null;
        this._purposesContainer = null;
        this._purposeToggles = [];
        this._vendorsPanel = null;
        this._lblAllVendors = null;
        this._tglAllVendors = null;
        this._vendorsContainer = null;
        this._vendorToggles = [];
        this._state = {};
        this._isVirgin = i._isVirgin;
        if (cD) {
            cD.subscribe("l2closed", function() {
                if (i._isVirgin) {
                    i.saveConsent()
                }
                i.consentGiven()
            }, 1)
        } else {
            console.error("evidon.events not found")
        }
        this._fetchData = function(cG) {
            if (window.evidon.cmp) {
                this._purposes = window.evidon.cmp.purposeList.slice(0);
                this._vendors = window.evidon.cmp.getActiveVendors();
                this._initState();
                this._displayPurposes()
            } else {
                var cH = this;
                var cF = (typeof cG === "undefined") ? 1 : cG++;
                if (cF < 10) {
                    setTimeout(function() {
                        cH._fetchData(cF)
                    }, 500)
                }
            }
        }
        ;
        this._displayPurposes = function() {
            var cG = this._purposesContainer;
            while (cG.firstChild) {
                cG.removeChild(cG.firstChild)
            }
            this._purposeToggles = [];
            for (var cF = 0; cF < this._purposes.length; cF++) {
                var cH = this._purposes[cF];
                var cI = this._createPurposeContent(cH);
                cG.appendChild(cI)
            }
            this._onPurposeToggle()
        }
        ;
        this._createPurposeContent = function(cH) {
            var cF = l("div", {
                id: D + cH.id
            });
            var cG = l("div", {
                id: E + cH.id,
                className: g[E],
                css: ci[E],
                innerText: cH.name
            }, cF);
            var cI = new cu(cH.id + "-toggle",function(cJ) {
                cE._onPurposeToggle(cJ)
            }
            );
            cI.purposeId = cH.id;
            cG.appendChild(cI.build(cH.name));
            this._purposeToggles.push(cI);
            cI.checked = this._state.current.purposes[cH.id];
            l("div", {
                id: C + cH.id,
                className: g[C],
                css: ci[C],
                innerText: cH.description
            }, cF);
            return cF
        }
        ;
        this._onPurposeToggle = function(cH) {
            var cF = false;
            var cK = 0;
            var cG = 0;
            for (var cI = 0; cI < this._purposeToggles.length; cI++) {
                var cJ = this._purposeToggles[cI];
                if (cJ.disabled) {
                    continue
                }
                cF = cJ.checked || cF;
                if (cH && cJ.id === cH.id) {
                    this._state.current.purposes[cJ.purposeId] = cJ.checked
                }
                cK++;
                if (cJ.checked) {
                    cG++
                }
            }
            this._tglAllPurposes.checked = cF;
            this._lblAllPurposes.innerText = B(a ? "mobilesnL2L3CountAllowed" : "snL2L3CountAllowed").replace("{count}", cG).replace("{total}", cK);
            t._adjustFooter()
        }
        ;
        this._showVendorScreen = function() {
            this._purposesPanel.style.display = "none";
            this._vendorsPanel.style.display = "block";
            var cF = false;
            this._tglAllVendors.checked = cF;
            this._lblAllVendors.innerText = B(cF ? "snL2L3Allowed" : "snL2L3NotAllowed");
            this._displayVendors()
        }
        ;
        this._hideVendorScreen = function() {
            this._purposesPanel.style.display = "block";
            this._vendorsPanel.style.display = "none";
            this._displayPurposes();
            t.hideBreadcrumb()
        }
        ;
        this._displayVendors = function() {
            var cG = this._vendorsContainer;
            while (cG.firstChild) {
                cG.removeChild(cG.firstChild)
            }
            this._vendorToggles = [];
            for (var cF = 0; cF < this._vendors.length; cF++) {
                var cH = this._vendors[cF];
                var cI = this._createVendorContent(cH);
                cG.appendChild(cI)
            }
            this._onVendorToggle()
        }
        ;
        this._createVendorContent = function(cI) {
            var cF = l("div", {
                id: Z + cI.id
            });
            var cG = l("div", {
                id: ac + cI.id,
                className: g[ac],
                css: ci[ac],
            }, cF);
            var cH = new cu("vendor-" + cI.id + "-toggle",function(cJ) {
                cE._onVendorToggle(cJ)
            }
            );
            cH.vendorId = cI.id;
            cG.appendChild(cH.build(cI.name));
            this._vendorToggles.push(cH);
            cH.checked = this._state.current.vendors[cI.id];
            l("a", {
                id: aa + cI.id,
                className: g[aa],
                css: ci[aa],
                href: "#",
                innerText: cI.name,
                onclick: function(cJ) {
                    cJ.preventDefault();
                    cJ.stopPropagation();
                    cE._toggleVendorDetails(cI)
                }
            }, cG);
            return cF
        }
        ;
        this._onVendorToggle = function(cH) {
            var cF = false;
            var cK = 0;
            var cG = 0;
            for (var cI = 0; cI < this._vendorToggles.length; cI++) {
                var cJ = this._vendorToggles[cI];
                if (cJ.disabled) {
                    continue
                }
                cF = cJ.checked || cF;
                if (cH && cJ.id === cH.id) {
                    this._state.current.vendors[cJ.vendorId] = cJ.checked
                }
                cK++;
                if (cJ.checked) {
                    cG++
                }
            }
            this._tglAllVendors.checked = cF;
            this._lblAllVendors.innerText = B(a ? "mobilesnL2L3CountAllowed" : "snL2L3CountAllowed").replace("{count}", cG).replace("{total}", cK);
            t._adjustFooter()
        }
        ;
        this._toggleVendorDetails = function(cG) {
            var cF = document.getElementById(Q + cG.id);
            if (cF) {
                cF.parentElement.removeChild(cF)
            } else {
                this._createVendorDetails(cG)
            }
        }
        ;
        this._createVendorDetails = function(cR) {
            var cM = document.getElementById(Z + cR.id);
            var cF = l("div", {
                id: Q + cR.id,
                css: ci[Q]
            }, cM);
            l("div", {
                id: X,
                className: g[X],
                style: ci[X],
                innerText: B(a ? "mobilesnL2L3Purposes" : "snL2L3Purposes")
            }, cF);
            var cO = i.getPurposes(cR.purposeIds);
            for (var cI = 0, cL = cO.length; cI < cL; cI++) {
                var cN = cO[cI];
                var cP = l("div", {
                    id: Y + cN.id,
                    className: g[Y],
                    style: ci[Y],
                    innerText: cN.name
                }, cF);
                var cQ = this._state.current.purposes[cN.id];
                l("div", {
                    style: "float: right;",
                    innerText: B(cQ ? "snL2L3Allowed" : "snL2L3NotAllowed")
                }, cP);
                l("div", {
                    id: W + cN.id,
                    className: g[W],
                    style: ci[W],
                    innerText: cN.description
                }, cF)
            }
            l("div", {
                id: S,
                className: g[S],
                style: ci[S],
                innerText: B(a ? "mobilesnL2L3LegitimateInterests" : "snL2L3LegitimateInterests")
            }, cF);
            var cK = i.getPurposes(cR.legIntPurposeIds);
            for (var cI = 0, cL = cK.length; cI < cL; cI++) {
                var cJ = cK[cI];
                l("div", {
                    id: T + cJ.id,
                    className: g[T],
                    style: ci[T],
                    innerText: cJ.name
                }, cF);
                l("div", {
                    id: R + cJ.id,
                    className: g[R],
                    style: ci[R],
                    innerText: cJ.description
                }, cF)
            }
            l("div", {
                id: O,
                className: g[O],
                style: ci[O],
                innerText: B(a ? "mobilesnL2L3Features" : "snL2L3Features")
            }, cF);
            var cH = i.getFeatures(cR.featureIds);
            for (var cI = 0, cL = cH.length; cI < cL; cI++) {
                var cG = cH[cI];
                l("div", {
                    id: P + cG.id,
                    className: g[P],
                    style: ci[P],
                    innerText: cG.name
                }, cF);
                l("div", {
                    id: N + cG.id,
                    className: g[N],
                    style: ci[N],
                    innerText: cG.description
                }, cF)
            }
            l("div", {
                id: U,
                className: g[U],
                style: ci[U],
                innerText: B(a ? "mobilesnL2L3PrivacyPolicy" : "snL2L3PrivacyPolicy")
            }, cF);
            l("a", {
                id: V,
                className: g[V],
                style: ci[V],
                innerText: cR.policyUrl,
                href: cR.policyUrl,
                target: "_blank",
                rel: "noopener"
            }, cF)
        }
        ;
        this._toggleAllPurposes = function(cH) {
            for (var cF = 0; cF < this._purposeToggles.length; cF++) {
                var cG = this._purposeToggles[cF];
                if (cG.disabled) {
                    continue
                }
                this._state.current.purposes[cG.purposeId] = cG.checked = cH
            }
            this._onPurposeToggle()
        }
        ;
        this._toggleAllVendors = function(cH) {
            for (var cF = 0; cF < this._vendorToggles.length; cF++) {
                var cG = this._vendorToggles[cF];
                if (cG.disabled) {
                    continue
                }
                this._state.current.vendors[cG.vendorId] = cG.checked = cH
            }
            this._onVendorToggle()
        }
        ;
        this._initState = function() {
            var cH = {
                purposes: {},
                vendors: {}
            };
            for (var cG = 0; cG < i.purposeList.length; cG++) {
                var cI = i.purposeList[cG];
                cH.purposes[cI.id] = i.consentString.isPurposeAllowed(cI.id)
            }
            var cF = i.consentString.allowedVendorIds;
            for (var cG = 0; cG < cF.length; cG++) {
                var cJ = cF[cG];
                cH.vendors[cJ] = true
            }
            this._state = {
                pristine: cH
            };
            this._revertState()
        }
        ;
        this._revertState = function() {
            var cG = this._state.pristine;
            var cF = {
                purposes: {},
                vendors: {}
            };
            for (var cH in cG.purposes) {
                var cI = cF.purposes[cH] = cG.purposes[cH];
                i.consentString.setPurposeAllowed(cH, cI)
            }
            for (var cJ in cG.vendors) {
                var cI = cF.vendors[cJ] = cG.vendors[cJ];
                i.consentString.setVendorAllowed(cJ, cI)
            }
            this._state.current = cF
        }
        ;
        this._saveState = function() {
            var cF = this._state.current;
            var cG = {
                purposes: {},
                vendors: {}
            };
            for (var cH in cF.purposes) {
                var cI = cG.purposes[cH] = cF.purposes[cH];
                i.consentString.setPurposeAllowed(cH, cI)
            }
            for (var cJ in cF.vendors) {
                var cI = cG.vendors[cJ] = cF.vendors[cJ];
                i.consentString.setVendorAllowed(cJ, cI)
            }
            this._state.pristine = cG
        }
    };
    aj.prototype.createNav = function() {
        var cD = l("div", {
            innerText: B(this.TITLE_TEXT_ID),
        });
        l("img", {
            src: aT + "/iab.png",
            css: "width: 16px; height: 8px; margin: 0px 0px 1px 4px; vertical-align: middle;",
            alt: "Open the IAB GDPR panel"
        }, cD);
        return cD
    }
    ;
    aj.prototype.createContent = function(cF) {
        var cG = this;
        var cH = document.getElementById(cF);
        if (!cH) {
            return
        }
        this._purposesPanel = l("div", {
            id: K,
            css: ci[K]
        }, cH);
        if (a === false) {
            l("div", {
                id: J,
                className: g[J],
                css: ci[J],
                innerText: B(this.TITLE_TEXT_ID)
            }, this._purposesPanel)
        }
        var cD = l("div", {
            id: F,
            className: g[F],
            css: ci[F],
            innerText: B(a ? "mobilesnL2L3Purposes" : "snL2L3Purposes")
        }, this._purposesPanel);
        l("span", {
            innerHTML: "&nbsp;"
        }, cD);
        l("a", {
            id: M,
            className: g[M],
            css: ci[M],
            href: "#",
            innerText: B(a ? "mobilesnL2L3SeeAllVendors" : "snL2L3SeeAllVendors"),
            onclick: function(cI) {
                cI.preventDefault();
                cI.stopPropagation();
                cG._showVendorScreen()
            },
        }, cD);
        this._tglAllPurposes = new cu(G,function(cI) {
            cG._toggleAllPurposes(cI.checked)
        }
        );
        cD.appendChild(this._tglAllPurposes.build("all purposes"));
        this._tglAllPurposes._label.style.cssText = ci[G];
        this._lblAllPurposes = l("label", {
            id: H,
            css: ci[H]
        }, cD);
        this._purposesContainer = l("div", {
            id: I,
            css: ci[I]
        }, this._purposesPanel);
        this._vendorsPanel = l("div", {
            id: ai,
            css: ci[ai]
        }, cH);
        if (a === false) {
            l("div", {
                id: ah,
                className: g[ah],
                css: ci[ah],
                innerText: B(this.TITLE_TEXT_ID)
            }, this._vendorsPanel)
        }
        var cE = l("div", {
            id: ad,
            className: g[ad],
            css: ci[ad],
            innerText: B(a ? "mobilesnL2L3Vendors" : "snL2L3Vendors")
        }, this._vendorsPanel);
        l("span", {
            innerHTML: "&nbsp;"
        }, cE);
        l("a", {
            id: L,
            className: g[L],
            css: ci[L],
            href: "#",
            innerText: B(a ? "mobilesnL2L3SeeAllPurposes" : "snL2L3SeeAllPurposes"),
            onclick: function(cI) {
                cI.preventDefault();
                cI.stopPropagation();
                cG._hideVendorScreen()
            },
        }, cE);
        this._tglAllVendors = new cu(ae,function(cI) {
            cG._toggleAllVendors(cI.checked)
        }
        );
        cE.appendChild(this._tglAllVendors.build("all vendors"));
        this._tglAllVendors._label.style.cssText = ci[ae];
        this._lblAllVendors = l("label", {
            id: af,
            css: ci[af]
        }, cE);
        this._vendorsContainer = l("div", {
            id: ag,
            css: ci[ag]
        }, this._vendorsPanel);
        this._fetchData()
    }
    ;
    aj.prototype.getFooterConfig = function() {
        var cF = this;
        var cD = window.evidon.cmp;
        var cE = this.isDirty();
        return {
            acceptEnabled: cF._isVirgin === true || cE,
            acceptTranslationId: a ? "mobilesnL2L3SavePreferences" : "snL2L3SavePreferences",
            onaccept: function() {
                cF._saveState();
                cD.saveConsent();
                cF._isVirgin = false;
                if (t._isVirgin) {
                    if (cF._vendorsPanel.style.display !== "none") {
                        cF._displayVendors()
                    } else {
                        cF._displayPurposes()
                    }
                } else {
                    t.close()
                }
            },
            declineEnabled: true,
            declineTranslationId: a ? "mobileCancelButton" : "cancelButton",
            ondecline: function() {
                cF._revertState();
                t.close()
            }
        }
    }
    ;
    aj.prototype.onShow = function() {
        if (this._vendorsPanel.style.display !== "none") {
            this._hideVendorScreen()
        }
        if (t.TAB_SECONDARY_ID === "vendors") {
            this._showVendorScreen()
        }
    }
    ;
    aj.prototype.isDirty = function() {
        var cD = this._state.pristine;
        var cE = this._state.current;
        for (var cF in cE.purposes) {
            if (!cD.purposes.hasOwnProperty(cF) || cD.purposes[cF] !== cE.purposes[cF]) {
                return true
            }
        }
        for (var cG in cE.vendors) {
            if (!cD.vendors.hasOwnProperty(cG) || cD.vendors[cG] !== cE.vendors[cG]) {
                return true
            }
        }
        for (var cF in cD.purposes) {
            if (!cE.purposes.hasOwnProperty(cF) || cE.purposes[cF] !== cD.purposes[cF]) {
                return true
            }
        }
        for (var cG in cD.vendors) {
            if (!cE.vendors.hasOwnProperty(cG) || cE.vendors[cG] !== cD.vendors[cG]) {
                return true
            }
        }
        return false
    }
    ;
    var aS = function() {
        var cE = this;
        var cD = window.evidon.events;
        this._id = "iab";
        this.TITLE_TEXT_ID = a ? "mobilesnL2L3IABEurope" : "snL2L3IABEurope";
        this._purposes = [];
        this._specialPurposes = [];
        this._features = [];
        this._specialFeatures = [];
        this._legIntPurposes = [];
        this._vendors = [];
        this._legIntVendors = [];
        this._purposesPanel = null;
        this._lblAllPurposes = null;
        this._tglAllPurposes = null;
        this._purposesContainer = null;
        this._purposeToggles = [];
        this._specialPurposeToggles = [];
        this._featureToggles = [];
        this._specialFeatureToggles = [];
        this._legIntToggles = [];
        this._vendorsPanel = null;
        this._lblAllVendors = null;
        this._tglAllVendors = null;
        this._vendorsContainer = null;
        this._vendorToggles = [];
        this._legIntVendorToggles = [];
        this._state = {};
        this._isVirgin = i._isVirgin;
        if (cD) {
            cD.subscribe("l2closed", function() {
                if (i._isVirgin) {
                    i.saveConsent()
                }
                i.consentGiven()
            }, 1)
        } else {
            console.error("evidon.events not found")
        }
        this._fetchData = function() {
            if (window.evidon.cmpv2) {
                this._purposes = i.getPurposes();
                this._specialPurposes = i.getSpecialPurposes();
                this._vendors = i.getActiveVendors();
                this._features = i.getFeatures();
                this._specialFeatures = i.getSpecialFeatures();
                this._legIntPurposes = i.getLegIntPurposes(this._vendors);
                this._legIntToggles = this._legIntPurposes;
                if (this._isVirgin) {
                    for (var cG = 0; cG < this._legIntPurposes.length; cG++) {
                        i.consentString.setLegIntAllowed(this._legIntPurposes[cG], true)
                    }
                }
                for (var cG = 0; cG < this._vendors.length; cG++) {
                    if (this._vendors[cG].legIntPurposes.length > 0) {
                        this._legIntVendors.push(this._vendors[cG]);
                        if (this._isVirgin) {
                            i.consentString.setLegIntVendorAllowed(this._vendors[cG].id, true)
                        }
                    }
                }
                this._initState();
                this._displayPurposes()
            } else {
                var cH = this;
                var cF = (typeof counter === "undefined") ? 1 : counter++;
                if (cF < 10) {
                    setTimeout(function() {
                        cH._fetchData(cF)
                    }, 500)
                }
            }
        }
        ;
        this._displayPurposes = function() {
            var cH = this._purposesContainer;
            while (cH.firstChild) {
                cH.removeChild(cH.firstChild)
            }
            this._purposeToggles = [];
            for (var cF = 0; cF < this._purposes.length; cF++) {
                var cI = this._purposes[cF];
                var cJ = this._createPurposeContent(cI);
                cH.appendChild(cJ)
            }
            this._onPurposeToggle();
            this._onSpecialFeatureToggle();
            this._onLegIntPurposeToggle();
            l("div", {
                id: an,
                className: g[an],
                css: ci[an],
                innerText: B(a ? "mobilesnL2L3SpecialPurposes" : "snL2L3SpecialPurposes")
            }, cH.parentElement);
            for (var cF = 0, cG = this._specialPurposes.length; cF < cG; cF++) {
                var cI = this._specialPurposes[cF];
                var cJ = this._createSpecialPurposeContent(cI);
                cH.parentElement.appendChild(cJ)
            }
            l("div", {
                id: an,
                className: g[an],
                css: ci[an],
                innerText: "Features"
            }, cH.parentElement);
            for (var cF = 0, cG = this._features.length; cF < cG; cF++) {
                var cI = this._features[cF];
                var cJ = this._createFeatureContent(cI);
                cH.parentElement.appendChild(cJ)
            }
            l("div", {
                id: an,
                className: g[an],
                css: ci[an],
                innerText: "Special Features"
            }, cH.parentElement);
            for (var cF = 0, cG = this._specialFeatures.length; cF < cG; cF++) {
                var cI = this._specialFeatures[cF];
                var cJ = this._createSpecialFeatureContent(cI);
                cH.parentElement.appendChild(cJ)
            }
        }
        ;
        this._createPurposeContent = function(cH) {
            var cF = l("div", {
                id: al + cH.id
            });
            var cG = l("div", {
                id: am + cH.id,
                className: g[am],
                css: ci[am],
                innerText: cH.name
            }, cF);
            var cI = new cu(cH.id + "-toggle",function(cJ) {
                cE._onPurposeToggle(cJ)
            }
            );
            cI.purposeId = cH.id;
            cG.appendChild(cI.build(cH.name));
            this._purposeToggles.push(cI);
            cI.checked = this._state.current.purposes[cH.id];
            l("span", {
                id: aO,
                className: g[aO],
                css: ci[aO],
                innerText: "Consent"
            }, cG);
            if (this._legIntPurposes.indexOf(cH.id) != -1) {
                var cI = new cu(cH.id + "-toggle",function(cJ) {
                    cE._onLegIntPurposeToggle(cJ)
                }
                );
                cI.purposeId = cH.id;
                cG.appendChild(cI.build());
                this._legIntToggles.push(cI);
                cI.checked = this._state.current.legIntPurposes[cH.id];
                l("span", {
                    id: aO,
                    className: g[aO],
                    css: ci[aO],
                    innerText: "Legitimate Interest"
                }, cG)
            }
            l("div", {
                id: ak + cH.id,
                className: g[ak],
                css: ci[ak],
                innerText: cH.descriptionLegal
            }, cF);
            return cF
        }
        ;
        this._createSpecialPurposeContent = function(cH) {
            var cF = l("div", {
                id: al + cH.id
            });
            var cG = l("div", {
                id: am + cH.id,
                className: g[am],
                css: ci[am],
                innerText: cH.name
            }, cF);
            l("div", {
                id: ak + cH.id,
                className: g[ak],
                css: ci[ak],
                innerText: cH.descriptionLegal
            }, cF);
            return cF
        }
        ;
        this._createFeatureContent = function(cH) {
            var cF = l("div", {
                id: al + cH.id
            });
            var cG = l("div", {
                id: am + cH.id,
                className: g[am],
                css: ci[am],
                innerText: cH.name
            }, cF);
            l("div", {
                id: ak + cH.id,
                className: g[ak],
                css: ci[ak],
                innerText: cH.descriptionLegal
            }, cF);
            return cF
        }
        ;
        this._createSpecialFeatureContent = function(cH) {
            var cF = l("div", {
                id: al + cH.id
            });
            var cG = l("div", {
                id: am + cH.id,
                className: g[am],
                css: ci[am],
                innerText: cH.name
            }, cF);
            var cI = new cu(cH.id + "-toggle",function(cJ) {
                cE._onSpecialFeatureToggle(cJ)
            }
            );
            cI.purposeId = cH.id;
            cG.appendChild(cI.build());
            this._specialFeatureToggles.push(cI);
            cI.checked = this._state.current.specialFeatures[cH.id];
            l("span", {
                id: aO,
                className: g[aO],
                css: ci[aO],
                innerText: "Consent"
            }, cG);
            l("div", {
                id: ak + cH.id,
                className: g[ak],
                css: ci[ak],
                innerText: cH.descriptionLegal
            }, cF);
            return cF
        }
        ;
        this._onPurposeToggle = function(cH) {
            var cF = false;
            var cK = 0;
            var cG = 0;
            for (var cI = 0; cI < this._purposeToggles.length; cI++) {
                var cJ = this._purposeToggles[cI];
                if (cJ.disabled) {
                    continue
                }
                cF = cJ.checked || cF;
                if (cH && cJ.id === cH.id) {
                    this._state.current.purposes[cJ.purposeId] = cJ.checked
                }
                cK++;
                if (cJ.checked) {
                    cG++
                }
            }
            t._adjustFooter()
        }
        ;
        this._onSpecialFeatureToggle = function(cH) {
            var cF = false;
            var cK = 0;
            var cG = 0;
            for (var cI = 0; cI < this._specialFeatureToggles.length; cI++) {
                var cJ = this._specialFeatureToggles[cI];
                if (cJ.disabled) {
                    continue
                }
                cF = cJ.checked || cF;
                if (cH && cJ.id === cH.id) {
                    this._state.current.specialFeatures[cJ.purposeId] = cJ.checked
                }
                cK++;
                if (cJ.checked) {
                    cG++
                }
            }
            t._adjustFooter()
        }
        ;
        this._onLegIntPurposeToggle = function(cH) {
            var cF = false;
            var cK = 0;
            var cG = 0;
            for (var cI = 0; cI < this._legIntToggles.length; cI++) {
                var cJ = this._legIntToggles[cI];
                cF = (cJ && cJ !== 0) ? true : cF;
                if (cH && cJ === parseInt(cH.id.split("-")[0])) {
                    this._state.current.legIntPurposes[cJ] = !this._state.current.legIntPurposes[cJ]
                }
                cK++;
                if (cJ !== 0) {
                    cG++
                }
            }
            t._adjustFooter()
        }
        ;
        this._showVendorScreen = function() {
            this._purposesPanel.style.display = "none";
            this._vendorsPanel.style.display = "block";
            var cF = false;
            this._displayVendors()
        }
        ;
        this._hideVendorScreen = function() {
            this._purposesPanel.style.display = "block";
            this._vendorsPanel.style.display = "none";
            this._displayPurposes();
            t.hideBreadcrumb()
        }
        ;
        this._displayVendors = function() {
            var cG = this._vendorsContainer;
            while (cG.firstChild) {
                cG.removeChild(cG.firstChild)
            }
            this._vendorToggles = [];
            for (var cF = 0; cF < this._vendors.length; cF++) {
                var cH = this._vendors[cF];
                var cI = this._createVendorContent(cH);
                cG.appendChild(cI)
            }
            this._onVendorToggle()
        }
        ;
        this._createVendorContent = function(cI) {
            var cF = l("div", {
                id: aI + cI.id
            });
            var cG = l("div", {
                id: aL + cI.id,
                className: g[aL],
                css: ci[aL],
                innerText: cI.name
            }, cF);
            var cH = new cu("vendor-" + cI.id + "-toggle",function(cJ) {
                cE._onVendorToggle(cJ)
            }
            );
            cH.vendorId = cI.id;
            cG.appendChild(cH.build(cI.name));
            this._vendorToggles.push(cH);
            cH.checked = this._state.current.vendors[cI.id];
            l("span", {
                id: aO,
                className: g[aO],
                css: ci[aO],
                innerText: "Consent"
            }, cG);
            if (cI.legIntPurposes.length > 0) {
                var cH = new cu("vendor-" + cI.id + "-legInt-toggle",function(cJ) {
                    cE._onLegIntVendorToggle(cJ)
                }
                );
                cH.vendorId = cI.id;
                cG.appendChild(cH.build());
                this._legIntVendorToggles.push(cH);
                cH.checked = this._state.current.legIntVendors[cI.id];
                l("span", {
                    id: aO,
                    className: g[aO],
                    css: ci[aO],
                    innerText: "Legitimate Interest"
                }, cG)
            }
            l("a", {
                id: aJ + cI.id,
                className: g[aJ],
                css: ci[aJ],
                href: "#",
                innerText: B(a ? "mobilesnL2L3LearnMore" : "snL2L3LearnMore"),
                onclick: function(cJ) {
                    cJ.preventDefault();
                    cJ.stopPropagation();
                    cE._toggleVendorDetails(cI)
                }
            }, cF);
            return cF
        }
        ;
        this._onVendorToggle = function(cH) {
            var cF = false;
            var cK = 0;
            var cG = 0;
            for (var cI = 0; cI < this._vendorToggles.length; cI++) {
                var cJ = this._vendorToggles[cI];
                if (cJ.disabled) {
                    continue
                }
                cF = cJ.checked || cF;
                if (cH && cJ.id === cH.id) {
                    this._state.current.vendors[cJ.vendorId] = cJ.checked
                }
                cK++;
                if (cJ.checked) {
                    cG++
                }
            }
            t._adjustFooter()
        }
        ;
        this._onLegIntVendorToggle = function(cH) {
            var cF = false;
            var cK = 0;
            var cG = 0;
            for (var cI = 0; cI < this._legIntVendorToggles.length; cI++) {
                var cJ = this._legIntVendorToggles[cI];
                if (cJ.disabled) {
                    continue
                }
                cF = cJ.checked || cF;
                if (cH && cJ.id === cH.id) {
                    this._state.current.legIntVendors[cJ.vendorId] = cJ.checked
                }
                cK++;
                if (cJ.checked) {
                    cG++
                }
            }
            t._adjustFooter()
        }
        ;
        this._toggleVendorDetails = function(cG) {
            var cF = document.getElementById(az + cG.id);
            if (cF) {
                cF.parentElement.removeChild(cF)
            } else {
                this._createVendorDetails(cG)
            }
        }
        ;
        this._createVendorDetails = function(cR) {
            var cK = document.getElementById(aI + cR.id);
            var cF = l("div", {
                id: az + cR.id,
                css: ci[az]
            }, cK);
            if (cR.purposes.length > 0) {
                l("div", {
                    id: aG,
                    className: g[aG],
                    style: ci[aG],
                    innerText: B(a ? "mobilesnL2L3Purposes" : "snL2L3Purposes")
                }, cF);
                var cM = i.getPurposes(cR.purposes);
                for (var cI = 0, cJ = cM.length; cI < cJ; cI++) {
                    var cL = cM[cI];
                    var cN = l("div", {
                        id: aH + cL.id,
                        className: g[aH],
                        style: ci[aH],
                        innerText: cL.name
                    }, cF);
                    cQ = this._state.current.purposes[cL.id] ? (a ? "mobilesnL2L3Allowed" : "snL2L3Allowed") : (a ? "mobilesnL2L3NotAllowed" : "snL2L3NotAllowed");
                    l("div", {
                        style: "float: right;",
                        innerText: B(cQ)
                    }, cN);
                    l("div", {
                        id: aF + cL.id,
                        className: g[aF],
                        style: ci[aF],
                        innerText: cL.descriptionLegal
                    }, cF)
                }
            }
            if (cR.legIntPurposes.length > 0) {
                l("div", {
                    id: aB,
                    className: g[aB],
                    style: ci[aB],
                    innerText: B(a ? "mobilesnL2L3LegitimateInterests" : "snL2L3LegitimateInterests")
                }, cF);
                var cM = i.getPurposes(cR.legIntPurposes);
                for (var cI = 0, cJ = cM.length; cI < cJ; cI++) {
                    var cL = cM[cI];
                    var cN = l("div", {
                        id: aC + cL.id,
                        className: g[aC],
                        style: ci[aC],
                        innerText: cL.name
                    }, cF);
                    cQ = this._state.current.purposes[cL.id] ? (a ? "mobilesnL2L3Allowed" : "snL2L3Allowed") : (a ? "mobilesnL2L3NotAllowed" : "snL2L3NotAllowed");
                    l("div", {
                        style: "float: right;",
                        innerText: B(cQ)
                    }, cN);
                    l("div", {
                        id: aA + cL.id,
                        className: g[aA],
                        style: ci[aA],
                        innerText: cL.descriptionLegal
                    }, cF)
                }
            }
            if (cR.specialPurposes.length > 0) {
                l("div", {
                    id: aG,
                    className: g[aG],
                    style: ci[aG],
                    innerText: B(a ? "mobilesnL2L3SpecialPurposes" : "snL2L3SpecialPurposes")
                }, cF);
                var cP = i.getSpecialPurposes();
                for (var cI = 0, cJ = cP.length; cI < cJ; cI++) {
                    var cL = cP[cI];
                    if (cR.specialPurposes.indexOf(cL.id) === -1) {
                        continue
                    }
                    var cN = l("div", {
                        id: aH + cL.id,
                        className: g[aH],
                        style: ci[aH],
                        innerText: cL.name
                    }, cF);
                    var cQ = this._state.current.specialPurposes[cL.id] ? (a ? "mobilesnL2L3Allowed" : "snL2L3Allowed") : (a ? "mobilesnL2L3NotAllowed" : "snL2L3NotAllowed");
                    l("div", {
                        style: "float: right;",
                        innerText: B(cQ)
                    }, cN);
                    l("div", {
                        id: aF + cL.id,
                        className: g[aF],
                        style: ci[aF],
                        innerText: cL.descriptionLegal
                    }, cF)
                }
            }
            if (cR.features.length < 0) {
                l("div", {
                    id: ax,
                    className: g[ax],
                    style: ci[ax],
                    innerText: B(a ? "mobilesnL2L3Features" : "snL2L3Features")
                }, cF);
                var cH = i.getFeatures();
                for (var cI = 0, cJ = cH.length; cI < cJ; cI++) {
                    var cG = cH[cI];
                    if (cR.features.indexOf(cG.id) === -1) {
                        continue
                    }
                    l("div", {
                        id: ay + cG.id,
                        className: g[ay],
                        style: ci[ay],
                        innerText: cG.name
                    }, cF);
                    l("div", {
                        id: aw + cG.id,
                        className: g[aw],
                        style: ci[aw],
                        innerText: cG.descriptionLegal
                    }, cF)
                }
            }
            if (cR.specialFeatures.length > 0) {
                l("div", {
                    id: ax,
                    className: g[ax],
                    style: ci[ax],
                    innerText: B(a ? "mobilesnL2L3SpecialFeatures" : "snL2L3SpecialFeatures")
                }, cF);
                var cO = i.getSpecialFeatures();
                for (var cI = 0, cJ = cO.length; cI < cJ; cI++) {
                    var cG = cO[cI];
                    if (cR.specialFeatures.indexOf(cG.id) === -1) {
                        continue
                    }
                    l("div", {
                        id: ay + cG.id,
                        className: g[ay],
                        style: ci[ay],
                        innerText: cG.name
                    }, cF);
                    l("div", {
                        id: aw + cG.id,
                        className: g[aw],
                        style: ci[aw],
                        innerText: cG.descriptionLegal
                    }, cF)
                }
            }
            l("div", {
                id: aD,
                className: g[aD],
                style: ci[aD],
                innerText: B(a ? "mobilesnL2L3PrivacyPolicy" : "snL2L3PrivacyPolicy")
            }, cF);
            l("a", {
                id: aE,
                className: g[aE],
                style: ci[aE],
                innerText: cR.policyUrl,
                href: cR.policyUrl,
                target: "_blank",
                rel: "noopener"
            }, cF);
            l("div", {
                className: g[aD],
                style: ci[aD],
                innerText: "Cookie max age (in seconds): " + cR.cookieMaxAgeSeconds
            });
            l("div", {
                className: g[aD],
                style: ci[aD],
                innerText: "Global cookie max age (in seconds): " + (cR.cookieMaxAgeSeconds || "none")
            }, cF);
            l("div", {
                className: g[aD],
                style: ci[aD],
                innerText: "Vendor uses non-cookie access: " + (cR.usesNonCookieAccess || "none")
            }, cF);
            l("div", {
                className: g[aD],
                style: ci[aD],
                innerText: "Maximum storage duration refreshes: " + (cR.cookieRefresh || "false")
            }, cF);
            l("div", {
                id: aD,
                className: g[aD],
                style: ci[aD],
                innerText: "Device storage disclosure url:"
            }, cF);
            if (cR.deviceStorageDisclosureUrl) {
                l("a", {
                    id: aE,
                    className: g[aE],
                    style: ci[aE],
                    innerText: (cR.deviceStorageDisclosureUrl || "none"),
                    href: (cR.deviceStorageDisclosureUrl || "none"),
                    target: "_blank",
                    rel: "noopener"
                }, cF)
            } else {
                l("span", {
                    id: aw,
                    className: g[aw],
                    style: ci[aw],
                    innerText: "No Url Given"
                }, cF)
            }
        }
        ;
        this._toggleAllPurposes = function(cH) {
            for (var cF = 0; cF < this._purposeToggles.length; cF++) {
                var cG = this._purposeToggles[cF];
                if (cG.disabled) {
                    continue
                }
                this._state.current.purposes[cG.purposeId] = cG.checked = cH
            }
            this._onPurposeToggle()
        }
        ;
        this._toggleAllVendors = function(cH) {
            for (var cF = 0; cF < this._vendorToggles.length; cF++) {
                var cG = this._vendorToggles[cF];
                if (cG.disabled) {
                    continue
                }
                this._state.current.vendors[cG.vendorId] = cG.checked = cH
            }
            this._onVendorToggle()
        }
        ;
        this._initState = function() {
            var cK = {
                purposes: {},
                specialPurposes: {},
                vendors: {},
                features: {},
                specialFeatures: {},
                legIntPurposes: {},
                legIntVendors: {}
            };
            for (var cH = 0; cH < this._purposes.length; cH++) {
                var cL = this._purposes[cH];
                cK.purposes[cL.id] = i.consentString.isPurposeAllowed(cL.id)
            }
            for (var cH = 0; cH < this._specialPurposes.length; cH++) {
                var cN = this._specialPurposes[cH];
                cK.specialPurposes[cN.id] = i.consentString.isSpecialPurposeAllowed(cN.id)
            }
            for (var cH = 0; cH < this._features.length; cH++) {
                var cG = this._features[cH];
                cK.features[cG.id] = i.consentString.isFeatureAllowed(cG.id)
            }
            for (var cH = 0; cH < this._specialFeatures.length; cH++) {
                var cM = this._specialFeatures[cH];
                cK.specialFeatures[cM.id] = i.consentString.isSpecialFeatureAllowed(cM.id)
            }
            for (var cH = 0; cH < this._legIntPurposes.length; cH++) {
                var cI = this._legIntPurposes[cH];
                cK.legIntPurposes[cI] = i.consentString.isLegIntPurposeAllowed(cI)
            }
            for (var cH = 0; cH < this._legIntVendors.length; cH++) {
                var cJ = this._legIntVendors[cH];
                cK.legIntVendors[cJ.id] = i.consentString.isLegIntVendorAllowed(cJ.id)
            }
            var cF = i.consentString.allowedVendorIds;
            for (var cH = 0; cH < cF.length; cH++) {
                var cO = cF[cH];
                cK.vendors[cO] = true
            }
            this._state = {
                pristine: cK
            };
            this._revertState()
        }
        ;
        this._revertState = function() {
            var cI = this._state.pristine;
            var cF = {
                purposes: {},
                specialPurposes: {},
                vendors: {},
                features: {},
                specialFeatures: {},
                legIntPurposes: {},
                legIntVendors: {}
            };
            for (var cJ in cI.purposes) {
                var cK = cF.purposes[cJ] = cI.purposes[cJ];
                i.consentString.setPurposeAllowed(cJ, cK)
            }
            for (var cJ in cI.specialPurposes) {
                var cK = cF.specialPurposes[cJ] = cI.specialPurposes[cJ];
                i.consentString.setSpecialPurposeAllowed(cJ, cK)
            }
            for (var cG in cI.features) {
                var cK = cF.features[cG] = cI.features[cG];
                i.consentString.setFeatureAllowed(cG, cK)
            }
            for (var cG in cI.specialFeatures) {
                var cK = cF.specialFeatures[cG] = cI.specialFeatures[cG];
                i.consentString.setSpecialFeatureAllowed(cG, cK)
            }
            for (var cH in cI.legIntPurposes) {
                var cK = cF.legIntPurposes[cH] = cI.legIntPurposes[cH];
                i.consentString.setLegIntAllowed(cH, cK)
            }
            for (var cL in cI.vendors) {
                var cK = cF.vendors[cL] = cI.vendors[cL];
                i.consentString.setVendorAllowed(cL, cK)
            }
            for (var cL in cI.legIntVendors) {
                var cK = cF.legIntVendors[cL] = cI.legIntVendors[cL];
                i.consentString.setLegIntVendorAllowed(cL, cK)
            }
            this._state.current = cF
        }
        ;
        this._saveState = function() {
            var cF = this._state.current;
            var cI = {
                purposes: {},
                specialPurposes: {},
                vendors: {},
                features: {},
                specialFeatures: {},
                legIntPurposes: {},
                legIntVendors: {}
            };
            for (var cJ in cF.purposes) {
                var cK = cI.purposes[cJ] = cF.purposes[cJ];
                i.consentString.setPurposeAllowed(cJ, cK)
            }
            for (var cJ in cF.specialPurposes) {
                var cK = cI.specialPurposes[cJ] = cF.specialPurposes[cJ];
                i.consentString.setSpecialPurposeAllowed(cJ, cK)
            }
            for (var cL in cF.vendors) {
                var cK = cI.vendors[cL] = cF.vendors[cL];
                i.consentString.setVendorAllowed(cL, cK)
            }
            for (var cG in cF.features) {
                var cK = cI.features[cG] = cF.features[cG];
                i.consentString.setFeatureAllowed(cG, cK)
            }
            for (var cG in cF.specialFeatures) {
                var cK = cI.specialFeatures[cG] = cF.specialFeatures[cG];
                i.consentString.setSpecialFeatureAllowed(cG, cK)
            }
            for (var cH in cF.legIntPurposes) {
                var cK = cI.legIntPurposes[cH] = cF.legIntPurposes[cH];
                i.consentString.setLegIntAllowed(cH, cK)
            }
            for (var cL in cF.legIntVendors) {
                var cK = cI.legIntVendors[cL] = cF.legIntVendors[cL];
                i.consentString.setLegIntVendorAllowed(cL, cK)
            }
            this._state.pristine = cI
        }
    };
    aS.prototype.createNav = function() {
        var cD = l("div", {
            innerText: B(this.TITLE_TEXT_ID),
        });
        l("img", {
            src: aT + "/iab.png",
            css: "width: 16px; height: 8px; margin: 0px 0px 1px 4px; vertical-align: middle;"
        }, cD);
        return cD
    }
    ;
    aS.prototype.createContent = function(cF) {
        var cG = this;
        var cH = document.getElementById(cF);
        if (!cH) {
            return
        }
        this._purposesPanel = l("div", {
            id: at,
            css: ci[at]
        }, cH);
        if (a === false) {
            l("div", {
                id: ar,
                className: g[ar],
                css: ci[ar],
                innerText: B(this.TITLE_TEXT_ID)
            }, this._purposesPanel)
        }
        var cD = l("div", {
            id: an,
            className: g[an],
            css: ci[an],
            innerText: B(a ? "mobilesnL2L3Purposes" : "snL2L3Purposes")
        }, this._purposesPanel);
        l("span", {
            innerHTML: "&nbsp;"
        }, cD);
        l("a", {
            id: av,
            className: g[av],
            css: ci[av],
            href: "#",
            innerText: B(a ? "mobilesnL2L3SeeAllVendors" : "snL2L3SeeAllVendors"),
            onclick: function(cI) {
                cI.preventDefault();
                cI.stopPropagation();
                cG._showVendorScreen()
            },
        }, cD);
        this._purposesContainer = l("div", {
            id: aq,
            css: ci[aq]
        }, this._purposesPanel);
        this._vendorsPanel = l("div", {
            id: aR,
            css: ci[aR]
        }, cH);
        if (a === false) {
            l("div", {
                id: aQ,
                className: g[aQ],
                css: ci[aQ],
                innerText: B(this.TITLE_TEXT_ID)
            }, this._vendorsPanel)
        }
        var cE = l("div", {
            id: aM,
            className: g[aM],
            css: ci[aM],
            innerText: B(a ? "mobilesnL2L3Vendors" : "snL2L3Vendors")
        }, this._vendorsPanel);
        l("span", {
            innerHTML: "&nbsp;"
        }, cE);
        l("a", {
            id: au,
            className: g[au],
            css: ci[au],
            href: "#",
            innerText: B(a ? "mobilesnL2L3SeeAllPurposes" : "snL2L3SeeAllPurposes"),
            onclick: function(cI) {
                cI.preventDefault();
                cI.stopPropagation();
                cG._hideVendorScreen()
            },
        }, cE);
        this._vendorsContainer = l("div", {
            id: aP,
            css: ci[aP]
        }, this._vendorsPanel);
        this._fetchData();
        return cH
    }
    ;
    aS.prototype.getFooterConfig = function() {
        var cF = this;
        var cD = window.evidon.cmpv2;
        var cE = this.isDirty();
        return {
            acceptEnabled: cF._isVirgin === true || cE,
            acceptTranslationId: a ? "mobilesnL2L3SavePreferences" : "snL2L3SavePreferences",
            onaccept: function() {
                if (cF.checkConsentChange() === true) {
                    co.show(cq, "Consent information saved")
                }
                cF._saveState();
                cD.saveConsent();
                cF._isVirgin = false;
                if (!a9.consentIsGiven) {
                    window.evidon.notice.dropSuppressionCookie(1)
                } else {
                    if (t._isVirgin) {
                        if (cF._vendorsPanel.style.display !== "none") {
                            cF._displayVendors()
                        } else {
                            cF._displayPurposes()
                        }
                    } else {
                        t.close()
                    }
                }
            },
            declineEnabled: true,
            declineTranslationId: a ? "mobileCancelButton" : "cancelButton",
            ondecline: function() {
                cF._revertState();
                t.close()
            }
        }
    }
    ;
    aS.prototype.checkConsentChange = function() {
        var cL = this._state.current;
        var cK = i.consentString;
        var cD = [];
        var cG = [];
        var cJ = [];
        var cE = [];
        var cF = [];
        var cH = [];
        var cI = [];
        for (var cM in cL.features) {
            if (cL.features[cM]) {
                cD.push(parseInt(cM))
            }
        }
        for (var cP in cL.purposes) {
            if (cL.purposes[cP]) {
                cG.push(parseInt(cP))
            }
        }
        for (var cS in cL.vendors) {
            if (cL.vendors[cS]) {
                cJ.push(parseInt(cS))
            }
        }
        for (var cN in cL.legIntPurposes) {
            if (cL.legIntPurposes[cN]) {
                cE.push(parseInt(cN))
            }
        }
        for (var cO in cL.legIntVendors) {
            if (cL.legIntVendors[cO]) {
                cF.push(parseInt(cO))
            }
        }
        for (var cQ in cL.specialFeatures) {
            if (cL.specialFeatures[cQ]) {
                cH.push(parseInt(cQ))
            }
        }
        for (var cR in cL.specialPurposes) {
            if (cL.specialPurposes[cR]) {
                cI.push(parseInt(cR))
            }
        }
        if (this.compareArrays(cD, cK.allowedFeatureIds) === false) {
            return true
        }
        if (this.compareArrays(cG, cK.allowedPurposeIds) === false) {
            return true
        }
        if (this.compareArrays(cJ, cK.allowedVendorIds) === false) {
            return true
        }
        if (this.compareArrays(cE, cK.allowedLIPurposeIds) === false) {
            return true
        }
        if (this.compareArrays(cF, cK.allowedLIVendorIds) === false) {
            return true
        }
        if (this.compareArrays(cH, cK.allowedSpecialFeatureIds) === false) {
            return true
        }
        if (this.compareArrays(cI, cK.allowedSpecialPurposeIds) === false) {
            return true
        }
        return false
    }
    ;
    aS.prototype.compareArrays = function(cD, cE) {
        var cF = 0;
        cD = cD.sort();
        cE = cE.sort();
        if (cD.length !== cE.length) {
            return false
        } else {
            cF = cD.length
        }
        if (cF <= 0) {
            return true
        }
        for (var cG = 0; cG < cF; cG++) {
            if (cD[cG] !== cE[cG]) {
                return false
            }
        }
        return true
    }
    ;
    aS.prototype.onShow = function() {
        if (this._vendorsPanel.style.display !== "none") {
            this._hideVendorScreen()
        }
        if (t.TAB_SECONDARY_ID === "vendors") {
            this._showVendorScreen()
        }
    }
    ;
    aS.prototype.isDirty = function() {
        var cD = this._state.pristine;
        var cE = this._state.current;
        for (var cF in cE.purposes) {
            if (!cD.purposes.hasOwnProperty(cF) || cD.purposes[cF] !== cE.purposes[cF]) {
                return true
            }
        }
        for (var cG in cE.vendors) {
            if (!cD.vendors.hasOwnProperty(cG) || cD.vendors[cG] !== cE.vendors[cG]) {
                return true
            }
        }
        for (var cG in cE.legIntVendors) {
            if (!cD.legIntVendors.hasOwnProperty(cG) || cD.legIntVendors[cG] !== cE.legIntVendors[cG]) {
                return true
            }
        }
        for (var cG in cE.specialFeatures) {
            if (!cD.specialFeatures.hasOwnProperty(cG) || cD.specialFeatures[cG] !== cE.specialFeatures[cG]) {
                return true
            }
        }
        for (var cG in cE.legIntPurposes) {
            if (!cD.legIntPurposes.hasOwnProperty(cG) || cD.legIntPurposes[cG] !== cE.legIntPurposes[cG]) {
                return true
            }
        }
        for (var cF in cD.purposes) {
            if (!cE.purposes.hasOwnProperty(cF) || cE.purposes[cF] !== cD.purposes[cF]) {
                return true
            }
        }
        for (var cG in cD.vendors) {
            if (!cE.vendors.hasOwnProperty(cG) || cE.vendors[cG] !== cD.vendors[cG]) {
                return true
            }
        }
        for (var cG in cD.legIntVendors) {
            if (!cE.legIntVendors.hasOwnProperty(cG) || cE.legIntVendors[cG] !== cD.legIntVendors[cG]) {
                return true
            }
        }
        for (var cG in cD.specialFeatures) {
            if (!cE.specialFeatures.hasOwnProperty(cG) || cE.specialFeatures[cG] !== cD.specialFeatures[cG]) {
                return true
            }
        }
        for (var cG in cD.legIntPurposes) {
            if (!cE.legIntPurposes.hasOwnProperty(cG) || cE.legIntPurposes[cG] !== cD.legIntPurposes[cG]) {
                return true
            }
        }
        return false
    }
    ;
    var q = function(cG, cK, cH, cJ, cL, cD) {
        this._id = cG;
        this.TITLE_TEXT_ID = cK;
        this._dataRightsType = cH;
        this._useframe = cL;
        this._rightsLink = cJ;
        this._frame = null;
        this._frameid = cD;
        var cI = this;
        if (this._dataRightsType === p.CUSTOM_FORM && !this._useframe) {
            this.createNav = this.createNavOptional
        }
        this._sendStyles = function() {
            if (!this._frame) {
                return
            }
            var cM = a9.isMobile();
            var cN = a9.getL2Style();
            this._frame.contentWindow.postMessage(JSON.stringify({
                isMobile: cM,
                styles: cN
            }), "*")
        }
        ;
        this._createFrame = function() {
            this._frame = l("iframe", {
                id: cI._frameid,
                seamless: "seamless",
                frameBorder: "0",
                width: "100%",
                height: "650px",
                scrolling: "yes",
                title: "Data Access Request Form",
                "aria-label": "Data Access Request Form",
                role: "form",
                src: cI._rightsLink
            });
            setTimeout(function() {
                cI._sendStyles()
            }, 500)
        }
        ;
        function cF(cM) {
            window.evidon.preferencesDialog.enableAcceptButton(cM.isvalid)
        }
        function cE(cM) {
            if (cM.data.action === "dsarrequestsent" && cM.data.type == "10") {
                if (cI._frameid === v) {
                    window.evidon.notice.consentGiven(true, false, false, false, cg);
                    a9.postVendorChoices(k)
                }
            }
        }
        if (window.addEventListener) {
            window.addEventListener("evidonformvalid", cF);
            window.addEventListener("evidonformaction", cE)
        } else {
            window.attachEvent("onevidonformvalid", cF);
            window.attachEvent("onevidonformaction", cE)
        }
    };
    q.prototype.createNavOptional = function() {
        var cF = this;
        var cD = l("div", {
            innerText: B(this.TITLE_TEXT_ID),
            onclick: function(cG) {
                window.open(cF._rightsLink, "_blank", "noopener");
                cG.stopPropagation()
            }
        });
        var cE = l("img", {
            src: A(),
            css: "width: 14px; height: 12px; margin: 0px 0px 2px 10px; vertical-align: middle;",
            alt: "Link opens in a new tab"
        }, cD);
        return cD
    }
    ;
    q.prototype.createContent = function(cE) {
        if (this._dataRightsType === p.CUSTOM_FORM && !this._useframe) {
            return
        }
        var cD = document.getElementById(cE);
        if (!cD) {
            return
        }
        if (this._useframe || this._dataRightsType === p.EVIDON_FORM) {
            this._createFrame()
        }
        cD.appendChild(this._frame)
    }
    ;
    q.prototype.getFooterConfig = function() {
        if (this._dataRightsType === p.CUSTOM_FORM) {
            return {
                acceptEnabled: false,
                declineEnabled: false
            }
        }
        var cD = this;
        return {
            acceptEnabled: false,
            acceptTranslationId: "gdprl2Submit",
            onaccept: function() {
                if (!cD._frame) {
                    return
                }
                cD._frame.contentWindow.postMessage(JSON.stringify({
                    action: "accept"
                }), "*");
                window.evidon.preferencesDialog.enableAcceptButton(false)
            },
            declineEnabled: true,
            declineTranslationId: "snL2L3ClearAll",
            ondecline: function() {
                cD._frame.contentWindow.postMessage(JSON.stringify({
                    action: "clear"
                }), "*")
            }
        }
    }
    ;
    var x = function(cE, cF, cG, cD) {
        this._id = cE;
        this.titleText = cF;
        this.navurl = cG;
        this.displayicon = cD;
        this.createContent = function(cH) {
            return null
        }
        ;
        this.getFooterConfig = function() {
            return {
                acceptEnabled: false,
                declineEnabled: false
            }
        }
    };
    x.prototype.createNav = function() {
        var cF = this;
        var cD = l("div", {
            innerText: cF.titleText,
            onclick: function(cG) {
                window.open(cF.navurl, "_blank", "noopener");
                if (cG) {
                    cG.stopPropagation()
                }
            },
            onkeyup: function(cG) {
                if (cG.keyCode === 13) {
                    window.open(cF.navurl, "_blank", "noopener")
                }
                if (cG) {
                    cG.stopPropagation()
                }
            }
        });
        if (this.displayicon) {
            cD.appendChild(this.displayicon)
        }
        var cE = l("img", {
            src: A(),
            css: "width: 14px; height: 12px; margin: 0px 0px 2px 12px; vertical-align: middle;",
            alt: "Link opens in a new tab"
        }, cD);
        return cD
    }
    ;
    var cd = function() {
        this._tabs = [];
        this._overlay = null;
        this._navContainer = null;
        this._navList = null;
        this._tabContainer = null;
        this._activeTabIndex = -1;
        this._breadcrumbContainer = null;
        this._breadcrumbIsShown = false;
        this._isVirgin = !a9.consentIsGiven;
        this._create = function() {
            if (a) {
                this._createMobile()
            } else {
                this._createDesktop()
            }
            this._overlay.setAttribute("role", "dialog");
            this._overlay.setAttribute("aria-label", "Privacy Options Dialog");
            this._overlay.setAttribute("aria-modal", "true");
            this._setupEvents()
        }
        ;
        this._createDesktop = function() {
            var cE = l("div", {
                id: d,
                className: g[d],
                css: ci[d]
            }, document.body);
            var cT = this._overlay = l("div", {
                id: bd,
                className: g[bd],
                css: ci[bd]
            }, document.body);
            var cP = this._navContainer = l("div", {
                id: a6,
                className: g[a6],
                css: ci[a6]
            }, cT);
            var cW = a9._getStyleValue(ci[a6], "width");
            var cH = a9._getStyleValue(ci[bd], "padding");
            var cM = a9.isGPCApply ? a9.isGPCApply() : false;
            var cN = 200;
            if (cW) {
                cW = parseInt(cW, 10);
                if (!isNaN(cW)) {
                    cN = cW
                }
            }
            if (cH) {
                cH = parseInt(cH, 10);
                if (!isNaN(cH)) {
                    cN += cH
                }
            }
            var cY = ci[cj] + "left:" + (cN + 1) + "px;";
            var cX = l("div", {
                id: "evidon-prefdialog-tabpanel",
                css: cY
            }, cT);
            l("div", {
                id: "evidon-prefdiag-nav-spacerdiv1",
                css: "display:block; height: 20px;"
            }, cP);
            var cQ = l("img", {
                id: a5,
                className: g[a5],
                css: ci[a5]
            }, cP);
            if (this.logoUrl) {
                cQ.src = this.logoUrl;
                cQ.alt = "Logo Image"
            } else {
                cQ.alt = "Image Unavailable"
            }
            l("div", {
                id: "evidon-prefdiag-nav-spacerdiv2",
                css: "display:block; height: 20px;"
            }, cP);
            var cS = l("nav", {
                id: "evidon-navigation-wrapper-element",
                "aria-labelledby": "evidon-navigation-label"
            }, cP);
            var cR = l("div", {
                id: "evidon-navigation-label",
                css: "display:none;"
            }, cS);
            cR.innerText = "Privacy dialog navigation";
            this._navList = l("ul", {
                id: a8,
                css: "list-style:none; margin:0;padding:0;"
            }, cS);
            var cZ = l("div", {
                id: "evidon-top-commands",
                css: "position:absolute; top: 0; left: 0; right:0; height: 30px; padding-left: 6px;"
            }, cX);
            this._tabContainer = l("div", {
                id: cj + "-gpc",
                css: "position:absolute; top: 36px; left: 0; right: 0; overflow:hidden;"
            }, cX);
            if (cM) {
                this._tabContainer = l("div", {
                    id: cj + "-inner",
                    css: "position:absolute; top: 63px; left: 0; right: 0; overflow:hidden;"
                }, cX)
            } else {
                this._tabContainer = l("div", {
                    id: cj + "-inner",
                    css: "position:absolute; top: 30px; left: 0; right: 0; overflow:hidden;"
                }, cX)
            }
            if (cM) {
                this._tabContainer = l("div", {
                    id: cj,
                    css: "position:absolute; top: 63px; left: 0; right: 0; overflow:hidden;"
                }, cX);
                var cJ = l("div", {
                    id: bb,
                    css: "position:absolute;top:35px;display: flex;justify-content:start;align-items: center;left:12px;"
                }, cX);
                var cL = l("span", {
                    className: g[br],
                    css: "width: 20px;border-radius: 50%;border: 1px solid #428A95;color: #428A95;margin-right: 4px;text-align:center;font-size:12px;",
                    innerHTML: "<b>i</b>",
                    title: "Global Privacy Control (GPC) is a specification designed to enable Internet users to communicate their privacy preferences to businesses. You are seeing this message because your browser has the GPC signal enabled, and this website actively supports it.",
                }, cJ);
                var cU = ci[bs].split(";");
                var cV = [];
                cU.forEach(function(c0) {
                    if (c0 && c0.indexOf("margin") == -1) {
                        cV.push(c0)
                    }
                });
                var cK = cV.join(";");
                if (!a9.gpcConflict) {
                    l("div", {
                        css: cK,
                        innerHTML: B(a ? "mobilesnL2L3GPCMessage" : "snL2L3GPCMessage")
                    }, cJ)
                }
                if (a9.gpcConflict) {
                    l("div", {
                        css: cK,
                        innerHTML: B(a ? "mobilesnL2L3ConflictMessage" : "snL2L3ConflictMessage")
                    }, cJ)
                }
            }
            this.initTabs();
            this._footer = l("div", {
                id: cn,
                className: g[cn],
                css: ci[cn]
            }, cX);
            if (ci.showDeclineButton) {
                this._declineButton = l("button", {
                    id: r,
                    className: g[r],
                    css: ci[r]
                }, this._footer)
            }
            this._acceptButton = l("button", {
                id: c,
                className: g[c],
                css: ci[c]
            }, this._footer);
            var cD = getComputedStyle(this._acceptButton);
            var cF = parseInt(cD.height, 10);
            var cO = parseInt(cD.marginTop, 10) + parseInt(cD.marginBottom, 10);
            if (!isNaN(cO)) {
                cF += cO
            }
            var cI = parseInt(cD.fontSize, 10);
            if (isNaN(cI)) {
                cF += 16
            } else {
                cF += cI + 2
            }
            cF += cH;
            this._footer.style.height = cF + "px";
            this._breadcrumbContainer = l("div", {
                id: f,
                className: g[f],
                css: ci[f]
            }, cZ);
            cT.appendChild(this._createWithdrawBackground());
            cT.appendChild(this._createDesktopWithdrawOverlay());
            cZ.appendChild(this._createCloseIcon());
            if (this.TAB_ID) {
                this._selectTabById(this.TAB_ID)
            } else {
                (this._selectTab(0))
            }
            var cG = this._tabContainer.style.cssText;
            cG += "bottom:" + cF + "px;";
            this._tabContainer.style.cssText = cG
        }
        ;
        this._createMobile = function() {
            l("div", {
                id: d,
                css: ci[d]
            }, document.body);
            var cE = ci[bd];
            var cI = a9._parseCss(cE);
            if (cI.hasOwnProperty("position")) {
                if (cI.position !== "fixed") {
                    cI.position = "fixed"
                }
            } else {
                cI.position = "fixed"
            }
            if (!cI.hasOwnProperty("top")) {
                cI.top = "0"
            }
            if (!cI.hasOwnProperty("bottom")) {
                cI.bottom = "0"
            }
            if (!cI.hasOwnProperty("left")) {
                cI.left = "0"
            }
            if (!cI.hasOwnProperty("right")) {
                cI.right = "0"
            }
            if (!cI.hasOwnProperty("z-index")) {
                cI["z-index"] = "99999999999"
            }
            cE = a9._joinCss(cI);
            this._overlay = l("div", {
                id: bd,
                className: g[bd],
                css: cE
            }, document.body);
            cI = a9._parseCss(ci[a6]);
            cI.position = "absolute";
            cI.top = 0;
            cI.left = 0;
            cI.right = 0;
            cI.overflow = "auto";
            delete cI.height;
            cE = a9._joinCss(cI);
            this._navContainer = l("div", {
                id: a6,
                className: g[a6],
                css: cE
            }, this._overlay);
            this._navContainer.appendChild(this._createCloseIcon());
            this._breadcrumbContainer = l("div", {
                id: f,
                className: g[f],
                css: ci[f]
            }, this._navContainer);
            this._breadcrumbContainer.style.display = "none";
            if (this.logoUrl) {
                var cH = l("img", {
                    id: a5,
                    className: g[a5],
                    css: ci[a5]
                }, this._navContainer);
                cH.src = this.logoUrl
            }
            this._navList = l("ul", {
                id: a8,
                css: "list-style:none; margin:0;padding:0;"
            }, this._navContainer);
            this.initTabs();
            cI = a9._parseCss(ci[cn]);
            delete cI.height;
            cE = a9._joinCss(cI);
            this._footer = l("div", {
                id: cn,
                className: g[cn],
                css: cE
            }, this._overlay);
            if (ci.showDeclineButton) {
                this._declineButton = l("button", {
                    id: r,
                    className: g[r],
                    css: ci[r]
                }, this._footer)
            }
            this._acceptButton = l("button", {
                id: c,
                className: g[c],
                css: ci[c]
            }, this._footer);
            var cG = getComputedStyle(this._footer).height;
            var cF = getComputedStyle(this._footer).fontSize;
            if (!cF) {
                cF = 16
            }
            var cD = parseInt(cG, 10) + parseInt(cF);
            this._navContainer.style.bottom = cD + "px";
            this._navContainer.appendChild(this._createWithdrawBackground());
            this._navContainer.appendChild(this._createMobileWithdrawOverlay());
            this._calculateMobilePanelHeight();
            if (this.TAB_ID) {
                this._selectTabById(this.TAB_ID)
            } else {
                (this._selectTab(0))
            }
        }
        ;
        this._createCloseIcon = function() {
            var cE = this;
            var cD = a9._createCloseIcon(ci[h], h, g[h], "dialog close", "dialog");
            cD.onclick = function() {
                cE.close()
            }
            ;
            return cD
        }
        ;
        this._createWithdrawCloseIcon = function() {
            var cE = this;
            var cD = a9._createCloseIcon(ci[h], h + "-withdraw", g[h], undefined, undefined, "dialog close withdraw", "dialog");
            cD.onclick = this.withdrawCancelled;
            return cD
        }
        ;
        this._setupEvents = function() {
            var cD = this;
            this._overlay.addEventListener("keyup", function(cE) {
                if (cE && cE.keyCode === 27) {
                    cD.close()
                }
            })
        }
        ;
        this._addTab = function(cF) {
            var cD = this._createTabContent();
            var cE = this._createTabNav(cF, cD);
            this._tabs.push({
                tab: cF,
                nav: cE,
                content: cD
            });
            cF.createContent(cD.id)
        }
        ;
        this._createTabNav = function(cI, cD) {
            var cH = this;
            var cG = this._tabs.length;
            var cE = l("li", {
                css: "width:100%;"
            });
            var cF = l("div", {
                id: a7 + cG,
                "data-id": cG,
                className: g[a7],
                css: ci[a7],
                innerText: B(cI.TITLE_TEXT_ID),
                role: "button",
                onclick: function() {
                    cH._selectTab(this.getAttribute("data-id"))
                },
                onkeyup: function(cJ) {
                    if (cJ.keyCode === 13) {
                        cH._selectTab(this.getAttribute("data-id"))
                    }
                }
            });
            cF.tabIndex = 0;
            if (typeof cI.createNav === "function") {
                cF.innerHTML = "";
                cF.appendChild(cI.createNav());
                if (cF.children.length > 0 && cF.children[0].onclick) {
                    cF.onclick = null;
                    cF.onkeyup = function(cJ) {
                        if (cJ.keyCode === 13) {
                            cF.children[0].onclick()
                        }
                    }
                }
            }
            cE.appendChild(cF);
            if (a) {
                cE.appendChild(cD)
            }
            this._navList.appendChild(cE);
            return cF
        }
        ;
        this._createTabContent = function(cG, cD) {
            var cF = this._tabs.length
              , cE = this;
            var cH = l("div", {
                id: ck + cF,
                className: g[ck],
                css: ci[ck],
                "data-tab-id": cF
            });
            if (a) {} else {
                this._tabContainer.appendChild(cH)
            }
            return cH
        }
        ;
        this._selectTabById = function(cE) {
            var cF = -1;
            for (var cD = 0, cG = this._tabs.length; cD < cG; cD++) {
                if (this._tabs[cD].tab._id === cE) {
                    cF = cD;
                    break
                }
            }
            if (cF !== -1) {
                this._selectTab(cF)
            }
        }
        ;
        this._selectTab = function(cE) {
            if (cE === this._activeTabIndex) {
                return
            }
            var cD = this._tabs[cE];
            if ((cD.tab.hasOwnProperty("_frame") && !cD.tab._frame) || cD.content.innerHTML === "") {
                cE = 0;
                cD = this._tabs[cE]
            }
            if (this._activeTabIndex !== -1) {
                this._tabs[this._activeTabIndex].nav.style.cssText = ci[a7];
                this._tabs[this._activeTabIndex].content.style.display = "none";
                if (a) {}
            }
            cD.nav.style.cssText = ci[a7 + "-active"];
            cD.content.style.display = "block";
            if (a) {}
            if (typeof cD.tab.onShow === "function") {
                cD.tab.onShow()
            }
            this._activeTabIndex = cE;
            this._adjustFooter();
            if (cD && cD.nav) {
                cD.nav.focus()
            }
        }
        ;
        this._adjustFooter = function() {
            var cE = this;
            if (this._activeTabIndex === -1) {
                return
            }
            this._acceptButton.style.display = "none";
            this._acceptButton.onclick = null;
            if (this._declineButton) {
                this._declineButton.style.display = "none";
                this._declineButton.onclick = null
            }
            var cF = this._tabs[this._activeTabIndex].tab;
            var cD = {
                acceptEnabled: true,
                onaccept: function() {
                    cE.close()
                }
            };
            if (typeof cF.getFooterConfig === "function") {
                cD = cF.getFooterConfig()
            }
            this._acceptButton.disabled = !cD.acceptEnabled;
            this._acceptButton.style.cssText = cD.acceptEnabled ? ci[c] : ci[r];
            this._acceptButton.innerText = B(cD.acceptTranslationId);
            this._acceptButton.setAttribute("aria-label", B(cD.acceptTranslationId));
            this._acceptButton.setAttribute("role", "button");
            if (typeof cD.onaccept === "function") {
                this._acceptButton.onclick = cD.onaccept
            }
            if (ci.showDeclineButton && cD.declineEnabled) {
                this._declineButton.style.display = "";
                this._declineButton.innerText = B(cD.declineTranslationId);
                this._declineButton.setAttribute("aria-label", B(cD.declineTranslationId));
                this._declineButton.setAttribute("role", "button");
                if (typeof cD.ondecline === "function") {
                    this._declineButton.onclick = cD.ondecline
                }
            }
            if (!cD.acceptEnabled && !cD.declineEnabled) {
                this._footer.style.display = "none"
            } else {
                this._footer.style.display = "block"
            }
        }
        ;
        this.enableAcceptButton = function(cD) {
            if (this._acceptButton) {
                if (cD) {
                    this._acceptButton.disabled = false;
                    this._acceptButton.style.cssText = ci[c]
                } else {
                    this._acceptButton.disabled = true;
                    this._acceptButton.style.cssText = ci[r]
                }
            }
        }
        ;
        this._adjustTabContainer = function() {
            if (a) {} else {
                var cE = this._overlay.clientWidth - parseInt(this._overlay.style.paddingLeft || 0) - parseInt(this._overlay.style.paddingRight || 0) - parseInt(this._overlay.style.borderLeft || 0) - parseInt(this._overlay.style.borderRight || 0);
                var cD = this._navContainer.clientWidth + parseInt(this._navContainer.style.paddingLeft || 0) + parseInt(this._navContainer.style.paddingRight || 0) + parseInt(this._navContainer.style.borderLeft || 0) + parseInt(this._navContainer.style.borderRight || 0);
                this._tabContainer.style.width = (cE - cD - 2) + "px"
            }
        }
        ;
        this.doWithdrawConsent = function() {
            window.evidon.notice.withdrawConsent();
            document.getElementById(cx).style.display = "none";
            document.getElementById(cy).style.display = "none";
            if (window.evidon.notice.regulationConsentTypeId === cg) {
                a9.postVendorChoices(a0)
            }
            document.removeEventListener("keydown", this.document, false);
            t.close();
            window.evidon.notice.showNotice()
        }
        ;
        this.withdrawCancelled = function() {
            document.getElementById(cx).style.display = "none";
            document.getElementById(cy).style.display = "none";
            document.removeEventListener("keydown", this.document, false);
            setTimeout(function() {
                document.getElementById(c).focus()
            }, 0)
        }
        ;
        this._createWithdrawBackground = function() {
            var cD = document.createElement("div");
            cD.style.cssText = "position:fixed;display:none;top:0;left:0;width:100%;height:100%;background:#cccccc;opacity:.75; z-index: 888888;";
            cD.id = cx;
            return cD
        }
        ;
        this._createDesktopWithdrawOverlay = function() {
            var cF = document
              , cK = a9.getL2Style();
            var cJ = cK.overlayStyle;
            var cD = a9._getStyleValue(cJ, "background") || "#f4f4f4"
              , cE = a9._getStyleValue(cJ, "color") || "#333333";
            var cL = a9.formatTranslation(B("snL2ConsentTitle"));
            var cG = a9.formatTranslation(B("snL2ConsentMessage"));
            var cR = a9.formatTranslation(B("snL2ConsentYesButton"));
            var cI = a9.formatTranslation(B("snL2ConsentNoButton"));
            if (a9.regulationConsentTypeId === cg) {
                cL = a9.formatTranslation(B("snL2OptInTitle"));
                cG = a9.formatTranslation(B("snL2OptInMessage"));
                cR = a9.formatTranslation(B("snL2OptInYesButton"));
                cI = a9.formatTranslation(B("snL2OptInNoButton"))
            }
            var cN = cF.createElement("div");
            cN.id = cy;
            cN.style.cssText = "position:absolute;display:none;width:50%;top: 10%;left:25%; background:" + cD + ";color:" + cE + ";border:1px solid #aaaaaa;box-shadow:#aaaaaa 1px 1px;z-index:999999;";
            cN.appendChild(this._createWithdrawCloseIcon());
            var cP = cF.createElement("div");
            cP.id = cB;
            cP.style.cssText = cK.titleStyle;
            cP.innerHTML = cL;
            cN.appendChild(cP);
            var cO = cF.createElement("div");
            cO.id = cz;
            cO.style.cssText = cK.messageStyle;
            cO.innerHTML = cG;
            cN.appendChild(cO);
            var cM = cF.createElement("div");
            cM.id = "";
            cM.style.cssText = "display:block; padding: 12px;text-align:center;margin: 18px auto;";
            cN.appendChild(cM);
            var cH = cF.createElement("button");
            cH.id = cA;
            cH.style.cssText = cK.secondaryButtonStyle;
            cH.innerText = cI;
            cH.onclick = this.withdrawCancelled;
            cH.setAttribute("aria-label", cI);
            cH.setAttribute("role", "button");
            cM.appendChild(cH);
            var cQ = cF.createElement("button");
            cQ.id = cC;
            cQ.style.cssText = cK.primaryButtonStyle;
            cQ.innerText = cR;
            cQ.onclick = this.doWithdrawConsent;
            cQ.setAttribute("aria-label", cR);
            cQ.setAttribute("role", "button");
            cM.appendChild(cQ);
            return cN
        }
        ;
        this._createMobileWithdrawOverlay = function() {
            var cF = document
              , cK = a9.getL2Style();
            var cJ = cK.mobileOverlayStyle;
            var cD = a9._getStyleValue(cJ, "background") || "#f4f4f4"
              , cE = a9._getStyleValue(cJ, "color") || "#333333";
            var cL = a9.formatTranslation(B("mobilesnL2ConsentTitle"));
            var cG = a9.formatTranslation(B("mobilesnL2ConsentMessage"));
            var cR = a9.formatTranslation(B("mobilesnL2ConsentYesButton"));
            var cI = a9.formatTranslation(B("mobilesnL2ConsentNoButton"));
            if (a9.regulationConsentTypeId === cg) {
                cL = a9.formatTranslation(B("mobilesnL2OptInTitle"));
                cG = a9.formatTranslation(B("mobilesnL2OptInMessage"));
                cR = a9.formatTranslation(B("mobilesnL2OptInYesButton"));
                cI = a9.formatTranslation(B("mobilesnL2OptInNoButton"))
            }
            var cN = cF.createElement("div");
            cN.id = cy;
            cN.style.cssText = "position:fixed;display:none;width:100%;top:0;left:0;height:100%; background:" + cD + ";color:" + cE + ";border:1px solid #aaaaaa;box-shadow:#aaaaaa 1px 1px;z-index:999999;";
            cN.appendChild(this._createWithdrawCloseIcon());
            var cP = cF.createElement("div");
            cP.id = cB;
            cP.style.cssText = cK.mobileTitleStyle;
            cP.innerHTML = cL;
            cN.appendChild(cP);
            var cO = cF.createElement("div");
            cO.id = cz;
            cO.style.cssText = cK.mobileMessageStyle;
            cO.innerHTML = cG;
            cN.appendChild(cO);
            var cM = cF.createElement("div");
            cM.id = "";
            cM.style.cssText = "display:block; padding: 12px;text-align:center;margin: 18px auto;";
            cN.appendChild(cM);
            var cH = cF.createElement("button");
            cH.id = cA;
            cH.style.cssText = cK.mobileSecondaryButtonStyle;
            cH.innerText = cI;
            cH.setAttribute("aria-label", cI);
            cH.setAttribute("role", "button");
            cH.onclick = this.withdrawCancelled;
            cM.appendChild(cH);
            var cQ = cF.createElement("button");
            cQ.id = cC;
            cQ.style.cssText = cK.mobilePrimaryButtonStyle;
            cQ.innerText = cR;
            cQ.onclick = this.doWithdrawConsent;
            cQ.setAttribute("aria-label", cR);
            cQ.setAttribute("role", "button");
            cM.appendChild(cQ);
            return cN
        }
        ;
        this._dispose = function() {
            this._tabs = [];
            this._navContainer = null;
            this._tabContainer = null;
            this._activeTabIndex = -1;
            this._breadcrumbContainer = null;
            this._breadcrumbIsShown = false;
            if (this._onresize) {
                window.removeEventListener("optimizedResize", this._onresize, false)
            }
        }
    };
    cd.prototype._getTabCount = function() {
        var cD = 0;
        if (a9.venodrDisplayEnabled) {
            cD++
        }
        if (a9.iabEnabled) {
            cD++
        }
        if (a9.gdprEnabled) {
            cD++
        }
        if (a9.dnsEnabled) {
            cD++
        }
        if (a9.adChoicesEnabled) {
            cD++
        }
        if (a9.privacyPolicyEnabled) {
            cD++
        }
        return cD
    }
    ;
    cd.prototype._calculateMobilePanelHeight = function() {
        var cN = this._getTabCount();
        var cK = document.getElementById(bd);
        if (cK) {
            var cE = getComputedStyle(cK);
            var cF = parseInt(cE.height, 10);
            if (!isNaN(cF)) {
                var cG = document.getElementById(a5);
                if (cG) {
                    var cI = getComputedStyle(cG);
                    var cH = parseInt(cI.height, 10);
                    if (!isNaN(cH)) {
                        cF -= cH
                    }
                }
                var cO = 0;
                var cP = a9._parseCss(ci[a7]);
                if (cP.hasOwnProperty("height")) {
                    cO = parseInt(cP.height, 10);
                    if (isNaN(cO)) {
                        cO = 0
                    }
                } else {
                    if (cP.hasOwnProperty("padding")) {
                        var cL = parseInt(cP.padding, 10);
                        if (!isNaN(cL)) {
                            cO += (cL * 2)
                        }
                    }
                    if (cP.hasOwnProperty("padding-top")) {
                        var cL = parseInt(cP["padding-top"], 10);
                        if (!isNan(cL)) {
                            cO += (cL * 2)
                        }
                    }
                    if (cP.hasOwnProperty("border")) {
                        var cD = parseInt(cP.border, 10);
                        if (!isNaN(cD)) {
                            cO += (cD * 2)
                        }
                    }
                    cO += 24
                }
                var cJ = cN * cO;
                cF = cF - cJ - 24;
                var cM = a9._parseCss(ci[ck]);
                cM.height = cF + "px";
                ci[ck] = a9._joinCss(cM)
            }
        }
    }
    ;
    cd.prototype._calculateDesktopPanelHeight = function() {
        var cE = document.getElementById(cj);
        if (cE) {
            var cD = getComputedStyle(cE);
            var cF = parseInt(cD.height, 10);
            if (!isNaN(cF)) {
                var cG = a9._parseCss(ci[ck]);
                cG.height = cF + "px";
                ci[ck] = a9._joinCss(cG)
            }
        }
    }
    ;
    cd.prototype.init = function() {
        cv = a9.getTranslations();
        if (!cv.snL2L3SeeAllPurposes) {
            cv.snL2L3SeeAllPurposes = "See All Purposes"
        }
        if (!cv.snL2L3SeeAllVendors) {
            cv.snL2L3SeeAllVendors = "See All Vendors"
        }
        if (!cv.snL2L3LegitimateInterests) {
            cv.snL2L3LegitimateInterests = "Legitimate Interests"
        }
        if (!cv.snL2L3Features) {
            cv.snL2L3Features = "Features"
        }
        if (!cv.doNotSell) {
            cv.doNotSell = "Do Not Sell My Information"
        }
        if (!cv.snL2L3SpecialPurposes) {
            cv.snL2L3SpecialPurposes = "Special Purposes"
        }
        if (!cv.snL2L3SpecialFeatures) {
            cv.snL2L3SpecialFeatures = "Special Features"
        }
        if (!cv.mobilesnL2L3SeeAllPurposes) {
            cv.mobilesnL2L3SeeAllPurposes = "See All Purposes"
        }
        if (!cv.mobilesnL2L3SeeAllVendors) {
            cv.mobilesnL2L3SeeAllVendors = "See All Vendors"
        }
        if (!cv.mobilesnL2L3LegitimateInterests) {
            cv.mobilesnL2L3LegitimateInterests = "Legitimate Interests"
        }
        if (!cv.mobilesnL2L3Features) {
            cv.mobilesnL2L3Features = "Features"
        }
        if (!cv.mobileDoNotSell) {
            cv.mobileDoNotSell = "Do Not Sell My Information"
        }
        if (!cv.mobilesnL2L3SpecialPurposes) {
            cv.mobilesnL2L3SpecialPurposes = "Special Purposes"
        }
        if (!cv.mobilesnL2L3SpecialFeatures) {
            cv.mobilesnL2L3SpecialFeatures = "Special Features"
        }
        if (!cv.snL2L3DoNotSell) {
            cv.snL2L3DoNotSell = cv.doNotSell
        }
        if (!cv.mobilesnL2L3DoNotSell) {
            cv.mobilesnL2L3DoNotSell = cv.mobileDoNotSell
        }
        var cE = a9.getL2Style();
        if (!cE) {
            cE = {
                backButtonStyle: "color:#00AEF0;text-decoration:none;font-size:14px;cursor:pointer;",
                backgroundStyle: "display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:#dddddd;opacity:.5;",
                categoryDescriptionStyle: "color:#333333;font-size:14px;line-height:1.5;",
                categoryHeaderStyle: "color:#222222;font-size:14px;line-height:1.6;margin:16px 2px 6px;padding:4px 2px;background:#eeeeee;",
                closeIconStyle: "display:block;position:absolute;top:8px;right:8px;height:12px;width:12px;stroke:#595959;stroke-width:2;cursor:pointer;z-index:100;",
                enablePreferencesDialogV2: true,
                linkStyle: "display:inline-block;color:#00aef0;text-decoration:none;font-size:13px;font-weight:600;text-align:left;margin:4px 8px;",
                logoStyle: "display:block;margin:12px auto 18px;height:40px;color:white;",
                messageStyle: "display:block;margin:4px auto;font-size:14px;line-height:1.6;color:#222222;",
                navigationLinkStyle: "white-space:nowrap;padding:12px;cursor:pointer;display:block;box-sizing:content-box;font-size:14px;",
                overlayStyle: "display:block;position:absolute;top:10%;left:20%;width:60%;background:#ffffff;color:#333333;font-family:sans-serif;border:1px solid #aaaaaa;",
                primaryButtonStyle: "border-radius:4px;display:inline-block;margin:6px;padding:8px 16px;color:#f2f2f2;background:#000000;cursor:pointer;border:2px solid transparent;font-size:16px;font-family:helvetica;",
                secondaryButtonStyle: "border-radius:4px;display:inline-block;margin:6px;padding:8px 16px;color:#333333;background:#ffffff;cursor:pointer;border:1px solid #000000;font-size:16px;font-family:helvetica;",
                showBackground: true,
                showDeclineButton: true,
                showGlobalPrefButton: true,
                showTitle: true,
                sidebarStyle: "display:inline-block;width:200px;height:450px;background:#ffffff;color:#000000;border-right:#d3d3d3 1px solid;",
                subtitleStyle: "display:block;font-size:14px;font-weight:700;color:#222222;margin:18px 0 12px;line-height:1.6;padding:2px 4px;",
                tertiaryButtonStyle: "margin:2px auto;padding:4px 8px;color:#333333;cursor:pointer;border:2px solid transparent;font-size:11px;",
                titleStyle: "display:block;text-align:left;margin:22px auto 12px;font-size:16px;font-weight:600;",
                mobileBackButtonStyle: "color:#00AEF0;text-decoration:none;font-size:1.1em;",
                mobileBackgroundStyle: "display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:#dddddd;",
                mobileCategoryDescriptionStyle: "color:#333333;font-size:12px;",
                mobileCategoryHeaderStyle: "display:block;color:#222222;font-size:1em;margin:12px 6px 8px;",
                mobileCloseIconStyle: "display:block;position:absolute;top:8px;right:8px;height:12px;width:12px;stroke:#000000;stroke-width:2;cursor:pointer;z-index:100;",
                mobileEnablePreferencesDialogV2: true,
                mobileLinkStyle: "display:block;color:#00aef0;text-decoration:none;font-size:.9em;font-weight:600;text-align:left;margin:12px;cursor:pointer;",
                mobileLogoStyle: "display:block;margin:8px auto;width:120px;height:40px;",
                mobileMessageStyle: "display:block;margin:6px 8px 4px 12px;font-size:12px;line-height:1.6;text-align:left;",
                mobileNavigationLinkStyle: "white-space:nowrap;padding:12px;cursor:pointer;display:block;box-sizing:content-box;font-size:18px;font-weight:700;margin:auto;",
                mobileOverlayStyle: "display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:#ffffff;border:0 solid #ffffff;",
                mobilePrimaryButtonStyle: "display:inline-block;margin:4px;padding:8px 16px;color:#f2f2f2;background:#000000;cursor:pointer;border:2px solid transparent;font-size:1.2em;border-radius:4px;",
                mobileSecondaryButtonStyle: "display:inline-block;margin:4px;padding:8px 16px;color:#333333;background:#f3f3f3;cursor:pointer;border:2px solid transparent;font-size:1.2em;border-radius:4px;",
                mobileShowBackground: true,
                mobileShowDeclineButton: true,
                mobileShowGlobalPrefButton: true,
                mobileShowTitle: true,
                mobileSidebarStyle: "display:inline-block;width:100%;height:100%;background:#ffffff;",
                mobileSubtitleStyle: "display:block;font-size:1.1em;font-weight:500;margin:0 12px;",
                mobileTertiaryButtonStyle: "margin:2px auto;padding:4px 8px;color:#333333;cursor:pointer;border:2px solid transparent;font-size:11px;",
                mobileTitleStyle: "display:block;text-align:center;margin:12px 0 16px;font-size:1.2em;font-weight:600;",
                accordian: " content: '\\002B';color: #777; margin-top: 12px;  cursor: pointer;  outline: none;transition: 0.4s;",
                panel: " cursor: pointer; overflow: hidden;  margin-top: 12px;"
            }
        }
        if (!cE.navigationLinkStyle) {
            cE.navigationLinkStyle = "white-space:nowrap;padding:12px;cursor:pointer;display:block;box-sizing:content-box;font-size:14px;font-weight:500;font-family:Open Sans;color:#333333;"
        }
        if (!cE.sidebarStyle) {
            cE.sidebarStyle = "display:inline-block;width:200px;height:450px;background:#e3e3e3;color:false;"
        }
        if (!cE.mobileNavigationLinkStyle) {
            cE.mobileNavigationLinkStyle = "white-space:nowrap;padding:12px;cursor:pointer;display:block;box-sizing:content-box;border-bottom:solid 1px rgba(0,0,0,.5);"
        }
        if (!cE.mobileSidebarStyle) {
            cE.mobileSidebarStyle = "display:inline-block;width:100%;background:#d8d8d8;"
        }
        if (a) {
            this.logoUrl = cE.mobileLogo;
            var cF = a9._getStyleValue(cE.mobileOverlayStyle, "background") || "#FFFFFF";
            var cD = a9._getStyleValue(cE.mobileMessageStyle, "color") || "inherit";
            ci[d] = cE.mobileBackgroundStyle;
            ci[bd] = cE.mobileOverlayStyle;
            ci[h] = cE.mobileCloseIconStyle;
            ci[f] = cE.mobileBackButtonStyle;
            ci[a6] = cE.mobileSidebarStyle;
            ci[a7] = cE.mobileNavigationLinkStyle;
            ci[a7 + "-active"] = cE.mobileNavigationLinkStyle + "background: " + cF + ";color:" + cD + ";";
            ci[a5] = cE.mobileLogoStyle;
            ci[ck] += "background: " + cF + ";";
            ci[cn] += "background: " + cF + ";";
            ci[c] = cE.mobilePrimaryButtonStyle;
            ci[r] = cE.mobileSecondaryButtonStyle;
            ci[bs] = cE.mobileTitleStyle;
            ci[br] = cE.mobileMessageStyle;
            ci[bo] = cE.mobileTitleStyle;
            ci[bp] = cE.mobileMessageStyle;
            ci[bk] = cE.mobileSubtitleStyle;
            ci[bj] = cE.mobileCategoryHeaderStyle;
            ci[bg] = cE.mobileCategoryDescriptionStyle;
            ci[bi] = cE.mobileLinkStyle;
            ci[by] = cE.mobileTitleStyle;
            ci[bz] = cE.mobileMessageStyle;
            ci[bu] = cE.mobileSubtitleStyle;
            ci[bE] = cE.mobileCategoryHeaderStyle;
            ci[bB] = cE.mobileCategoryDescriptionStyle;
            ci[bD] = cE.mobileLinkStyle;
            ci[ca] = cE.mobileCategoryHeaderStyle;
            ci[cb] = cE.mobileMessageStyle;
            ci[b6] = cE.mobileSubtitleStyle;
            ci[b3] = cE.mobileCategoryHeaderStyle;
            ci[b4] = cE.mobileLinkStyle;
            ci[J] = cE.mobileTitleStyle;
            ci[F] = cE.mobileSubtitleStyle;
            ci[E] = cE.mobileCategoryHeaderStyle;
            ci[C] = cE.mobileCategoryDescriptionStyle;
            ci[M] = cE.mobileLinkStyle;
            ci[ah] = cE.mobileTitleStyle;
            ci[ad] = cE.mobileSubtitleStyle;
            ci[ac] = cE.mobileCategoryHeaderStyle;
            ci[aa] = cE.mobileLinkStyle;
            ci[ab] = cE.mobileLinkStyle;
            ci[L] = cE.mobileLinkStyle;
            ci[X] = cE.mobileSubtitleStyle;
            ci[Y] = cE.mobileCategoryHeaderStyle;
            ci[W] = cE.mobileCategoryDescriptionStyle;
            ci[S] = cE.mobileSubtitleStyle;
            ci[T] = cE.mobileCategoryHeaderStyle;
            ci[R] = cE.mobileCategoryDescriptionStyle;
            ci[O] = cE.mobileSubtitleStyle;
            ci[P] = cE.mobileCategoryHeaderStyle;
            ci[N] = cE.mobileCategoryDescriptionStyle;
            ci[U] = cE.mobileSubtitleStyle;
            ci[V] = cE.mobileLinkStyle;
            ci[ar] = cE.mobileTitleStyle;
            ci[an] = cE.mobileSubtitleStyle;
            ci[am] = cE.mobileCategoryHeaderStyle;
            ci[ak] = cE.mobileCategoryDescriptionStyle;
            ci[av] = cE.mobileLinkStyle;
            ci[aQ] = cE.mobileTitleStyle;
            ci[aM] = cE.mobileSubtitleStyle;
            ci[aL] = cE.mobileCategoryHeaderStyle;
            ci[aJ] = cE.mobileLinkStyle;
            ci[aK] = cE.mobileLinkStyle;
            ci[au] = cE.mobileLinkStyle;
            ci[aG] = cE.mobileSubtitleStyle;
            ci[aH] = cE.mobileCategoryHeaderStyle;
            ci[aF] = cE.mobileCategoryDescriptionStyle;
            ci[aB] = cE.mobileSubtitleStyle;
            ci[aC] = cE.mobileCategoryHeaderStyle;
            ci[aA] = cE.mobileCategoryDescriptionStyle;
            ci[ax] = cE.mobileSubtitleStyle;
            ci[ay] = cE.mobileCategoryHeaderStyle;
            ci[aw] = cE.mobileCategoryDescriptionStyle;
            ci[aD] = cE.mobileSubtitleStyle;
            ci[aE] = cE.mobileLinkStyle;
            ci.showTitle = cE.mobileShowTitle;
            ci.showDeclineButton = cE.mobileShowDeclineButton
        } else {
            this.logoUrl = cE.logo;
            var cF = a9._getStyleValue(cE.overlayStyle, "background") || "#FFFFFF";
            var cG = parseInt(a9._getStyleValue(cE.sidebarStyle, "width", 10));
            if (isNaN(cG) || cG === 0) {
                cG = 225;
                cE.sidebarStyle += " width: 225px;"
            }
            var cD = a9._getStyleValue(cE.messageStyle, "color") || "inherit";
            ci[d] = cE.backgroundStyle;
            ci[bd] = cE.overlayStyle;
            ci[h] = cE.closeIconStyle;
            ci[f] = cE.backButtonStyle;
            ci[a6] = cE.sidebarStyle;
            ci[a7] = cE.navigationLinkStyle;
            ci[a7 + "-active"] = cE.navigationLinkStyle + "background: " + cF + ";color:" + cD + ";";
            ci[a5] = cE.logoStyle;
            ci[cj] += "left: " + (cG + 1) + "px;";
            ci[ck] += "background: " + cF + ";";
            ci[cn] += "background: " + cF + ";";
            ci[c] = cE.primaryButtonStyle;
            ci[r] = cE.secondaryButtonStyle;
            ci[bs] = cE.titleStyle;
            ci[br] = cE.messageStyle;
            ci[bo] = cE.titleStyle;
            ci[bp] = cE.messageStyle;
            ci[bk] = cE.subtitleStyle + cE.accordian;
            ci[bn] = cE.panel;
            ci[bj] = cE.categoryHeaderStyle;
            ci[bg] = cE.categoryDescriptionStyle;
            ci[bi] = cE.linkStyle;
            ci[by] = cE.titleStyle;
            ci[bz] = cE.messageStyle;
            ci[bu] = cE.subtitleStyle;
            ci[bE] = cE.categoryHeaderStyle;
            ci[bB] = cE.categoryDescriptionStyle;
            ci[bD] = cE.linkStyle;
            ci[ca] = cE.categoryHeaderStyle;
            ci[cb] = cE.messageStyle;
            ci[b6] = cE.subtitleStyle;
            ci[b3] = cE.categoryHeaderStyle;
            ci[b4] = cE.linkStyle;
            ci[J] = cE.titleStyle;
            ci[F] = cE.subtitleStyle;
            ci[E] = cE.categoryHeaderStyle;
            ci[C] = cE.categoryDescriptionStyle;
            ci[M] = cE.linkStyle;
            ci[ah] = cE.titleStyle;
            ci[ad] = cE.subtitleStyle;
            ci[ac] = cE.categoryHeaderStyle;
            ci[aa] = cE.linkStyle;
            ci[ab] = cE.linkStyle;
            ci[L] = cE.linkStyle;
            ci[X] = cE.subtitleStyle;
            ci[Y] = cE.categoryHeaderStyle;
            ci[W] = cE.categoryDescriptionStyle;
            ci[S] = cE.subtitleStyle;
            ci[T] = cE.categoryHeaderStyle;
            ci[R] = cE.categoryDescriptionStyle;
            ci[O] = cE.subtitleStyle;
            ci[P] = cE.categoryHeaderStyle;
            ci[N] = cE.categoryDescriptionStyle;
            ci[U] = cE.subtitleStyle;
            ci[V] = cE.linkStyle;
            ci[ar] = cE.titleStyle;
            ci[an] = cE.subtitleStyle;
            ci[am] = cE.categoryHeaderStyle;
            ci[ak] = cE.categoryDescriptionStyle;
            ci[av] = cE.linkStyle;
            ci[aQ] = cE.titleStyle;
            ci[aM] = cE.subtitleStyle;
            ci[aL] = cE.categoryHeaderStyle;
            ci[aJ] = cE.linkStyle;
            ci[aK] = cE.linkStyle;
            ci[au] = cE.linkStyle;
            ci[aG] = cE.subtitleStyle;
            ci[aH] = cE.categoryHeaderStyle;
            ci[aF] = cE.categoryDescriptionStyle;
            ci[aB] = cE.subtitleStyle;
            ci[aC] = cE.categoryHeaderStyle;
            ci[aA] = cE.categoryDescriptionStyle;
            ci[ax] = cE.subtitleStyle;
            ci[ay] = cE.categoryHeaderStyle;
            ci[aw] = cE.categoryDescriptionStyle;
            ci[aD] = cE.subtitleStyle;
            ci[aE] = cE.linkStyle;
            ci.showTitle = cE.showTitle;
            ci.showDeclineButton = cE.showDeclineButton
        }
        this._create()
    }
    ;
    cd.prototype.initTabs = function() {
        if (a) {
            this._calculateMobilePanelHeight()
        } else {}
        if (a9.venodrDisplayEnabled) {
            this._addTab(new ce())
        }
        if (a9.iabEnabled && a9.iabVersion == 1) {
            this._addTab(new aj())
        }
        if (a9.iabEnabled && a9.iabVersion == 2) {
            this._addTab(new aS())
        }
        if (a9.gdprEnabled) {
            var cE = a9.getDataRequestUrl(true);
            if (a9.dataRightsType === p.CUSTOM_FORM) {
                cE = a9.rightsLink
            }
            var cG = a ? "mobilesnL2L3RequestYourData" : "snL2L3RequestYourData";
            this._addTab(new q("data-request",cG,a9.dataRightsType,cE,a9.displayDsarInFrame,m))
        }
        if (a9.dnsEnabled) {
            var cE = a9.getDoNotSellRequestUrl(true);
            if (a9.dnsRightsType === p.CUSTOM_FORM) {
                cE = a9.dnsLink
            }
            var cG = a ? "mobilesnL2L3DoNotSell" : "snL2L3DoNotSell";
            this._addTab(new q("do-not-sell",cG,a9.dnsRightsType,cE,a9.displayDnsInFrame,v))
        }
        if (a9.adChoicesEnabled) {
            var cG = a ? "mobilesnL2L3AdChoices" : "snL2L3AdChoices";
            var cF = B(cG);
            var cD = l("img", {
                src: aT + "/adchoices.png",
                css: "width: 14px; height: 14px; margin: 0px 0px 0px 3px; vertical-align: middle;"
            }, null);
            this._addTab(new x("ad-choices",cF,a9.getConsentUrl(),cD))
        }
        if (a9.privacyPolicyEnabled) {
            var cG = a ? "mobilesnL2L3PrivacyPolicy" : "snL2L3PrivacyPolicy";
            var cF = B(cG);
            this._addTab(new x("privacy-policy",cF,a9.privacypolicylink))
        }
        if (a9.cookiePolicyEnabled) {
            var cG = a ? "mobilesnL2L3CookiePolicy" : "snL2L3CookiePolicy";
            var cF = B(cG);
            this._addTab(new x("cookie-policy",cF,a9.cookiepolicylink))
        }
    }
    ;
    cd.prototype.showBreadcrumb = function(cG, cE) {
        if (!this._breadcrumbContainer) {
            return
        }
        if (this._breadcrumbIsShown) {
            return
        }
        var cF = this;
        this._breadcrumbContainer.style.display = "block";
        var cD = l("button", {
            id: u,
            css: "background:transparent;color: #3f5a87;font-size: 13px;padding: 0px 4px;"
        });
        cD.innerHTML = innerHTML = "<span style='font-size: 15px'>&lsaquo;</span><span style='text-decoration: underline;padding-left:2px'>" + cG + "</span>";
        cD.onclick = cE;
        this._breadcrumbContainer.appendChild(cD);
        this._breadcrumbContainer.onclick = cE;
        this._breadcrumbContainer.onkeyup = function(cH) {
            if (cH.keyCode === 13) {
                cF._breadcrumbContainer.onclick(cH)
            }
        }
        ;
        this._breadcrumbIsShown = true
    }
    ;
    cd.prototype.hideBreadcrumb = function() {
        if (!this._breadcrumbContainer) {
            return
        }
        this._breadcrumbContainer.style.display = "none";
        this._breadcrumbContainer.innerHTML = "";
        this._breadcrumbContainer.onclick = null;
        this._breadcrumbIsShown = false
    }
    ;
    cd.prototype.close = function() {
        var cF = this._tabs[this._activeTabIndex].tab;
        if (typeof cF.isDirty === "function" && cF.isDirty() === true) {
            co.show(cp, B(a ? "mobilesnL2L3UnsavedChanges" : "snL2L3UnsavedChanges"));
            ch(this._acceptButton);
            return
        }
        var cD = document.getElementById(d);
        if (cD) {
            cD.parentElement.removeChild(cD)
        }
        var cE = document.getElementById(bd);
        if (cE) {
            cE.parentElement.removeChild(cE)
        }
        this._dispose();
        if (window.evidon.events) {
            window.evidon.events._fireEvent("l2closed")
        }
    }
    ;
    cd.prototype.isDisplayed = function() {
        return (document.getElementById(bd) !== null)
    }
    ;
    var a4 = function() {
        function cD(cG) {
            var cF = null;
            if (typeof (Event) === "function") {
                cF = new Event(cG)
            } else {
                cF = document.createEvent("Event");
                cF.initEvent(cG, false, false)
            }
            return cF
        }
        function cE(cI) {
            if (cI) {
                var cG = cI.data;
                if (!cG) {
                    return
                }
                if (typeof cG === "string") {} else {
                    if (cG.hasOwnProperty("formvalid")) {
                        var cH = cD("evidonformvalid");
                        cH.isvalid = cG.formvalid;
                        window.dispatchEvent(cH)
                    } else {
                        if (cG.hasOwnProperty("action")) {
                            var cF = cD("evidonformaction");
                            cF.data = cG;
                            window.dispatchEvent(cF)
                        }
                    }
                }
            }
        }
        if (window.addEventListener) {
            window.addEventListener("message", cE)
        } else {
            window.attachEvent("onmessage", cE)
        }
    };
    var ct = new cu();
    ct._addStyles();
    var t = new cd();
    var a3 = new a4();
    window.evidon.Toast = co;
    window.evidon.Toggle = cu;
    window.evidon.preferencesDialog = t
}
)();
