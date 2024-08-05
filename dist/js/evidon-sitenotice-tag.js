(function() {
    var ac = {
        en: {
            monthvar: "months",
            partnervar: "partners"
        },
        fr: {
            monthvar: "mois",
            partnervar: "partenaires"
        },
        it: {
            monthvar: "mesi",
            partnervar: "partner"
        },
        de: {
            monthvar: "Monate",
            partnervar: "Partnern"
        }
    };
    if (!Object.keys) {
        Object.keys = (function() {
            var aQ = Object.prototype.hasOwnProperty
              , aP = !({
                toString: null
            }).propertyIsEnumerable("toString")
              , aN = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
              , aO = aN.length;
            return function(aS) {
                if (typeof aS !== "function" && (typeof aS !== "object" || aS === null)) {
                    throw new TypeError("Object.keys called on non-object")
                }
                var aU = [], aT, aR;
                for (aT in aS) {
                    if (aQ.call(aS, aT)) {
                        aU.push(aT)
                    }
                }
                if (aP) {
                    for (aR = 0; aR < aO; aR++) {
                        if (aQ.call(aS, aN[aR])) {
                            aU.push(aN[aR])
                        }
                    }
                }
                return aU
            }
        }())
    }
    if (typeof Object.assign != "function") {
        Object.assign = function(aQ, aS) {
            if (aQ == null) {
                throw new TypeError("Cannot convert undefined or null to object")
            }
            var aR = Object(aQ);
            for (var aN = 1; aN < arguments.length; aN++) {
                var aP = arguments[aN];
                if (aP != null && aP != undefined) {
                    for (var aO in aP) {
                        if (Object.prototype.hasOwnProperty.call(aP, aO)) {
                            aR[aO] = aP[aO]
                        }
                    }
                }
            }
            return aR
        }
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = (function(aQ, aO, aP) {
            return function aN(aU, aR) {
                if (this === null || this === undefined) {
                    throw TypeError("Array.prototype.indexOf called on null or undefined")
                }
                var aV = aQ(this)
                  , aT = aV.length >>> 0
                  , aS = aP(aR | 0, aT);
                if (aS < 0) {
                    aS = aO(0, aT + aS)
                } else {
                    if (aS >= aT) {
                        return -1
                    }
                }
                if (aU === void 0) {
                    for (; aS !== aT; ++aS) {
                        if (aV[aS] === void 0 && aS in aV) {
                            return aS
                        }
                    }
                } else {
                    if (aU !== aU) {
                        for (; aS !== aT; ++aS) {
                            if (aV[aS] !== aV[aS]) {
                                return aS
                            }
                        }
                    } else {
                        for (; aS !== aT; ++aS) {
                            if (aV[aS] === aU) {
                                return aS
                            }
                        }
                    }
                }
                return -1
            }
        }
        )(Object, Math.max, Math.min)
    }
    if (!Array.isArray) {
        Array.isArray = function(aN) {
            return Object.prototype.toString.call(aN) === "[object Array]"
        }
    }
    if (!Array.prototype.find) {
        Array.prototype.find = function(aN) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined')
            }
            var aR = Object(this);
            var aQ = aR.length >>> 0;
            if (typeof aN !== "function") {
                throw new TypeError("callback must be a function")
            }
            var aS = arguments[1];
            var aO = 0;
            while (aO < aQ) {
                var aP = aR[aO];
                if (aN.call(aS, aP, aO, aR)) {
                    return aP
                }
                aO++
            }
            return undefined
        }
    }
    if (!Array.prototype.filter) {
        Array.prototype.filter = function(aO, aU) {
            if (!((typeof aO === "Function" || typeof aO === "function") && this)) {
                throw new TypeError()
            }
            var aR = this.length >>> 0
              , aS = new Array(aR)
              , aT = this
              , aN = 0
              , aP = -1;
            var aQ;
            if (aU === undefined) {
                while (++aP !== aR) {
                    if (aP in this) {
                        aQ = aT[aP];
                        if (aO(aT[aP], aP, aT)) {
                            aS[aN++] = aQ
                        }
                    }
                }
            } else {
                while (++aP !== aR) {
                    if (aP in this) {
                        aQ = aT[aP];
                        if (aO.call(aU, aT[aP], aP, aT)) {
                            aS[aN++] = aQ
                        }
                    }
                }
            }
            aS.length = aN;
            return aS
        }
    }
    if (window.Prototype && parseFloat(window.Prototype.Version) < 1.7 && Array.prototype.reduce) {
        Array.prototype.mVendorObjectReduce = function(aN, aP) {
            if (!aN || typeof aN !== "function") {
                throw TypeError()
            }
            var aQ = this.length;
            var aO = 0;
            if (typeof aP === "undefined" || aP === null) {
                aP = this[0];
                ++aO
            }
            for (; aO < aQ; aO++) {
                aP = aN.apply(this, [aP, this[aO], aO, this])
            }
            return aP
        }
    }
    if (!Object.isEmpty) {
        Object.isEmpty = function(aO) {
            if (!aO) {
                return true
            } else {
                for (var aN in aO) {
                    if (aO.hasOwnProperty(aN)) {
                        return false
                    }
                }
                return true
            }
        }
    }
    var y = "//c.evidon.com"
      , aH = y + "/sitenotice/"
      , B = aH + window.evidon.id
      , a = {
        LINK: 1,
        BUTTON: 2
    }
      , H = 1
      , F = 2
      , G = 3
      , aD = {
        CCPA: 1,
        GDPR: 2,
        NevadaLaw: 3,
        CPRA: 7,
        VCDPA: 8,
        CTDPA: 9,
        CPA: 10,
        UCPA: 11,
        OCPA: 13,
        TDPSA: 14,
        MCDPA: 15
    }
      , aB = 1
      , aC = 2
      , X = 1
      , W = 2
      , Y = 3
      , C = "_evidon_consent_cookie"
      , D = "_evidon_consent_ls_"
      , aJ = "_evidon_suppress_notification_cookie"
      , av = "//l.evidon.com/site/v3/"
      , ay = "https://l.evidon.com/site/v3/userPref/"
      , aq = "https://optoutapi.evidon.com/site/"
      , ab = "https://l3.evidon.com/site/"
      , K = "https://l3.evidon.com/dataRequest/"
      , aM = "vendorlist.js"
      , k = "evidon-banner.js"
      , l = "evidon-barrier.js"
      , V = "evidon-gdpr-overlay.js"
      , ax = "evidon-preferences-dialog.js"
      , A = {
        1: "evidon-cmp.js",
        2: "evidon-cmpv2.js"
    }
      , z = "https://iabmap.evidon.com/iabevidonmapping.js"
      , s = 1
      , R = 2
      , O = 3
      , S = 4
      , ar = "_evidon-overlay"
      , aa = "_evidon-l3"
      , aF = 30
      , aK = "evidonConsentGiven"
      , q = "_evh-button"
      , ai = "_evh-link"
      , ap = "_evh-newvendor-indicator"
      , u = "_evidon-button-text"
      , al = "_evidon-link-text"
      , ah = "evidon-notice-link"
      , am = 800;
    var ae = "evidon-consent-link"
      , ak = "evidon-consent-link-text"
      , aj = "evidon-consent-link-image"
      , n = "evidon-consent-button"
      , t = "evidon-consent-button-text"
      , r = "evidon-consent-button-image";
    var aE = 1
      , az = 17
      , aG = 20
      , at = 21
      , ao = 22
      , j = 26
      , Z = 6
      , U = 7
      , I = 23
      , T = 47;
    var ag = 2
      , p = 3
      , af = 15
      , o = 16;
    var L = "{company}"
      , E = "{consentToolUrl}"
      , aA = "{privacyPolicy}"
      , J = "{cookiePolicy}"
      , M = "{duration}"
      , aL = "{vendorcount}"
      , w = "{categorycsv}"
      , x = "{categorylist}"
      , aw = "{policybuttonmarker}"
      , an = "{monthvar}"
      , au = "{partnervar}";
    var d = "adobe-marketing-cloud-audience-manager"
      , c = "adobe-marketing-cloud-analytics"
      , f = "adobe-experience-platform"
      , h = "adobe-marketing-cloud-target"
      , i = "adobe-video-analytics"
      , b = "adobe-marketing-cloud-media-optimizer-formerly-adlens"
      , g = "livefyre"
      , e = "adobe-marketing-cloud-campaign";
    var Q = {
        BANNER_SCRIPT: "fallback-banner.js",
        BARRIER_SCRIPT: "fallback-barrier.js",
        L2_SCRIPT: "fallback-gdpr-overlay.js"
    };
    var P = [3247];
    var v = {
        1: "ad exchange",
        2: "advertiser",
        3: "ad network",
        5: "analytics provider",
        7: "optimizer",
        8: "research provider",
        9: "other",
        10: "publisher",
        11: "agency",
        12: "retargeter",
        13: "ad server",
        14: "demand side platform",
        15: "supply side platform",
        16: "ad verification",
        17: "online privacy platform",
        20: "creative/ad format technology",
        21: "data aggregator/supplier",
        22: "data management platform",
        23: "mobile",
        24: "tag manager",
        25: "social media",
        26: "business intelligence",
        27: "content management/saas",
        28: "marketing solutions",
        29: "video",
        30: "website optimization"
    };
    var m = function() {
        var aP = null
          , aN = false
          , aQ = false
          , aO = false
          , aT = this;
        function aR(aU) {
            window.evidon.notice.dropPixel(o);
            if (aU.target.innerText === "Do Not Sell My Personal Information") {
                window.evidon.notice.showOptions(null, window.evidon.notice.PREFDIAG_TABS.DONOTSELL)
            } else {
                window.evidon.notice.showOptions(null)
            }
            if (aO) {
                window.evidon.notice._updateConsentedVendors();
                aT.hideNewVendorIndicator()
            }
        }
        function aS() {
            if (aN || !aP) {
                return
            }
            var aV = document
              , a2 = window.evidon.notice.isMobile()
              , aU = aV.createElement("div");
            aU.id = q;
            aU.className = n;
            aU.innerHTML = "<style> @media print {#_evh-ric,#_evh-link { display:none !important; } } </style>";
            aU.setAttribute("role", "button");
            var a5 = (a2) ? aP.mobileButtonStyle : aP.buttonStyle;
            var a3 = aV.createElement("a");
            a3.id = ai;
            a3.style.cssText = a5;
            var a6 = (a2) ? aP.mobileShowIcon : aP.showIcon;
            if (a6) {
                var aZ = aV.createElement("img");
                aZ.src = aP.buttonIcon;
                aZ.className = r;
                aZ.alt = "AdChoices Icon";
                var a8 = "border:0;display:inline;vertical-align:middle;margin-right:10px;";
                var aX = window.evidon.notice._getStyleValue(aP.buttonStyle, "height");
                if (aX) {
                    var aW = parseFloat(aX);
                    var bb = aX.replace(aW, "");
                    aW = parseInt(aW * 0.6, 10);
                    a8 += "height:" + aW + bb + ";"
                }
                aZ.style.cssText = a8;
                a3.appendChild(aZ)
            }
            var a7 = (a2) ? aP.mobileShowText : aP.showText;
            if (a7) {
                var a9 = aV.createElement("span");
                a9.id = u;
                a9.className = t;
                a9.style.cssText = "vertical-align:middle !important;";
                a3.appendChild(a9)
            }
            a3.onclick = function(bd) {
                aR(bd)
            }
            ;
            a3.onkeyup = function(bd) {
                if (bd.keyCode === 13) {
                    a3.onclick()
                }
            }
            ;
            a3.tabIndex = 0;
            var a4 = window.evidon.notice._parseCss(a5);
            var aY = a4.left === undefined ? "left" : "right";
            var bc = a4.top === undefined ? "top" : "bottom";
            var a1 = "display: none; position: absolute;" + aY + ":-10px;" + bc + ":-10px;width: 23px; height: 23px;";
            var a0 = document.createElement("img");
            a0.id = ap;
            a0.src = "//c.evidon.com/sitenotice/images/evidon-change-alert.png";
            a0.alt = "New vendors have been added to this site";
            a0.style.cssText = a1;
            a3.appendChild(a0);
            aU.appendChild(a3);
            document.body.appendChild(aU);
            var ba = window.evidon.notice.getTranslations();
            if (ba) {
                aT.setButtonText(ba)
            }
            if (a2) {
                aT.scaleForMobile()
            }
            aN = true
        }
        window.onbeforeprint = function() {
            var aU = document.getElementById(q);
            if (aU) {
                aU.style.display = "none"
            }
        }
        ;
        window.onafterprint = function() {
            var aU = document.getElementById(q);
            if (aU) {
                aU.style.display = ""
            }
        }
        ;
        this.scaleForMobile = function() {
            if (window.innerHeight < am && window.innerWidth < am) {
                return
            }
            var aU = document.getElementById(q)
              , aV = Math.max(window.innerWidth / screen.width, window.innerHeight / screen.height);
            if (aU && (aU.style.zoom !== undefined)) {
                aU.style.cssText += "zoom: " + (aV <= 2 ? aV : 2) + "!important;"
            }
        }
        ;
        this.setButtonText = function(aY) {
            if (!aY) {
                return
            }
            var aX = window.evidon.notice;
            aX.dropPixel(p);
            var aV = window.evidon.notice.isMobile();
            if (aN) {
                var aU = document.getElementById(u);
                var aW = aX.isUSOptOutRegulation() ? (aV ? aY.mobileDoNotSell : aY.doNotSell) : (aV ? aY.mobileButtonText : aY.buttonText);
                if (aU) {
                    aU.innerHTML = aW;
                    aQ = true
                }
            }
        }
        ;
        this.createButton = function(aU) {
            if (!aU) {
                aP = window.evidon.notice.getButtonStyle()
            } else {
                aP = aU
            }
            if (aP) {
                aS()
            }
        }
        ;
        this.showNewVendorIndicator = function() {
            var aU = document.getElementById(ap);
            if (!aU) {
                return
            }
            aU.style.display = "";
            aO = true
        }
        ;
        this.hideNewVendorIndicator = function() {
            var aU = document.getElementById(ap);
            if (!aU) {
                return
            }
            aU.style.display = "none";
            aO = false
        }
        ;
        this.iscreated = function() {
            return aN
        }
        ;
        this.show = function() {
            var aU = document.getElementById(q);
            if (aU) {
                aU.style.display = "block"
            }
        }
        ;
        this.hide = function() {
            var aU = document.getElementById(q);
            if (aU) {
                aU.style.display = "none"
            }
        }
    };
    var ad = function() {
        var aO = null
          , aN = false
          , aR = this;
        function aP() {
            if (aN || !aO) {
                return
            }
            var aU = document
              , aX = window.evidon.notice.isMobile()
              , aY = aU.createElement("a");
            aY.href = "javascript:void(0)";
            aY.className = ae;
            aY.tabIndex = 0;
            var aZ = aU.createElement("span");
            aZ.id = al;
            aZ.className = ak;
            if (aX && aO.mobileShowIcon && aO.mobileLinkIcon) {
                var aW = aU.createElement("img");
                aW.src = aO.mobileLinkIcon;
                aW.style.cssText = "vertical-align:bottom;";
                aW.className = aj;
                aW.alt = "AdChoices Icon";
                aY.appendChild(aW);
                aZ.style.cssText = "margin-left: 6px;"
            } else {
                if (!aX && aO.showIcon && aO.linkIcon) {
                    var aW = aU.createElement("img");
                    aW.src = aO.linkIcon;
                    aW.className = aj;
                    aW.style.cssText = "vertical-align:bottom;";
                    aW.alt = "AdChoices Icon";
                    aY.appendChild(aW);
                    aZ.style.cssText = "margin-left: 6px;"
                }
            }
            aY.appendChild(aZ);
            if (aX) {
                aY.style.cssText = aO.mobileLinkStyle
            } else {
                aY.style.cssText = aO.linkStyle
            }
            var aT = [];
            if (aU.getElementsByClassName !== undefined) {
                aT = aU.getElementsByClassName(ah)
            } else {
                aT = aU.querySelectorAll("." + ah)
            }
            if (aT.length === 0) {
                console.log("Evidon -- " + ah + " not found on page, cant display the consent link.")
            }
            for (var aV = 0; aV < aT.length; aV++) {
                var aS = aY.cloneNode(true);
                aS.onclick = aQ;
                aT[aV].appendChild(aS)
            }
            aN = true;
            var a0 = window.evidon.notice.getTranslations();
            if (a0) {
                aR.setLinkText(a0)
            }
        }
        function aQ(aS) {
            if (aS.stopPropagation) {
                aS.stopPropagation()
            }
            window.evidon.notice.dropPixel(af);
            window.evidon.notice.showOptions(null)
        }
        this.setLinkText = function(aY) {
            if (!aN || !aY) {
                return
            }
            var aX = window.evidon.notice;
            aX.dropPixel(ag);
            var aU = window.evidon.notice.isMobile();
            var aV = null
              , aS = document
              , aW = aX.isUSOptOutRegulation() ? (aU ? aY.mobileDoNotSell : aY.doNotSell) : (aU ? aY.mobileLinkText : aY.linkText);
            if (aS.getElementsByClassName !== undefined) {
                aV = aS.getElementsByClassName(ak)
            } else {
                aV = aS.querySelectorAll("." + ak)
            }
            if (aW) {
                for (var aT = 0; aT < aV.length; aT++) {
                    aV[aT].innerText = aW
                }
            }
        }
        ;
        this.createLink = function(aS) {
            if (aS) {
                aO = aS
            } else {
                aO = window.evidon.notice.getLinkStyle()
            }
            if (!aO) {
                return
            }
            aP()
        }
    };
    var aI = function() {
        this.translations = {};
        this.country = null;
        this.themes = null;
        this.languageCode = null;
        this.languageRoot = null;
        this.companyId = window.evidon.id;
        this.activeTranslations = null;
        this.activeTranslationId = 0;
        this.settings = null;
        this.domain = null;
        this.path = null;
        this.activeSettings = null,
        this.regulationId = 0,
        this.regulationRightsId = 0,
        this.regulationConsentTypeId = 0,
        this.consentTypeId = 0,
        this.privacyAccessTypeId = 0,
        this.consentRequired = false,
        this.consentDuration = 13,
        this.consentIsGiven = false,
        this.L2Enabled = false,
        this.gdprEnabled = false,
        this.dataRightsType = 0,
        this.rightsLink = "",
        this.closeConsentEnabled = false,
        this.scrollConsentEnabled = false,
        this.pageclickConsentEnabled = false,
        this.navigationConsentEnabled = false;
        this.activeVendorId = -1;
        this.activeDomain = null;
        this.pixelsDropped = [];
        this.scriptsLoaded = [];
        this.tagManagerEventFired = false;
        this.consentCallbackExecuted = false;
        this.consentChangedCallbackExecuted = false;
        this.closeCallbackExecuted = false;
        this.declineCallbackExecuted = false;
        this.consentRejectCallbackExecuted = false;
        this.navigationStack = [];
        this.blockDomainCheck = false;
        this.shouldSupportAmp = false;
        this.customerUserId = (typeof window.evidon.userid !== "undefined") ? window.evidon.userid : null;
        this.vendorList = null;
        this.activecategorySet = null;
        this.shouldCallCMP = true;
        this.optOutDetails = null;
        this.companydetails = [];
        this.cnilupdatesenabled = false,
        this.displaytimeout = 0;
        this.activeCategorySetId = -1;
        this.activeCategoriesWithVendor = null;
        this.noticeGpcEnabled = 0;
        this.userGpcEnabled = (navigator.globalPrivacyControl === true || navigator.globalPrivacyControl === 1 ? 1 : 0);
        this.activeTranslationsLangCode = (typeof window.evidon.activeTranslationsLangCode !== "undefined") ? window.evidon.activeTranslationsLangCode : null;
        this.gpcConflict = 0;
        this.PREFDIAG_TABS = {
            IAB: "iab",
            PURPOSES: "purposes",
            VENDORS: "vendors",
            DONOTSELL: "do-not-sell",
            CONSENT: "prior-consent"
        };
        var aR = this;
        this._getAttributeValue = function(aX, aZ) {
            var aW = aX.attributes
              , a0 = null;
            for (var aY = 0; aY < aW.length; aY++) {
                if (aW[aY].localName == aZ) {
                    a0 = aW[aY].value;
                    break
                }
            }
            return a0
        }
        ;
        this._trackScrolling = function() {
            if (!aR.scrollConsentEnabled) {
                return
            } else {
                var aW = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
                if (aW === 0 || aW > aF) {
                    aR.consentGiven(true, true, true, true);
                    aR.dropPixel(aG)
                }
            }
        }
        ;
        this._trackClicking = function(aW) {
            if (!aR.pageclickConsentEnabled) {
                return
            }
            if (!aW || !aW.target) {
                return
            }
            if (!window.evidon.banner) {
                return
            }
            if (window.evidon.banner.isOnBanner(aW.target)) {
                return
            }
            if (window.evidon.gdprL2 && window.evidon.gdprL2.isOnBanner(aW.target)) {
                return
            }
            aR.consentGiven(true, true, true, true);
            aR.dropPixel(at)
        }
        ;
        this._hookConsentEvents = function() {
            if (document.readyState == "complete") {
                if (aR.regulationConsentTypeId === aB) {
                    setTimeout(function() {
                        if (window.addEventListener) {
                            window.addEventListener("scroll", aR._trackScrolling, false);
                            window.addEventListener("click", aR._trackClicking, false)
                        } else {
                            window.attachEvent("onscroll", aR._trackScrolling);
                            window.attachEvent("onclick", aR._trackClicking)
                        }
                    }, 500)
                }
            } else {
                if (window.addEventListener) {
                    window.addEventListener("load", aR._hookConsentEvents, false)
                } else {
                    window.attachEvent("onload", aR._hookConsentEvents)
                }
            }
        }
        ;
        this._detachEventTracking = function() {
            aR.pageclickConsentEnabled = false;
            aR.scrollConsentEnabled = false;
            try {
                if (window.removeEventListener !== undefined) {
                    window.removeEventListener("click", aR._trackClicking, false)
                } else {
                    window.detachEvent("onclick", aR._trackClicking, false)
                }
                if (window.removeEventListener !== undefined) {
                    window.removeEventListener("scroll", aR._trackScrolling, false)
                } else {
                    window.detachEvent("onscroll", aR._trackScrolling, false)
                }
            } catch (aW) {}
        }
        ;
        if (!this.isMobile()) {
            if (window.addEventListener) {
                window.addEventListener("resize", function() {
                    aR.showNotice()
                })
            } else {
                window.attachEvent("onresize", function() {
                    aR.showNotice()
                })
            }
        }
        this._isDomReady = function() {
            if (document.readyState == "loading") {
                console.log("dom not ready, setting event");
                document.addEventListener("DOMContentLoaded", function() {
                    console.log("dom ready, triggering load");
                    try {
                        document.removeEventListener("DOMContentLoaded")
                    } catch (aW) {}
                    aR.showNotice()
                }, false);
                return false
            } else {
                return true
            }
        }
        ;
        var aU = document.getElementById("evidon-notice");
        if (aU) {
            var aV = aU.src;
            var aT = aV.indexOf(".com");
            if (aT !== -1) {
                aV = aV.substr(0, aT + 4);
                y = aV;
                aH = y + "/sitenotice/";
                B = aH + window.evidon.id
            }
            var aN = this._getAttributeValue(aU, "data-options");
            if (aN) {
                if (aN.indexOf("block-domain-check") > -1) {
                    this.blockDomainCheck = true
                }
                if (aN.indexOf("amp-support") > -1) {
                    this.shouldSupportAmp = true
                }
            }
        }
        var aQ = this.activeTranslationsLangCode || ((window.navigator.languages && window.navigator.languages.length > 0) ? window.navigator.languages[0] : (window.navigator.userLanguage || window.navigator.language));
        if (aQ) {
            if (aQ.toLowerCase() === "nb") {
                aQ = "no"
            }
            this.activateTranslations(aQ.toLowerCase())
        }
        if (!this.blockDomainCheck) {
            this.setDomain(null, true)
        }
        if (this._isConsentGiven() && this.activeSettings && this.vendorList) {
            if (!this.consentRequired) {
                this._runNoConsentFlow()
            } else {
                if (this.regulationConsentTypeId === aB) {
                    this._runOptInFlow()
                } else {
                    if (this.regulationConsentTypeId === aC) {
                        this._runOptOutFlow()
                    }
                }
            }
        }
        var aP = window.addEventListener ? "addEventListener" : "attachEvent";
        var aO = window[aP];
        var aS = aP == "attachEvent" ? "onmessage" : "message";
        aO(aS, function(aX) {
            var aY = aX.message ? "message" : "data";
            var aW = aX[aY];
            if (aW == "acceptclicked") {
                aR._closeL3()
            }
        }, false)
    };
    aI.prototype._parseCss = function(aR) {
        var aP = aR.split(";");
        var aS = {};
        for (var aN = 0; aN < aP.length; aN++) {
            var aO = aP[aN].split(":");
            if (aO.length !== 2) {
                continue
            }
            var aQ = aO[0].trim();
            var aT = aO[1].trim();
            aS[aQ] = aT
        }
        return aS
    }
    ;
    aI.prototype._joinCss = function(aP) {
        var aN = [];
        for (var aO in aP) {
            aN.push(aO + ":" + aP[aO])
        }
        return aN.join(";") + ";"
    }
    ;
    aI.prototype._getStyleValue = function(aP, aN) {
        var aO = this._parseCss(aP);
        if (aO && aO.hasOwnProperty(aN)) {
            return aO[aN]
        }
        return null
    }
    ;
    aI.prototype._fixurl = function(aN) {
        if (typeof aN === "undefined" || !aN) {
            return aN
        }
        if (aN.indexOf("http") === 0) {
            return aN
        } else {
            if (aN.indexOf("//") === 0) {
                return aN
            } else {
                return "//" + aN
            }
        }
    }
    ;
    aI.prototype._isScriptLoaded = function(aO) {
        for (var aN = 0; aN < this.scriptsLoaded.length; aN++) {
            if (this.scriptsLoaded[aN] == aO) {
                return true
            }
        }
        return false
    }
    ;
    aI.prototype._getRootDomain = function(aN) {
        var aQ = aN;
        var aP = aQ.split(".");
        if (aP.length === 2) {
            aQ = aP[0]
        } else {
            if (aP.length >= 3) {
                var aO = aP[aP.length - 2];
                if (this._isTwoPartTLD(aO)) {
                    aQ = aP[aP.length - 3]
                } else {
                    aQ = aO
                }
            }
        }
        return aQ
    }
    ;
    aI.prototype._isConsentRequired = function(aN) {
        if (aN.hasOwnProperty("regulationConsentTypeId")) {
            return (aN.regulationConsentTypeId !== 0)
        } else {
            if (aN.hasOwnProperty("consentRequired")) {
                return aN.consentRequired
            } else {
                return aN.duration > 0
            }
        }
    }
    ;
    aI.prototype._loadSettings = function(aP) {
        this.iabEnabled = (typeof aP.iabEnabled === "undefined") ? true : aP.iabEnabled;
        if (window.__cmp) {
            this.iabVersion = 1
        } else {
            if (window.__tcfapi) {
                this.iabVersion = 2
            } else {
                this.iabVersion = 2
            }
        }
        this.consentTypeId = aP.consentid;
        this.privacyAccessTypeId = aP.accessid;
        this.consentRequired = this._isConsentRequired(aP);
        this.consentDuration = aP.duration;
        this.L2Enabled = (typeof aP.l2enabled === "undefined") ? false : aP.l2enabled;
        this.gdprEnabled = (typeof aP.gdprEnabled === "undefined") ? false : aP.gdprEnabled;
        this.displayDsarInFrame = (typeof aP.displayDsarInFrame === "undefined") ? false : aP.displayDsarInFrame;
        this.adChoicesEnabled = (typeof aP.adChoicesEnabled === "undefined") ? true : aP.adChoicesEnabled == 1;
        this.closeConsentEnabled = (typeof aP.closeConsentEnabled === "undefined") ? true : aP.closeConsentEnabled;
        this.regulationId = (typeof aP.regulationId === "undefined") ? (this.gdprEnabled ? aD.GDPR : 0) : aP.regulationId;
        this.regulationConsentTypeId = (typeof aP.regulationConsentTypeId === "undefined" ? aB : aP.regulationConsentTypeId);
        this.regulationRightsId = (typeof aP.regulationRightsId === "undefined") ? (this.regulationId == 0 ? aD.GDPR : aP.regulationId) : aP.regulationRightsId;
        this.scrollConsentEnabled = false;
        this.navigationConsentEnabled = false;
        this.pageclickConsentEnabled = false;
        var aN = (typeof aP.consentactions === "undefined") ? "" : aP.consentactions;
        if (aN && this.consentRequired) {
            this.scrollConsentEnabled = (aN.indexOf("s") !== -1);
            this.navigationConsentEnabled = (aN.indexOf("n") !== -1);
            this.pageclickConsentEnabled = (aN.indexOf("p") !== -1)
        }
        var aO = (typeof aP.consentDetailLevel === "undefined") ? "cv" : aP.consentDetailLevel;
        this.consentDetailCategories = aO.indexOf("c") > -1;
        this.consentDetailVendors = aO.indexOf("v") > -1;
        this.privacypolicylink = this.getPrivacyPolicyLink();
        this.privacyPolicyEnabled = (typeof aP.privacyPolicyEnabled === "undefined") ? (this.privacypolicylink !== "#") : aP.privacyPolicyEnabled;
        this.venodrDisplayEnabled = (typeof aP.vendorDisplayEnabled === "undefined") ? true : aP.vendorDisplayEnabled;
        this.dnsEnabled = (typeof aP.dnsEnabled === "undefined") ? (this.isUSOptOutRegulation()) : aP.dnsEnabled;
        this.displayDnsInFrame = (typeof aP.displayDnsInFrame === "undefined") ? false : aP.displayDnsInFrame;
        this.enableAcceptButton = (typeof aP.enableAcceptButton === "undefined") ? null : aP.enableAcceptButton;
        this.enableDeclineButton = (typeof aP.enableDeclineButton === "undefined") ? null : aP.enableDeclineButton;
        this.enableOptionsButton = (typeof aP.enableOptionsButton === "undefined") ? null : aP.enableOptionsButton;
        this.cookiePolicyEnabled = (typeof aP.cookiePolicyEnabled === "undefined") ? false : aP.cookiePolicyEnabled;
        this.cookiepolicylink = this.getCookiePolicyLink();
        this.cnilupdatesenabled = (typeof aP.cnilUpdatesEnabled === "undefined") ? false : aP.cnilUpdatesEnabled;
        this.displaytimeout = (typeof aP.displaytimeout === "undefined") ? 0 : aP.displaytimeout
    }
    ;
    aI.prototype._isTwoPartTLD = function(aP) {
        var aO = ["co", "com", "info", "web", "info", "gov", "edu", "biz", "net", "org"];
        var aN = ["uk", "us", "fr", "es", "de", "at", "au", "ae", "be", "br", "ca", "ch", "cn", "co", "cz", "dk", "eg", "eu", "fi", "gb", "gr", "hk", "hr", "hu", "ie", "in", "jp", "mx", "nl", "no", "nz", "pl", "ro", "ru", "se"];
        return (aO.indexOf(aP) !== -1 || aN.indexOf(aP) !== -1)
    }
    ;
    aI.prototype._getTLD = function(aN) {
        var aP = aN.split(".")
          , aQ = "";
        if (aP && aP.length > 1) {
            aQ = aP[aP.length - 1];
            if (aP.length >= 3) {
                var aO = aP[aP.length - 2];
                if (this._isTwoPartTLD(aO)) {
                    aQ = aO + "." + aQ
                }
            }
        }
        return aQ
    }
    ;
    aI.prototype._createCloseIcon = function(a4, aW, aQ, a1, a2, aN, a6) {
        var aR = null
          , aS = document;
        var a3 = this._parseCss(a4)
          , aP = []
          , a5 = ["stroke", "stroke-width"];
        if (!a3.hasOwnProperty("z-index")) {
            a3["z-index"] = 100
        }
        for (var aX in a3) {
            if (a5.indexOf(aX) === -1) {
                aP.push(aX + ":" + a3[aX])
            }
        }
        if (typeof a1 === "undefined") {
            a1 = "#333333"
        }
        a1 = a3.hasOwnProperty("stroke") ? a3.stroke : a1;
        if (typeof a2 === "undefined") {
            a2 = 2
        }
        a2 = a3.hasOwnProperty("stroke-width") ? a3["stroke-width"] : a2;
        aP.push("border:0");
        aP.push("padding:0");
        aP.push("background:transparent");
        if (typeof SVGRect !== "undefined") {
            var aY = "http://www.w3.org/2000/svg";
            aR = aS.createElementNS(aY, "svg");
            aR.setAttribute("viewBox", "0 0 14 12");
            aR.setAttribute("version", "1.1");
            aR.setAttribute("xmlns", aY);
            aR.setAttribute("class", aQ);
            aR.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
            aR.setAttribute("style", "position:absolute; top:0; left:0;");
            aR.setAttribute("aria-label", aN ? aN + " icon" : "close dialog icon");
            var aT = aS.createElementNS(aY, "g");
            aT.id = a6 ? "__ghostery-close-icon-svg-" + a6 : "__ghostery-close-icon-svg";
            aT.setAttribute("stroke", "none");
            aT.setAttribute("fill", "none");
            aT.setAttribute("fill-rule", "evenodd");
            aT.setAttribute("stroke-linecap", "square");
            var aU = aS.createElementNS(aY, "g");
            aU.setAttribute("transform", "translate(-1410.000000, -643.000000)");
            aU.setAttribute("stroke", a1);
            aU.setAttribute("stroke-width", a2);
            var aV = aS.createElementNS(aY, "g");
            aV.setAttribute("transform", "translate(1411.000000, 643.000000)");
            var aZ = aS.createElementNS(aY, "path");
            aZ.setAttribute("d", "M0.5,0.5 L11.5679722,11.5679722");
            aZ.setAttribute("stroke", a1);
            var a0 = aS.createElementNS(aY, "path");
            a0.setAttribute("d", "M0.5,0.5 L11.5679722,11.5679722");
            a0.setAttribute("transform", "translate(6.000000, 6.000000) scale(-1, 1) translate(-6.000000, -6.000000) ");
            a0.setAttribute("stroke", a1);
            aV.appendChild(aZ);
            aV.appendChild(a0);
            aU.appendChild(aV);
            aT.appendChild(aU);
            aR.appendChild(aT)
        } else {
            aR = aS.createElement("img");
            aR.style.cssText = a4;
            aR.src = "//c.evidon.com/pub/ric-close.png";
            aR.alt = "close";
            aR.tabIndex = 0
        }
        var aO = aS.createElement("button");
        aO.id = aW;
        aO.setAttribute("aria-label", aN ? aN + " button" : "close dialog button");
        aO.style.cssText = aP.join(";");
        aO.appendChild(aR);
        aO.onmouseover = function() {
            this.style.border = "1px solid " + a1
        }
        ;
        aO.onmouseout = function() {
            this.style.border = 0
        }
        ;
        return aO
    }
    ;
    aI.prototype.appendScript = function(aV, aN, aP) {
        var aR, aU = document.createElement("script"), aT = aQ();
        function aQ() {
            return document.getElementsByTagName("script")[0] || document.getElementsByTagName("head")[0]
        }
        function aS() {
            aU.onload = aU.onreadystatechange = null;
            aN()
        }
        if (this._isScriptLoaded(aV)) {
            if (aN) {
                aN()
            }
        } else {
            aU.async = true;
            aU.src = aV;
            aU.charset = "utf-8";
            if (typeof aP === "function") {
                aU.onerror = aP
            }
            if (aN) {
                aU.onreadystatechange = function() {
                    if (!aR && (this.readyState == "loaded" || this.readyState == "complete")) {
                        aR = true;
                        aS()
                    }
                }
                ;
                aU.onload = aS
            }
            try {
                aT.parentElement.insertBefore(aU, aT);
                this.scriptsLoaded.push(aV)
            } catch (aO) {
                console.log(aO)
            }
        }
    }
    ;
    aI.prototype._getSettings = function() {
        var aX = this;
        if (!this.domain) {
            return null
        }
        function aP(a9, ba) {
            if (!a9 || !ba) {
                return false
            } else {
                return a9.substr(a9.length - ba.length) === ba
            }
        }
        function aR(a9) {
            var bd = [];
            for (var ba in aX.settings) {
                ba = ba.toLowerCase();
                var bb = ba.split("|")[0];
                if (!aP(bb, "/")) {
                    bb += "/"
                }
                var bc = a9.toLowerCase();
                if (!aP(bc, "/")) {
                    bc += "/"
                }
                if (bb.indexOf(bc) === 0) {
                    bd.push(ba)
                }
            }
            return bd
        }
        var aV = aR(this.domain)
          , a2 = aX._getRootDomain(aX.domain)
          , a8 = aX._getTLD(this.domain);
        var a6 = aX.domain.substr(0, aX.domain.indexOf(a2)) + a2 + ".*";
        aV = aV.concat(aR(a6));
        aV = aV.concat(aR(a2 + "." + a8));
        aV = aV.concat(aR(a2 + ".*"));
        if (aV.length === 1) {
            aX.activeDomain = aV[0].split("|")[0];
            return this.settings[aV[0]]
        } else {
            if (aV.length > 1) {
                aV.sort(function(a9, ba) {
                    return (ba.length - a9.length)
                });
                var aT = aX.domain + this.path
                  , a4 = a2 + "." + a8 + this.path
                  , a0 = [];
                for (var aS = 0; aS < aV.length; aS++) {
                    var aU = aV[aS];
                    if (aU.indexOf("|") !== -1) {
                        aU = aU.substr(0, aU.indexOf("|"))
                    }
                    if (aU.indexOf("*") !== -1) {
                        aU = aU.replace("*", a8)
                    }
                    if (aT.indexOf(aU) !== -1) {
                        a0.push(aV[aS])
                    }
                }
                if (a0.length === 0) {
                    return null
                } else {
                    if (a0.length === 1) {
                        aX.activeDomain = a0[0].split("|")[0];
                        return aX.settings[a0[0]]
                    } else {
                        var aN = aX.country.id
                          , a7 = null;
                        var aQ = []
                          , a5 = []
                          , aW = 0
                          , a3 = 0;
                        if (!aP(aT, "/")) {
                            aT += "/"
                        }
                        if (!aP(a4, "/")) {
                            a4 += "/"
                        }
                        for (var aS = 0; aS < a0.length; aS++) {
                            var aY = a0[aS];
                            var aZ = aY.split("|")[0];
                            if (aZ.indexOf("*") !== -1) {
                                aZ = aZ.replace("*", a8)
                            }
                            if (!aP(aZ, "/")) {
                                aZ += "/"
                            }
                            if (aT.indexOf(aZ) === 0 && aZ.length >= aW) {
                                aQ.push(aY);
                                if (aW === 0) {
                                    aW = aZ.length
                                }
                            } else {
                                if (a4.indexOf(aZ) !== -1 && aZ.length >= a3) {
                                    a5.push(aY);
                                    a3 = aZ.length
                                }
                            }
                        }
                        if (aQ.length === 0 && a5.length >= 0) {
                            if (a5.length === 1) {
                                a7 = aX.settings[a5[0]];
                                aX.activeDomain = a5[0].split("|")[0]
                            } else {
                                a0 = a5
                            }
                        } else {
                            if (aQ.length === 1) {
                                a7 = aX.settings[aQ[0]];
                                aX.activeDomain = aQ[0].split("|")[0]
                            } else {
                                if (aQ.length > 1) {
                                    a0 = aQ
                                }
                            }
                        }
                        if (!a7) {
                            for (var aS = 0; aS < a0.length; aS++) {
                                if (aX.settings[a0[aS]].countries.hasOwnProperty(aN)) {
                                    a7 = aX.settings[a0[aS]];
                                    aX.activeDomain = a0[aS].split("|")[0];
                                    break
                                }
                            }
                        }
                        if (!a7) {
                            var aO = 0;
                            for (var aS = 0; aS < a0.length; aS++) {
                                var a1 = aX.settings[a0[aS]];
                                if (a1.hasOwnProperty("defaultCountry")) {
                                    if (a1.defaultCountry != 0) {
                                        aO = a1.defaultCountry;
                                        break
                                    }
                                }
                            }
                            if (aO !== 0) {
                                for (var aS = 0; aS < a0.length; aS++) {
                                    var a1 = aX.settings[a0[aS]];
                                    if (a1.countries.hasOwnProperty(aO)) {
                                        a7 = a1;
                                        aX.activeDomain = a0[aS].split("|")[0]
                                    }
                                }
                            }
                        }
                        if (!a7) {
                            a7 = aX.settings[a0[0]];
                            aX.activeDomain = a0[0].split("|")[0]
                        }
                        return a7
                    }
                }
            }
        }
        return null
    }
    ;
    aI.prototype._getDefaultConsentCookieData = function(aN, aX, aU) {
        var aV = this.activeSettings
          , aO = {}
          , aY = {}
          , aT = {};
        if (typeof aN === "object" && aN !== null) {
            aO[this.activeCountryId] = aN
        } else {
            if (this.activecategorySet !== null) {
                var aS = {};
                for (var aQ in this.activecategorySet) {
                    var aP = this.activecategorySet[aQ];
                    var aR = (aP.cEss === 1 || this._is50PercentVendorsTrue(aP.vendors)) ? true : (aN === true);
                    if (this.regulationConsentTypeId === aC) {
                        aS[aQ] = (this.isGPCApply() && aP.dataSharing == 1) ? false : aR
                    } else {
                        aS[aQ] = (this.isGPCApply() && aP.dataSharing == 1) ? (aN === true) : aR
                    }
                }
                aO[this.activeCountryId] = aS
            } else {
                aO[this.activeCountryId] = (aN === true)
            }
        }
        if (typeof aX === "object" && aX !== null) {
            aY[this.activeCountryId] = aX
        } else {
            if (this.activecategorySet !== null) {
                var a0 = {};
                for (var aQ in this.activecategorySet) {
                    var aP = this.activecategorySet[aQ];
                    for (var aW in aP.vendors) {
                        var aZ = aP.vendors[aW].vEss === 1 ? true : (aX === true);
                        aZ = aP.cEss === 1 ? true : aZ;
                        if (this.regulationConsentTypeId === aC) {
                            a0[aW] = (this.isGPCApply() && aP.dataSharing == 1) ? false : aZ
                        } else {
                            a0[aW] = (this.isGPCApply() && aP.dataSharing == 1) ? (aX === true) : aZ
                        }
                    }
                }
                aY[this.activeCountryId] = a0
            } else {
                aY[this.activeCountryId] = (aX === true)
            }
        }
        if (aU) {
            aT[this.activeCountryId] = aU
        } else {
            if (aU === true) {
                aT[this.activeCountryId] = true
            } else {
                aT[this.activeCountryId] = false
            }
        }
        return {
            consent_date: new Date().toISOString(),
            categories: aO,
            vendors: aY,
            cookies: aT,
            gpc: this.isGPCApply()
        }
    }
    ;
    aI.prototype._getConsentCookieExpDate = function(aO) {
        var aN = aO ? new Date(aO) : new Date();
        var aP = (this.consentDuration > 0) ? this.consentDuration : 12;
        aN.setMonth(aN.getMonth() + aP);
        return aN
    }
    ;
    aI.prototype._getConsentCookieDomainPath = function() {
        var aO = "/";
        var aQ = this.activeSettings;
        var aN = aQ.hasOwnProperty("includeSubdomains") ? aQ.includeSubdomains : 0;
        if (aN === 2) {
            aO = this.activeDomain;
            if (!aO) {
                console.error("Attempted to set a cookie without a valid settings object");
                return
            }
            var aP = aO.indexOf("/");
            if (aP !== -1) {
                aO = aO.substring(aP)
            }
            aO = window.location.pathname.substr(0, aO.length)
        }
        return aO
    }
    ;
    aI.prototype._getConsentCookieDomain = function() {
        var aO = this.activeSettings;
        var aN = aO.hasOwnProperty("includeSubdomains") ? aO.includeSubdomains : 0;
        if (aN === 1) {
            return "." + this._getRootDomain(this.domain) + "." + this._getTLD(this.domain)
        }
        return null
    }
    ;
    aI.prototype._isConsentGiven = function() {
        var aN = this._getConsentCookie();
        return (null !== aN)
    }
    ;
    aI.prototype._deleteConsentCookie = function() {
        var aN = this._getConsentCookieDomain();
        var aP = this._getConsentCookieDomainPath();
        var aO = new Date(1970,1,1);
        this._removeLocalStorageItem(D + this.activeSettings.id);
        this._writeCookie(C, "", aO.toUTCString(), aP, aN)
    }
    ;
    aI.prototype.getConsentData = function() {
        var aO = this.activeSettings.hasOwnProperty("includeSubdomains") ? this.activeSettings.includeSubdomains : 0;
        var aN;
        if (aO == 1) {
            aN = this._getConsentCookie()
        }
        if (!aN) {
            aN = this._getConsentLocalStorage()
        }
        if (!aN) {
            aN = {
                name: null,
                value: null
            }
        }
        return aN
    }
    ;
    aI.prototype._getConsentLocalStorage = function() {
        var aP = D + this.activeSettings.id;
        var aN = this._readLocalStorage(aP);
        if (aN) {
            try {
                aN = JSON.parse(aN)
            } catch (aO) {}
            return {
                name: aP,
                value: aN
            }
        } else {
            return aN
        }
    }
    ;
    aI.prototype._getConsentCookie = function() {
        return this._getCookie(C)
    }
    ;
    aI.prototype._setConsentCookie = function(aW, aN, aX, aT, aO, aP) {
        if (typeof aO === "undefined" || aO === null) {
            aO = this.regulationConsentTypeId
        }
        if (aO === 0) {
            aO = aB
        }
        var aQ = this._getDefaultConsentCookieData(aN, aX, aT);
        var aS = this._getConsentCookieExpDate(aW);
        var aV = this._getConsentCookieDomainPath();
        var aR = this._getConsentCookieDomain();
        if (aW) {
            aQ.consent_date = aW.toISOString()
        }
        aQ.consent_type = aO;
        if (!aQ.hasOwnProperty("consent_date")) {
            aQ.consent_date = new Date()
        }
        var aU = this.activeSettings.hasOwnProperty("includeSubdomains") ? this.activeSettings.includeSubdomains : 0;
        if (this._writeLocalStorage(D + this.activeSettings.id, JSON.stringify(aQ))) {
            if (aU != 1) {
                delete (aQ.categories);
                delete (aQ.vendors);
                delete (aQ.cookies)
            }
        }
        if (this._getSuppressionCookie()) {
            this.dropSuppressionCookie(-1)
        }
        if (aP !== false) {
            if (!this._writeCookie(C, JSON.stringify(aQ), aS.toUTCString(), aV, aR)) {
                return false
            }
        }
        return aQ
    }
    ;
    aI.prototype._isAllVendorsRequired = function(aP) {
        var aO = true;
        for (var aN = 0; aN < aP.length; aN++) {
            if (aP[aN].Required == 0) {
                aO = false
            }
        }
        return aO
    }
    ;
    aI.prototype._is50PercentVendorsTrue = function(aR) {
        var aN = 0;
        var aP = 0;
        var aO = 50;
        for (var aQ in aR) {
            aP = aP + 1;
            if (aR[aQ].vEss === 1) {
                aN = aN + 1
            }
        }
        if (aN / aP * 100 > aO) {
            return true
        }
        return false
    }
    ;
    aI.prototype._updateConsentData = function(a3, aX) {
        this.gpcConflict = 0;
        var aS = this.getConsentData().value;
        var aP = (aS && aS.consent_date) ? new Date(aS.consent_date) : new Date();
        var aR = (aS && aS.consent_type) ? aS.consent_type : aB;
        var aZ = 50;
        var aU = this._getConsentCookieExpDate(aP);
        var aY = this._getConsentCookieDomainPath();
        var aT = this._getConsentCookieDomain();
        if (!aS) {
            aS = {}
        }
        if (!aS.hasOwnProperty(a3)) {
            aS[a3] = {}
        }
        aS[a3][this.activeCountryId] = aX;
        if (!aS.hasOwnProperty("consent_date")) {
            aS.consent_date = aP
        }
        if (!aS.hasOwnProperty("consent_type")) {
            aS.consent_type = aR
        }
        if (a3 == "vendors" && this.optOutDetails.categories) {
            var aO = JSON.parse(JSON.stringify(this.optOutDetails.categories));
            var aN = aS.categories[this.activeCountryId];
            for (var aW in aN) {
                var a0 = 0;
                var aQ = 0;
                if (aO[aW].required === 1 && !this.isGPCApply()) {
                    aN[aW] = true
                } else {
                    if (aO.hasOwnProperty(aW)) {
                        var a1 = aO[aW]["vendors"];
                        var a2 = this.activeSettings.vendorLinks;
                        if (this.consentDetailCategories && this.isGPCApply() && aO[aW]["dataSharing"] == 1) {
                            a1.forEach(function(a4) {
                                for (var a5 in a2) {
                                    if (a2[a5] == a4.CompanyIdentifier) {
                                        aX[a5] = aN[aW]
                                    }
                                }
                            })
                        } else {
                            a1.forEach(function(a4) {
                                for (var a5 in a2) {
                                    if (a2[a5] == a4.CompanyIdentifier) {
                                        a0 = a0 + 1;
                                        if (aX[a5] == true) {
                                            aQ = aQ + 1
                                        }
                                    }
                                }
                            });
                            aN[aW] = false;
                            if (aQ / a0 * 100 > aZ) {
                                aN[aW] = true
                            }
                        }
                    }
                }
            }
            aS.categories[this.activeCountryId] = aN
        }
        aS.gpc = this.isGPCApply();
        var aV = this.activeSettings.hasOwnProperty("includeSubdomains") ? this.activeSettings.includeSubdomains : 0;
        if (this._writeLocalStorage(D + this.activeSettings.id, JSON.stringify(aS))) {
            if (aV != 1) {
                delete (aS.categories);
                delete (aS.vendors);
                delete (aS.cookies)
            }
        }
        if (this._getSuppressionCookie()) {
            this.dropSuppressionCookie(-1)
        }
        this._writeCookie(C, JSON.stringify(aS), aU.toUTCString(), aY, aT)
    }
    ;
    aI.prototype._updateConsentedCategories = function(aN) {
        this._updateConsentData("categories", aN)
    }
    ;
    aI.prototype._updateConsentedCookies = function(aN) {
        this._updateConsentData("cookies", aN)
    }
    ;
    aI.prototype._updateConsentedVendors = function(aR) {
        var aP = this.getConsentData().value;
        if (!aP.hasOwnProperty("vendors")) {
            aP.vendors = {}
        }
        var aN = aP.vendors[this.activeCountryId];
        if (!aR) {
            var aO = this.getActiveVendors();
            aR = this._getNewVendors(aO, aN)
        }
        var aS = {};
        if (Array.isArray(aN)) {
            for (var aQ = 0; aQ < aN.length; aQ++) {
                aS[aN[aQ]] = true
            }
        } else {
            if (typeof aN === "object") {
                for (var aT in aN) {
                    aS[aT] = aN[aT]
                }
            }
        }
        if (Array.isArray(aR)) {
            for (var aQ = 0; aQ < aR.length; aQ++) {
                aS[aR[aQ]] = true
            }
        } else {
            if (typeof aR === "object") {
                for (var aT in aR) {
                    aS[aT] = aR[aT]
                }
            }
        }
        this._updateConsentData("vendors", aS)
    }
    ;
    aI.prototype._getSuppressionCookie = function() {
        return this._getCookie(aJ)
    }
    ;
    aI.prototype._createListFromItem = function(aO) {
        var aQ = [];
        try {
            for (var aP in aO) {
                if (aO[aP] === true) {
                    aQ.push(aP.toLowerCase())
                }
            }
        } catch (aN) {}
        return aQ.join()
    }
    ;
    aI.prototype._runAdobeOptIn = function(aO, aR) {
        if (window.adobe && window.adobe.optIn) {
            if (aO && aO.hasOwnProperty("all")) {
                adobe.optIn.approveAll()
            } else {
                var aN = []
                  , aP = [];
                for (var aQ in aR) {
                    switch (aQ) {
                    case b:
                        if (aR[aQ] === true) {
                            aN.push(adobe.OptInCategories.ADCLOUD)
                        } else {
                            aP.push(adobe.OptInCategories.ADCLOUD)
                        }
                        break;
                    case c:
                        if (aR[aQ] === true) {
                            aN.push(adobe.OptInCategories.ANALYTICS)
                        } else {
                            aP.push(adobe.OptInCategories.ANALYTICS)
                        }
                        break;
                    case d:
                        if (aR[aQ] === true) {
                            aN.push(adobe.OptInCategories.AAM)
                        } else {
                            aP.push(adobe.OptInCategories.AAM)
                        }
                        break;
                    case e:
                        if (aR[aQ] === true) {
                            aN.push(adobe.OptInCategories.CAMPAIGN)
                        } else {
                            aP.push(adobe.OptInCategories.CAMPAIGN)
                        }
                        break;
                    case f:
                        if (aR[aQ] === true) {
                            aN.push(adobe.OptInCategories.ECID)
                        } else {
                            aP.push(adobe.OptInCategories.ECID)
                        }
                        break;
                    case g:
                        if (aR[aQ] === true) {
                            aN.push(adobe.OptInCategories.LIVEFYRE)
                        } else {
                            aP.push(adobe.OptInCategories.LIVEFYRE)
                        }
                        break;
                    case h:
                        if (aR[aQ] === true) {
                            aN.push(adobe.OptInCategories.TARGET)
                        } else {
                            aP.push(adobe.OptInCategories.TARGET)
                        }
                        break;
                    case i:
                        if (aR[aQ] === true) {
                            aN.push(adobe.OptInCategories.VIDEO_ANALYTICS)
                        } else {
                            aP.push(adobe.OptInCategories.VIDEO_ANALYTICS)
                        }
                        break
                    }
                }
                if (aN.length > 0) {
                    adobe.optIn.approve(aN)
                }
                if (aP.length > 0) {
                    adobe.optIn.deny(aP)
                }
            }
        }
    }
    ;
    aI.prototype._triggerTagManagerEvent = function(aN, a4, aP) {
        if (this.tagManagerEventFired) {
            return
        }
        var a3 = (a4) ? this._createListFromItem(a4) : "";
        var aO = (aN) ? this._createListFromItem(aN) : "";
        try {
            var aQ = window.dataLayer || [];
            aQ.push({
                event: aK,
                consentCategories: aO,
                consentVendors: a3
            })
            aQ.push({event: 'evidonAdvancedGoogleConsent'})
        } catch (aR) {}
        if (typeof window.evidon.enableGoogleConsentSupport === "undefined" || window.evidon.enableGoogleConsentSupport) {
            try {
                var aY = ["google-adsense", "doubleclick", "doubleclick-bid-manager-formerly-invite-media", "admeld", "google-adwords", "google-display-network", "admob-google", "adometry", "google-ad-services", "google-mobile-ads", "googleima"];
                var aZ = ["google-analytics"];
                var aX = [];
                var aW = [];
                var aU = "denied"
                  , aT = "denied"
                  , aV = "denied"
                  , aS = "denied";
                if (a3 == "all") {
                    aU = "granted";
                    aT = "granted";
                    aV = "granted";
                    aS = "granted"
                } else {
                    if (a3) {
                        var a2 = a3.split(",");
                        for (var a1 = 0; a1 < aZ.length; a1++) {
                            if (a2.indexOf(aZ[a1]) !== -1) {
                                aU = "granted"
                            }
                        }
                        for (var a1 = 0; a1 < aY.length; a1++) {
                            if (a2.indexOf(aY[a1]) !== -1) {
                                aT = "granted"
                            }
                        }
                        for (var a1 = 0; a1 < aY.length; a1++) {
                            if (a2.indexOf(aY[a1]) !== -1) {
                                aV = "granted"
                            }
                        }
                        for (var a1 = 0; a1 < aY.length; a1++) {
                            if (a2.indexOf(aY[a1]) !== -1) {
                                aS = "granted"
                            }
                        }
                    }
                }
                if (this.companyId != 1782) {
                    window.dataLayer = window.dataLayer || [];
                    function a0() {
                        dataLayer.push(arguments)
                    }
                    a0("consent", "update", {
                        ad_storage: aT,
                        analytics_storage: aU,
                        ad_user_data: aV,
                        ad_personalization: aS
                    });
                    a0("set", "ads_data_redaction", aT == "granted" ? false : true)
                }
            } catch (aR) {}
        }
        try {
            if (window.utag) {
                window.utag.link({
                    event_name: aK,
                    consent_categories: aO,
                    consent_vendors: a3
                })
            }
        } catch (aR) {}
        try {
            if (window.tC) {
                tC.event[aK](this, {
                    consent_categories: aO,
                    consent_vendors: a3
                })
            }
        } catch (aR) {}
        this.tagManagerEventFired = true
    }
    ;
    aI.prototype._getCategoriesReturnObject = function(aN) {
        var aO = {};
        if (typeof aN === "undefined") {
            aN = (this._getConsentedCategories() || {})
        }
        if (!aN) {
            aN = {}
        }
        if (aN === true || this.consentDetailCategories === false) {
            aO = {
                all: true
            }
        } else {
            aO = aN
        }
        return aO
    }
    ;
    aI.prototype._getVendorsReturnObject = function(aP) {
        if (typeof aP === "undefined") {
            aP = (this._getConsentedVendors() || {})
        }
        if (aP === true) {
            return {
                all: true
            }
        } else {
            var aQ = {};
            if (Array.isArray(aP)) {
                for (var aN = 0; aN < aP.length; aN++) {
                    var aO = aP[aN];
                    if (this.vendorList.hasOwnProperty(aO) === false) {
                        console.error("Vendor " + aO + " not found in vendorList");
                        continue
                    }
                    aQ[this.vendorList[aO]] = true
                }
            } else {
                if (typeof aP === "object") {
                    if (Object.isEmpty(aP)) {
                        aQ = {
                            all: true
                        }
                    } else {
                        if (aP.hasOwnProperty("all") && aP.all) {
                            aQ = aP
                        } else {
                            for (var aO in aP) {
                                if (this.vendorList.hasOwnProperty(aO) === false) {
                                    console.error("Vendor " + aO + " not found in vendorList");
                                    continue
                                }
                                aQ[this.vendorList[aO]] = aP[aO]
                            }
                        }
                    }
                } else {
                    console.error("vendors object not recognized", aP)
                }
            }
            return aQ
        }
    }
    ;
    aI.prototype._getCookiesReturnObject = function(aN) {
        var aO = {};
        if (typeof aN === "undefined") {
            aN = (this._getConsentedCookies() || {})
        }
        if (aN === true) {
            aO = {
                all: true
            }
        } else {
            if (aN && typeof aN === "object") {
                if (Object.isEmpty(aN)) {
                    aN.all = true
                }
                aO = aN
            }
        }
        return aO
    }
    ;
    aI.prototype._runConsentCallback = function(aN, aS, aO) {
        if (this.regulationConsentTypeId == aC && (aN !== undefined || aS !== undefined)) {
            var aP = 0;
            if (typeof aN === "object" && aN !== null) {
                for (var aR in aN) {
                    if (aN[aR] === true) {
                        aP = 1;
                        break
                    }
                }
            }
            if (typeof aS === "object" && aS !== null) {
                for (var aQ in aS) {
                    if (aS[aQ] === true) {
                        aP = 1;
                        break
                    }
                }
            }
            this.consentIsGiven = (aP !== 0)
        } else {
            this.consentIsGiven = true
        }
        if (this.consentCallbackExecuted && !this.shouldSupportAmp) {
            return
        }
        aN = this._getCategoriesReturnObject(aN);
        if (Object.isEmpty(aN)) {
            aN.all = true
        }
        aS = this._getVendorsReturnObject(aS);
        aO = this._getCookiesReturnObject(aO);
        if (window.evidon && window.evidon.priorConsentCallback) {
            window.evidon.priorConsentCallback(aN, aS, aO)
        }
        if (this.iabEnabled && this.shouldCallCMP) {
            if (this.iabVersion === 1 && window.__cmp) {
                __cmp("consentGiven");
                __cmp("saveConsent")
            } else {
                if (this.iabVersion === 2 && window.__tcfapi) {
                    __tcfapi("consentGiven");
                    __tcfapi("saveConsent")
                }
            }
        }
        this.consentCallbackExecuted = true;
        this._triggerTagManagerEvent(aN, aS, aO);
        this._runAdobeOptIn(aN, aS)
    }
    ;
    aI.prototype._runCloseCallback = function() {
        this.consentIsGiven = false;
        if (this.closeCallbackExecuted && !this.shouldSupportAmp) {
            return
        }
        if (window.evidon && window.evidon.closeCallback) {
            window.evidon.closeCallback()
        }
        if (this.iabEnabled && this.iabVersion === 1 && window.evidon.cmp) {
            window.evidon.cmp.consentClosed()
        }
        if (this.iabEnabled && this.iabVersion === 2 && window.evidon.cmpv2) {
            window.evidon.cmpv2.consentClosed()
        }
        this._showConsentAccess();
        this.closeCallbackExecuted = true
    }
    ;
    aI.prototype._runDeclineCallback = function() {
        if (this.declineCallbackExecuted && !this.shouldSupportAmp) {
            return
        }
        this.consentIsGiven = false;
        if (this.regulationConsentTypeId === aC) {
            this.consentIsGiven = true;
            this.dropSuppressionCookie(365);
            this._showConsentAccess()
        }
        if (this.regulationConsentTypeId === aB) {
            this._setConsentCookie(null, false, false, false, this.regulationConsentTypeId, false);
            try {
                gtag("consent", "update", {
                    ad_storage: "denied",
                    analytics_storage: "denied",
                    ad_user_data: "denied",
                    ad_personalization: "denied"
                });
                gtag("set", "ads_data_redaction", true)
            } catch (aN) {}
        }
        if (window.evidon && window.evidon.consentDeclinedCallback) {
            window.evidon.consentDeclinedCallback()
        }
        if (this.iabEnabled && this.iabVersion === 1 && window.evidon.cmp) {
            window.evidon.cmp.consentDeclined()
        }
        if (this.iabEnabled && this.iabVersion === 2 && window.evidon.cmpv2) {
            window.evidon.cmpv2.consentDeclined()
        }
        this.declineCallbackExecuted = true
    }
    ;
    aI.prototype._getLegacyNoticeType = function() {
        if (this.consentTypeId == H) {
            if (this.privacyAccessTypeId == a.LINK) {
                return 0
            } else {
                if (this.privacyAccessTypeId == a.BUTTON) {
                    return s
                }
            }
        } else {
            if (this.consentTypeId == F) {
                if (this.privacyAccessTypeId == a.LINK) {
                    return S
                } else {
                    if (this.privacyAccessTypeId == a.BUTTON) {
                        return R
                    }
                }
            } else {
                if (this.consentTypeId == G) {
                    return O
                }
            }
        }
        return 0
    }
    ;
    aI.prototype._closeL3 = function() {
        var aN = document.getElementById(ar);
        var aO = document.getElementById(aa);
        if (aN) {
            aN.style.display = "none";
            aN.style.opacity = "0";
            setTimeout(function() {
                try {
                    aN.parentElement.removeChild(aN)
                } catch (aP) {
                    console.log(aP)
                }
            }, 200)
        }
        if (aO) {
            aO.style.display = "none";
            aO.style.opacity = 0;
            setTimeout(function() {
                try {
                    aO.parentElement.removeChild(aO)
                } catch (aP) {
                    console.log(aP)
                }
            }, 200)
        }
    }
    ;
    aI.prototype._navigationConsentGiven = function() {
        if (!this.navigationConsentEnabled) {
            return false
        }
        var aO = document.referrer;
        var aN = this.activeDomain;
        if (aN.substr(aN.length - 1) === "/") {
            aN = aN.substr(0, aN.length - 1)
        }
        if (aO && aO != document.URL && aO.indexOf(aN) > -1) {
            this.dropPixel(ao);
            return true
        } else {
            return false
        }
    }
    ;
    aI.prototype._setTranslationValues = function(aQ, aR) {
        for (var aP in aQ) {
            var aN = aQ[aP];
            if (aN && typeof aN === "object") {
                var aO = aN.id;
                aQ[aP] = aR[aO]
            }
        }
        return aQ
    }
    ;
    aI.prototype._getTranslationId = function() {
        var aQ = this.activeSettings;
        if (!aQ) {
            return null
        }
        if (aQ.translations.hasOwnProperty(this.languageRoot)) {
            var aR = aQ.translations[this.languageRoot];
            var aO = 0;
            if (aR.hasOwnProperty(this.languageCode)) {
                aO = aR[this.languageCode]
            } else {
                if (aR.hasOwnProperty(this.languageRoot)) {
                    aO = aR[this.languageRoot]
                } else {
                    if (this.languageRoot == "en" && aR.hasOwnProperty("en-us")) {
                        aO = aR["en-us"]
                    } else {
                        function aN(aT) {
                            for (var aS in aT) {
                                return aS
                            }
                        }
                        var aP = aN(aR);
                        if (aP) {
                            aO = aR[aP]
                        }
                    }
                }
            }
            return aO
        } else {
            return null
        }
    }
    ;
    aI.prototype._setActiveTranslations = function() {
        if (!this.languageRoot || !this.translations) {
            return
        }
        if (!this.activeSettings) {
            if (!this.translations.hasOwnProperty(this.languageRoot)) {
                this.activateTranslations(this.languageCode || this.languageRoot)
            }
        } else {
            var aT = this.activeSettings;
            if (window.evidon && window.evidon.usegranulartranslations !== false) {
                window.evidon.usegranulartranslations = true
            }
            var aP = (typeof window.evidon.usegranulartranslations === "undefined") ? false : window.evidon.usegranulartranslations;
            if (aP) {
                this.loadTranslations()
            } else {
                if (aT.translations.hasOwnProperty(this.languageRoot)) {
                    if (this.translations.hasOwnProperty(this.languageRoot)) {
                        var aQ = this._getTranslationId();
                        this.activeTranslationId = aQ;
                        if (this.activeTranslationId) {
                            var aU = this.translations[this.languageRoot];
                            if (aU.hasOwnProperty("items")) {
                                this.activeTranslations = this._setTranslationValues(aU[aQ], aU.items);
                                if (aU.hasOwnProperty("categories")) {
                                    var aN = null;
                                    if (aU.categories.hasOwnProperty(this.categorySetId)) {
                                        aN = aU.categories[this.categorySetId]
                                    } else {
                                        aN = aU.categories["0"]
                                    }
                                    var aO = this.activeTranslations.languageCode;
                                    if (aN.hasOwnProperty(aO)) {
                                        this.activeTranslations.categories = aN[aO]
                                    } else {
                                        var aS = Object.keys(aN);
                                        var aR = aS[0];
                                        this.activeTranslations.categories = aN[aR]
                                    }
                                }
                            } else {
                                this.activeTranslations = aU[aQ]
                            }
                        }
                    } else {
                        this.activateTranslations(this.languageCode || this.languageRoot)
                    }
                } else {
                    this.activateTranslations(aT.defaultTranslation.code)
                }
            }
        }
    }
    ;
    aI.prototype._shouldShowConsentUI = function() {
        var aN = this._isConsentGiven();
        var aO = this._getSuppressionCookie();
        if (this.consentTypeId === H) {
            return false
        } else {
            if (aO) {
                return false
            } else {
                if (!this.consentRequired && !aN) {
                    return true
                } else {
                    return !aN
                }
            }
        }
    }
    ;
    aI.prototype._showConsentUI = function() {
        var aN = this._getSuppressionCookie();
        if (this.consentTypeId === H || aN) {
            return
        } else {
            if (this.consentTypeId === F) {
                if (P.indexOf(this.companyId) > -1) {
                    this.appendScript(aH + Q.BANNER_SCRIPT)
                } else {
                    this.appendScript(aH + k)
                }
                if (this.activeTranslations && window.evidon.banner) {
                    if (!document.getElementById("_evidon_banner")) {
                        window.evidon.banner.createNotice()
                    } else {
                        window.evidon.banner.setTextValues(this.activeTranslations)
                    }
                }
            } else {
                if (this.consentTypeId === G) {
                    if (P.indexOf(this.companyId) > -1) {
                        this.appendScript(aH + Q.BARRIER_SCRIPT)
                    } else {
                        this.appendScript(aH + l)
                    }
                    if (this.activeTranslations && window.evidon.barrier) {
                        if (!document.getElementById("_evidon-barrier-wrapper")) {
                            window.evidon.barrier.createBarrierNotice()
                        } else {
                            window.evidon.barrier.setTextValues(this.activeTranslations)
                        }
                    }
                }
            }
        }
    }
    ;
    aI.prototype._showConsentAccess = function() {
        var aO = ""
          , aN = this;
        if (this.privacyAccessTypeId === a.LINK) {
            aO = this.getLinkStyle();
            if (aO && window.evidon.link) {
                window.evidon.link.createLink(aO);
                if (this.activeTranslations) {
                    window.evidon.link.setLinkText(this.activeTranslations)
                }
            }
        } else {
            setTimeout(function() {
                var aP = ((typeof window.evidon.banner !== "undefined" && window.evidon.banner.isVisible()) || (typeof window.evidon.barrier !== "undefined" && window.evidon.barrier.isVisible()));
                if (!aP) {
                    aO = aN.getButtonStyle();
                    if (aO && window.evidon.button) {
                        window.evidon.button.createButton(aO);
                        if (aN.activeTranslations) {
                            window.evidon.button.setButtonText(aN.activeTranslations)
                        }
                        aN.checkConsentedVendors();
                        window.evidon.button.show()
                    }
                } else {
                    window.evidon.button.hide()
                }
            }, 500)
        }
    }
    ;
    aI.prototype._runNoConsentFlow = function() {
        if (this.consentRequired) {
            return
        }
        this._runConsentCallback();
        if (!this._isConsentGiven()) {
            this._showConsentUI()
        }
        this._showConsentAccess()
    }
    ;
    aI.prototype._runOptInFlow = function() {
        var aO = this._getSuppressionCookie();
        if (!aO) {
            if (this._isConsentGiven()) {
                this._isGPCConflict();
                this._runConsentCallback()
            } else {
                var aN = this._getConsentLocalStorage();
                if (aN) {
                    this._removeLocalStorageItem(D + this.activeSettings.id)
                }
                this._setConsentCookie(null, false, false, false, this.regulationConsentTypeId, false);
                if (this.consentTypeId === F) {
                    this._hookConsentEvents()
                }
                this._showConsentUI()
            }
        }
        this._showConsentAccess()
    }
    ;
    aI.prototype._isGPCConflict = function() {
        var aO = this.getConsentData();
        if (aO.name !== null) {
            var aN = aO.value.hasOwnProperty("gpc") ? aO.value.gpc : null;
            if (aN === 0 && this.isGPCApply() === 1) {
                this.gpcConflict = 1;
                this.showPreferencesDialog();
                return
            }
        }
    }
    ;
    aI.prototype._runOptOutFlow = function() {
        var aO = this._getSuppressionCookie();
        this._isGPCConflict();
        if (this._isConsentGiven()) {
            if (this.consentDetailCategories) {
                var aN = this._getConsentedCategories();
                if (aN && !aN.hasOwnProperty("all")) {
                    this._runConsentCallback(aN, null, null)
                }
            } else {
                if (this.consentDetailVendors) {
                    var aP = this._getConsentedVendors();
                    if (aP) {
                        this._runConsentCallback(null, aP, null)
                    }
                }
            }
        } else {
            if (!aO) {
                this._setConsentCookie(null, true, true, true, this.regulationConsentTypeId, false)
            }
            this._runConsentCallback();
            if (!aO) {
                this._showConsentUI()
            }
        }
        this._showConsentAccess()
    }
    ;
    aI.prototype._getActiveCountryObject = function() {
        if (this.country && this.activeSettings) {
            var aN = this.country.id;
            if (this.activeStateId && this.activeSettings.hasOwnProperty("states") && this.activeSettings.states.hasOwnProperty(this.activeStateId)) {
                return this.activeSettings.states[this.activeStateId]
            } else {
                if (this.activeSettings.countries.hasOwnProperty(aN)) {
                    this.activeCountryId = aN;
                    return this.activeSettings.countries[aN]
                } else {
                    this.activeCountryId = this.activeSettings.defaultCountry;
                    return this.activeSettings.countries[this.activeSettings.defaultCountry]
                }
            }
        }
        return null
    }
    ;
    aI.prototype.dropPixel = function(aN, aQ) {
        var aP = window.evidon.id;
        var aS = this.activeSettings.id;
        var aO = this.activeCountryId;
        var aU = av;
        if (aU.substr(aU.length - 1) !== "/") {
            aU += "/"
        }
        aU += aP + "/" + aS + "/" + aO + "/" + aN + "/" + this.consentTypeId + "/" + this.privacyAccessTypeId;
        if (this.activeTranslationId != 0) {
            aU += "/" + this.activeTranslationId
        }
        if (this.pixelsDropped.indexOf(aU) === -1 || aQ) {
            this.pixelsDropped.push(aU);
            var aT = [];
            aT.push("consent=" + ((this.consentIsGiven) ? "1" : "0"));
            if (this.customerUserId) {
                aT.push("u=" + encodeURI(this.customerUserId))
            }
            if (typeof this.regulationId !== "undefined" && this.regulationId !== null) {
                aT.push("regulationid=" + this.regulationId)
            }
            if (typeof this.regulationConsentTypeId !== "undefined" && this.regulationConsentTypeId !== null) {
                aT.push("regulationconsenttypeid=" + this.regulationConsentTypeId)
            }
            if (typeof this.activeStateId !== "undefined" && this.activeStateId !== null) {
                aT.push("stid=" + this.activeStateId)
            }
            var aV = this.getParentOrigin();
            if (aV) {
                aT.push("d=" + aV)
            }
            aU += "?" + aT.join("&");
            aU = aU.substring(0, 2048);
            var aR = new Image(0,0);
            aR.style.display = "none";
            aR.src = aU
        }
    }
    ;
    aI.prototype.consentGiven = function(aO, aN, aS, aR, aP) {
        var aQ = false;
        if (typeof aP === "undefined" || aP === null) {
            aP = aB
        }
        if (!this._isConsentGiven() && !this.shouldSupportAmp) {
            aQ = this._setConsentCookie(null, aN, aS, aR, aP)
        } else {
            aQ = this._isConsentGiven()
        }
        this._runConsentCallback(aN, aS, aR);
        this._detachEventTracking();
        if (!this.shouldSupportAmp) {
            if (window.evidon.banner) {
                window.evidon.banner.destroyNotice()
            }
            if (window.evidon.barrier) {
                window.evidon.barrier.destroyNotice()
            }
        }
        if (aQ) {
            if (typeof aO === "undefined" || aO === false) {
                this.dropPixel(j)
            }
            this.navigationStack = [];
            this.showNotice()
        } else {
            if (this.shouldSupportAmp) {} else {
                console.error("Unable to set ConsentCookie")
            }
        }
    }
    ;
    aI.prototype.consentChanged = function(aN, aP, aO) {
        if (window.evidon.consentChangedCallback !== undefined && this.consentChangedCallbackExecuted) {
            window.evidon.consentChangedCallback(aN, aP, aO)
        }
        this.consentChangedCallbackExecuted = false;
        this.tagManagerEventFired = false;
        aP = this._getVendorsReturnObject(aP);
        aO = this._getCookiesReturnObject(aO);
        this._triggerTagManagerEvent(aN, aP, aO);
        this._runAdobeOptIn(aN, aP)
    }
    ;
    aI.prototype.RejectGiven = function() {
        this.consentGiven(true, false, false, false, aC);
        var aN = this._getConsentedCategories();
        var aQ = this._getConsentedVendors();
        var aO = this._getConsentedCookies();
        if (window.evidon.consentRejectCallback !== undefined && !this.consentRejectCallbackExecuted) {
            window.evidon.consentRejectCallback(aN, aQ, aO)
        }
        this.consentRejectCallbackExecuted = true;
        this.tagManagerEventFired = false;
        var aR = this._getVendorsReturnObject(aQ);
        var aP = this._getCookiesReturnObject(aO);
        this._triggerTagManagerEvent(aN, aR, aP);
        this._runAdobeOptIn(aN, aR)
    }
    ;
    aI.prototype.closeGiven = function() {
        this._runCloseCallback();
        this._detachEventTracking();
        if (!this.shouldSupportAmp) {
            if (window.evidon.banner) {
                window.evidon.banner.destroyNotice()
            }
            if (window.evidon.barrier) {
                window.evidon.barrier.destroyNotice()
            }
        }
    }
    ;
    aI.prototype.declineGiven = function() {
        this._runDeclineCallback();
        this._detachEventTracking();
        if (!this.shouldSupportAmp) {
            if (window.evidon.banner) {
                window.evidon.banner.destroyNotice()
            }
            if (window.evidon.barrier) {
                window.evidon.barrier.destroyNotice()
            }
        }
        this._showConsentAccess()
    }
    ;
    aI.prototype.getConsentUrl = function() {
        var aN = window.evidon.id;
        var aQ = this.activeSettings.id;
        var aO = this.activeCountryId;
        var aP = this.languageCode;
        return ab + aN + "/" + aQ + "/" + aO + "?lang=" + aP
    }
    ;
    aI.prototype.getDataRequestUrl = function(aQ) {
        var aN = window.evidon.id;
        var aR = this.activeSettings.id;
        var aO = this.activeCountryId;
        var aT = this.activeStateId ? this.activeStateId : 0;
        var aS = this.regulationRightsId;
        var aP = aQ ? "embed=1" : "";
        return K + aN + "/" + aR + "/" + aO + "/" + aS + "/" + aT + "?" + aP
    }
    ;
    aI.prototype.getDoNotSellRequestUrl = function(aQ) {
        var aN = window.evidon.id;
        var aR = this.activeSettings.id;
        var aO = this.activeCountryId;
        var aT = this.activeStateId ? this.activeStateId : 0;
        var aS = this.regulationId;
        var aP = aQ ? "embed=1" : "";
        return K + aN + "/" + aR + "/" + aO + "/" + aS + "/" + aT + "?doNotSell=1&" + aP
    }
    ;
    aI.prototype.getPrivacyPolicyLink = function() {
        if (!this.activeCountryId) {
            return "#"
        }
        var aO = this.activeSettings;
        var aN = this._getActiveCountryObject();
        if (aN && aO.privacyLinks && aO.privacyLinks.hasOwnProperty(aN.privacyLinkId)) {
            return this._fixurl(this.activeSettings.privacyLinks[aN.privacyLinkId])
        }
        return "#"
    }
    ;
    aI.prototype.getCookiePolicyLink = function() {
        if (!this.activeCountryId) {
            return "#"
        }
        var aO = this.activeSettings;
        var aN = this._getActiveCountryObject();
        if (aN && aO.cookieLinks && aO.cookieLinks.hasOwnProperty(aN.cookieLinkId)) {
            return this._fixurl(this.activeSettings.cookieLinks[aN.cookieLinkId])
        }
        return "#"
    }
    ;
    aI.prototype.showPreferencesDialog = function(aO, aP) {
        var aN = this;
        if (!window.evidon.preferencesDialog) {
            this.appendScript(aH + ax, function() {
                aN.showPreferencesDialog(aO, aP)
            });
            window.evidon.events.subscribe("l2closed", function() {
                aN._showConsentAccess()
            }, 1)
        } else {
            if (window.evidon.preferencesDialog.isDisplayed && window.evidon.preferencesDialog.isDisplayed()) {
                return
            }
            if (aO === undefined) {
                window.evidon.preferencesDialog.TAB_ID = aO;
                window.evidon.preferencesDialog.TAB_SECONDARY_ID = aP;
                if (this.isUSOptOutRegulation() && !this._isConsentGiven() && this.dnsRightsType !== 0) {
                    if (this.dnsEnabled) {
                        aO = this.PREFDIAG_TABS.DONOTSELL
                    }
                }
                if (this.iabEnabled && this.iabVersion === 2 && window.evidon.cmpv2) {
                    window.evidon.cmpv2.consentUIShown()
                }
            }
            if (aO) {
                window.evidon.preferencesDialog.TAB_ID = aO
            }
            if (aP) {
                window.evidon.preferencesDialog.TAB_SECONDARY_ID = aP
            }
            window.evidon.preferencesDialog.init();
            this.dropPixel(U);
            if (typeof window.evidon.banner !== "undefined" && window.evidon.banner) {
                window.evidon.banner.hideForOptions()
            }
            if (typeof window.evidon.barrier !== "undefined" && window.evidon.barrier) {
                window.evidon.barrier.hideForOptions()
            }
        }
    }
    ;
    aI.prototype.showOptionPanel = function(aO) {
        var aN = this;
        if (!window.evidon.gdprL2) {
            if (P.indexOf(this.companyId) > -1) {
                this.appendScript(aH + Q.L2_SCRIPT, function() {
                    aN.showOptionPanel(aO)
                })
            } else {
                this.appendScript(aH + V, function() {
                    aN.showOptionPanel(aO)
                })
            }
            this.dropPixel(U)
        } else {
            window.evidon.gdprL2.showOverlay(aO)
        }
    }
    ;
    aI.prototype.showOptions = function(aN, aO, aP) {
        if (this.L2Enabled) {
            if (this.getPreferencesDialogV2Enabled()) {
                this.showPreferencesDialog(aO, aP)
            } else {
                this.showOptionPanel(aN)
            }
        } else {
            this.showConsentTool(aN)
        }
    }
    ;
    aI.prototype.showConsentTool = function(aS) {
        var aP = (this.activeSettings.consentDisplayType === undefined) ? 1 : (this.activeSettings.consentDisplayType || 1);
        var aT = (aP == X || (aP == Y && window.location.protocol.indexOf("https") === -1));
        if (aT) {
            var aN = document.createElement("div");
            aN.style.cssText = "background-color: #000000; opacity:.7; position:fixed;top:0;left:0;bottom:0;right:0; z-index:2147483640;";
            aN.id = ar;
            document.body.appendChild(aN);
            var aQ = document.createElement("div");
            aQ.id = aa;
            if (this.isMobile()) {
                aQ.style.cssText = "position:absolute; top:0;left:0; bottom:0; right:0;;z-index:2147483647; padding: 28px 0 0 0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-y:scroll;"
            } else {
                aQ.style.cssText = "position:fixed; top: 10%;left:20%; width:60%;height:80%;z-index:2147483647; padding: 28px 0 0 0;"
            }
            var aO = document.createElement("button");
            aO.style.cssText = "position:absolute; top:4px;right:8px;color:white; background:transparent;font-size:12px;border:0; psdding:4px;cursor:pointer;padding:0;";
            aO.innerHTML = this.activeTranslations.gdprl2Close + "&nbsp; &#x2716;";
            aO.onclick = this._closeL3;
            aQ.appendChild(aO);
            var aR = document.createElement("iframe");
            aR.id = "_evidon-consent-frame";
            aR.scrolling = "yes";
            aR.seamless = "seamless";
            aR.frameBorder = "0";
            aR.src = this.getConsentUrl();
            aR.style.cssText = "width:100%; height:100%;";
            aR.onload = function() {
                document.getElementById(aa).style.position = "fixed"
            }
            ;
            aQ.appendChild(aR);
            document.body.appendChild(aQ)
        } else {
            window.open(this.getConsentUrl(), "L3")
        }
        this.dropPixel(Z)
    }
    ;
    aI.prototype.isMobile = function() {
        var aN = navigator.userAgent;
        return (/ip(hone|od)|(android).+mobile|opera m(ob|in)i/i).test(aN) || (/Android/).test(aN) || (/iPhone/).test(aN) || (/iPad/).test(aN)
    }
    ;
    aI.prototype.showNotice = function() {
        if (!this.settings) {
            if (window.evidon.settings !== undefined && window.evidon.settings) {
                this.settings = window.evidon.settings
            } else {
                return
            }
        }
        if (!this.country) {
            if (window.evidon.location) {
                this.country = window.evidon.location
            }
        }
        if (!this.country) {
            return
        }
        this.activeSettings = this._getSettings();
        if (!this.activeSettings) {
            return
        }
        this.activeCountryId = this.country.id;
        this.activeStateId = (this.country.hasOwnProperty("stateId")) ? this.country.stateId : null;
        var aR = this._getActiveCountryObject();
        var aV = this.activeSettings.hasOwnProperty("includeSubdomains") ? this.activeSettings.includeSubdomains : 0;
        if (aV == 1) {
            var aS = this._getConsentCookie();
            if (aS) {
                this._removeLocalStorageItem(D + this.activeSettings.id);
                this._writeLocalStorage(D + this.activeSettings.id, JSON.stringify(aS.value))
            }
        }
        if (!aR) {
            console.log("No consent settings found for the country: " + this.activeCountryId);
            return
        }
        if (!this._isDomReady()) {
            return
        }
        if (!this.themes) {
            this.themes = (window.evidon.themes || null)
        }
        if (!this.themes) {
            return
        }
        if (!this.vendorList) {
            if (this.activeSettings.vendorLinks) {
                this.vendorList = this.activeSettings.vendorLinks
            } else {
                this.getVendorList();
                return
            }
        }
        if (!this.activecategorySet) {
            if (this.activeSettings.vendorCategory && window.evidon.activeCategory) {
                var aO = {};
                var a1 = window.Prototype;
                var aN = window.evidon.activeCategory;
                this.activecategorySet = this.activeSettings.vendorCategory[aR.vendorCategory] !== undefined ? this.activeSettings.vendorCategory[aR.vendorCategory] : null;
                if (this.activecategorySet !== null) {
                    for (var aW in aN) {
                        var aX = aN[aW];
                        if (typeof aX.cName === "string") {
                            bucketid = aX.cName.toLowerCase()
                        }
                        if (bucketid === null) {
                            continue
                        }
                        var aY = {};
                        for (var aU = 0; aU < aX.catId.length; aU++) {
                            var aZ = this.activecategorySet.find(function(a7) {
                                if (a7.catid === aX.catId[aU]) {
                                    return a7
                                }
                            });
                            if (aZ !== undefined) {
                                function a6(a8, a7) {
                                    return function(a9, ba) {
                                        a9[ba] = {
                                            vEss: a8,
                                            catid: a7
                                        };
                                        return a9
                                    }
                                }
                                if (a1 && parseFloat(a1.Version) < 1.7 && Array.prototype.reduce) {
                                    var a4 = aZ.rqdVndr.mVendorObjectReduce(a6(1, aX.catId[aU]), {});
                                    var a0 = aZ.optnlVndr.mVendorObjectReduce(a6(0, aX.catId[aU]), {})
                                } else {
                                    var a4 = aZ.rqdVndr.reduce(a6(1, aX.catId[aU]), {});
                                    var a0 = aZ.optnlVndr.reduce(a6(0, aX.catId[aU]), {})
                                }
                                aY = Object.assign({}, a4, a0, aY)
                            }
                        }
                        if (Object.keys(aY).length !== 0) {
                            aO[bucketid] = {
                                CategoryBucketId: aW,
                                name: aX.cName,
                                defaultCategoryId: aX.catId,
                                cEss: (aX.cEstnl === true ? 1 : 0),
                                vendors: aY,
                                dataSharing: (aX.dataSharing === true ? 1 : 0)
                            }
                        }
                    }
                }
                this.activecategorySet = aO
            }
        }
        if (aR.hasOwnProperty("consentTemplate") && window.evidon.consentTemplates) {
            var aP = aR.consentTemplate;
            var aQ = window.evidon.consentTemplates[aP];
            this._loadSettings(aQ)
        } else {
            this._loadSettings(aR)
        }
        this.dataRightsType = aR.dataRightsType === undefined ? 0 : aR.dataRightsType;
        var a3 = (aR.rightslinkId === undefined) ? 0 : aR.rightslinkId;
        if (a3 === 0) {
            this.rightsLink = ""
        } else {
            if (this.activeSettings.hasOwnProperty("rightsLinks")) {
                if (this.activeSettings.rightsLinks.hasOwnProperty(a3)) {
                    this.rightsLink = this._fixurl(this.activeSettings.rightsLinks[a3])
                } else {
                    this.rightsLink = ""
                }
            } else {
                this.rightsLink = ""
            }
        }
        this.dnsRightsType = (aR.hasOwnProperty("dnsRightsType")) ? aR.dnsRightsType : 1;
        if (this.dnsRightsType == 0) {
            var aT = (aR.dnslinkId === undefined) ? 0 : aR.dnslinkId;
            if (aT === 0) {
                this.dnsLink = ""
            } else {
                if (this.activeSettings.hasOwnProperty("dnsLinks")) {
                    if (this.activeSettings.dnsLinks.hasOwnProperty(aT)) {
                        this.dnsLink = this._fixurl(this.activeSettings.dnsLinks[aT])
                    } else {
                        this.dnsLink = ""
                    }
                } else {
                    this.dnsLink = ""
                }
            }
        } else {
            this.dnsLink = ""
        }
        var a2 = (aR.pubvendorsLinkId === undefined) ? 0 : aR.pubvendorsLinkId;
        if (a2 === 0) {
            this.pubvendorsLink = null
        } else {
            this.pubvendorsLink = this.activeSettings.pubvendorsLinks[a2]
        }
        this.activeVendorId = aR.vendor;
        this.categorySetId = (aR.hasOwnProperty("categorySetId") && aR.categorySetId != 0) ? aR.categorySetId : 0;
        this.activeCategorySetId = aR.category;
        this.noticeGpcEnabled = aR.gpcEnabled;
        this.regulationRightsId = aR.regulationRightsId;
        this._setActiveTranslations();
        if (!this._isConsentGiven() && this._navigationConsentGiven()) {
            this.consentGiven(true)
        }
        if (!this.consentRequired) {
            this._runNoConsentFlow()
        } else {
            if (this.regulationConsentTypeId === aB) {
                this._runOptInFlow()
            } else {
                if (this.regulationConsentTypeId === aC) {
                    this._runOptOutFlow()
                }
            }
        }
        this.dropPixel(aE);
        if (this.iabEnabled) {
            if (this.iabVersion === 1) {
                this.appendScript(z)
            } else {
                if (this.iabVersion === 2) {
                    this.appendScript("https://iabmap.evidon.com/tcfv2/iabevidonmapping.js");
                    this.appendScript("https://c.evidon.com/iab/vendor-list-script.json")
                }
            }
            this.appendScript(aH + A[this.iabVersion]);
            var a5 = this._getSuppressionCookie();
            switch (this.iabVersion) {
            case 1:
                if (window.__cmp) {
                    window.__cmp("setSuppression", a5 !== null)
                } else {
                    console.error("unable to find __cmp stub")
                }
                break;
            case 2:
                if (window.__tcfapi) {
                    window.__tcfapi("setSuppression", a5 !== null)
                } else {
                    console.error("unable to find __tcfapi stub")
                }
                break
            }
        }
        window.evidon.events._fireEvent("loaded", null)
    }
    ;
    aI.prototype.checkConsentedVendors = function() {
        var aO = this.getActiveVendors();
        var aN = this._getConsentedVendors();
        if (aN && aN.hasOwnProperty("all")) {
            if (aN.all) {
                return
            }
        }
        var aP = this._getNewVendors(aO, aN);
        if (aP.length > 0 && typeof this.newVendorCallback === "function") {
            this.newVendorCallback(aP)
        }
    }
    ;
    aI.prototype.getActiveVendors = function() {
        if (!this.activeSettings || !this.activeSettings.hasOwnProperty("vendors")) {
            return
        }
        var aN = this.activeVendorId;
        if (aN === -1 || !this.activeSettings.vendors.hasOwnProperty(aN)) {
            return null
        }
        return this.activeSettings.vendors[aN]
    }
    ;
    aI.prototype._getConsentedCategories = function() {
        return this._getConsentDataSpecific("categories")
    }
    ;
    aI.prototype._getConsentedCookies = function() {
        return this._getConsentDataSpecific("cookies")
    }
    ;
    aI.prototype._getConsentedVendors = function() {
        return this._getConsentDataSpecific("vendors")
    }
    ;
    aI.prototype._getConsentDataSpecific = function(aP) {
        var aQ = this.activeSettings.hasOwnProperty("includeSubdomains") ? this.activeSettings.includeSubdomains : 0;
        if (aQ == 1) {
            var aN = this._getConsentCookie();
            var aO = this._getConsentDataFromCookie(aP);
            if (aO) {
                this._removeLocalStorageItem(D + this.activeSettings.id);
                aN.value[aP][this.activeCountryId] = aO;
                this._writeLocalStorage(D + this.activeSettings.id, JSON.stringify(aN))
            }
        }
        if (!aO) {
            aO = this._getConsentDataFromLocalStorage(aP)
        }
        if (!aO) {
            aO = this._getConsentDataFromCookie(aP)
        }
        if (!aO && this.regulationConsentTypeId === aC && !this.isOptedOut()) {
            aO = {
                all: true
            }
        }
        return aO
    }
    ;
    aI.prototype._getConsentDataFromLocalStorage = function(aO) {
        var aN = this._readLocalStorage(D + this.activeSettings.id);
        if (!aN) {
            return null
        }
        aN = JSON.parse(aN);
        if (aN.hasOwnProperty(aO) && aN[aO].hasOwnProperty(this.activeCountryId)) {
            return aN[aO][this.activeCountryId]
        }
        return null
    }
    ;
    aI.prototype._getConsentDataFromCookie = function(aR) {
        var aN = this._getConsentCookie();
        if (!aN || !aN.value) {
            return null
        }
        var aQ = aN.value;
        if (typeof aQ === "string") {
            var aO = new Date(unescape(aQ));
            aQ = this._setConsentCookie(aO)
        } else {
            if (typeof aQ === "object") {
                var aS = this.activeSettings.hasOwnProperty("includeSubdomains") ? this.activeSettings.includeSubdomains : 0;
                if (aQ.hasOwnProperty(aR) && aS != 1) {
                    var aP = (aQ.hasOwnProperty("consent_type")) ? aQ.consent_type : aB;
                    this._setConsentCookie(new Date(aQ.consent_date), null, null, null, aP)
                }
            }
        }
        if (aQ.hasOwnProperty(aR) && aQ[aR].hasOwnProperty(this.activeCountryId)) {
            return aQ[aR][this.activeCountryId]
        }
        return null
    }
    ;
    aI.prototype._getNewVendors = function(aP, aN) {
        if (!aP || !aN) {
            return []
        }
        var aO = [];
        if (Array.isArray(aN)) {
            aO = aN
        } else {
            for (var aS in aN) {
                aO.push(parseInt(aS))
            }
        }
        var aR = [];
        for (var aQ = 0; aQ < aP.length; aQ++) {
            var aS = aP[aQ];
            if (aO.indexOf(aS) === -1) {
                aR.push(aS)
            }
        }
        return aR
    }
    ;
    aI.prototype.setLocation = function(aN) {
        this.country = aN;
        if (!this.langaugeRoot) {
            this.activateTranslations(aN.defaultLanguage)
        }
        this.showNotice()
    }
    ;
    aI.prototype.setThemes = function(aN) {
        this.themes = aN;
        this.showNotice()
    }
    ;
    aI.prototype.getVendorList = function() {
        this.appendScript(aH + aM)
    }
    ;
    aI.prototype.setVendorList = function(aN) {
        this.vendorList = aN;
        this.showNotice()
    }
    ;
    aI.prototype.activateTranslations = function(aN) {
        if (aN === undefined || !aN) {
            return
        }
        this.languageCode = aN;
        this.languageRoot = aN;
        var aP = this.languageCode.indexOf("-");
        if (aP !== -1) {
            this.languageRoot = this.languageCode.substr(0, aP)
        }
        if (this.languageRoot === "nb") {
            this.languageRoot = "no"
        }
        if (this.translations.hasOwnProperty(this.languageRoot)) {
            this._setActiveTranslations();
            this.showNotice()
        } else {
            if (window.evidon && window.evidon.usegranulartranslations !== false) {
                window.evidon.usegranulartranslations = true
            }
            var aO = (typeof window.evidon.usegranulartranslations === "undefined") ? false : window.evidon.usegranulartranslations;
            if (!aO) {
                var aQ = B + "/translations/" + this.languageRoot + ".js";
                this.appendScript(aQ);
                this.activeTranslations = null
            } else {
                this.loadTranslations()
            }
        }
    }
    ;
    aI.prototype.loadTranslations = function() {
        if (!this.activeTranslationId) {
            this.activeTranslationId = this._getTranslationId()
        }
        if (!this.activeTranslationId) {
            if (this.activeSettings && this.activeSettings.defaultTranslation) {
                this.activateTranslations(this.activeSettings.defaultTranslation.code)
            } else {
                return
            }
        }
        var aO = B + "/translations/" + this.languageRoot + "-" + this.activeTranslationId + ".js"
          , aN = this;
        this.appendScript(aO, function() {
            var aT = aN.translations[aN.languageRoot];
            if (aT && aT.hasOwnProperty("items")) {
                aN.activeTranslations = aN._setTranslationValues(aT[aN.activeTranslationId], aT.items);
                if (aT.hasOwnProperty("categories")) {
                    var aP = null;
                    if (aT.categories.hasOwnProperty(aN.categorySetId)) {
                        aP = aT.categories[aN.categorySetId]
                    } else {
                        aP = aT.categories["0"]
                    }
                    var aQ = aN.activeTranslations.languageCode;
                    if (aP.hasOwnProperty(aQ)) {
                        aN.activeTranslations.categories = aP[aQ]
                    } else {
                        var aS = Object.keys(aP);
                        var aR = aS[0];
                        aN.activeTranslations.categories = aP[aR]
                    }
                }
            } else {
                if (aT) {
                    aN.activeTranslations = aT[aN.activeTranslationId]
                }
            }
        }, function() {
            console.log("Unable to load the granular translation file: " + aO);
            window.evidon.usegranulartranslations = false;
            aN.activateTranslations(aN.languageCode)
        })
    }
    ;
    aI.prototype.setDomain = function(aN, aR) {
        if (!aN) {
            this.domain = window.location.hostname.toLowerCase();
            this.path = window.location.pathname.toLowerCase();
            var aO = this.path.lastIndexOf("/");
            if (aO > -1) {
                var aP = this.path.indexOf(".", aO);
                if (aP > -1) {
                    this.path = this.path.substr(0, aO)
                }
            }
        } else {
            aN = aN.toLowerCase();
            var aP = aN.indexOf("://");
            if (aP !== -1) {
                aN = aN.substr(aP + 3)
            }
            aP = aN.indexOf("/");
            if (aP === -1) {
                this.domain = aN;
                this.path = "/"
            } else {
                this.domain = aN.substr(0, aP);
                aN = aN.substr(aP);
                aP = aN.indexOf("?");
                if (aP !== -1) {
                    aN = aN.substr(0, aP)
                }
                this.path = aN
            }
        }
        if (aR === undefined || !aR) {
            var aQ = this._getRootDomain(this.domain);
            aQ = aQ.replace(".", "");
            var aS = (window.evidon.test !== undefined) ? window.evidon.test : false;
            var aT = B + "/" + aQ + ((aS) ? "/test" : "") + "/settingsV3.js";
            this.appendScript(aT)
        }
        this.showNotice()
    }
    ;
    aI.prototype.addTranslation = function(aN, aO) {
        this.translations[aN] = aO;
        this.showNotice()
    }
    ;
    aI.prototype.loadSettings = function(aN) {
        this.settings = aN;
        this.showNotice()
    }
    ;
    aI.prototype.getBannerStyle = function() {
        if (this.consentTypeId !== F) {
            return null
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].banner
        } else {
            return null
        }
    }
    ;
    aI.prototype.getConsentTypeStyle = function() {
        var aN = this.getBarrierStyle();
        if (!aN) {
            aN = this.getBannerStyle()
        }
        return aN
    }
    ;
    aI.prototype.getBarrierStyle = function() {
        if (this.consentTypeId !== G) {
            return null
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].barrier
        } else {
            return null
        }
    }
    ;
    aI.prototype.getButtonStyle = function() {
        if (this.privacyAccessTypeId !== a.BUTTON) {
            return null
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].button
        } else {
            return null
        }
    }
    ;
    aI.prototype.getLinkStyle = function() {
        if (this.privacyAccessTypeId !== a.LINK) {
            return null
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].link
        } else {
            return null
        }
    }
    ;
    aI.prototype.getL2Style = function() {
        if (!this.L2Enabled) {
            return
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].l2
        } else {
            return null
        }
    }
    ;
    aI.prototype.getPreferencesDialogV2Enabled = function() {
        var aN = this.getL2Style();
        if (!aN) {
            return false
        }
        return this.isMobile() ? aN.mobileEnablePreferencesDialogV2 : aN.enablePreferencesDialogV2
    }
    ;
    aI.prototype.isGDPR = function() {
        return this.gdprEnabled || this.regulationId === aD.GDPR
    }
    ;
    aI.prototype.isCCPA = function() {
        return this.regulationId === aD.CCPA
    }
    ;
    aI.prototype.isCPRA = function() {
        return this.regulationId === aD.CPRA
    }
    ;
    aI.prototype.isVCDPA = function() {
        return this.regulationId === aD.VCDPA
    }
    ;
    aI.prototype.isCTDPA = function() {
        return this.regulationId === aD.CTDPA
    }
    ;
    aI.prototype.isCPA = function() {
        return this.regulationId === aD.CPA
    }
    ;
    aI.prototype.isUCPA = function() {
        return this.regulationId === aD.UCPA
    }
    ;
    aI.prototype.isNevadaLaw = function() {
        return this.regulationId === aD.NevadaLaw
    }
    ;
    aI.prototype.isOCPA = function() {
        return this.regulationId === aD.OCPA
    }
    ;
    aI.prototype.isTDPSA = function() {
        return this.regulationId === aD.TDPSA
    }
    ;
    aI.prototype.isMCDPA = function() {
        return this.regulationId === aD.MCDPA
    }
    ;
    aI.prototype.isUSOptOutRegulation = function() {
        return this.isCCPA() || this.isCPRA() || this.isVCDPA() || this.isCTDPA() || this.isCPA() || this.isUCPA() || this.isNevadaLaw() || this.isOCPA() || this.isTDPSA() || this.isMCDPA()
    }
    ;
    aI.prototype.isOptedOut = function() {
        var aN = this._getConsentCookie();
        if (!aN || !aN.value) {
            return false
        }
        if (!aN.value.hasOwnProperty("consent_type")) {
            return false
        }
        return (aN.value.consent_type === aC)
    }
    ;
    aI.prototype.getTranslations = function() {
        return this.activeTranslations
    }
    ;
    aI.prototype.formatTranslation = function(bi) {
        var bb = new RegExp(L,"g")
          , a9 = new RegExp(E,"g")
          , bg = new RegExp(aA,"g")
          , ba = new RegExp(J,"g")
          , bc = new RegExp(M,"gi")
          , bh = new RegExp(aL,"gi")
          , a7 = new RegExp(w,"gi")
          , a8 = new RegExp(x,"gi")
          , bf = new RegExp(aw,"gi")
          , bd = new RegExp(an,"g")
          , be = new RegExp(au,"g")
          , aX = this.getConsentUrl()
          , a6 = this.getPrivacyPolicyLink()
          , aY = this.getCookiePolicyLink()
          , aZ = this.activeSettings.division || ""
          , a0 = this.consentDuration
          , a2 = window.evidon.notice.isMobile();
        if (bi) {
            var bj = this.getActiveVendors();
            if (bj === null) {
                bj = []
            }
            if (this.activeTranslations.hasOwnProperty("categories")) {
                var aP = {};
                for (var a3 in this.activeTranslations.categories) {
                    var aQ = this.activeTranslations.categories[a3];
                    if (typeof aQ === "object" && aQ.hasOwnProperty("vendors")) {
                        var aW = aQ.vendors;
                        for (var a1 = 0; a1 < bj.length; a1++) {
                            if (aW.indexOf(bj[a1]) !== -1) {
                                aP[a3] = aQ.text;
                                break
                            }
                        }
                    } else {
                        aP[a3] = aQ
                    }
                }
                var aV = {};
                if (!this.activeSettings.companyCategoryIds && this.activecategorySet) {
                    this.activeSettings.companyCategoryIds = Object.keys(this.activecategorySet)
                }
                if (this.activeSettings.companyCategoryIds) {
                    var aN = this.activeTranslations.categories;
                    this.activeSettings.companyCategoryIds.forEach(function(bl) {
                        var bk = aN[bl.toLowerCase()] ? aN[bl.toLowerCase()].text : null;
                        if (bk && !aV[bk]) {
                            aV[bl] = bk
                        }
                    })
                }
                if (bi.indexOf(w) > -1) {
                    var aT = [];
                    for (var a3 in aV) {
                        var aS = '<a class="evidon-category-link" href="#" onclick="window.evidon.notice.showPreferencesDialog(\'' + this.PREFDIAG_TABS.CONSENT + "', '" + a3 + "'); return false;\">" + aV[a3] + "</a>";
                        aT.push(aS)
                    }
                    var aR = aT.join(", ");
                    bi = bi.replace(a7, aR)
                } else {
                    if (bi.indexOf(x) > -1) {
                        var aU = "";
                        for (var a3 in aV) {
                            aU += "<li>" + aV[a3] + "</li>"
                        }
                        bi = bi.replace(a8, aU)
                    }
                }
            }
            bi = bi.replace(bb, aZ).replace(a9, aX).replace(bg, a6).replace(ba, aY);
            bi = bi.replace(bc, "<b>" + a0 + "</b>").replace(bh, "<b>" + bj.length + "</b>");
            if (Object.keys(ac).indexOf(this.languageRoot) != -1) {
                bi = bi.replace(bd, "<b>" + ac[this.languageRoot]["monthvar"] + "</b>").replace(be, "<b>" + ac[this.languageRoot]["partnervar"] + "</b>")
            }
            if (bi.indexOf(aw) > -1) {
                var a5 = (((a2) ? this.activeTranslations.mobilepolicyButtonText : this.activeTranslations.policyButtonText) || null);
                var a4 = (aY && aY !== "#") ? aY : (a6 && a6 !== "#") ? a6 : null;
                if (a5 && a4) {
                    var aO = '<br /><br /><a href="' + a4 + '" target="_blank" class="evidon-policybutton">' + a5 + "</a>";
                    bi = bi.replace(bf, aO)
                } else {
                    bi = bi.replace(bf, "")
                }
            }
        }
        return bi
    }
    ;
    aI.prototype.dropSuppressionCookie = function(aR, aT) {
        var aN = {
            date: new Date()
        };
        var aQ = null;
        if (typeof aR !== "undefined" && aR > 0) {
            var aP = new Date();
            aP.setDate(aP.getDate() + aR);
            aQ = aP.toUTCString();
            var aS = this._getConsentCookieDomainPath();
            var aO = this._getConsentCookieDomain();
            this._writeCookie(aJ, JSON.stringify(aN), aQ, aS, aO)
        } else {
            var aS = this._getConsentCookieDomainPath();
            var aO = this._getConsentCookieDomain();
            this._delete_cookie(aJ, aS, aO)
        }
        return aN
    }
    ;
    aI.prototype._delete_cookie = function(aO, aP, aN) {
        if (this._getCookie(aO)) {
            document.cookie = aO + "=" + ((aP) ? ";path=" + aP : "") + ((aN) ? ";domain=" + aN : "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
        }
    }
    ;
    aI.prototype._getCookie = function(aQ) {
        var aO = this._readCookies();
        for (var aP = 0; aP < aO.length; aP++) {
            var aN = aO[aP];
            if (aN.name === aQ) {
                return aN
            }
        }
        return null
    }
    ;
    aI.prototype._readCookies = function() {
        var aO = "";
        if (window.evidon.uriEncodeCookie) {
            var aQ = decodeURI(document.cookie);
            aO = aQ.split(";")
        } else {
            if (window.evidon.uriEncodeComponentCookie) {
                var aQ = decodeURIComponent(document.cookie);
                aO = aQ.split(";")
            } else {
                aO = document.cookie.split(";")
            }
        }
        var aP = [];
        for (var aS = 0; aS < aO.length; aS++) {
            var aU = aO[aS];
            var aT = aU.slice(0, aU.indexOf("=")).replace(/^\s+|\s+$/g, "");
            var aV = aU.slice(aU.indexOf("=") + 1);
            var aN = {
                name: aT
            };
            try {
                aN.value = JSON.parse(aV)
            } catch (aR) {
                aN.value = aV
            }
            aP.push(aN)
        }
        return aP
    }
    ;
    aI.prototype._writeCookie = function(aR, aT, aQ, aS, aP) {
        if (window.evidon.uriEncodeCookie) {
            aT = encodeURI(aT)
        } else {
            if (window.evidon.uriEncodeComponentCookie) {
                aT = encodeURIComponent(aT)
            }
        }
        var aO = [aR + "=" + aT];
        if (typeof aQ === "string") {
            aO.push("expires=" + aQ)
        }
        aO.push("path=" + aS);
        aO.push("SameSite=Lax");
        if (typeof aP === "string") {
            aO.push("domain=" + aP)
        }
        var aN = aO.join("; ");
        document.cookie = aN;
        return (document.cookie.indexOf(aR) > -1)
    }
    ;
    aI.prototype._readLocalStorage = function(aO) {
        try {
            if (!window.localStorage) {
                return false
            }
        } catch (aN) {
            return false
        }
        return window.localStorage.getItem(aO)
    }
    ;
    aI.prototype._writeLocalStorage = function(aO, aP) {
        try {
            if (!window.localStorage) {
                return false
            }
        } catch (aN) {
            return false
        }
        window.localStorage.setItem(aO, aP);
        return window.localStorage.getItem(aO) !== null
    }
    ;
    aI.prototype._removeLocalStorageItem = function(aN) {
        if (!window.localStorage) {
            return
        }
        window.localStorage.removeItem(aN)
    }
    ;
    aI.prototype.withdrawConsent = function() {
        this._deleteConsentCookie();
        if (this.regulationConsentTypeId == aC) {
            this.consentIsGiven = true;
            this._setConsentCookie(null, true, true, true, this.regulationConsentTypeId, false);
            this.dropSuppressionCookie(365);
            this.dropPixel(T);
            this.postVendorChoices(T)
        } else {
            this.consentIsGiven = false;
            this._setConsentCookie(null, false, false, false, this.regulationConsentTypeId, false);
            this.postVendorChoices(I);
            this.dropPixel(I)
        }
        if (window.evidon.consentWithdrawnCallback) {
            window.evidon.consentWithdrawnCallback()
        }
    }
    ;
    aI.prototype.newVendorCallback = function(aN) {
        if (window.evidon.button) {
            window.evidon.button.showNewVendorIndicator()
        }
        if (window.evidon.cmp && window.evidon.cmp.consentString) {
            window.evidon.cmp.newVendorCallback(aN)
        }
        if (window.evidon.cmpv2 && window.evidon.cmpv2.consentString) {
            window.evidon.cmpv2.newVendorCallback(aN)
        }
    }
    ;
    aI.prototype._pullOptOutDetails = function(aO) {
        var aP = window.evidon.id
          , aR = this.activeSettings.id
          , aN = this.activeCountryId
          , aQ = this;
        var aS = aq;
        if (aS.substr(aS.length - 1) !== "/") {
            aS += "/"
        }
        aS += "vendor/" + aP + "/" + aR + "/" + aN;
        if (this.categorySetId && this.categorySetId !== 0) {
            aS += "/" + this.categorySetId
        }
        aS += "?lang=" + this.languageCode;
        var aT = new XMLHttpRequest();
        aT.onerror = function() {
            Toast.show(TOAST_ERROR, getTranslation(aQ.isMobile() ? "mobilesnL2L3FetchVendorsError" : "snL2L3FetchVendorsError"), 7)
        }
        ;
        aT.onreadystatechange = function() {
            if (aT.readyState !== 4) {
                return
            }
            if (aT.status === 200) {
                var aY = JSON.parse(aT.responseText);
                aQ.optOutDetails = {};
                aQ.optOutDetails.categories = {};
                aQ.optOutDetails.cookies = {};
                var aZ = (aY.hasOwnProperty("thirdparty")) ? aY.thirdparty : [];
                for (var aX = 0; aX < aZ.length; aX++) {
                    var a0 = aZ[aX];
                    var aU = null;
                    if ((a0.hasOwnProperty("CategoryBucketId") && a0.CategoryBucketId !== null) || (a0.hasOwnProperty("CategoryBucket") && a0.CategoryBucket !== null)) {
                        aU = (a0.hasOwnProperty("CategoryBucketId")) ? a0.CategoryBucketId.toLowerCase() : a0.CategoryBucket.toLowerCase()
                    }
                    if (!aQ.optOutDetails.categories.hasOwnProperty(aU)) {
                        aQ.optOutDetails.categories[aU] = {
                            id: aU,
                            name: a0.CategoryBucket,
                            description: a0.CategoryDescription,
                            required: a0.CategoryRequired,
                            vendors: []
                        }
                    }
                    aQ.optOutDetails.categories[aU].vendors.push(a0)
                }
                var aW = (aY.hasOwnProperty("firstparty")) ? aY.firstparty : [];
                for (var aX = 0; aX < aW.length; aX++) {
                    var aV = aW[aX];
                    aQ.optOutDetails.cookies[aV.CountryCookieId] = {
                        id: aV.CountryCookieId,
                        name: aV.Name,
                        description: aV.Description,
                        required: aV.Required,
                        optout: aV.OptOut,
                        host: aV.Host,
                        duration: aV.Duration,
                        category: aV.Category
                    }
                }
                aO()
            } else {
                if (aT.status === 500) {
                    aO({
                        message: "Unable to load the opt-out vendor list"
                    }, null)
                }
            }
        }
        ;
        aT.open("GET", aS, true);
        aT.send(null)
    }
    ;
    aI.prototype.getOptOutCategories = function(aN) {
        var aO = this;
        if (!this.optOutDetails) {
            this._pullOptOutDetails(function(aP) {
                if (aP) {
                    aN(aP, null)
                } else {
                    aN(null, aO.optOutDetails.categories)
                }
            })
        } else {
            aN(null, aO.optOutDetails.categories)
        }
    }
    ;
    aI.prototype.getOptOutCategory = function(aN) {
        if (this.optOutDetails) {
            if (this.optOutDetails.categories.hasOwnProperty(aN)) {
                return this.optOutDetails.categories[aN]
            }
        }
        return null
    }
    ;
    aI.prototype.getOptOutCookies = function(aN) {
        var aO = this;
        if (!this.optOutDetails) {
            this._pullOptOutDetails(function(aP) {
                if (aP) {
                    aN(aP, null)
                } else {
                    aN(null, aO.optOutDetails.cookies)
                }
            })
        } else {
            aN(null, aO.optOutDetails.cookies)
        }
    }
    ;
    aI.prototype.findVendorDetails = function(aN) {
        for (var aO = 0; aO < this.companydetails.length; aO++) {
            if (this.companydetails[aO].permalink === aN) {
                return this.companydetails[aO]
            }
        }
        return null
    }
    ;
    aI.prototype.pullVendorDetails = function(aP, aN) {
        var aR = aq
          , aQ = this;
        var aO = this.findVendorDetails(aP);
        if (aO) {
            aN(null, aO)
        } else {
            aR = aR.replace("/site", "");
            if (aR.substr(aR.length - 1) !== "/") {
                aR += "/"
            }
            aR += "company/" + aP + "/" + this.activeTranslationId;
            var aS = new XMLHttpRequest();
            aS.onerror = function() {}
            ;
            aS.onreadystatechange = function() {
                if (aS.readyState !== 4) {
                    return
                }
                if (aS.status === 200) {
                    aO = JSON.parse(aS.responseText);
                    aQ.companydetails.push(aO);
                    aN(null, aO)
                } else {
                    if (aS.status === 500) {
                        aN({
                            message: "Unable to load the vendor details"
                        }, null)
                    }
                }
            }
            ;
            aS.open("GET", aR, true);
            aS.send(null)
        }
    }
    ;
    aI.prototype.getParentOrigin = function() {
        var aP = (window.location !== window.parent.location);
        var aO = aP ? document.referrer : document.location.href;
        if (aO) {
            return aO.split("?")[0]
        }
        var aN = document.location;
        if (aN.ancestorOrigins && aN.ancestorOrigins.length) {
            return aN.ancestorOrigins[0]
        }
        return ""
    }
    ;
    aI.prototype.stringify = function(aO) {
        var aN = window.Prototype;
        if (aN && parseFloat(aN.Version) < 1.7 && Array.prototype.toJSON && Object.toJSON && aO) {
            return Object.toJSON(aO)
        }
        return JSON.stringify(aO)
    }
    ;
    aI.prototype.postVendorChoices = function(aN) {
        var aX = {};
        aX.noticeId = this.activeSettings.id;
        aX.companyId = window.evidon.id;
        aX.actionId = aN;
        aX.regulationId = this.regulationId;
        aX.regulationType = this.regulationConsentTypeId;
        aX.consentGiven = ((this.consentIsGiven) ? 1 : 0);
        aX.consentRequired = ((this.consentRequired) ? 1 : 0);
        aX.consentDate = new Date().toISOString();
        aX.activeCountryId = this.activeCountryId;
        aX.akObservedCountryId = this.country.id;
        aX.defaultCountryId = this.activeSettings.defaultCountry;
        aX.includeSubdomains = this.activeSettings.includeSubdomains;
        aX.activeTranslationId = this.activeTranslationId;
        aX.domainConsented = this.getParentOrigin();
        aX.akObservedStateId = (typeof this.activeStateId !== "undefined" && this.activeStateId !== null) ? this.activeStateId : "";
        aX.vendors = [];
        aX.categories = [];
        var aP = this.activecategorySet;
        var aY = this._getConsentedVendors();
        var aO = this._getConsentedCategories();
        var aU = this.isGPCApply();
        if (aY !== null || aO !== null) {
            for (var aR in aP) {
                var aW = aP[aR];
                var aQ = {
                    def_CId: aW.defaultCategoryId,
                    cBucketId: aW.CategoryBucketId,
                    customCName: aW.name,
                    isEssential: (aU && aW.dataSharing) ? 0 : aW.cEss,
                    isAccepted: (aU && aW.dataSharing) ? 0 : (aO === true) ? 1 : (aW.cEss === 1) ? 1 : 0
                };
                if (typeof aO === "object" && aO !== null) {
                    aQ.isAccepted = aO[aR] === true ? 1 : 0
                }
                aX.categories.push(aQ);
                for (var aV in aW.vendors) {
                    var aZ = {
                        id: aV,
                        categoryId: aW.vendors[aV].catid,
                        isEssential: (aU && aW.dataSharing) ? 0 : aW.vendors[aV].vEss,
                        isAccepted: (aU && aW.dataSharing) ? 0 : (aY[aV] === true) ? 1 : 0
                    };
                    if (aW.vendors[aV].vEss === 1) {
                        aZ.isAccepted = 1
                    }
                    if (aQ.isEssential === 1) {
                        aZ.isAccepted = 1
                    }
                    if (typeof aY[aV] === "undefined" || aY[aV] === null) {
                        aZ.isAccepted = null
                    }
                    aX.vendors.push(aZ)
                }
            }
        }
        aX.lso = this.getConsentData().value;
        var aS = {};
        aS.d = aX;
        aS.c = window.evidon.id;
        var aT = this.stringify(aS);
        var a0 = new XMLHttpRequest();
        a0.open("POST", ay, true);
        a0.setRequestHeader("Content-Type", "application/json");
        a0.send(aT);
        a0.addEventListener("readystatechange", function() {
            if (this.readyState === 4) {
                if (this.status === 200 || this.status === 204) {} else {
                    if (this.status === 401) {
                        console.log("invalid request")
                    }
                }
            }
        });
        a0.addEventListener("error", function(a1) {
            console.log("vendor post error")
        })
    }
    ;
    aI.prototype.pushNavigationScreen = function(aN) {
        this.navigationStack.push(aN)
    }
    ;
    aI.prototype.popNavigationScreen = function() {
        if (this.navigationStack.length < 1) {
            return null
        }
        var aN = this.navigationStack.pop();
        return aN
    }
    ;
    aI.prototype.getNavigationScreenStackCount = function() {
        return this.navigationStack.length
    }
    ;
    aI.prototype.setUserIdentifier = function(aN) {
        this.customerUserId = aN
    }
    ;
    aI.prototype.getOptOutApiUrl = function() {
        return aq
    }
    ;
    aI.prototype.isGPCApply = function() {
        return this.userGpcEnabled && this.noticeGpcEnabled ? 1 : 0
    }
    ;
    var N = function() {
        this.subscriptions = {};
        this.subscribe = function(aO, aN, aP) {
            if (!this.subscriptions.hasOwnProperty(aO)) {
                this.subscriptions[aO] = []
            }
            if (!aP) {
                aP = -1
            }
            this.subscriptions[aO].push({
                callback: aN,
                limit: aP
            })
        }
        ;
        this._fireEvent = function(aO, aN) {
            if (!this.subscriptions.hasOwnProperty(aO)) {
                return
            }
            var aR = this.subscriptions[aO];
            for (var aP = 0; aP < aR.length; aP++) {
                var aQ = aR[aP];
                if (aQ.callback && typeof aQ.callback === "function") {
                    aQ.callback.call(null, aN);
                    if (aQ.limit === -1) {
                        continue
                    }
                    aQ.limit--;
                    if (aQ.limit === 0) {
                        aR.splice(aP, 1);
                        aP--
                    }
                }
            }
        }
    };
    if (!window.evidon.events) {
        window.evidon.events = new N()
    }
    if (!window.evidon.notice) {
        window.evidon.notice = new aI()
    }
    if (!window.evidon.button) {
        window.evidon.button = new m()
    }
    if (!window.evidon.link) {
        window.evidon.link = new ad()
    }
    window.evidon.events._fireEvent("apiReady", null)
}
)();
