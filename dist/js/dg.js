!function() {
    if (!function() {
        if (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./))
            return 1
    }()) {
        var o = "https://c.evidon.com/dg/dg.js"
          , o = o.substr(0, o.lastIndexOf("/") + 1)
          , n = o.substr(0, o.lastIndexOf("/", o.lastIndexOf("/") - 1) + 1)
          , e = !1
          , l = (window.evidon_dg || (window.evidon_dg = {},
        window.evidon_dg._dg = {}),
        window.evidon_dg.env = "prod",
        window.evidon_dg.envStr = "prod" == window.evidon_dg.env ? "" : window.evidon_dg.env,
        window.evidon_dg.loggingEnabled = "dev" == window.evidon_dg.envStr,
        window.evidon_dg.srcRoot = o,
        window.evidon_dg.domainRoot = n,
        window.evidon_dg.collector = "https://dgcollector.evidon" + window.evidon_dg.envStr + ".com/api/v2/csp",
        window.evidon_dg.vendorHostApi = "https://dgvendorhostapi.evidon" + window.evidon_dg.envStr + ".com/api/",
        window.evidon_dg.noticeDomain = "https://c.evidon.com/sitenotice",
        window.evidon_dg.cspLoadedById = null,
        window.evidon_dg.getConfigValue = _,
        
/*Change ===================================================== */

        window.evidon_dg.nonce = document.currentScript.nonce,

/*Change ===================================================== */
        window.evidon_dg.getConsentTypeName = function(o) {
            switch (o) {
            case null:
                return "Missing";
            case 0:
                return "None";
            case 1:
                return "Opt-In (GDPR)";
            case 2:
                return "Opt-Out (CCPA/CPRA)";
            default:
                return "Invalid"
            }
        }
        ,
        window.evidon_dg.getUcpNoticeId = h,
        window.evidon_dg.logToConsoleF = function(o, n, e, i) {
            (window.evidon_dg.loggingEnabled || i) && (i = "Evidon: " + (o ? window.evidon_dg.productNames[o] : "DG") + ": ",
            e ? console.error(i + n) : console.log(i + n))
        }
        ,
        window.evidon_dg.logToConsoleO = function(o, n, e, i, d) {
            (window.evidon_dg.loggingEnabled || d) && (d = "Evidon: " + (o ? window.evidon_dg.productNames[o] : "DG") + ": ",
            i ? console.error(d + n, e) : console.log(d + n, e))
        }
        ,
        window.evidon_dg.loadCsp = function(o, n, e, i) {
            {
                var d, t;
                null == window.evidon_dg.cspLoadedById && (window.evidon_dg.cspLoadedById = o,
                window.evidon_dg.collectViolations = i,
                i = window.evidon_dg.companyId,
                d = window.evidon_dg.siteId,
                (t = window.evidon_dg.getConfigValue("observe")) ? t.percent || window.evidon_dg.logToConsoleF(o, "Configuration Corrupt. Missing Values for collection percent", !0, !0) : window.evidon_dg.logToConsoleF(o, "Configuration (in violations) Not Found For Company (" + i + ") OR Site (" + d + ")", !0, !0),
                ((i = t?.percent ?? 1) < 0 || 100 < i) && (window.evidon_dg.logToConsoleF(o, 'Configuration Contains Invalid Value For "collectionPercent" (' + i + "). Reset collectionPercent to 1.", !0, !0),
                i = 1),
                (d = Math.floor(100 * Math.random()) + 1) <= i ? (window.evidon_dg.logToConsoleF(o, "Random (" + d + ") Within Bounds of CollectionPercent (" + i + ") - Report Violations Enabled"),
                window.addEventListener("securitypolicyviolation", b)) : window.evidon_dg.logToConsoleF(o, "Random (" + d + ") Outside Bounds of CollectionPercent (" + i + ") - Report Violations Disabled"),
                e && (!window.evidon_dg.sitePolicy || !window.evidon_dg.sitePolicy.essential && !window.evidon_dg.sitePolicy.whitelist || 0 == window.evidon_dg.sitePolicy.essential.length && 0 == window.evidon_dg.sitePolicy.whitelist.length) ? window.evidon_dg.logToConsoleF(null, window.evidon_dg.productNames[window.evidon_dg.cspLoadedById] + ": Attempted To Load CSP With Empty Policy.  Faulting To CSP Disabled.", !0, !0) : (t = "",
                window.evidon_dg.sitePolicy.options && (window.evidon_dg.sitePolicy.options.allowBlob && (t += " blob:"),
                window.evidon_dg.sitePolicy.options.allowFilesystem && (t += " filesystem:"),
                window.evidon_dg.sitePolicy.options.allowMediastream) && (t += " mediastream:"),
                (o = document.querySelector('meta[name="evidon-consentcontrol"]')) || ((o = document.createElement("meta")).setAttribute("http-equiv", "Content-Security-Policy"),
                o.setAttribute("name", "evidon-" + window.evidon_dg.productNames[window.evidon_dg.cspLoadedById])),
                o.setAttribute("content", "default-src 'self' 'unsafe-inline' 'unsafe-eval'" + t + " data: " + n.join(" ") + ";"),
                document.getElementsByTagName("head")[0].insertAdjacentElement("afterbegin", o)))
            }
        }
        ,
        window.evidon_dg.getCombinedWhitelist = function(o, n) {
            return window.evidon_dg.evidonCriticalDomains.concat(n ?? []).concat(o ?? [])
        }
        ,
        window.evidon_dg.getGeoConsentType = x,
        window.evidon_dg.loadedProducts = [],
        window.evidon_dg.collectViolations = !1,
        window.evidon_dg.pageLoadId = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
            var n = 16 * Math.random() | 0;
            return ("x" == o ? n : 3 & n | 8).toString(16)
        }),
        window.evidon_dg.countryJsLoaded = !1,
        window.evidon_dg.SiteConsentGeoLoaded = !1,
        window.evidon_dg.dataSharingVendor = [],
        window.evidon_dg.noticeGpcEnabled = 0,
        window.evidon_dg.browserGpcEnabled = !0 === navigator.globalPrivacyControl,
        window.evidon_dg.evidonCriticalDomains = ["*.betrad.com", "*.evidon.com", "*.evidon" + window.evidon_dg.envStr + ".com"],
        window.evidon_dg.productIds = {
            TagControlV2: 16,
            ConsentControl: 17,
            Observe: 18,
            GranularConsentControl: 19
        },
        window.evidon_dg.productNames = {
            16: "TagControlV2",
            17: "ConsentControl",
            18: "Observe",
            19: "GranularConsentControl"
        },
        window.evidon_dg.companyId = document.currentScript.getAttribute("companyId"));
        if (l = l || (window.evidon_dg.companyId = document.currentScript.getAttribute("id"))) {
            var d = null
              , t = []
              , i = {
                Country: n + "geo/country.js",
                ConsentControl: o + "cc.js",
                GranularConsentControl: o + "gcc.js",
                Observe: o + "observe.js",
                TagControlV2: o + "tcv2.js"
            }
              , s = o + l
              , r = {
                Company: s + "/companyConfig.json",
                Site: s + "/" + d + "/siteConfig.json",
                Policy: s + "/" + d + "/sitePolicy.json",
                ConsentGeo: s + "/" + d + "/siteConsentGeo.json"
            };
            if (window.evidon_dg.companyConfig || (window.evidon_dg.companyConfig = y(r.Company, !0)),
            (n = _("siteMap")) && function(o) {
                var n = window.location.host
                  , e = window.location.pathname;
                return function(o, n, e) {
                    for (; "undefined" !== o; ) {
                        var i = n + (e = "/" == e ? "" : e);
                        if (o[i])
                            return function(o) {
                                d = window.evidon_dg.siteId = o,
                                r.Site = s + "/" + d + "/siteConfig.json",
                                r.Policy = s + "/" + d + "/sitePolicy.json",
                                r.ConsentGeo = s + "/" + d + "/siteConsentGeo.json"
                            }(o[i]),
                            1;
                        if (e) {
                            i = (e = e.startsWith("/") ? e.substr(1) : e).split("/");
                            i.pop(),
                            e = "/" + i.join("/")
                        } else {
                            if (!(2 < (n = n.split(".")).length))
                                return;
                            n = n.slice(1).join(".")
                        }
                    }
                    return
                }(o, n, e)
            }(n) && (window.evidon_dg.siteConfig = y(r.Site, !0)),
            window.evidon_dg.loggingEnabled || (window.evidon_dg.loggingEnabled = _("loggingEnabled") || !1),
            window.evidon_dg.logToConsoleF(null, "Script Environment: " + window.evidon_dg.env.toUpperCase()),
            window.evidon_dg.logToConsoleO(null, "CompanyId: " + l + " / Company Config: ", window.evidon_dg.companyConfig),
            d && window.evidon_dg.logToConsoleO(null, "SiteId: " + d + " / Site Config: ", window.evidon_dg.siteConfig),
            window.evidon_dg.companyConfig) {
                d && !window.evidon_dg.siteConfig && window.evidon_dg.logToConsoleF(null, "Site Matched (" + d + "), But Site Configuration Can Not Be Loaded.", !0, !0);
                var o = window.evidon_dg.getConfigValue("gcc")
                  , n = window.evidon_dg.getConfigValue("cc")
                  , w = window.evidon_dg.getConfigValue("tcv2");
                if (w && w.enforce)
                    window.evidon_dg.siteConfig && (window.evidon_dg.sitePolicy = window.evidon_dg.getConfigValue("policy")),
                    window.evidon_dg.sitePolicy || (window.evidon_dg.sitePolicy = y(r.Policy, !0));
                f(),
                (o && o.enforce || n && n.enforce) && C();
                var w = -1 < document.cookie.indexOf("_evidon_consent_cookie")
                  , a = (window.evidon_dg.logToConsoleF(null, "Browser is GPC enabled:" + window.evidon_dg.browserGpcEnabled, !1, !1),
                !(n && n.enforce) && o && o.enforce)
                  , g = x(null)
                  , w = (window.evidon_dg.browserGpcEnabled && !w && !window.evidon?.notice && l && a && 2 === g && !function() {
                    var o = I();
                    if (o) {
                        if (!window.evidon?.settings) {
                            if (!y(window.evidon_dg.noticeDomain + "/" + l + "/" + o + "/settingsV2.js", !1))
                                return window.evidon_dg.logToConsoleF(null, "SettingsV2.js is missing. CompanyId:" + l + " , rootDomain:" + o, !1, !1);
                            window.evidon_dg.logToConsoleF(null, "SettingsV2.js is loaded sucessfully. CompanyId:" + l + " , rootDomain:" + o, !1, !1)
                        }
                        o = function() {
                            var o = window.location.hostname.toLowerCase()
                              , n = window.location.pathname.toLowerCase();
                            if (o) {
                                var e = b(o)
                                  , i = I()
                                  , d = function(o) {
                                    var o = o.split(".")
                                      , n = "";
                                    o && 1 < o.length && (n = o[o.length - 1],
                                    3 <= o.length) && T(o = o[o.length - 2]) && (n = o + "." + n);
                                    return n
                                }(o)
                                  , t = o.substr(0, o.indexOf(i)) + i + ".*";
                                if (1 === (e = (e = (e = e.concat(b(t))).concat(b(i + "." + d))).concat(b(i + ".*"))).length)
                                    return window.evidon.activeDomain = e[0].split("|")[0],
                                    window.evidon.settings[e[0]];
                                if (1 < e.length) {
                                    e.sort(function(o, n) {
                                        return n.length - o.length
                                    });
                                    for (var s = o + n, r = i + "." + d + n, w = [], l = 0; l < e.length; l++) {
                                        var a = e[l];
                                        -1 !== (a = -1 !== a.indexOf("|") ? a.substr(0, a.indexOf("|")) : a).indexOf("*") && (a = a.replace("*", d)),
                                        -1 !== s.indexOf(a) && w.push(e[l])
                                    }
                                    if (0 !== w.length) {
                                        if (1 === w.length)
                                            return window.evidon.activeDomain = w[0].split("|")[0],
                                            window.evidon.settings[w[0]];
                                        var g = window.evidon.location.id
                                          , c = null
                                          , v = []
                                          , u = []
                                          , p = 0
                                          , C = 0;
                                        h(s, "/") || (s += "/"),
                                        h(r, "/") || (r += "/");
                                        for (l = 0; l < w.length; l++) {
                                            var f = w[l]
                                              , _ = f.split("|")[0];
                                            h(_ = -1 !== _.indexOf("*") ? _.replace("*", d) : _, "/") || (_ += "/"),
                                            0 === s.indexOf(_) && _.length >= p ? (v.push(f),
                                            0 === p && (p = _.length)) : -1 !== r.indexOf(_) && _.length >= C && (u.push(f),
                                            C = _.length)
                                        }
                                        if (0 === v.length && 0 <= u.length ? 1 === u.length ? (c = window.evidon.settings[u[0]],
                                        window.evidon.activeDomain = u[0].split("|")[0]) : w = u : 1 === v.length ? (c = window.evidon.settings[v[0]],
                                        window.evidon.activeDomain = v[0].split("|")[0]) : 1 < v.length && (w = v),
                                        !c)
                                            for (l = 0; l < w.length; l++)
                                                if (window.evidon.settings[w[l]].countries.hasOwnProperty(g)) {
                                                    c = window.evidon.settings[w[l]],
                                                    window.evidon.activeDomain = w[l].split("|")[0];
                                                    break
                                                }
                                        if (!c) {
                                            for (var y = 0, l = 0; l < w.length; l++) {
                                                var m = window.evidon.settings[w[l]];
                                                if (m.hasOwnProperty("defaultCountry") && 0 != m.defaultCountry) {
                                                    y = m.defaultCountry;
                                                    break
                                                }
                                            }
                                            if (0 !== y)
                                                for (l = 0; l < w.length; l++)
                                                    (m = window.evidon.settings[w[l]]).countries.hasOwnProperty(y) && (c = m,
                                                    window.evidon.activeDomain = w[l].split("|")[0])
                                        }
                                        return c || (c = window.evidon.settings[w[0]],
                                        window.evidon.activeDomain = w[0].split("|")[0]),
                                        c
                                    }
                                }
                            }
                            return null;
                            function h(o, n) {
                                return o && n && o.substr(o.length - n.length) === n
                            }
                            function b(o) {
                                var n = [];
                                for (e in window.evidon.settings) {
                                    var e, i = (e = e.toLowerCase()).split("|")[0], d = (h(i, "/") || (i += "/"),
                                    o.toLowerCase());
                                    h(d, "/") || (d += "/"),
                                    0 === i.indexOf(d) && n.push(e)
                                }
                                return n
                            }
                        }();
                        if (o) {
                            var n = function(o) {
                                {
                                    var n, e;
                                    if (window.evidon.location && o)
                                        return n = window.evidon.location.id,
                                        (e = window.evidon.location.stateId) && o.hasOwnProperty("states") && o.states.hasOwnProperty("stateId") ? o.states[e] : o.countries.hasOwnProperty(n) ? o.countries[n] : o.countries[o.defaultCountry]
                                }
                            }(o);
                            if (window.evidon_dg.noticeGpcEnabled = n.gpcEnabled,
                            window.evidon_dg.noticeGpcEnabled && o.vendorCategory && window.evidon.activeCategory) {
                                var e = window.evidon.activeCategory
                                  , i = void 0 !== o.vendorCategory[n.vendorCategory] ? o.vendorCategory[n.vendorCategory] : null
                                  , d = [];
                                if (null !== i)
                                    for (var t in e)
                                        for (var s, r = e[t], w = 0; w < r.catId.length; w++)
                                            r.dataSharing && (s = i.flatMap(function(o) {
                                                if (o.catid === r.catId[w])
                                                    return o.rqdVndr.concat(o.optnlVndr) ?? []
                                            }).filter(o => void 0 !== o),
                                            d = d.concat(s));
                                window.evidon_dg.dataSharingVendor = d
                            }
                        }
                    }
                }(),
                _("productIds"));
                if (w.includes(window.evidon_dg.productIds.ConsentControl) && (f(),
                (o && o.enforce || n && n.enforce) && C(),
                window.evidon_dg.logToConsoleF(null, "Loading ConsentControl [pid: 16] (sync)"),
                y(i.ConsentControl),
                window.evidon_dg.loadedProducts.push("Consent Control")),
                w.includes(window.evidon_dg.productIds.GranularConsentControl) && (f(),
                window.evidon_dg.logToConsoleF(null, "Loading GranularConsentControl [pid: 19] (sync)"),
                y(i.GranularConsentControl),
                window.evidon_dg.loadedProducts.push("Granular Consent Control")),
                w.includes(window.evidon_dg.productIds.TagControlV2) && (window.evidon_dg.logToConsoleF(null, "Loading TagControlV2 [pid: 16] (sync)"),
                y(i.TagControlV2),
                window.evidon_dg.loadedProducts.push("Tag Control v2")),
                w.includes(window.evidon_dg.productIds.Observe)) {
                    window.evidon_dg.logToConsoleF(null, "Loading Observe [pid: 18] (async)");
                    {
                        a = i.Observe;
                        var c = function() {};
                        0;
                        var v, u = document.createElement("script"), g = document.getElementsByTagName("script")[0] || document.getElementsByTagName("head")[0];
                        function p() {
                            u.onload = u.onreadystatechange = null,
                            c()
                        }
                        if (m(a))
                            c && c();
                        else {
                            u.async = !0,
                            u.src = a,
                            u.charset = "utf-8",
                            c && (u.onreadystatechange = function() {
                                v || "loaded" != this.readyState && "complete" != this.readyState || (v = !0,
                                p())
                            }
                            ,
                            u.onload = p);
                            try {
                                u.setAttribute("companyId", l),
                                g.parentElement.insertBefore(u, g),
                                t.push(a)
                            } catch (o) {
                                window.evidon_dg.logToConsoleF(null, "Error Loading Script (Async): " + o, !0)
                            }
                        }
                    }
                    window.evidon_dg.loadedProducts.push("Observe")
                }
                window.evidon_dg.logToConsoleF(null, "Product Script Loading Complete: " + window.evidon_dg.loadedProducts.join(", "), !1, !0)
            } else
                window.evidon_dg.logToConsoleF(null, "Company Configuration Can Not Be Loaded (CompanyId: " + l + "). Exiting Process", !0, !0)
        } else
            window.evidon_dg.logToConsoleF(null, "Unable To Determine CompanyId. Exiting Process.", !0, !0)
    }
    function C() {
        window.evidon_dg.SiteConsentGeoLoaded || (window.evidon_dg.siteConsentGeo = y(r.ConsentGeo, !0),
        window.evidon_dg.siteConsentGeo ? (window.evidon_dg.logToConsoleO(null, "Loaded siteConsentGeo.json (sync): ", window.evidon_dg.siteConsentGeo),
        window.evidon_dg.SiteConsentGeoLoaded = !0) : window.evidon_dg.logToConsoleF(null, "Unable To Load siteConsentGeo.json"))
    }
    function f() {
        window.evidon_dg.countryJsLoaded || (window.evidon || (window.evidon = {}),
        y(i.Country),
        window.evidon_dg.countryJsLoaded = !0,
        window.evidon_dg.logToConsoleO(null, "Loaded country.js (sync): ", window.evidon.location))
    }
    function T(o) {
        return -1 !== ["co", "com", "info", "web", "info", "gov", "edu", "biz", "net", "org"].indexOf(o) || -1 !== ["uk", "us", "fr", "es", "de", "at", "au", "ae", "be", "br", "ca", "ch", "cn", "co", "cz", "dk", "eg", "eu", "fi", "gb", "gr", "hk", "hr", "hu", "ie", "in", "jp", "mx", "nl", "no", "nz", "pl", "ro", "ru", "se"].indexOf(o)
    }
    function I() {
        var o, n = window.location.hostname, e = n.split(".");
        return 2 === e.length ? n = e[0] : 2 < e.length && (n = T(o = e[e.length - 2]) ? e[e.length - 3] : o),
        n
    }
    function _(o) {
        var n;
        return window.evidon_dg.siteConfig && window.evidon_dg.siteConfig.hasOwnProperty(o) ? (n = window.evidon_dg.siteConfig[o]).constructor == Object && (n.configType = "site") : window.evidon_dg.companyConfig && window.evidon_dg.companyConfig.hasOwnProperty(o) ? (n = window.evidon_dg.companyConfig[o]).constructor == Object && (n.configType = "company") : n = null,
        n
    }
    function y(o, n) {
        var e, i, d;
        if (!m(o))
            return e = document.getElementsByTagName("script")[0] || document.getElementsByTagName("head")[0],
            i = o + "?c=" + window.evidon_dg.companyId,
            window.evidon_dg.siteId ? i += "&s=" + window.evidon_dg.siteId : i += "&org=" + window.location.origin,
            (d = new XMLHttpRequest).open("GET", i, !1),
            d.send(""),
            404 != d.status && (i = d.responseText,
            n ? JSON.parse(i) : ((d = document.createElement("script")).type = "text/javascript",
            d.text = i,
            d.setAttribute("companyId", window.evidon_dg.companyId),
/*Change ===================================================== */
            d.nonce = window.evidon_dg.nonce,
/*Change ===================================================== */
            e.parentElement.insertBefore(d, e),
            t.push(o),
            !0))
    }
    function m(o) {
        for (var n = 0; n < t.length; n++)
            if (t[n] == o)
                return 1
    }
    function h() {
        var o = null;
        return (o = window.evidon && window.evidon.notice && window.evidon.notice.activeSettings ? window.evidon.notice.activeSettings.id : o) && !e && (window.evidon_dg.logToConsoleF(null, "UCP Notice Id: " + o),
        e = !0),
        o
    }
    function b(o) {
        var n, e, i;
        "report" != o.disposition && (n = window.evidon_dg.productNames[window.evidon_dg.cspLoadedById],
        e = h(),
        e = {
            companyId: l,
            siteId: d,
            ucpNoticeId: e,
            pageLoadId: window.evidon_dg.pageLoadId,
            disposition: n,
            resourceUri: o.blockedURI,
            pageUri: o.documentURI,
            effectiveDirective: o.effectiveDirective,
            originalPolicy: o.originalPolicy,
            sourceFile: o.sourceFile,
            statusCode: o.statusCode,
            violatedDirective: o.violatedDirective
        },
        window.evidon_dg.collectViolations && (o = JSON.stringify({
            "csp-report": {
                resources: [e]
            }
        }["csp-report"]),
        (i = new XMLHttpRequest).open("POST", window.evidon_dg.collector, !0),
        i.setRequestHeader("content-type", "application/json"),
        i.addEventListener("error", P),
        i.send(o)),
        window.evidon_dg.logToConsoleF(null, n + ": BLOCKED Resource: " + e.resourceUri))
    }
    function x(o) {
        if (!window.evidon_dg.siteConsentGeo)
            return null;
        if (window.evidon && window.evidon.location) {
            var n = window.evidon.location.id
              , e = window.evidon.location.code
              , i = window.evidon.location.stateId
              , d = window.evidon.location.stateCode
              , n = (window.evidon_dg.logToConsoleF(o, "Searching For ConsentGeo Settings For CountryId: " + n + " (" + e + ") / StateId: " + i + " (" + d + ")"),
            window.evidon_dg.siteConsentGeo.countries[n]);
            if (n) {
                if (i && n.hasOwnProperty("states"))
                    if (n.states[i])
                        return window.evidon_dg.logToConsoleF(o, "ConsentGeo Match Found For Country [" + e + "] AND State [" + d + "]"),
                        n.states[i].consentType;
                return window.evidon_dg.logToConsoleF(o, "ConsentGeo Match Found For Country [" + e + "]"),
                n.consentType
            }
        }
        return window.evidon_dg.logToConsoleF(o, "ConsentGeo Match NOT Found.  Using DEFAULT UCP Consent Setting"),
        window.evidon_dg.siteConsentGeo.defaultConsentType
    }
    function P() {
        window.evidon_dg.logToConsoleF(null, window.evidon_dg.productNames[window.evidon_dg.cspLoadedById] + ": Error sending violation data", !0)
    }
}();
