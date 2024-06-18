var domain = 'https://consent.umusic.com/v2/';
// Load JSON text from server hosted file and return JSON parsed object
function loadJSON(filePath) {
    // Load json file;
    var json = loadTextFileAjaxSync(filePath, "application/json");
    // Parse json
    return JSON.parse(json);
}
// Load text with Ajax synchronously: takes path to file and optional MIME type
function loadTextFileAjaxSync(filePath, mimeType) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    if (mimeType != null) {
        if (xmlhttp.overrideMimeType) {
            xmlhttp.overrideMimeType(mimeType);
        }
    }
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        return xmlhttp.responseText;
    }
    else {
        return null;
    }
}

function slugify(string) {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    let returnString = string.toString().toLowerCase()
        .replace('/', '')
        .replace(/\s+/g, '-'); // Replace spaces with -
    for (var i = 0; i < a.length; i++) {
        returnString = returnString.replace(a.charAt(i), b.charAt(i)); // Replace special characters
    }
    returnString = returnString.replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
    return returnString;
}
function appendStyle(styles) {
    var umgcss = document.createElement('style');
    umgcss.type = 'text/css';
    umgcss.textContent = styles;
    document.head.appendChild(umgcss);
}
var siteDomain = window.location.hostname;

var firstPath = window.location.pathname.split('/')[1];

var domainsJson = loadJSON(domain + 'sub-folders.json');

if (domainsJson.domains.includes(siteDomain + window.location.pathname.replace(/\/$/, ""))) {
    siteDomain = siteDomain + window.location.pathname.replace(/\/$/, "");
} else if (
    domainsJson.domains.includes(siteDomain + '/' + firstPath) ||
    domainsJson.auto_update.includes(siteDomain)
) {
    siteDomain = siteDomain + '/' + firstPath;
}

console.log('siteDomain');
console.log(siteDomain);

if (typeof umggdpr === "undefined") {
    var umggdpr = {};
    console.log('-- UMG: Consent script loaded (ver 9.05)');
    umggdpr.active = true;

    var json = false;
    try {
        json = loadJSON(domain + 'json/' + slugify(siteDomain) + '.json');
        if (json) {
            umggdpr.active = json.active;
        }
    }
    catch (error) {
        json = false;
        console.log(error);
    }

    if (!umggdpr.active)
        console.log('-- UMG: Consent has been deactivated for ' + siteDomain);
    else {
        appendStyle(".evidon-banner-title, .evidon-banner-message, .evidon-banner-message a{ color:#000000; }");//default

        var _umggdprcss = "";
        if (json && json.hasOwnProperty('fontColor') && json.fontColor !== '')
            _umggdprcss = " .evidon-banner-title, .evidon-banner-message, .evidon-banner-message a{ color:" + json.fontColor + " !important; }";
        if (json && json.hasOwnProperty('backgroundColor') && json.backgroundColor !== '')
            _umggdprcss += " .evidon-banner { background-color:" + json.backgroundColor + " !important; }";
        if (json && json.hasOwnProperty('fontSize') && json.fontSize !== '')
            _umggdprcss += " .evidon-banner { font-size:" + json.fontSize + " !important; }";
        if (_umggdprcss.length > 0)
            appendStyle(_umggdprcss);

        var umg_gdpr_wl = document.createElement("img");
        umg_gdpr_wl.src = domain + "whitelist.gif?domain=" + siteDomain.toLowerCase();

        console.log('LOad:-' + umg_gdpr_wl.src);
        var gdpr = (function (id) {
            function append(scriptid, url, async) {
                var d = document, sn = 'script', f = d.getElementsByTagName(sn)[0];
                if (!f) f = d.head;
                var s = d.createElement(sn);
                s.async = async;
                s.id = scriptid;
                s.src = url;
                s.charset = 'utf-8';
                f.parentNode.insertBefore(s, f);
            }
            function is2parttld(value) {
                var tldindicators = ['co', 'com', 'info', 'web', 'info', 'gov', 'edu', 'biz', 'net', 'org'];
                var countryindicators = ['uk', 'us', 'fr', 'es', 'de', 'at', 'au', 'ae', 'be', 'br', 'ca', 'ch', 'cn', 'co', 'cz', 'dk', 'eg', 'eu', 'fi', 'gb', 'gr', 'hk', 'hr', 'hu', 'ie', 'in', 'jp', 'mx', 'nl', 'no', 'nz', 'pl', 'ro', 'ru', 'se'];
                return (tldindicators.indexOf(value) !== -1 || countryindicators.indexOf(value) !== -1);
            }
            function setWaitTags(waitTagName) {
                var waits = document.getElementsByTagName(waitTagName);
                for (j = 0; j < waits.length; j++) {
                    var newtag = document.createElement('script')
                    newtag.textContent = waits[j].textContent;
                    var attrs = waits[j].attributes;
                    for (var ii = 0; ii < attrs.length; ++ii) {
                        if (attrs[ii].nodeName !== 'id') {
                            newtag.setAttribute(attrs[ii].nodeName, attrs[ii].value);
                        }
                    }
                    document.body.appendChild(newtag);
                }

            }
            function getRootDomain() {
                var parts = window.location.hostname.split('.');
                if (parts.length === 2) rootDomain = parts[0];
                else if (parts.length > 2) {
                    // see if the next to last value is a common tld
                    var part = parts[parts.length - 2];
                    if (is2parttld(part)) {
                        rootDomain = parts[parts.length - 3]; // go back one more
                    }
                    else {
                        rootDomain = part;
                    }
                }
                return rootDomain;
            }

            window.evidon = {};
            window.evidon.id = id;
            window.evidon.test = false;  // set to true for non-production testing.
            //window.evidon.userid = '';
            var cdn = 'https://c.evidon.com/', rootDomain = getRootDomain(), noticecdn = cdn + 'sitenotice/';
            append('evidon-notice', noticecdn + 'evidon-sitenotice-tag.js', false);
            append('evidon-location', cdn + 'geo/country.js', true);
            append('evidon-themes', noticecdn + id + '/snthemes.js', true);
            if (rootDomain) append('evidon-settings', noticecdn + id + '/' + rootDomain + (window.evidon.test ? '/test' : '') + '/settings.js', true);

            window.evidon.priorConsentCallback = function (categories, vendors, cookies) {

                //waitAdvertising
                //waitAnalytics
                //waitFunctional
                var handlers = {
                    categories: {
                        'online advertising': 'handleOnlineAdvertising',
                        'performance and analytics': 'handlePerformanceandAnalytics',
                        'essential and functional': 'handleEssentialandFunctional',
                    },
                    vendors: {}
                };
                for (var category in categories) {
                    if (!categories[category]) continue;
                    if (category === 'all') {
                        for (var callback in handlers.categories) {
                            var handler = window.evidon[handlers.categories[callback]];
                            if (typeof handler === 'function') handler();
                        }
                    }
                    else {
                        var handler = window.evidon[handlers.categories[category]];
                        if (typeof handler === 'function') handler();
                    }
                    for (var vendor in vendors) {
                        if (!vendors[vendor]) continue;
                        var handler = window.evidon[handlers.vendors[vendor]];
                        if (typeof handler === 'function') handler();
                    }
                }
            }

            window.evidon.handleOnlineAdvertising = function () {
                // Nest all Online Advertising tags here
                setWaitTags("waitadvertising");
                if (typeof window.handleOnlineAdvertising == 'function') {
                    window.handleOnlineAdvertising();
                }
            }
            window.evidon.handlePerformanceandAnalytics = function () {
                // Nest all Performance and Analytics tags here
                setWaitTags("waitanalytics");
                if (typeof window.handlePerformanceandAnalytics == 'function') {
                    window.handlePerformanceandAnalytics();
                }
            }
            window.evidon.handleEssentialandFunctional = function () {
                // Nest all Essential and Functional tags here
                setWaitTags("waitfunctional");
                if (typeof window.handleEssentialandFunctional == 'function') {
                    window.handleEssentialandFunctional();
                }
            }
            window.evidon.closeCallback = function () {
                // this is executed if the user closed a UI element without either Accepting (providing consent)
                // or Declining (declining to provide consent).
                if (typeof window.closeCallback == 'function') {
                    window.closeCallback();
                }
            }
            window.evidon.consentWithdrawnCallback = function () {
                // this is exeucted if the user withdraws consent and elects to
                // no longer allow technologies to run on the site.
                if (typeof window.consentWithdrawnCallback == 'function') {
                    window.consentWithdrawnCallback();
                }

            }
            window.evidon.consentDeclinedCallback = function () {
                // this is executed if the user explicitly declines giving consent by
                // using a Decline button
                window.evidon.notice.dropSuppressionCookie(365);
                if (typeof window.consentDeclinedCallback == 'function') {
                    window.consentDeclinedCallback();
                }
            }
        })(5116);
    }
}