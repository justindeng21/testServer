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
            var aR = Object.prototype.hasOwnProperty
              , aQ = !({
                toString: null
            }).propertyIsEnumerable("toString")
              , aO = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
              , aP = aO.length;
            return function(aT) {
                if (typeof aT !== "function" && (typeof aT !== "object" || aT === null)) {
                    throw new TypeError("Object.keys called on non-object")
                }
                var aV = [], aU, aS;
                for (aU in aT) {
                    if (aR.call(aT, aU)) {
                        aV.push(aU)
                    }
                }
                if (aQ) {
                    for (aS = 0; aS < aP; aS++) {
                        if (aR.call(aT, aO[aS])) {
                            aV.push(aO[aS])
                        }
                    }
                }
                return aV
            }
        }())
    }
    if (typeof Object.assign != "function") {
        Object.assign = function(aR, aT) {
            if (aR == null) {
                throw new TypeError("Cannot convert undefined or null to object")
            }
            var aS = Object(aR);
            for (var aO = 1; aO < arguments.length; aO++) {
                var aQ = arguments[aO];
                if (aQ != null && aQ != undefined) {
                    for (var aP in aQ) {
                        if (Object.prototype.hasOwnProperty.call(aQ, aP)) {
                            aS[aP] = aQ[aP]
                        }
                    }
                }
            }
            return aS
        }
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = (function(aR, aP, aQ) {
            return function aO(aV, aS) {
                if (this === null || this === undefined) {
                    throw TypeError("Array.prototype.indexOf called on null or undefined")
                }
                var aW = aR(this)
                  , aU = aW.length >>> 0
                  , aT = aQ(aS | 0, aU);
                if (aT < 0) {
                    aT = aP(0, aU + aT)
                } else {
                    if (aT >= aU) {
                        return -1
                    }
                }
                if (aV === void 0) {
                    for (; aT !== aU; ++aT) {
                        if (aW[aT] === void 0 && aT in aW) {
                            return aT
                        }
                    }
                } else {
                    if (aV !== aV) {
                        for (; aT !== aU; ++aT) {
                            if (aW[aT] !== aW[aT]) {
                                return aT
                            }
                        }
                    } else {
                        for (; aT !== aU; ++aT) {
                            if (aW[aT] === aV) {
                                return aT
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
        Array.isArray = function(aO) {
            return Object.prototype.toString.call(aO) === "[object Array]"
        }
    }
    if (!Array.prototype.find) {
        Array.prototype.find = function(aO) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined')
            }
            var aS = Object(this);
            var aR = aS.length >>> 0;
            if (typeof aO !== "function") {
                throw new TypeError("callback must be a function")
            }
            var aT = arguments[1];
            var aP = 0;
            while (aP < aR) {
                var aQ = aS[aP];
                if (aO.call(aT, aQ, aP, aS)) {
                    return aQ
                }
                aP++
            }
            return undefined
        }
    }
    if (!Array.prototype.filter) {
        Array.prototype.filter = function(aP, aV) {
            if (!((typeof aP === "Function" || typeof aP === "function") && this)) {
                throw new TypeError()
            }
            var aS = this.length >>> 0
              , aT = new Array(aS)
              , aU = this
              , aO = 0
              , aQ = -1;
            var aR;
            if (aV === undefined) {
                while (++aQ !== aS) {
                    if (aQ in this) {
                        aR = aU[aQ];
                        if (aP(aU[aQ], aQ, aU)) {
                            aT[aO++] = aR
                        }
                    }
                }
            } else {
                while (++aQ !== aS) {
                    if (aQ in this) {
                        aR = aU[aQ];
                        if (aP.call(aV, aU[aQ], aQ, aU)) {
                            aT[aO++] = aR
                        }
                    }
                }
            }
            aT.length = aO;
            return aT
        }
    }
    if (window.Prototype && parseFloat(window.Prototype.Version) < 1.7 && Array.prototype.reduce) {
        Array.prototype.mVendorObjectReduce = function(aO, aQ) {
            if (!aO || typeof aO !== "function") {
                throw TypeError()
            }
            var aR = this.length;
            var aP = 0;
            if (typeof aQ === "undefined" || aQ === null) {
                aQ = this[0];
                ++aP
            }
            for (; aP < aR; aP++) {
                aQ = aO.apply(this, [aQ, this[aP], aP, this])
            }
            return aQ
        }
    }
    if (!Object.isEmpty) {
        Object.isEmpty = function(aP) {
            if (!aP) {
                return true
            } else {
                for (var aO in aP) {
                    if (aP.hasOwnProperty(aO)) {
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
      , aN = "vendorlist.js"
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
    CONSENT_LS_VISTOR = "_evidon_visitor_ls_",
    MAXIMUM_STACK = 3;
    NUM_STACK = 0;
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
      , T = 47
      , aL = 50;
    var ag = 2
      , p = 3
      , af = 15
      , o = 16;
    var L = "{company}"
      , E = "{consentToolUrl}"
      , aA = "{privacyPolicy}"
      , J = "{cookiePolicy}"
      , M = "{duration}"
      , aM = "{vendorcount}"
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
        var aQ = null
          , aO = false
          , aR = false
          , aP = false
          , aU = this;
        function aS(aV) {
            window.evidon.notice.dropPixel(o);
            if (aV.target.innerText === "Do Not Sell My Personal Information") {
                window.evidon.notice.showOptions(null, window.evidon.notice.PREFDIAG_TABS.DONOTSELL)
            } else {
                window.evidon.notice.showOptions(null)
            }
            if (aP) {
                window.evidon.notice._updateConsentedVendors();
                aU.hideNewVendorIndicator()
            }
        }
        function aT() {
            if (aO || !aQ) {
                return
            }
            var aW = document
              , a3 = window.evidon.notice.isMobile()
              , aV = aW.createElement("div");
            aV.id = q;
            aV.className = n;
            aV.innerHTML = "<style> @media print {#_evh-ric,#_evh-link { display:none !important; } } </style>";
            aV.setAttribute("role", "button");
            var a6 = (a3) ? aQ.mobileButtonStyle : aQ.buttonStyle;
            var a4 = aW.createElement("a");
            a4.id = ai;
            a4.style.cssText = a6;
            var a7 = (a3) ? aQ.mobileShowIcon : aQ.showIcon;
            if (a7) {
                var a0 = aW.createElement("img");
                a0.src = aQ.buttonIcon;
                a0.className = r;
                a0.alt = "AdChoices Icon";
                var a9 = "border:0;display:inline;vertical-align:middle;margin-right:10px;";
                var aY = window.evidon.notice._getStyleValue(aQ.buttonStyle, "height");
                if (aY) {
                    var aX = parseFloat(aY);
                    var bc = aY.replace(aX, "");
                    aX = parseInt(aX * 0.6, 10);
                    a9 += "height:" + aX + bc + ";"
                }
                a0.style.cssText = a9;
                a4.appendChild(a0)
            }
            var a8 = (a3) ? aQ.mobileShowText : aQ.showText;
            if (a8) {
                var ba = aW.createElement("span");
                ba.id = u;
                ba.className = t;
                ba.style.cssText = "vertical-align:middle !important;";
                a4.appendChild(ba)
            }
            a4.onclick = function(be) {
                aS(be)
            }
            ;
            a4.onkeyup = function(be) {
                if (be.keyCode === 13) {
                    a4.onclick()
                }
            }
            ;
            a4.tabIndex = 0;
            var a5 = window.evidon.notice._parseCss(a6);
            var aZ = a5.left === undefined ? "left" : "right";
            var bd = a5.top === undefined ? "top" : "bottom";
            var a2 = "display: none; position: absolute;" + aZ + ":-10px;" + bd + ":-10px;width: 23px; height: 23px;";
            var a1 = document.createElement("img");
            a1.id = ap;
            a1.src = "//c.evidon.com/sitenotice/images/evidon-change-alert.png";
            a1.alt = "New vendors have been added to this site";
            a1.style.cssText = a2;
            a4.appendChild(a1);
            aV.appendChild(a4);
            document.body.appendChild(aV);
            var bb = window.evidon.notice.getTranslations();
            if (bb) {
                aU.setButtonText(bb)
            }
            if (a3) {
                aU.scaleForMobile()
            }
            aO = true
        }
        window.onbeforeprint = function() {
            var aV = document.getElementById(q);
            if (aV) {
                aV.style.display = "none"
            }
        }
        ;
        window.onafterprint = function() {
            var aV = document.getElementById(q);
            if (aV) {
                aV.style.display = ""
            }
        }
        ;
        this.scaleForMobile = function() {
            if (window.innerHeight < am && window.innerWidth < am) {
                return
            }
            var aV = document.getElementById(q)
              , aW = Math.max(window.innerWidth / screen.width, window.innerHeight / screen.height);
            if (aV && (aV.style.zoom !== undefined)) {
                aV.style.cssText += "zoom: " + (aW <= 2 ? aW : 2) + "!important;"
            }
        }
        ;
        this.setButtonText = function(aZ) {
            if (!aZ) {
                return
            }
            var aY = window.evidon.notice;
            aY.dropPixel(p);
            var aW = window.evidon.notice.isMobile();
            if (aO) {
                var aV = document.getElementById(u);
                var aX = aY.isUSOptOutRegulation() ? (aW ? aZ.mobileDoNotSell : aZ.doNotSell) : (aW ? aZ.mobileButtonText : aZ.buttonText);
                if (aV) {
                    aV.innerHTML = aX;
                    aR = true
                }
            }
        }
        ;
        this.createButton = function(aV) {
            if (!aV) {
                aQ = window.evidon.notice.getButtonStyle()
            } else {
                aQ = aV
            }
            if (aQ) {
                aT()
            }
        }
        ;
        this.showNewVendorIndicator = function() {
            var aV = document.getElementById(ap);
            if (!aV) {
                return
            }
            aV.style.display = "";
            aP = true
        }
        ;
        this.hideNewVendorIndicator = function() {
            var aV = document.getElementById(ap);
            if (!aV) {
                return
            }
            aV.style.display = "none";
            aP = false
        }
        ;
        this.iscreated = function() {
            return aO
        }
        ;
        this.show = function() {
            var aV = document.getElementById(q);
            if (aV) {
                aV.style.display = "block"
            }
        }
        ;
        this.hide = function() {
            var aV = document.getElementById(q);
            if (aV) {
                aV.style.display = "none"
            }
        }
    };
    var ad = function() {
        var aP = null
          , aO = false
          , aS = this;
        function aQ() {
            if (aO || !aP) {
                return
            }
            var aV = document
              , aY = window.evidon.notice.isMobile()
              , aZ = aV.createElement("a");
            aZ.href = "javascript:void(0)";
            aZ.className = ae;
            aZ.tabIndex = 0;
            var a0 = aV.createElement("span");
            a0.id = al;
            a0.className = ak;
            if (aY && aP.mobileShowIcon && aP.mobileLinkIcon) {
                var aX = aV.createElement("img");
                aX.src = aP.mobileLinkIcon;
                aX.style.cssText = "vertical-align:bottom;";
                aX.className = aj;
                aX.alt = "AdChoices Icon";
                aZ.appendChild(aX);
                a0.style.cssText = "margin-left: 6px;"
            } else {
                if (!aY && aP.showIcon && aP.linkIcon) {
                    var aX = aV.createElement("img");
                    aX.src = aP.linkIcon;
                    aX.className = aj;
                    aX.style.cssText = "vertical-align:bottom;";
                    aX.alt = "AdChoices Icon";
                    aZ.appendChild(aX);
                    a0.style.cssText = "margin-left: 6px;"
                }
            }
            aZ.appendChild(a0);
            if (aY) {
                aZ.style.cssText = aP.mobileLinkStyle
            } else {
                aZ.style.cssText = aP.linkStyle
            }
            var aU = [];
            if (aV.getElementsByClassName !== undefined) {
                aU = aV.getElementsByClassName(ah)
            } else {
                aU = aV.querySelectorAll("." + ah)
            }
            if (aU.length === 0) {
                console.log("Evidon -- " + ah + " not found on page, cant display the consent link.")
            }
            for (var aW = 0; aW < aU.length; aW++) {
                var aT = aZ.cloneNode(true);
                aT.onclick = aR;
                aU[aW].appendChild(aT)
            }
            aO = true;
            var a1 = window.evidon.notice.getTranslations();
            if (a1) {
                aS.setLinkText(a1)
            }
        }
        function aR(aT) {
            if (aT.stopPropagation) {
                aT.stopPropagation()
            }
            window.evidon.notice.dropPixel(af);
            window.evidon.notice.showOptions(null)
        }
        this.setLinkText = function(aZ) {
            if (!aO || !aZ) {
                return
            }
            var aY = window.evidon.notice;
            aY.dropPixel(ag);
            var aV = window.evidon.notice.isMobile();
            var aW = null
              , aT = document
              , aX = aY.isUSOptOutRegulation() ? (aV ? aZ.mobileDoNotSell : aZ.doNotSell) : (aV ? aZ.mobileLinkText : aZ.linkText);
            if (aT.getElementsByClassName !== undefined) {
                aW = aT.getElementsByClassName(ak)
            } else {
                aW = aT.querySelectorAll("." + ak)
            }
            if (aX) {
                for (var aU = 0; aU < aW.length; aU++) {
                    aW[aU].innerText = aX
                }
            }
        }
        ;
        this.createLink = function(aT) {
            if (aT) {
                aP = aT
            } else {
                aP = window.evidon.notice.getLinkStyle()
            }
            if (!aP) {
                return
            }
            aQ()
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
        var aS = this;
        this._getAttributeValue = function(aY, a0) {
            var aX = aY.attributes
              , a1 = null;
            for (var aZ = 0; aZ < aX.length; aZ++) {
                if (aX[aZ].localName == a0) {
                    a1 = aX[aZ].value;
                    break
                }
            }
            return a1
        }
        ;
        this._trackScrolling = function() {
            if (!aS.scrollConsentEnabled) {
                return
            } else {
                var aX = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
                if (aX === 0 || aX > aF) {
                    aS.consentGiven(true, true, true, true);
                    aS.dropPixel(aG)
                }
            }
        }
        ;
        this._trackClicking = function(aX) {
            if (!aS.pageclickConsentEnabled) {
                return
            }
            if (!aX || !aX.target) {
                return
            }
            if (!window.evidon.banner) {
                return
            }
            if (window.evidon.banner.isOnBanner(aX.target)) {
                return
            }
            if (window.evidon.gdprL2 && window.evidon.gdprL2.isOnBanner(aX.target)) {
                return
            }
            aS.consentGiven(true, true, true, true);
            aS.dropPixel(at)
        }
        ;
        this._hookConsentEvents = function() {
            if (document.readyState == "complete") {
                if (aS.regulationConsentTypeId === aB) {
                    setTimeout(function() {
                        if (window.addEventListener) {
                            window.addEventListener("scroll", aS._trackScrolling, false);
                            window.addEventListener("click", aS._trackClicking, false)
                        } else {
                            window.attachEvent("onscroll", aS._trackScrolling);
                            window.attachEvent("onclick", aS._trackClicking)
                        }
                    }, 500)
                }
            } else {
                if (window.addEventListener) {
                    window.addEventListener("load", aS._hookConsentEvents, false)
                } else {
                    window.attachEvent("onload", aS._hookConsentEvents)
                }
            }
        }
        ;
        this._detachEventTracking = function() {
            aS.pageclickConsentEnabled = false;
            aS.scrollConsentEnabled = false;
            try {
                if (window.removeEventListener !== undefined) {
                    window.removeEventListener("click", aS._trackClicking, false)
                } else {
                    window.detachEvent("onclick", aS._trackClicking, false)
                }
                if (window.removeEventListener !== undefined) {
                    window.removeEventListener("scroll", aS._trackScrolling, false)
                } else {
                    window.detachEvent("onscroll", aS._trackScrolling, false)
                }
            } catch (aX) {}
        }
        ;
        if (!this.isMobile()) {
            if (window.addEventListener) {
                window.addEventListener("resize", function() {
                    aS.showNotice()
                })
            } else {
                window.attachEvent("onresize", function() {
                    aS.showNotice()
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
                    } catch (aX) {}
                    aS.showNotice()
                }, false);
                return false
            } else {
                return true
            }
        }
        ;
        var aV = document.getElementById("evidon-notice");
        if (aV) {
            var aW = aV.src;
            var aU = aW.indexOf(".com");
            if (aU !== -1) {
                aW = aW.substr(0, aU + 4);
                y = aW;
                aH = y + "/sitenotice/";
                B = aH + window.evidon.id
            }
            var aO = this._getAttributeValue(aV, "data-options");
            if (aO) {
                if (aO.indexOf("block-domain-check") > -1) {
                    this.blockDomainCheck = true
                }
                if (aO.indexOf("amp-support") > -1) {
                    this.shouldSupportAmp = true
                }
            }
        }
        var aR = this.activeTranslationsLangCode || ((window.navigator.languages && window.navigator.languages.length > 0) ? window.navigator.languages[0] : (window.navigator.userLanguage || window.navigator.language));
        if (aR) {
            if (aR.toLowerCase() === "nb") {
                aR = "no"
            }
            this.activateTranslations(aR.toLowerCase())
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
        var aQ = window.addEventListener ? "addEventListener" : "attachEvent";
        var aP = window[aQ];
        var aT = aQ == "attachEvent" ? "onmessage" : "message";
        aP(aT, function(aY) {
            var aZ = aY.message ? "message" : "data";
            var aX = aY[aZ];
            if (aX == "acceptclicked") {
                aS._closeL3()
            }
        }, false)
    };
    aI.prototype._parseCss = function(aS) {
        var aQ = aS.split(";");
        var aT = {};
        for (var aO = 0; aO < aQ.length; aO++) {
            var aP = aQ[aO].split(":");
            if (aP.length !== 2) {
                continue
            }
            var aR = aP[0].trim();
            var aU = aP[1].trim();
            aT[aR] = aU
        }
        return aT
    }
    ;
    aI.prototype._joinCss = function(aQ) {
        var aO = [];
        for (var aP in aQ) {
            aO.push(aP + ":" + aQ[aP])
        }
        return aO.join(";") + ";"
    }
    ;
    aI.prototype._getStyleValue = function(aQ, aO) {
        var aP = this._parseCss(aQ);
        if (aP && aP.hasOwnProperty(aO)) {
            return aP[aO]
        }
        return null
    }
    ;
    aI.prototype._fixurl = function(aO) {
        if (typeof aO === "undefined" || !aO) {
            return aO
        }
        if (aO.indexOf("http") === 0) {
            return aO
        } else {
            if (aO.indexOf("//") === 0) {
                return aO
            } else {
                return "//" + aO
            }
        }
    }
    ;
    aI.prototype._isScriptLoaded = function(aP) {
        for (var aO = 0; aO < this.scriptsLoaded.length; aO++) {
            if (this.scriptsLoaded[aO] == aP) {
                return true
            }
        }
        return false
    }
    ;
    aI.prototype._getRootDomain = function(aO) {
        var aR = aO;
        var aQ = aR.split(".");
        if (aQ.length === 2) {
            aR = aQ[0]
        } else {
            if (aQ.length >= 3) {
                var aP = aQ[aQ.length - 2];
                if (this._isTwoPartTLD(aP)) {
                    aR = aQ[aQ.length - 3]
                } else {
                    aR = aP
                }
            }
        }
        return aR
    }
    ;
    aI.prototype._isConsentRequired = function(aO) {
        if (aO.hasOwnProperty("regulationConsentTypeId")) {
            return (aO.regulationConsentTypeId !== 0)
        } else {
            if (aO.hasOwnProperty("consentRequired")) {
                return aO.consentRequired
            } else {
                return aO.duration > 0
            }
        }
    }
    ;
    aI.prototype._loadSettings = function(aQ) {
        this.iabEnabled = (typeof aQ.iabEnabled === "undefined") ? true : aQ.iabEnabled;
        if (window.__cmp) {
            this.iabVersion = 1
        } else {
            if (window.__tcfapi) {
                this.iabVersion = 2
            } else {
                this.iabVersion = 2
            }
        }
        this.consentTypeId = aQ.consentid;
        this.privacyAccessTypeId = aQ.accessid;
        this.consentRequired = this._isConsentRequired(aQ);
        this.consentDuration = aQ.duration;
        this.L2Enabled = (typeof aQ.l2enabled === "undefined") ? false : aQ.l2enabled;
        this.gdprEnabled = (typeof aQ.gdprEnabled === "undefined") ? false : aQ.gdprEnabled;
        this.displayDsarInFrame = (typeof aQ.displayDsarInFrame === "undefined") ? false : aQ.displayDsarInFrame;
        this.adChoicesEnabled = (typeof aQ.adChoicesEnabled === "undefined") ? true : aQ.adChoicesEnabled == 1;
        this.closeConsentEnabled = (typeof aQ.closeConsentEnabled === "undefined") ? true : aQ.closeConsentEnabled;
        this.regulationId = (typeof aQ.regulationId === "undefined") ? (this.gdprEnabled ? aD.GDPR : 0) : aQ.regulationId;
        this.regulationConsentTypeId = (typeof aQ.regulationConsentTypeId === "undefined" ? aB : aQ.regulationConsentTypeId);
        this.regulationRightsId = (typeof aQ.regulationRightsId === "undefined") ? (this.regulationId == 0 ? aD.GDPR : aQ.regulationId) : aQ.regulationRightsId;
        this.scrollConsentEnabled = false;
        this.navigationConsentEnabled = false;
        this.pageclickConsentEnabled = false;
        var aO = (typeof aQ.consentactions === "undefined") ? "" : aQ.consentactions;
        if (aO && this.consentRequired) {
            this.scrollConsentEnabled = (aO.indexOf("s") !== -1);
            this.navigationConsentEnabled = (aO.indexOf("n") !== -1);
            this.pageclickConsentEnabled = (aO.indexOf("p") !== -1)
        }
        var aP = (typeof aQ.consentDetailLevel === "undefined") ? "cv" : aQ.consentDetailLevel;
        this.consentDetailCategories = aP.indexOf("c") > -1;
        this.consentDetailVendors = aP.indexOf("v") > -1;
        this.privacypolicylink = this.getPrivacyPolicyLink();
        this.privacyPolicyEnabled = (typeof aQ.privacyPolicyEnabled === "undefined") ? (this.privacypolicylink !== "#") : aQ.privacyPolicyEnabled;
        this.venodrDisplayEnabled = (typeof aQ.vendorDisplayEnabled === "undefined") ? true : aQ.vendorDisplayEnabled;
        this.dnsEnabled = (typeof aQ.dnsEnabled === "undefined") ? (this.isUSOptOutRegulation()) : aQ.dnsEnabled;
        this.displayDnsInFrame = (typeof aQ.displayDnsInFrame === "undefined") ? false : aQ.displayDnsInFrame;
        this.enableAcceptButton = (typeof aQ.enableAcceptButton === "undefined") ? null : aQ.enableAcceptButton;
        this.enableDeclineButton = (typeof aQ.enableDeclineButton === "undefined") ? null : aQ.enableDeclineButton;
        this.enableOptionsButton = (typeof aQ.enableOptionsButton === "undefined") ? null : aQ.enableOptionsButton;
        this.cookiePolicyEnabled = (typeof aQ.cookiePolicyEnabled === "undefined") ? false : aQ.cookiePolicyEnabled;
        this.cookiepolicylink = this.getCookiePolicyLink();
        this.cnilupdatesenabled = (typeof aQ.cnilUpdatesEnabled === "undefined") ? false : aQ.cnilUpdatesEnabled;
        this.displaytimeout = (typeof aQ.displaytimeout === "undefined") ? 0 : aQ.displaytimeout
    }
    ;
    aI.prototype._isTwoPartTLD = function(aQ) {
        var aP = ["co", "com", "info", "web", "info", "gov", "edu", "biz", "net", "org"];
        var aO = ["uk", "us", "fr", "es", "de", "at", "au", "ae", "be", "br", "ca", "ch", "cn", "co", "cz", "dk", "eg", "eu", "fi", "gb", "gr", "hk", "hr", "hu", "ie", "in", "jp", "mx", "nl", "no", "nz", "pl", "ro", "ru", "se"];
        return (aP.indexOf(aQ) !== -1 || aO.indexOf(aQ) !== -1)
    }
    ;
    aI.prototype._getTLD = function(aO) {
        var aQ = aO.split(".")
          , aR = "";
        if (aQ && aQ.length > 1) {
            aR = aQ[aQ.length - 1];
            if (aQ.length >= 3) {
                var aP = aQ[aQ.length - 2];
                if (this._isTwoPartTLD(aP)) {
                    aR = aP + "." + aR
                }
            }
        }
        return aR
    }
    ;
    aI.prototype._createCloseIcon = function(a5, aX, aR, a2, a3, aO, a7) {
        var aS = null
          , aT = document;
        var a4 = this._parseCss(a5)
          , aQ = []
          , a6 = ["stroke", "stroke-width"];
        if (!a4.hasOwnProperty("z-index")) {
            a4["z-index"] = 100
        }
        for (var aY in a4) {
            if (a6.indexOf(aY) === -1) {
                aQ.push(aY + ":" + a4[aY])
            }
        }
        if (typeof a2 === "undefined") {
            a2 = "#333333"
        }
        a2 = a4.hasOwnProperty("stroke") ? a4.stroke : a2;
        if (typeof a3 === "undefined") {
            a3 = 2
        }
        a3 = a4.hasOwnProperty("stroke-width") ? a4["stroke-width"] : a3;
        aQ.push("border:0");
        aQ.push("padding:0");
        aQ.push("background:transparent");
        if (typeof SVGRect !== "undefined") {
            var aZ = "http://www.w3.org/2000/svg";
            aS = aT.createElementNS(aZ, "svg");
            aS.setAttribute("viewBox", "0 0 14 12");
            aS.setAttribute("version", "1.1");
            aS.setAttribute("xmlns", aZ);
            aS.setAttribute("class", aR);
            aS.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
            aS.setAttribute("style", "position:absolute; top:0; left:0;");
            aS.setAttribute("aria-label", aO ? aO + " icon" : "close dialog icon");
            var aU = aT.createElementNS(aZ, "g");
            aU.id = a7 ? "__ghostery-close-icon-svg-" + a7 : "__ghostery-close-icon-svg";
            aU.setAttribute("stroke", "none");
            aU.setAttribute("fill", "none");
            aU.setAttribute("fill-rule", "evenodd");
            aU.setAttribute("stroke-linecap", "square");
            var aV = aT.createElementNS(aZ, "g");
            aV.setAttribute("transform", "translate(-1410.000000, -643.000000)");
            aV.setAttribute("stroke", a2);
            aV.setAttribute("stroke-width", a3);
            var aW = aT.createElementNS(aZ, "g");
            aW.setAttribute("transform", "translate(1411.000000, 643.000000)");
            var a0 = aT.createElementNS(aZ, "path");
            a0.setAttribute("d", "M0.5,0.5 L11.5679722,11.5679722");
            a0.setAttribute("stroke", a2);
            var a1 = aT.createElementNS(aZ, "path");
            a1.setAttribute("d", "M0.5,0.5 L11.5679722,11.5679722");
            a1.setAttribute("transform", "translate(6.000000, 6.000000) scale(-1, 1) translate(-6.000000, -6.000000) ");
            a1.setAttribute("stroke", a2);
            aW.appendChild(a0);
            aW.appendChild(a1);
            aV.appendChild(aW);
            aU.appendChild(aV);
            aS.appendChild(aU)
        } else {
            aS = aT.createElement("img");
            aS.style.cssText = a5;
            aS.src = "//c.evidon.com/pub/ric-close.png";
            aS.alt = "close";
            aS.tabIndex = 0
        }
        var aP = aT.createElement("button");
        aP.id = aX;
        aP.setAttribute("aria-label", aO ? aO + " button" : "close dialog button");
        aP.style.cssText = aQ.join(";");
        aP.appendChild(aS);
        aP.onmouseover = function() {
            this.style.border = "1px solid " + a2
        }
        ;
        aP.onmouseout = function() {
            this.style.border = 0
        }
        ;
        return aP
    }
    ;
    aI.prototype.appendScript = function(aW, aO, aQ) {
        var aS, aV = document.createElement("script"), aU = aR();
        function aR() {
            return document.getElementsByTagName("script")[0] || document.getElementsByTagName("head")[0]
        }
        function aT() {
            aV.onload = aV.onreadystatechange = null;
            aO()
        }
        if (this._isScriptLoaded(aW)) {
            if (aO) {
                aO()
            }
        } else {
            aV.async = true;
            aV.src = aW;
            aV.charset = "utf-8";
            if (typeof aQ === "function") {
                aV.onerror = aQ
            }
            if (aO) {
                aV.onreadystatechange = function() {
                    if (!aS && (this.readyState == "loaded" || this.readyState == "complete")) {
                        aS = true;
                        aT()
                    }
                }
                ;
                aV.onload = aT
            }
            try {
                aU.parentElement.insertBefore(aV, aU);
                this.scriptsLoaded.push(aW)
            } catch (aP) {
                console.log(aP)
            }
        }
    }
    ;
    aI.prototype._getSettings = function() {
        var aY = this;
        if (!this.domain) {
            return null
        }
        function aQ(ba, bb) {
            if (!ba || !bb) {
                return false
            } else {
                return ba.substr(ba.length - bb.length) === bb
            }
        }
        function aS(ba) {
            var be = [];
            for (var bb in aY.settings) {
                bb = bb.toLowerCase();
                var bc = bb.split("|")[0];
                if (!aQ(bc, "/")) {
                    bc += "/"
                }
                var bd = ba.toLowerCase();
                if (!aQ(bd, "/")) {
                    bd += "/"
                }
                if (bc.indexOf(bd) === 0) {
                    be.push(bb)
                }
            }
            return be
        }
        var aW = aS(this.domain)
          , a3 = aY._getRootDomain(aY.domain)
          , a9 = aY._getTLD(this.domain);
        var a7 = aY.domain.substr(0, aY.domain.indexOf(a3)) + a3 + ".*";
        aW = aW.concat(aS(a7));
        aW = aW.concat(aS(a3 + "." + a9));
        aW = aW.concat(aS(a3 + ".*"));
        if (aW.length === 1) {
            aY.activeDomain = aW[0].split("|")[0];
            return this.settings[aW[0]]
        } else {
            if (aW.length > 1) {
                aW.sort(function(ba, bb) {
                    return (bb.length - ba.length)
                });
                var aU = aY.domain + this.path
                  , a5 = a3 + "." + a9 + this.path
                  , a1 = [];
                for (var aT = 0; aT < aW.length; aT++) {
                    var aV = aW[aT];
                    if (aV.indexOf("|") !== -1) {
                        aV = aV.substr(0, aV.indexOf("|"))
                    }
                    if (aV.indexOf("*") !== -1) {
                        aV = aV.replace("*", a9)
                    }
                    if (aU.indexOf(aV) !== -1) {
                        a1.push(aW[aT])
                    }
                }
                if (a1.length === 0) {
                    return null
                } else {
                    if (a1.length === 1) {
                        aY.activeDomain = a1[0].split("|")[0];
                        return aY.settings[a1[0]]
                    } else {
                        var aO = aY.country.id
                          , a8 = null;
                        var aR = []
                          , a6 = []
                          , aX = 0
                          , a4 = 0;
                        if (!aQ(aU, "/")) {
                            aU += "/"
                        }
                        if (!aQ(a5, "/")) {
                            a5 += "/"
                        }
                        for (var aT = 0; aT < a1.length; aT++) {
                            var aZ = a1[aT];
                            var a0 = aZ.split("|")[0];
                            if (a0.indexOf("*") !== -1) {
                                a0 = a0.replace("*", a9)
                            }
                            if (!aQ(a0, "/")) {
                                a0 += "/"
                            }
                            if (aU.indexOf(a0) === 0 && a0.length >= aX) {
                                aR.push(aZ);
                                if (aX === 0) {
                                    aX = a0.length
                                }
                            } else {
                                if (a5.indexOf(a0) !== -1 && a0.length >= a4) {
                                    a6.push(aZ);
                                    a4 = a0.length
                                }
                            }
                        }
                        if (aR.length === 0 && a6.length >= 0) {
                            if (a6.length === 1) {
                                a8 = aY.settings[a6[0]];
                                aY.activeDomain = a6[0].split("|")[0]
                            } else {
                                a1 = a6
                            }
                        } else {
                            if (aR.length === 1) {
                                a8 = aY.settings[aR[0]];
                                aY.activeDomain = aR[0].split("|")[0]
                            } else {
                                if (aR.length > 1) {
                                    a1 = aR
                                }
                            }
                        }
                        if (!a8) {
                            for (var aT = 0; aT < a1.length; aT++) {
                                if (aY.settings[a1[aT]].countries.hasOwnProperty(aO)) {
                                    a8 = aY.settings[a1[aT]];
                                    aY.activeDomain = a1[aT].split("|")[0];
                                    break
                                }
                            }
                        }
                        if (!a8) {
                            var aP = 0;
                            for (var aT = 0; aT < a1.length; aT++) {
                                var a2 = aY.settings[a1[aT]];
                                if (a2.hasOwnProperty("defaultCountry")) {
                                    if (a2.defaultCountry != 0) {
                                        aP = a2.defaultCountry;
                                        break
                                    }
                                }
                            }
                            if (aP !== 0) {
                                for (var aT = 0; aT < a1.length; aT++) {
                                    var a2 = aY.settings[a1[aT]];
                                    if (a2.countries.hasOwnProperty(aP)) {
                                        a8 = a2;
                                        aY.activeDomain = a1[aT].split("|")[0]
                                    }
                                }
                            }
                        }
                        if (!a8) {
                            a8 = aY.settings[a1[0]];
                            aY.activeDomain = a1[0].split("|")[0]
                        }
                        return a8
                    }
                }
            }
        }
        return null
    }
    ;
    aI.prototype._getDefaultConsentCookieData = function(aO, aY, aV) {
        var aW = this.activeSettings
          , aP = {}
          , aZ = {}
          , aU = {};
        if (typeof aO === "object" && aO !== null) {
            aP[this.activeCountryId] = aO
        } else {
            if (this.activecategorySet !== null) {
                var aT = {};
                for (var aR in this.activecategorySet) {
                    var aQ = this.activecategorySet[aR];
                    var aS = (aQ.cEss === 1 || this._is50PercentVendorsTrue(aQ.vendors)) ? true : (aO === true);
                    if (this.regulationConsentTypeId === aC) {
                        aT[aR] = (this.isGPCApply() && aQ.dataSharing == 1) ? false : aS
                    } else {
                        aT[aR] = (this.isGPCApply() && aQ.dataSharing == 1) ? (aO === true) : aS
                    }
                }
                aP[this.activeCountryId] = aT
            } else {
                aP[this.activeCountryId] = (aO === true)
            }
        }
        if (typeof aY === "object" && aY !== null) {
            aZ[this.activeCountryId] = aY
        } else {
            if (this.activecategorySet !== null) {
                var a1 = {};
                for (var aR in this.activecategorySet) {
                    var aQ = this.activecategorySet[aR];
                    for (var aX in aQ.vendors) {
                        var a0 = aQ.vendors[aX].vEss === 1 ? true : (aY === true);
                        a0 = aQ.cEss === 1 ? true : a0;
                        if (this.regulationConsentTypeId === aC) {
                            a1[aX] = (this.isGPCApply() && aQ.dataSharing == 1) ? false : a0
                        } else {
                            a1[aX] = (this.isGPCApply() && aQ.dataSharing == 1) ? (aY === true) : a0
                        }
                    }
                }
                aZ[this.activeCountryId] = a1
            } else {
                aZ[this.activeCountryId] = (aY === true)
            }
        }
        if (aV) {
            aU[this.activeCountryId] = aV
        } else {
            if (aV === true) {
                aU[this.activeCountryId] = true
            } else {
                aU[this.activeCountryId] = false
            }
        }
        return {
            consent_date: new Date().toISOString(),
            categories: aP,
            vendors: aZ,
            cookies: aU,
            gpc: this.isGPCApply()
        }
    }
    ;
    aI.prototype._getConsentCookieExpDate = function(aP) {
        var aO = aP ? new Date(aP) : new Date();
        var aQ = (this.consentDuration > 0) ? this.consentDuration : 12;
        aO.setMonth(aO.getMonth() + aQ);
        return aO
    }
    ;
    aI.prototype._getConsentCookieDomainPath = function() {
        var aP = "/";
        var aR = this.activeSettings;
        var aO = aR.hasOwnProperty("includeSubdomains") ? aR.includeSubdomains : 0;
        if (aO === 2) {
            aP = this.activeDomain;
            if (!aP) {
                console.error("Attempted to set a cookie without a valid settings object");
                return
            }
            var aQ = aP.indexOf("/");
            if (aQ !== -1) {
                aP = aP.substring(aQ)
            }
            aP = window.location.pathname.substr(0, aP.length)
        }
        return aP
    }
    ;
    aI.prototype._getConsentCookieDomain = function() {
        var aP = this.activeSettings;
        var aO = aP.hasOwnProperty("includeSubdomains") ? aP.includeSubdomains : 0;
        if (aO === 1) {
            return "." + this._getRootDomain(this.domain) + "." + this._getTLD(this.domain)
        }
        return null
    }
    ;
    aI.prototype._isConsentGiven = function() {
        var aO = this._getConsentCookie();
        return (null !== aO)
    }
    ;
    aI.prototype._deleteConsentCookie = function() {
        var aO = this._getConsentCookieDomain();
        var aQ = this._getConsentCookieDomainPath();
        var aP = new Date(1970,1,1);
        this._removeLocalStorageItem(D + this.activeSettings.id);
        this._writeCookie(C, "", aP.toUTCString(), aQ, aO)
    }
    ;
    aI.prototype.getConsentData = function() {
        var aP = this.activeSettings.hasOwnProperty("includeSubdomains") ? this.activeSettings.includeSubdomains : 0;
        var aO;
        if (aP == 1) {
            aO = this._getConsentCookie()
        }
        if (!aO) {
            aO = this._getConsentLocalStorage()
        }
        if (!aO) {
            aO = {
                name: null,
                value: null
            }
        }
        return aO
    }
    ;
    aI.prototype._getConsentLocalStorage = function() {
        var aQ = D + this.activeSettings.id;
        var aO = this._readLocalStorage(aQ);
        if (aO) {
            try {
                aO = JSON.parse(aO)
            } catch (aP) {}
            return {
                name: aQ,
                value: aO
            }
        } else {
            return aO
        }
    }
    ;
    aI.prototype._getConsentCookie = function() {
        return this._getCookie(C)
    }
    ;
    aI.prototype._setConsentCookie = function(aX, aO, aY, aU, aP, aQ) {
        if (typeof aP === "undefined" || aP === null) {
            aP = this.regulationConsentTypeId
        }
        if (aP === 0) {
            aP = aB
        }
        var aR = this._getDefaultConsentCookieData(aO, aY, aU);
        var aT = this._getConsentCookieExpDate(aX);
        var aW = this._getConsentCookieDomainPath();
        var aS = this._getConsentCookieDomain();
        if (aX) {
            aR.consent_date = aX.toISOString()
        }
        aR.consent_type = aP;
        if (!aR.hasOwnProperty("consent_date")) {
            aR.consent_date = new Date()
        }
        var aV = this.activeSettings.hasOwnProperty("includeSubdomains") ? this.activeSettings.includeSubdomains : 0;
        if (this._writeLocalStorage(D + this.activeSettings.id, JSON.stringify(aR))) {
            if (aV != 1) {
                delete (aR.categories);
                delete (aR.vendors);
                delete (aR.cookies)
            }
        }
        if (this._getSuppressionCookie()) {
            this.dropSuppressionCookie(-1)
        }
        if (aQ !== false) {
            if (!this._writeCookie(C, JSON.stringify(aR), aT.toUTCString(), aW, aS)) {
                return false
            }
        }
        return aR
    }
    ;
    aI.prototype._isAllVendorsRequired = function(aQ) {
        var aP = true;
        for (var aO = 0; aO < aQ.length; aO++) {
            if (aQ[aO].Required == 0) {
                aP = false
            }
        }
        return aP
    }
    ;
    aI.prototype._is50PercentVendorsTrue = function(aS) {
        var aO = 0;
        var aQ = 0;
        var aP = 50;
        for (var aR in aS) {
            aQ = aQ + 1;
            if (aS[aR].vEss === 1) {
                aO = aO + 1
            }
        }
        if (aO / aQ * 100 > aP) {
            return true
        }
        return false
    }
    ;
    aI.prototype._updateConsentData = function(a4, aY) {
        this.gpcConflict = 0;
        var aT = this.getConsentData().value;
        var aQ = (aT && aT.consent_date) ? new Date(aT.consent_date) : new Date();
        var aS = (aT && aT.consent_type) ? aT.consent_type : aB;
        var a0 = 50;
        var aV = this._getConsentCookieExpDate(aQ);
        var aZ = this._getConsentCookieDomainPath();
        var aU = this._getConsentCookieDomain();
        if (!aT) {
            aT = {}
        }
        if (!aT.hasOwnProperty(a4)) {
            aT[a4] = {}
        }
        aT[a4][this.activeCountryId] = aY;
        if (!aT.hasOwnProperty("consent_date")) {
            aT.consent_date = aQ
        }
        if (!aT.hasOwnProperty("consent_type")) {
            aT.consent_type = aS
        }
        if (a4 == "vendors" && this.optOutDetails.categories) {
            var aP = JSON.parse(JSON.stringify(this.optOutDetails.categories));
            var aO = aT.categories[this.activeCountryId];
            for (var aX in aO) {
                var a1 = 0;
                var aR = 0;
                if (aP[aX].required === 1 && !this.isGPCApply()) {
                    aO[aX] = true
                } else {
                    if (aP.hasOwnProperty(aX)) {
                        var a2 = aP[aX]["vendors"];
                        var a3 = this.activeSettings.vendorLinks;
                        if (this.consentDetailCategories && this.isGPCApply() && aP[aX]["dataSharing"] == 1) {
                            a2.forEach(function(a5) {
                                for (var a6 in a3) {
                                    if (a3[a6] == a5.CompanyIdentifier) {
                                        aY[a6] = aO[aX]
                                    }
                                }
                            })
                        } else {
                            a2.forEach(function(a5) {
                                for (var a6 in a3) {
                                    if (a3[a6] == a5.CompanyIdentifier) {
                                        a1 = a1 + 1;
                                        if (aY[a6] == true) {
                                            aR = aR + 1
                                        }
                                    }
                                }
                            });
                            aO[aX] = false;
                            if (aR / a1 * 100 > a0) {
                                aO[aX] = true
                            }
                        }
                    }
                }
            }
            aT.categories[this.activeCountryId] = aO
        }
        aT.gpc = this.isGPCApply();
        var aW = this.activeSettings.hasOwnProperty("includeSubdomains") ? this.activeSettings.includeSubdomains : 0;
        if (this._writeLocalStorage(D + this.activeSettings.id, JSON.stringify(aT))) {
            if (aW != 1) {
                delete (aT.categories);
                delete (aT.vendors);
                delete (aT.cookies)
            }
        }
        if (this._getSuppressionCookie()) {
            this.dropSuppressionCookie(-1)
        }
        this._writeCookie(C, JSON.stringify(aT), aV.toUTCString(), aZ, aU)
    }
    ;
    aI.prototype._updateConsentedCategories = function(aO) {
        this._updateConsentData("categories", aO)
    }
    ;
    aI.prototype._updateConsentedCookies = function(aO) {
        this._updateConsentData("cookies", aO)
    }
    ;
    aI.prototype._updateConsentedVendors = function(aS) {
        var aQ = this.getConsentData().value;
        if (!aQ.hasOwnProperty("vendors")) {
            aQ.vendors = {}
        }
        var aO = aQ.vendors[this.activeCountryId];
        if (!aS) {
            var aP = this.getActiveVendors();
            aS = this._getNewVendors(aP, aO)
        }
        var aT = {};
        if (Array.isArray(aO)) {
            for (var aR = 0; aR < aO.length; aR++) {
                aT[aO[aR]] = true
            }
        } else {
            if (typeof aO === "object") {
                for (var aU in aO) {
                    aT[aU] = aO[aU]
                }
            }
        }
        if (Array.isArray(aS)) {
            for (var aR = 0; aR < aS.length; aR++) {
                aT[aS[aR]] = true
            }
        } else {
            if (typeof aS === "object") {
                for (var aU in aS) {
                    aT[aU] = aS[aU]
                }
            }
        }
        this._updateConsentData("vendors", aT)
    }
    ;
    aI.prototype._getSuppressionCookie = function() {
        return this._getCookie(aJ)
    }
    ;
    aI.prototype._createListFromItem = function(aP) {
        var aR = [];
        try {
            for (var aQ in aP) {
                if (aP[aQ] === true) {
                    aR.push(aQ.toLowerCase())
                }
            }
        } catch (aO) {}
        return aR.join()
    }
    ;
    aI.prototype._runAdobeOptIn = function(aP, aS) {
        if (window.adobe && window.adobe.optIn) {
            if (aP && aP.hasOwnProperty("all")) {
                adobe.optIn.approveAll()
            } else {
                var aO = []
                  , aQ = [];
                for (var aR in aS) {
                    switch (aR) {
                    case b:
                        if (aS[aR] === true) {
                            aO.push(adobe.OptInCategories.ADCLOUD)
                        } else {
                            aQ.push(adobe.OptInCategories.ADCLOUD)
                        }
                        break;
                    case c:
                        if (aS[aR] === true) {
                            aO.push(adobe.OptInCategories.ANALYTICS)
                        } else {
                            aQ.push(adobe.OptInCategories.ANALYTICS)
                        }
                        break;
                    case d:
                        if (aS[aR] === true) {
                            aO.push(adobe.OptInCategories.AAM)
                        } else {
                            aQ.push(adobe.OptInCategories.AAM)
                        }
                        break;
                    case e:
                        if (aS[aR] === true) {
                            aO.push(adobe.OptInCategories.CAMPAIGN)
                        } else {
                            aQ.push(adobe.OptInCategories.CAMPAIGN)
                        }
                        break;
                    case f:
                        if (aS[aR] === true) {
                            aO.push(adobe.OptInCategories.ECID)
                        } else {
                            aQ.push(adobe.OptInCategories.ECID)
                        }
                        break;
                    case g:
                        if (aS[aR] === true) {
                            aO.push(adobe.OptInCategories.LIVEFYRE)
                        } else {
                            aQ.push(adobe.OptInCategories.LIVEFYRE)
                        }
                        break;
                    case h:
                        if (aS[aR] === true) {
                            aO.push(adobe.OptInCategories.TARGET)
                        } else {
                            aQ.push(adobe.OptInCategories.TARGET)
                        }
                        break;
                    case i:
                        if (aS[aR] === true) {
                            aO.push(adobe.OptInCategories.VIDEO_ANALYTICS)
                        } else {
                            aQ.push(adobe.OptInCategories.VIDEO_ANALYTICS)
                        }
                        break
                    }
                }
                if (aO.length > 0) {
                    adobe.optIn.approve(aO)
                }
                if (aQ.length > 0) {
                    adobe.optIn.deny(aQ)
                }
            }
        }
    }
    ;
    aI.prototype._triggerTagManagerEvent = function(aO, a5, aQ) {
        if (this.tagManagerEventFired) {
            return
        }
        var a4 = (a5) ? this._createListFromItem(a5) : "";
        var aP = (aO) ? this._createListFromItem(aO) : "";
        try {
            var aR = window.dataLayer || [];
            aR.push({
                event: aK,
                consentCategories: aP,
                consentVendors: a4
            })
        } catch (aS) {}
        if (typeof window.evidon.enableGoogleConsentSupport === "undefined" || window.evidon.enableGoogleConsentSupport) {
            try {
                var aZ = ["google-adsense", "doubleclick", "doubleclick-bid-manager-formerly-invite-media", "admeld", "google-adwords", "google-display-network", "admob-google", "adometry", "google-ad-services", "google-mobile-ads", "googleima"];
                var a0 = ["google-analytics"];
                var aY = [];
                var aX = [];
                var aV = "denied"
                  , aU = "denied"
                  , aW = "denied"
                  , aT = "denied";
                if (a4 == "all") {
                    aV = "granted";
                    aU = "granted";
                    aW = "granted";
                    aT = "granted"
                } else {
                    if (a4) {
                        var a3 = a4.split(",");
                        for (var a2 = 0; a2 < a0.length; a2++) {
                            if (a3.indexOf(a0[a2]) !== -1) {
                                aV = "granted"
                            }
                        }
                        for (var a2 = 0; a2 < aZ.length; a2++) {
                            if (a3.indexOf(aZ[a2]) !== -1) {
                                aU = "granted"
                            }
                        }
                        for (var a2 = 0; a2 < aZ.length; a2++) {
                            if (a3.indexOf(aZ[a2]) !== -1) {
                                aW = "granted"
                            }
                        }
                        for (var a2 = 0; a2 < aZ.length; a2++) {
                            if (a3.indexOf(aZ[a2]) !== -1) {
                                aT = "granted"
                            }
                        }
                    }
                }
                if (this.companyId != 1782 && this.googleTemplateEnabled !== undefined) {
                    window.dataLayer = window.dataLayer || [];
                    function a1() {
                        dataLayer.push(arguments)
                    }
                    a1("consent", "update", {
                        ad_storage: aU,
                        analytics_storage: aV,
                        ad_user_data: aW,
                        ad_personalization: aT
                    });
                    a1("set", "ads_data_redaction", aU == "granted" ? false : true)
                }
                else{
                    window.evidon.updateGoogleConsent({
                        ad_storage: aU,
                        analytics_storage: aV,
                        ad_user_data: aW,
                        ad_personalization: aT
                    })
                }
            } catch (aS) {}
        }
        try {
            if (window.utag) {
                window.utag.link({
                    event_name: aK,
                    consent_categories: aP,
                    consent_vendors: a4
                })
            }
        } catch (aS) {}
        try {
            if (window.tC) {
                tC.event[aK](this, {
                    consent_categories: aP,
                    consent_vendors: a4
                })
            }
        } catch (aS) {}
        this.tagManagerEventFired = true
    }
    ;
    aI.prototype._getCategoriesReturnObject = function(aO) {
        var aP = {};
        if (typeof aO === "undefined") {
            aO = (this._getConsentedCategories() || {})
        }
        if (!aO) {
            aO = {}
        }
        if (aO === true || this.consentDetailCategories === false) {
            aP = {
                all: true
            }
        } else {
            aP = aO
        }
        return aP
    }
    ;
    aI.prototype._getVendorsReturnObject = function(aQ) {
        if (typeof aQ === "undefined") {
            aQ = (this._getConsentedVendors() || {})
        }
        if (aQ === true) {
            return {
                all: true
            }
        } else {
            var aR = {};
            if (Array.isArray(aQ)) {
                for (var aO = 0; aO < aQ.length; aO++) {
                    var aP = aQ[aO];
                    if (this.vendorList.hasOwnProperty(aP) === false) {
                        console.error("Vendor " + aP + " not found in vendorList");
                        continue
                    }
                    aR[this.vendorList[aP]] = true
                }
            } else {
                if (typeof aQ === "object") {
                    if (Object.isEmpty(aQ)) {
                        aR = {
                            all: true
                        }
                    } else {
                        if (aQ.hasOwnProperty("all") && aQ.all) {
                            aR = aQ
                        } else {
                            for (var aP in aQ) {
                                if (this.vendorList.hasOwnProperty(aP) === false) {
                                    console.error("Vendor " + aP + " not found in vendorList");
                                    continue
                                }
                                aR[this.vendorList[aP]] = aQ[aP]
                            }
                        }
                    }
                } else {
                    console.error("vendors object not recognized", aQ)
                }
            }
            return aR
        }
    }
    ;
    aI.prototype._getCookiesReturnObject = function(aO) {
        var aP = {};
        if (typeof aO === "undefined") {
            aO = (this._getConsentedCookies() || {})
        }
        if (aO === true) {
            aP = {
                all: true
            }
        } else {
            if (aO && typeof aO === "object") {
                if (Object.isEmpty(aO)) {
                    aO.all = true
                }
                aP = aO
            }
        }
        return aP
    }
    ;
    aI.prototype._runConsentCallback = function(aO, aT, aP) {
        if (this.regulationConsentTypeId == aC && (aO !== undefined || aT !== undefined)) {
            var aQ = 0;
            if (typeof aO === "object" && aO !== null) {
                for (var aS in aO) {
                    if (aO[aS] === true) {
                        aQ = 1;
                        break
                    }
                }
            }
            if (typeof aT === "object" && aT !== null) {
                for (var aR in aT) {
                    if (aT[aR] === true) {
                        aQ = 1;
                        break
                    }
                }
            }
            this.consentIsGiven = (aQ !== 0)
        } else {
            this.consentIsGiven = true
        }
        if (this.consentCallbackExecuted && !this.shouldSupportAmp) {
            return
        }
        aO = this._getCategoriesReturnObject(aO);
        if (Object.isEmpty(aO)) {
            aO.all = true
        }
        aT = this._getVendorsReturnObject(aT);
        aP = this._getCookiesReturnObject(aP);
        if (window.evidon && window.evidon.priorConsentCallback) {
            window.evidon.priorConsentCallback(aO, aT, aP)
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
        this._triggerTagManagerEvent(aO, aT, aP);
        this._runAdobeOptIn(aO, aT)
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
            } catch (aO) {}
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
        var aO = document.getElementById(ar);
        var aP = document.getElementById(aa);
        if (aO) {
            aO.style.display = "none";
            aO.style.opacity = "0";
            setTimeout(function() {
                try {
                    aO.parentElement.removeChild(aO)
                } catch (aQ) {
                    console.log(aQ)
                }
            }, 200)
        }
        if (aP) {
            aP.style.display = "none";
            aP.style.opacity = 0;
            setTimeout(function() {
                try {
                    aP.parentElement.removeChild(aP)
                } catch (aQ) {
                    console.log(aQ)
                }
            }, 200)
        }
    }
    ;
    aI.prototype._navigationConsentGiven = function() {
        if (!this.navigationConsentEnabled) {
            return false
        }
        var aP = document.referrer;
        var aO = this.activeDomain;
        if (aO.substr(aO.length - 1) === "/") {
            aO = aO.substr(0, aO.length - 1)
        }
        if (aP && aP != document.URL && aP.indexOf(aO) > -1) {
            this.dropPixel(ao);
            return true
        } else {
            return false
        }
    }
    ;
    aI.prototype._setTranslationValues = function(aR, aS) {
        for (var aQ in aR) {
            var aO = aR[aQ];
            if (aO && typeof aO === "object") {
                var aP = aO.id;
                aR[aQ] = aS[aP]
            }
        }
        return aR
    }
    ;
    aI.prototype._getTranslationId = function() {
        var aR = this.activeSettings;
        if (!aR) {
            return null
        }
        if (aR.translations.hasOwnProperty(this.languageRoot)) {
            var aS = aR.translations[this.languageRoot];
            var aP = 0;
            if (aS.hasOwnProperty(this.languageCode)) {
                aP = aS[this.languageCode]
            } else {
                if (aS.hasOwnProperty(this.languageRoot)) {
                    aP = aS[this.languageRoot]
                } else {
                    if (this.languageRoot == "en" && aS.hasOwnProperty("en-us")) {
                        aP = aS["en-us"]
                    } else {
                        function aO(aU) {
                            for (var aT in aU) {
                                return aT
                            }
                        }
                        var aQ = aO(aS);
                        if (aQ) {
                            aP = aS[aQ]
                        }
                    }
                }
            }
            return aP
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
            var aU = this.activeSettings;
            if (window.evidon && window.evidon.usegranulartranslations !== false) {
                window.evidon.usegranulartranslations = true
            }
            var aQ = (typeof window.evidon.usegranulartranslations === "undefined") ? false : window.evidon.usegranulartranslations;
            if (aQ) {
                this.loadTranslations()
            } else {
                if (aU.translations.hasOwnProperty(this.languageRoot)) {
                    if (this.translations.hasOwnProperty(this.languageRoot)) {
                        var aR = this._getTranslationId();
                        this.activeTranslationId = aR;
                        if (this.activeTranslationId) {
                            var aV = this.translations[this.languageRoot];
                            if (aV.hasOwnProperty("items")) {
                                this.activeTranslations = this._setTranslationValues(aV[aR], aV.items);
                                if (aV.hasOwnProperty("categories")) {
                                    var aO = null;
                                    if (aV.categories.hasOwnProperty(this.categorySetId)) {
                                        aO = aV.categories[this.categorySetId]
                                    } else {
                                        aO = aV.categories["0"]
                                    }
                                    var aP = this.activeTranslations.languageCode;
                                    if (aO.hasOwnProperty(aP)) {
                                        this.activeTranslations.categories = aO[aP]
                                    } else {
                                        var aT = Object.keys(aO);
                                        var aS = aT[0];
                                        this.activeTranslations.categories = aO[aS]
                                    }
                                }
                            } else {
                                this.activeTranslations = aV[aR]
                            }
                        }
                    } else {
                        this.activateTranslations(this.languageCode || this.languageRoot)
                    }
                } else {
                    this.activateTranslations(aU.defaultTranslation.code)
                }
            }
        }
    }
    ;
    aI.prototype._shouldShowConsentUI = function() {
        var aO = this._isConsentGiven();
        var aP = this._getSuppressionCookie();
        if (this.consentTypeId === H) {
            return false
        } else {
            if (aP) {
                return false
            } else {
                if (!this.consentRequired && !aO) {
                    return true
                } else {
                    return !aO
                }
            }
        }
    }
    ;
    aI.prototype._showConsentUI = function() {
        var aO = this._getSuppressionCookie();
        if (this.consentTypeId === H || aO) {
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
        var aP = ""
          , aO = this;
        if (this.privacyAccessTypeId === a.LINK) {
            aP = this.getLinkStyle();
            if (aP && window.evidon.link) {
                window.evidon.link.createLink(aP);
                if (this.activeTranslations) {
                    window.evidon.link.setLinkText(this.activeTranslations)
                }
            }
        } else {
            setTimeout(function() {
                var aQ = ((typeof window.evidon.banner !== "undefined" && window.evidon.banner.isVisible()) || (typeof window.evidon.barrier !== "undefined" && window.evidon.barrier.isVisible()));
                if (!aQ) {
                    aP = aO.getButtonStyle();
                    if (aP && window.evidon.button) {
                        window.evidon.button.createButton(aP);
                        if (aO.activeTranslations) {
                            window.evidon.button.setButtonText(aO.activeTranslations)
                        }
                        aO.checkConsentedVendors();
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
        var aP = this._getSuppressionCookie();
        if (!aP) {
            if (this._isConsentGiven()) {
                this._isGPCConflict();
                this._runConsentCallback()
            } else {
                var aO = this._getConsentLocalStorage();
                if (aO) {
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
        var aP = this.getConsentData();
        if (aP.name !== null) {
            var aO = aP.value.hasOwnProperty("gpc") ? aP.value.gpc : null;
            if (aO === 0 && this.isGPCApply() === 1) {
                this.gpcConflict = 1;
                this.showPreferencesDialog();
                return
            }
        }
    }
    ;
    aI.prototype._runOptOutFlow = function() {
        var aP = this._getSuppressionCookie();
        this._isGPCConflict();
        if (this._isConsentGiven()) {
            if (this.consentDetailCategories) {
                var aO = this._getConsentedCategories();
                if (aO && !aO.hasOwnProperty("all")) {
                    this._runConsentCallback(aO, undefined, null)
                }
            } else {
                if (this.consentDetailVendors) {
                    var aQ = this._getConsentedVendors();
                    if (aQ) {
                        this._runConsentCallback(undefined, aQ, null)
                    }
                }
            }
        } else {
            if (!aP) {
                this._setConsentCookie(null, true, true, true, this.regulationConsentTypeId, false)
            }
            this._runConsentCallback();
            if (!aP) {
                this._showConsentUI()
            }
        }
        this._showConsentAccess()
    }
    ;
    aI.prototype._getActiveCountryObject = function() {
        if (this.country && this.activeSettings) {
            var aO = this.country.id;
            if (this.activeStateId && this.activeSettings.hasOwnProperty("states") && this.activeSettings.states.hasOwnProperty(this.activeStateId)) {
                return this.activeSettings.states[this.activeStateId]
            } else {
                if (this.activeSettings.countries.hasOwnProperty(aO)) {
                    this.activeCountryId = aO;
                    return this.activeSettings.countries[aO]
                } else {
                    this.activeCountryId = this.activeSettings.defaultCountry;
                    return this.activeSettings.countries[this.activeSettings.defaultCountry]
                }
            }
        }
        return null
    }
    ;
    aI.prototype.dropPixel = function(aO, aR) {
        var aQ = window.evidon.id;
        var aT = this.activeSettings.id;
        var aP = this.activeCountryId;
        var aV = av;
        if (aV.substr(aV.length - 1) !== "/") {
            aV += "/"
        }
        aV += aQ + "/" + aT + "/" + aP + "/" + aO + "/" + this.consentTypeId + "/" + this.privacyAccessTypeId;
        if (this.activeTranslationId != 0) {
            aV += "/" + this.activeTranslationId
        }
        if (this.pixelsDropped.indexOf(aV) === -1 || aR) {
            this.pixelsDropped.push(aV);
            var aU = [];
            aU.push("consent=" + ((this.consentIsGiven) ? "1" : "0"));
            if (this.customerUserId) {
                aU.push("u=" + encodeURI(this.customerUserId))
            }
            if (typeof this.regulationId !== "undefined" && this.regulationId !== null) {
                aU.push("regulationid=" + this.regulationId)
            }
            if (typeof this.regulationConsentTypeId !== "undefined" && this.regulationConsentTypeId !== null) {
                aU.push("regulationconsenttypeid=" + this.regulationConsentTypeId)
            }
            if (typeof this.activeStateId !== "undefined" && this.activeStateId !== null) {
                aU.push("stid=" + this.activeStateId)
            }
            if (typeof this.userGpcEnabled !== "undefined" && this.userGpcEnabled !== null) {
                aU.push("bgpc=" + this.userGpcEnabled)
            }
            if (typeof this.noticeGpcEnabled !== "undefined" && this.noticeGpcEnabled !== null) {
                aU.push("ngpc=" + this.noticeGpcEnabled)
            }
            var aW = this.getParentOrigin();
            if (aW) {
                aU.push("d=" + aW)
            }
            aV += "?" + aU.join("&");
            aV = aV.substring(0, 2048);
            var aS = new Image(0,0);
            aS.style.display = "none";
            aS.src = aV
        }
    }
    ;
    aI.prototype.consentGiven = function(aP, aO, aT, aS, aQ) {
        var aR = false;
        if (typeof aQ === "undefined" || aQ === null) {
            aQ = aB
        }
        if (!this._isConsentGiven() && !this.shouldSupportAmp) {
            aR = this._setConsentCookie(null, aO, aT, aS, aQ)
        } else {
            aR = this._isConsentGiven()
        }
        this._runConsentCallback(aO, aT, aS);
        this._detachEventTracking();
        if (!this.shouldSupportAmp) {
            if (window.evidon.banner) {
                window.evidon.banner.destroyNotice()
            }
            if (window.evidon.barrier) {
                window.evidon.barrier.destroyNotice()
            }
        }
        if (aR) {
            if (typeof aP === "undefined" || aP === false) {
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
    aI.prototype.consentChanged = function(aO, aQ, aP) {
        if (window.evidon.consentChangedCallback !== undefined && this.consentChangedCallbackExecuted) {
            window.evidon.consentChangedCallback(aO, aQ, aP)
        }
        this.consentChangedCallbackExecuted = false;
        this.tagManagerEventFired = false;
        aQ = this._getVendorsReturnObject(aQ);
        aP = this._getCookiesReturnObject(aP);
        this._triggerTagManagerEvent(aO, aQ, aP);
        this._runAdobeOptIn(aO, aQ)
    }
    ;
    aI.prototype.RejectGiven = function() {
        this.consentGiven(true, false, false, false, aC);
        var aO = this._getConsentedCategories();
        var aR = this._getConsentedVendors();
        var aP = this._getConsentedCookies();
        if (window.evidon.consentRejectCallback !== undefined && !this.consentRejectCallbackExecuted) {
            window.evidon.consentRejectCallback(aO, aR, aP)
        }
        this.consentRejectCallbackExecuted = true;
        this.tagManagerEventFired = false;
        var aS = this._getVendorsReturnObject(aR);
        var aQ = this._getCookiesReturnObject(aP);
        this._triggerTagManagerEvent(aO, aS, aQ);
        this._runAdobeOptIn(aO, aS)
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
        var aO = window.evidon.id;
        var aR = this.activeSettings.id;
        var aP = this.activeCountryId;
        var aQ = this.languageCode;
        return ab + aO + "/" + aR + "/" + aP + "?lang=" + aQ
    }
    ;
    aI.prototype.getDataRequestUrl = function(aR) {
        var aO = window.evidon.id;
        var aS = this.activeSettings.id;
        var aP = this.activeCountryId;
        var aU = this.activeStateId ? this.activeStateId : 0;
        var aT = this.regulationRightsId;
        var aQ = aR ? "embed=1" : "";
        return K + aO + "/" + aS + "/" + aP + "/" + aT + "/" + aU + "?" + aQ
    }
    ;
    aI.prototype.getDoNotSellRequestUrl = function(aR) {
        var aO = window.evidon.id;
        var aS = this.activeSettings.id;
        var aP = this.activeCountryId;
        var aU = this.activeStateId ? this.activeStateId : 0;
        var aT = this.regulationId;
        var aQ = aR ? "embed=1" : "";
        return K + aO + "/" + aS + "/" + aP + "/" + aT + "/" + aU + "?doNotSell=1&" + aQ
    }
    ;
    aI.prototype.getPrivacyPolicyLink = function() {
        if (!this.activeCountryId) {
            return "#"
        }
        var aP = this.activeSettings;
        var aO = this._getActiveCountryObject();
        if (aO && aP.privacyLinks && aP.privacyLinks.hasOwnProperty(aO.privacyLinkId)) {
            return this._fixurl(this.activeSettings.privacyLinks[aO.privacyLinkId])
        }
        return "#"
    }
    ;
    aI.prototype.getCookiePolicyLink = function() {
        if (!this.activeCountryId) {
            return "#"
        }
        var aP = this.activeSettings;
        var aO = this._getActiveCountryObject();
        if (aO && aP.cookieLinks && aP.cookieLinks.hasOwnProperty(aO.cookieLinkId)) {
            return this._fixurl(this.activeSettings.cookieLinks[aO.cookieLinkId])
        }
        return "#"
    }
    ;
    aI.prototype.showPreferencesDialog = function(aP, aQ) {
        var aO = this;
        if (!window.evidon.preferencesDialog) {
            NUM_STACK++;
            if (NUM_STACK > MAXIMUM_STACK) {
                throw new RangeError("Unable to load the script.")
            }
            setTimeout(function() {
                aO.appendScript(aH + ax, function() {
                    aO.showPreferencesDialog(aP, aQ)
                })
            }, 100);
            window.evidon.events.subscribe("l2closed", function() {
                aO._showConsentAccess()
            }, 1)
        } else {
            if (window.evidon.preferencesDialog.isDisplayed && window.evidon.preferencesDialog.isDisplayed()) {
                return
            }
            if (aP === undefined) {
                window.evidon.preferencesDialog.TAB_ID = aP;
                window.evidon.preferencesDialog.TAB_SECONDARY_ID = aQ;
                if (this.isUSOptOutRegulation() && !this._isConsentGiven() && this.dnsRightsType !== 0) {
                    if (this.dnsEnabled) {
                        aP = this.PREFDIAG_TABS.DONOTSELL
                    }
                }
                if (this.iabEnabled && this.iabVersion === 2 && window.evidon.cmpv2) {
                    window.evidon.cmpv2.consentUIShown()
                }
            }
            if (aP) {
                window.evidon.preferencesDialog.TAB_ID = aP
            }
            if (aQ) {
                window.evidon.preferencesDialog.TAB_SECONDARY_ID = aQ
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
    aI.prototype.showOptionPanel = function(aP) {
        var aO = this;
        if (!window.evidon.gdprL2) {
            if (P.indexOf(this.companyId) > -1) {
                this.appendScript(aH + Q.L2_SCRIPT, function() {
                    aO.showOptionPanel(aP)
                })
            } else {
                this.appendScript(aH + V, function() {
                    aO.showOptionPanel(aP)
                })
            }
            this.dropPixel(U)
        } else {
            window.evidon.gdprL2.showOverlay(aP)
        }
    }
    ;
    aI.prototype.showOptions = function(aO, aP, aQ) {
        if (this.L2Enabled) {
            if (this.getPreferencesDialogV2Enabled()) {
                this.showPreferencesDialog(aP, aQ)
            } else {
                this.showOptionPanel(aO)
            }
        } else {
            this.showConsentTool(aO)
        }
    }
    ;
    aI.prototype.showConsentTool = function(aT) {
        var aQ = (this.activeSettings.consentDisplayType === undefined) ? 1 : (this.activeSettings.consentDisplayType || 1);
        var aU = (aQ == X || (aQ == Y && window.location.protocol.indexOf("https") === -1));
        if (aU) {
            var aO = document.createElement("div");
            aO.style.cssText = "background-color: #000000; opacity:.7; position:fixed;top:0;left:0;bottom:0;right:0; z-index:2147483640;";
            aO.id = ar;
            document.body.appendChild(aO);
            var aR = document.createElement("div");
            aR.id = aa;
            if (this.isMobile()) {
                aR.style.cssText = "position:absolute; top:0;left:0; bottom:0; right:0;;z-index:2147483647; padding: 28px 0 0 0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-y:scroll;"
            } else {
                aR.style.cssText = "position:fixed; top: 10%;left:20%; width:60%;height:80%;z-index:2147483647; padding: 28px 0 0 0;"
            }
            var aP = document.createElement("button");
            aP.style.cssText = "position:absolute; top:4px;right:8px;color:white; background:transparent;font-size:12px;border:0; psdding:4px;cursor:pointer;padding:0;";
            aP.innerHTML = this.activeTranslations.gdprl2Close + "&nbsp; &#x2716;";
            aP.onclick = this._closeL3;
            aR.appendChild(aP);
            var aS = document.createElement("iframe");
            aS.id = "_evidon-consent-frame";
            aS.scrolling = "yes";
            aS.seamless = "seamless";
            aS.frameBorder = "0";
            aS.src = this.getConsentUrl();
            aS.style.cssText = "width:100%; height:100%;";
            aS.onload = function() {
                document.getElementById(aa).style.position = "fixed"
            }
            ;
            aR.appendChild(aS);
            document.body.appendChild(aR)
        } else {
            window.open(this.getConsentUrl(), "L3")
        }
        this.dropPixel(Z)
    }
    ;
    aI.prototype.isMobile = function() {
        var aO = navigator.userAgent;
        return (/ip(hone|od)|(android).+mobile|opera m(ob|in)i/i).test(aO) || (/Android/).test(aO) || (/iPhone/).test(aO) || (/iPad/).test(aO)
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
        var aS = this._getActiveCountryObject();
        var aW = this.activeSettings.hasOwnProperty("includeSubdomains") ? this.activeSettings.includeSubdomains : 0;
        if (aW == 1) {
            var aT = this._getConsentCookie();
            if (aT) {
                this._removeLocalStorageItem(D + this.activeSettings.id);
                this._writeLocalStorage(D + this.activeSettings.id, JSON.stringify(aT.value))
            }
        }
        if (!aS) {
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
                var aP = {};
                var a2 = window.Prototype;
                var aO = window.evidon.activeCategory;
                this.activecategorySet = this.activeSettings.vendorCategory[aS.vendorCategory] !== undefined ? this.activeSettings.vendorCategory[aS.vendorCategory] : null;
                if (this.activecategorySet !== null) {
                    for (var aX in aO) {
                        var aY = aO[aX];
                        if (typeof aY.cName === "string") {
                            bucketid = aY.cName.toLowerCase()
                        }
                        if (bucketid === null) {
                            continue
                        }
                        var aZ = {};
                        for (var aV = 0; aV < aY.catId.length; aV++) {
                            var a0 = this.activecategorySet.find(function(a8) {
                                if (a8.catid === aY.catId[aV]) {
                                    return a8
                                }
                            });
                            if (a0 !== undefined) {
                                function a7(a9, a8) {
                                    return function(ba, bb) {
                                        ba[bb] = {
                                            vEss: a9,
                                            catid: a8
                                        };
                                        return ba
                                    }
                                }
                                if (a2 && parseFloat(a2.Version) < 1.7 && Array.prototype.reduce) {
                                    var a5 = a0.rqdVndr.mVendorObjectReduce(a7(1, aY.catId[aV]), {});
                                    var a1 = a0.optnlVndr.mVendorObjectReduce(a7(0, aY.catId[aV]), {})
                                } else {
                                    var a5 = a0.rqdVndr.reduce(a7(1, aY.catId[aV]), {});
                                    var a1 = a0.optnlVndr.reduce(a7(0, aY.catId[aV]), {})
                                }
                                aZ = Object.assign({}, a5, a1, aZ)
                            }
                        }
                        if (Object.keys(aZ).length !== 0) {
                            aP[bucketid] = {
                                CategoryBucketId: aX,
                                name: aY.cName,
                                defaultCategoryId: aY.catId,
                                cEss: (aY.cEstnl === true ? 1 : 0),
                                vendors: aZ,
                                dataSharing: (aY.dataSharing === true ? 1 : 0)
                            }
                        }
                    }
                }
                this.activecategorySet = aP
            }
        }
        if (aS.hasOwnProperty("consentTemplate") && window.evidon.consentTemplates) {
            var aQ = aS.consentTemplate;
            var aR = window.evidon.consentTemplates[aQ];
            this._loadSettings(aR)
        } else {
            this._loadSettings(aS)
        }
        this.dataRightsType = aS.dataRightsType === undefined ? 0 : aS.dataRightsType;
        var a4 = (aS.rightslinkId === undefined) ? 0 : aS.rightslinkId;
        if (a4 === 0) {
            this.rightsLink = ""
        } else {
            if (this.activeSettings.hasOwnProperty("rightsLinks")) {
                if (this.activeSettings.rightsLinks.hasOwnProperty(a4)) {
                    this.rightsLink = this._fixurl(this.activeSettings.rightsLinks[a4])
                } else {
                    this.rightsLink = ""
                }
            } else {
                this.rightsLink = ""
            }
        }
        this.dnsRightsType = (aS.hasOwnProperty("dnsRightsType")) ? aS.dnsRightsType : 1;
        if (this.dnsRightsType == 0) {
            var aU = (aS.dnslinkId === undefined) ? 0 : aS.dnslinkId;
            if (aU === 0) {
                this.dnsLink = ""
            } else {
                if (this.activeSettings.hasOwnProperty("dnsLinks")) {
                    if (this.activeSettings.dnsLinks.hasOwnProperty(aU)) {
                        this.dnsLink = this._fixurl(this.activeSettings.dnsLinks[aU])
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
        var a3 = (aS.pubvendorsLinkId === undefined) ? 0 : aS.pubvendorsLinkId;
        if (a3 === 0) {
            this.pubvendorsLink = null
        } else {
            this.pubvendorsLink = this.activeSettings.pubvendorsLinks[a3]
        }
        this.activeVendorId = aS.vendor;
        this.categorySetId = (aS.hasOwnProperty("categorySetId") && aS.categorySetId != 0) ? aS.categorySetId : 0;
        this.activeCategorySetId = aS.category;
        this.noticeGpcEnabled = aS.gpcEnabled;
        this.regulationRightsId = aS.regulationRightsId;
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
        this.handleUniqueVisitor();
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
            var a6 = this._getSuppressionCookie();
            switch (this.iabVersion) {
            case 1:
                if (window.__cmp) {
                    window.__cmp("setSuppression", a6 !== null)
                } else {
                    console.error("unable to find __cmp stub")
                }
                break;
            case 2:
                if (window.__tcfapi) {
                    window.__tcfapi("setSuppression", a6 !== null)
                } else {
                    console.error("unable to find __tcfapi stub")
                }
                break
            }
        }
        window.evidon.events._fireEvent("loaded", null)
    }
    ;
    aI.prototype.handleUniqueVisitor = function() {
        var aP = this._readLocalStorage(CONSENT_LS_VISTOR + this.activeSettings.id);
        if (!aP) {
            var aO = {
                firstPageSeen: window.location.hostname,
                firstTimeSeen: new Date().toISOString(),
                visitor: this.generateUUID()
            };
            this._writeLocalStorage(CONSENT_LS_VISTOR + this.activeSettings.id, JSON.stringify(aO));
            this.dropPixel(aL)
        }
    }
    ;
    aI.prototype.generateUUID = function() {
        var aO = (new Date()).getTime();
        if (typeof performance !== "undefined" && typeof performance.now === "function") {
            aO += performance.now()
        }
        var aP = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(aQ) {
            var aR = (aO + 16 * Math.random()) % 16 | 0;
            aO = Math.floor(aO / 16);
            return (aQ === "x" ? aR : (aR & 3) | 8).toString(16)
        });
        return aP
    }
    ;
    aI.prototype.checkConsentedVendors = function() {
        var aP = this.getActiveVendors();
        var aO = this._getConsentedVendors();
        if (aO && aO.hasOwnProperty("all")) {
            if (aO.all) {
                return
            }
        }
        var aQ = this._getNewVendors(aP, aO);
        if (aQ.length > 0 && typeof this.newVendorCallback === "function") {
            this.newVendorCallback(aQ)
        }
    }
    ;
    aI.prototype.getActiveVendors = function() {
        if (!this.activeSettings || !this.activeSettings.hasOwnProperty("vendors")) {
            return
        }
        var aO = this.activeVendorId;
        if (aO === -1 || !this.activeSettings.vendors.hasOwnProperty(aO)) {
            return null
        }
        return this.activeSettings.vendors[aO]
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
    aI.prototype._getConsentDataSpecific = function(aQ) {
        var aR = this.activeSettings.hasOwnProperty("includeSubdomains") ? this.activeSettings.includeSubdomains : 0;
        if (aR == 1) {
            var aO = this._getConsentCookie();
            var aP = this._getConsentDataFromCookie(aQ);
            if (aP) {
                this._removeLocalStorageItem(D + this.activeSettings.id);
                aO.value[aQ][this.activeCountryId] = aP;
                this._writeLocalStorage(D + this.activeSettings.id, JSON.stringify(aO))
            }
        }
        if (!aP) {
            aP = this._getConsentDataFromLocalStorage(aQ)
        }
        if (!aP) {
            aP = this._getConsentDataFromCookie(aQ)
        }
        if (!aP && this.regulationConsentTypeId === aC && !this.isOptedOut()) {
            aP = {
                all: true
            }
        }
        return aP
    }
    ;
    aI.prototype._getConsentDataFromLocalStorage = function(aP) {
        var aO = this._readLocalStorage(D + this.activeSettings.id);
        if (!aO) {
            return null
        }
        aO = JSON.parse(aO);
        if (aO.hasOwnProperty(aP) && aO[aP].hasOwnProperty(this.activeCountryId)) {
            return aO[aP][this.activeCountryId]
        }
        return null
    }
    ;
    aI.prototype._getConsentDataFromCookie = function(aS) {
        var aO = this._getConsentCookie();
        if (!aO || !aO.value) {
            return null
        }
        var aR = aO.value;
        if (typeof aR === "string") {
            var aP = new Date(unescape(aR));
            aR = this._setConsentCookie(aP)
        } else {
            if (typeof aR === "object") {
                var aT = this.activeSettings.hasOwnProperty("includeSubdomains") ? this.activeSettings.includeSubdomains : 0;
                if (aR.hasOwnProperty(aS) && aT != 1) {
                    var aQ = (aR.hasOwnProperty("consent_type")) ? aR.consent_type : aB;
                    this._setConsentCookie(new Date(aR.consent_date), null, null, null, aQ)
                }
            }
        }
        if (aR.hasOwnProperty(aS) && aR[aS].hasOwnProperty(this.activeCountryId)) {
            return aR[aS][this.activeCountryId]
        }
        return null
    }
    ;
    aI.prototype._getNewVendors = function(aQ, aO) {
        if (!aQ || !aO) {
            return []
        }
        var aP = [];
        if (Array.isArray(aO)) {
            aP = aO
        } else {
            for (var aT in aO) {
                aP.push(parseInt(aT))
            }
        }
        var aS = [];
        for (var aR = 0; aR < aQ.length; aR++) {
            var aT = aQ[aR];
            if (aP.indexOf(aT) === -1) {
                aS.push(aT)
            }
        }
        return aS
    }
    ;
    aI.prototype.setLocation = function(aO) {
        this.country = aO;
        if (!this.langaugeRoot) {
            this.activateTranslations(aO.defaultLanguage)
        }
        this.showNotice()
    }
    ;
    aI.prototype.setThemes = function(aO) {
        this.themes = aO;
        this.showNotice()
    }
    ;
    aI.prototype.getVendorList = function() {
        this.appendScript(aH + aN)
    }
    ;
    aI.prototype.setVendorList = function(aO) {
        this.vendorList = aO;
        this.showNotice()
    }
    ;
    aI.prototype.activateTranslations = function(aO) {
        if (aO === undefined || !aO) {
            return
        }
        this.languageCode = aO;
        this.languageRoot = aO;
        var aQ = this.languageCode.indexOf("-");
        if (aQ !== -1) {
            this.languageRoot = this.languageCode.substr(0, aQ)
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
            var aP = (typeof window.evidon.usegranulartranslations === "undefined") ? false : window.evidon.usegranulartranslations;
            if (!aP) {
                var aR = B + "/translations/" + this.languageRoot + ".js";
                this.appendScript(aR);
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
        var aP = B + "/translations/" + this.languageRoot + "-" + this.activeTranslationId + ".js"
          , aO = this;
        this.appendScript(aP, function() {
            var aU = aO.translations[aO.languageRoot];
            if (aU && aU.hasOwnProperty("items")) {
                aO.activeTranslations = aO._setTranslationValues(aU[aO.activeTranslationId], aU.items);
                if (aU.hasOwnProperty("categories")) {
                    var aQ = null;
                    if (aU.categories.hasOwnProperty(aO.categorySetId)) {
                        aQ = aU.categories[aO.categorySetId]
                    } else {
                        aQ = aU.categories["0"]
                    }
                    var aR = aO.activeTranslations.languageCode;
                    if (aQ.hasOwnProperty(aR)) {
                        aO.activeTranslations.categories = aQ[aR]
                    } else {
                        var aT = Object.keys(aQ);
                        var aS = aT[0];
                        aO.activeTranslations.categories = aQ[aS]
                    }
                }
            } else {
                if (aU) {
                    aO.activeTranslations = aU[aO.activeTranslationId]
                }
            }
        }, function() {
            console.log("Unable to load the granular translation file: " + aP);
            window.evidon.usegranulartranslations = false;
            aO.activateTranslations(aO.languageCode)
        })
    }
    ;
    aI.prototype.setDomain = function(aO, aS) {
        if (!aO) {
            this.domain = window.location.hostname.toLowerCase();
            this.path = window.location.pathname.toLowerCase();
            var aP = this.path.lastIndexOf("/");
            if (aP > -1) {
                var aQ = this.path.indexOf(".", aP);
                if (aQ > -1) {
                    this.path = this.path.substr(0, aP)
                }
            }
        } else {
            aO = aO.toLowerCase();
            var aQ = aO.indexOf("://");
            if (aQ !== -1) {
                aO = aO.substr(aQ + 3)
            }
            aQ = aO.indexOf("/");
            if (aQ === -1) {
                this.domain = aO;
                this.path = "/"
            } else {
                this.domain = aO.substr(0, aQ);
                aO = aO.substr(aQ);
                aQ = aO.indexOf("?");
                if (aQ !== -1) {
                    aO = aO.substr(0, aQ)
                }
                this.path = aO
            }
        }
        if (aS === undefined || !aS) {
            var aR = this._getRootDomain(this.domain);
            aR = aR.replace(".", "");
            var aT = (window.evidon.test !== undefined) ? window.evidon.test : false;
            var aU = B + "/" + aR + ((aT) ? "/test" : "") + "/settingsV3.js";
            this.appendScript(aU)
        }
        this.showNotice()
    }
    ;
    aI.prototype.addTranslation = function(aO, aP) {
        this.translations[aO] = aP;
        this.showNotice()
    }
    ;
    aI.prototype.loadSettings = function(aO) {
        this.settings = aO;
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
        var aO = this.getBarrierStyle();
        if (!aO) {
            aO = this.getBannerStyle()
        }
        return aO
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
        var aO = this.getL2Style();
        if (!aO) {
            return false
        }
        return this.isMobile() ? aO.mobileEnablePreferencesDialogV2 : aO.enablePreferencesDialogV2
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
        var aO = this._getConsentCookie();
        if (!aO || !aO.value) {
            return false
        }
        if (!aO.value.hasOwnProperty("consent_type")) {
            return false
        }
        return (aO.value.consent_type === aC)
    }
    ;
    aI.prototype.getTranslations = function() {
        return this.activeTranslations
    }
    ;
    aI.prototype.formatTranslation = function(bj) {
        var bc = new RegExp(L,"g")
          , ba = new RegExp(E,"g")
          , bh = new RegExp(aA,"g")
          , bb = new RegExp(J,"g")
          , bd = new RegExp(M,"gi")
          , bi = new RegExp(aM,"gi")
          , a8 = new RegExp(w,"gi")
          , a9 = new RegExp(x,"gi")
          , bg = new RegExp(aw,"gi")
          , be = new RegExp(an,"g")
          , bf = new RegExp(au,"g")
          , aY = this.getConsentUrl()
          , a7 = this.getPrivacyPolicyLink()
          , aZ = this.getCookiePolicyLink()
          , a0 = this.activeSettings.division || ""
          , a1 = this.consentDuration
          , a3 = window.evidon.notice.isMobile();
        if (bj) {
            var bk = this.getActiveVendors();
            if (bk === null) {
                bk = []
            }
            if (this.activeTranslations.hasOwnProperty("categories")) {
                var aQ = {};
                for (var a4 in this.activeTranslations.categories) {
                    var aR = this.activeTranslations.categories[a4];
                    if (typeof aR === "object" && aR.hasOwnProperty("vendors")) {
                        var aX = aR.vendors;
                        for (var a2 = 0; a2 < bk.length; a2++) {
                            if (aX.indexOf(bk[a2]) !== -1) {
                                aQ[a4] = aR.text;
                                break
                            }
                        }
                    } else {
                        aQ[a4] = aR
                    }
                }
                var aW = {};
                if (!this.activeSettings.companyCategoryIds && this.activecategorySet) {
                    this.activeSettings.companyCategoryIds = Object.keys(this.activecategorySet)
                }
                if (this.activeSettings.companyCategoryIds) {
                    var aO = this.activeTranslations.categories;
                    this.activeSettings.companyCategoryIds.forEach(function(bm) {
                        var bl = aO[bm.toLowerCase()] ? aO[bm.toLowerCase()].text : null;
                        if (bl && !aW[bl]) {
                            aW[bm] = bl
                        }
                    })
                }
                if (bj.indexOf(w) > -1) {
                    var aU = [];
                    for (var a4 in aW) {
                        var aT = '<a class="evidon-category-link" href="#" onclick="window.evidon.notice.showPreferencesDialog(\'' + this.PREFDIAG_TABS.CONSENT + "', '" + a4 + "'); return false;\">" + aW[a4] + "</a>";
                        aU.push(aT)
                    }
                    var aS = aU.join(", ");
                    bj = bj.replace(a8, aS)
                } else {
                    if (bj.indexOf(x) > -1) {
                        var aV = "";
                        for (var a4 in aW) {
                            aV += "<li>" + aW[a4] + "</li>"
                        }
                        bj = bj.replace(a9, aV)
                    }
                }
            }
            bj = bj.replace(bc, a0).replace(ba, aY).replace(bh, a7).replace(bb, aZ);
            bj = bj.replace(bd, "<b>" + a1 + "</b>").replace(bi, "<b>" + bk.length + "</b>");
            if (Object.keys(ac).indexOf(this.languageRoot) != -1) {
                bj = bj.replace(be, "<b>" + ac[this.languageRoot]["monthvar"] + "</b>").replace(bf, "<b>" + ac[this.languageRoot]["partnervar"] + "</b>")
            }
            if (bj.indexOf(aw) > -1) {
                var a6 = (((a3) ? this.activeTranslations.mobilepolicyButtonText : this.activeTranslations.policyButtonText) || null);
                var a5 = (aZ && aZ !== "#") ? aZ : (a7 && a7 !== "#") ? a7 : null;
                if (a6 && a5) {
                    var aP = '<br /><br /><a href="' + a5 + '" target="_blank" class="evidon-policybutton">' + a6 + "</a>";
                    bj = bj.replace(bg, aP)
                } else {
                    bj = bj.replace(bg, "")
                }
            }
        }
        return bj
    }
    ;
    aI.prototype.dropSuppressionCookie = function(aS, aU) {
        var aO = {
            date: new Date()
        };
        var aR = null;
        if (typeof aS !== "undefined" && aS > 0) {
            var aQ = new Date();
            aQ.setDate(aQ.getDate() + aS);
            aR = aQ.toUTCString();
            var aT = this._getConsentCookieDomainPath();
            var aP = this._getConsentCookieDomain();
            this._writeCookie(aJ, JSON.stringify(aO), aR, aT, aP)
        } else {
            var aT = this._getConsentCookieDomainPath();
            var aP = this._getConsentCookieDomain();
            this._delete_cookie(aJ, aT, aP)
        }
        return aO
    }
    ;
    aI.prototype._delete_cookie = function(aP, aQ, aO) {
        if (this._getCookie(aP)) {
            document.cookie = aP + "=" + ((aQ) ? ";path=" + aQ : "") + ((aO) ? ";domain=" + aO : "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
        }
    }
    ;
    aI.prototype._getCookie = function(aR) {
        var aP = this._readCookies();
        for (var aQ = 0; aQ < aP.length; aQ++) {
            var aO = aP[aQ];
            if (aO.name === aR) {
                return aO
            }
        }
        return null
    }
    ;
    aI.prototype._readCookies = function() {
        var aP = "";
        if (window.evidon.uriEncodeCookie) {
            var aR = decodeURI(document.cookie);
            aP = aR.split(";")
        } else {
            if (window.evidon.uriEncodeComponentCookie) {
                var aR = decodeURIComponent(document.cookie);
                aP = aR.split(";")
            } else {
                aP = document.cookie.split(";")
            }
        }
        var aQ = [];
        for (var aT = 0; aT < aP.length; aT++) {
            var aV = aP[aT];
            var aU = aV.slice(0, aV.indexOf("=")).replace(/^\s+|\s+$/g, "");
            var aW = aV.slice(aV.indexOf("=") + 1);
            var aO = {
                name: aU
            };
            try {
                aO.value = JSON.parse(aW)
            } catch (aS) {
                aO.value = aW
            }
            aQ.push(aO)
        }
        return aQ
    }
    ;
    aI.prototype._writeCookie = function(aS, aU, aR, aT, aQ) {
        if (window.evidon.uriEncodeCookie) {
            aU = encodeURI(aU)
        } else {
            if (window.evidon.uriEncodeComponentCookie) {
                aU = encodeURIComponent(aU)
            }
        }
        var aP = [aS + "=" + aU];
        if (typeof aR === "string") {
            aP.push("expires=" + aR)
        }
        aP.push("path=" + aT);
        aP.push("SameSite=Lax");
        if (typeof aQ === "string") {
            aP.push("domain=" + aQ)
        }
        var aO = aP.join("; ");
        document.cookie = aO;
        return (document.cookie.indexOf(aS) > -1)
    }
    ;
    aI.prototype._readLocalStorage = function(aP) {
        try {
            if (!window.localStorage) {
                return false
            }
        } catch (aO) {
            return false
        }
        return window.localStorage.getItem(aP)
    }
    ;
    aI.prototype._writeLocalStorage = function(aP, aQ) {
        try {
            if (!window.localStorage) {
                return false
            }
        } catch (aO) {
            return false
        }
        window.localStorage.setItem(aP, aQ);
        return window.localStorage.getItem(aP) !== null
    }
    ;
    aI.prototype._removeLocalStorageItem = function(aO) {
        if (!window.localStorage) {
            return
        }
        window.localStorage.removeItem(aO)
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
    aI.prototype.newVendorCallback = function(aO) {
        if (window.evidon.button) {
            window.evidon.button.showNewVendorIndicator()
        }
        if (window.evidon.cmp && window.evidon.cmp.consentString) {
            window.evidon.cmp.newVendorCallback(aO)
        }
        if (window.evidon.cmpv2 && window.evidon.cmpv2.consentString) {
            window.evidon.cmpv2.newVendorCallback(aO)
        }
    }
    ;
    aI.prototype._pullOptOutDetails = function(aP) {
        var aQ = window.evidon.id
          , aS = this.activeSettings.id
          , aO = this.activeCountryId
          , aR = this;
        var aT = aq;
        if (aT.substr(aT.length - 1) !== "/") {
            aT += "/"
        }
        aT += "vendor/" + aQ + "/" + aS + "/" + aO;
        if (this.categorySetId && this.categorySetId !== 0) {
            aT += "/" + this.categorySetId
        }
        aT += "?lang=" + this.languageCode;
        var aU = new XMLHttpRequest();
        aU.onerror = function() {
            Toast.show(TOAST_ERROR, getTranslation(aR.isMobile() ? "mobilesnL2L3FetchVendorsError" : "snL2L3FetchVendorsError"), 7)
        }
        ;
        aU.onreadystatechange = function() {
            if (aU.readyState !== 4) {
                return
            }
            if (aU.status === 200) {
                var aZ = JSON.parse(aU.responseText);
                aR.optOutDetails = {};
                aR.optOutDetails.categories = {};
                aR.optOutDetails.cookies = {};
                var a0 = (aZ.hasOwnProperty("thirdparty")) ? aZ.thirdparty : [];
                for (var aY = 0; aY < a0.length; aY++) {
                    var a1 = a0[aY];
                    var aV = null;
                    if ((a1.hasOwnProperty("CategoryBucketId") && a1.CategoryBucketId !== null) || (a1.hasOwnProperty("CategoryBucket") && a1.CategoryBucket !== null)) {
                        aV = (a1.hasOwnProperty("CategoryBucketId")) ? a1.CategoryBucketId.toLowerCase() : a1.CategoryBucket.toLowerCase()
                    }
                    if (!aR.optOutDetails.categories.hasOwnProperty(aV)) {
                        aR.optOutDetails.categories[aV] = {
                            id: aV,
                            name: a1.CategoryBucket,
                            description: a1.CategoryDescription,
                            required: a1.CategoryRequired,
                            vendors: []
                        }
                    }
                    aR.optOutDetails.categories[aV].vendors.push(a1)
                }
                var aX = (aZ.hasOwnProperty("firstparty")) ? aZ.firstparty : [];
                for (var aY = 0; aY < aX.length; aY++) {
                    var aW = aX[aY];
                    aR.optOutDetails.cookies[aW.CountryCookieId] = {
                        id: aW.CountryCookieId,
                        name: aW.Name,
                        description: aW.Description,
                        required: aW.Required,
                        optout: aW.OptOut,
                        host: aW.Host,
                        duration: aW.Duration,
                        category: aW.Category
                    }
                }
                aP()
            } else {
                if (aU.status === 500) {
                    aP({
                        message: "Unable to load the opt-out vendor list"
                    }, null)
                }
            }
        }
        ;
        aU.open("GET", aT, true);
        aU.send(null)
    }
    ;
    aI.prototype.getOptOutCategories = function(aO) {
        var aP = this;
        if (!this.optOutDetails) {
            this._pullOptOutDetails(function(aQ) {
                if (aQ) {
                    aO(aQ, null)
                } else {
                    aO(null, aP.optOutDetails.categories)
                }
            })
        } else {
            aO(null, aP.optOutDetails.categories)
        }
    }
    ;
    aI.prototype.getOptOutCategory = function(aO) {
        if (this.optOutDetails) {
            if (this.optOutDetails.categories.hasOwnProperty(aO)) {
                return this.optOutDetails.categories[aO]
            }
        }
        return null
    }
    ;
    aI.prototype.getOptOutCookies = function(aO) {
        var aP = this;
        if (!this.optOutDetails) {
            this._pullOptOutDetails(function(aQ) {
                if (aQ) {
                    aO(aQ, null)
                } else {
                    aO(null, aP.optOutDetails.cookies)
                }
            })
        } else {
            aO(null, aP.optOutDetails.cookies)
        }
    }
    ;
    aI.prototype.findVendorDetails = function(aO) {
        for (var aP = 0; aP < this.companydetails.length; aP++) {
            if (this.companydetails[aP].permalink === aO) {
                return this.companydetails[aP]
            }
        }
        return null
    }
    ;
    aI.prototype.pullVendorDetails = function(aQ, aO) {
        var aS = aq
          , aR = this;
        var aP = this.findVendorDetails(aQ);
        if (aP) {
            aO(null, aP)
        } else {
            aS = aS.replace("/site", "");
            if (aS.substr(aS.length - 1) !== "/") {
                aS += "/"
            }
            aS += "company/" + aQ + "/" + this.activeTranslationId;
            var aT = new XMLHttpRequest();
            aT.onerror = function() {}
            ;
            aT.onreadystatechange = function() {
                if (aT.readyState !== 4) {
                    return
                }
                if (aT.status === 200) {
                    aP = JSON.parse(aT.responseText);
                    aR.companydetails.push(aP);
                    aO(null, aP)
                } else {
                    if (aT.status === 500) {
                        aO({
                            message: "Unable to load the vendor details"
                        }, null)
                    }
                }
            }
            ;
            aT.open("GET", aS, true);
            aT.send(null)
        }
    }
    ;
    aI.prototype.getParentOrigin = function() {
        var aQ = (window.location !== window.parent.location);
        var aP = aQ ? document.referrer : document.location.href;
        if (aP) {
            return aP.split("?")[0]
        }
        var aO = document.location;
        if (aO.ancestorOrigins && aO.ancestorOrigins.length) {
            return aO.ancestorOrigins[0]
        }
        return ""
    }
    ;
    aI.prototype.stringify = function(aP) {
        var aO = window.Prototype;
        if (aO && parseFloat(aO.Version) < 1.7 && Array.prototype.toJSON && Object.toJSON && aP) {
            return Object.toJSON(aP)
        }
        return JSON.stringify(aP)
    }
    ;
    aI.prototype.postVendorChoices = function(aO) {
        var aY = {};
        aY.noticeId = this.activeSettings.id;
        aY.companyId = window.evidon.id;
        aY.actionId = aO;
        aY.regulationId = this.regulationId;
        aY.regulationType = this.regulationConsentTypeId;
        aY.consentGiven = ((this.consentIsGiven) ? 1 : 0);
        aY.consentRequired = ((this.consentRequired) ? 1 : 0);
        aY.consentDate = new Date().toISOString();
        aY.activeCountryId = this.activeCountryId;
        aY.akObservedCountryId = this.country.id;
        aY.defaultCountryId = this.activeSettings.defaultCountry;
        aY.includeSubdomains = this.activeSettings.includeSubdomains;
        aY.activeTranslationId = this.activeTranslationId;
        aY.domainConsented = this.getParentOrigin();
        aY.akObservedStateId = (typeof this.activeStateId !== "undefined" && this.activeStateId !== null) ? this.activeStateId : "";
        aY.browserGpcFlag = this.userGpcEnabled;
        aY.noticeGpcFlag = this.noticeGpcEnabled;
        aY.vendors = [];
        aY.categories = [];
        var aQ = this.activecategorySet;
        var aZ = this._getConsentedVendors();
        var aP = this._getConsentedCategories();
        var aV = this.isGPCApply();
        if (aZ !== null || aP !== null) {
            for (var aS in aQ) {
                var aX = aQ[aS];
                var aR = {
                    def_CId: aX.defaultCategoryId,
                    cBucketId: aX.CategoryBucketId,
                    customCName: aX.name,
                    isEssential: (aV && aX.dataSharing) ? 0 : aX.cEss,
                    isAccepted: (aV && aX.dataSharing) ? 0 : (aP === true) ? 1 : (aX.cEss === 1) ? 1 : 0
                };
                if (typeof aP === "object" && aP !== null) {
                    aR.isAccepted = aP[aS] === true ? 1 : 0
                }
                aY.categories.push(aR);
                for (var aW in aX.vendors) {
                    var a0 = {
                        id: aW,
                        categoryId: aX.vendors[aW].catid,
                        isEssential: (aV && aX.dataSharing) ? 0 : aX.vendors[aW].vEss,
                        isAccepted: (aV && aX.dataSharing) ? 0 : (aZ[aW] === true) ? 1 : 0
                    };
                    if (aX.vendors[aW].vEss === 1) {
                        a0.isAccepted = 1
                    }
                    if (aR.isEssential === 1) {
                        a0.isAccepted = 1
                    }
                    if (typeof aZ[aW] === "undefined" || aZ[aW] === null) {
                        a0.isAccepted = null
                    }
                    aY.vendors.push(a0)
                }
            }
        }
        aY.lso = this.getConsentData().value;
        var aT = {};
        aT.d = aY;
        aT.c = window.evidon.id;
        var aU = this.stringify(aT);
        var a1 = new XMLHttpRequest();
        a1.open("POST", ay, true);
        a1.setRequestHeader("Content-Type", "application/json");
        a1.send(aU);
        a1.addEventListener("readystatechange", function() {
            if (this.readyState === 4) {
                if (this.status === 200 || this.status === 204) {} else {
                    if (this.status === 401) {
                        console.log("invalid request")
                    }
                }
            }
        });
        a1.addEventListener("error", function(a2) {
            console.log("vendor post error")
        })
    }
    ;
    aI.prototype.pushNavigationScreen = function(aO) {
        this.navigationStack.push(aO)
    }
    ;
    aI.prototype.popNavigationScreen = function() {
        if (this.navigationStack.length < 1) {
            return null
        }
        var aO = this.navigationStack.pop();
        return aO
    }
    ;
    aI.prototype.getNavigationScreenStackCount = function() {
        return this.navigationStack.length
    }
    ;
    aI.prototype.setUserIdentifier = function(aO) {
        this.customerUserId = aO
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
        this.subscribe = function(aP, aO, aQ) {
            if (!this.subscriptions.hasOwnProperty(aP)) {
                this.subscriptions[aP] = []
            }
            if (!aQ) {
                aQ = -1
            }
            this.subscriptions[aP].push({
                callback: aO,
                limit: aQ
            })
        }
        ;
        this._fireEvent = function(aP, aO) {
            if (!this.subscriptions.hasOwnProperty(aP)) {
                return
            }
            var aS = this.subscriptions[aP];
            for (var aQ = 0; aQ < aS.length; aQ++) {
                var aR = aS[aQ];
                if (aR.callback && typeof aR.callback === "function") {
                    aR.callback.call(null, aO);
                    if (aR.limit === -1) {
                        continue
                    }
                    aR.limit--;
                    if (aR.limit === 0) {
                        aS.splice(aQ, 1);
                        aQ--
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
