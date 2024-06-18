//start evidon tag

(function (id) {
    function append(scriptid, url, async) {
        var d = document,
            sn = 'script',
            f = d.getElementsByTagName(sn)[0];
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

    function getRootDomain() {
        var parts = window.location.hostname.split('.');
        if (parts.length === 2) rootDomain = parts[0];
        else if (parts.length > 2) {
            // see if the next to last value is a common tld
            var part = parts[parts.length - 2];
            if (is2parttld(part)) {
                rootDomain = parts[parts.length - 3]; // go back one more
            } else {
                rootDomain = part;
            }
        }

        return rootDomain;
    }

    window.evidon = {};
    window.evidon.id = id;
    window.evidon.test = false; // set to true for non-production testing.
    //window.evidon.userid = '';

    var cdn = '//c.evidon.com/',
        rootDomain = getRootDomain(),
        noticecdn = cdn + 'sitenotice/';
    append('evidon-notice', noticecdn + 'evidon-sitenotice-tag.js', false);
    append('evidon-location', cdn + 'geo/country.js', true);
    append('evidon-themes', noticecdn + id + '/snthemes.js', true);
    if (rootDomain) append('evidon-settings', noticecdn + id + '/' + rootDomain + (window.evidon.test ? '/test' : '') + '/settings.js', true);

    window.evidon.priorConsentCallback = function (categories, vendors, cookies) {
        // add the tags which need to wait for prior consent
        // here.  This should be all your advertising tags and
        // probably most of your social and tracking tags.

    }

    window.evidon.closeCallback = function () {
        // this is executed if the user closed a UI element without either Accepting (providing consent)
        // or Declining (declining to provide consent).
    }

    window.evidon.consentWithdrawnCallback = function () {
        // this is exeucted if the user withdraws consent and elects to
        // no longer allow technologies to run on the site.
    }

    window.evidon.consentDeclinedCallback = function () {
        window.evidon.notice.dropSuppressionCookie(390);
        // this is executed if the user explicitly declines giving consent by
        // using a Decline button
    }
})(8523);

//end evidon tag
// Start of Evidon Tag control

function appendEvidonTagControl(companyId, url) {
        var d = document,
            sn = 'script',
            f = d.getElementsByTagName(sn)[0];
        if (!f) f = d.head;
        var s = d.createElement(sn);
        s.src = url;
        s.charset = 'utf-8';
         s.setAttribute("companyId", companyId);
        f.parentNode.insertBefore(s, f);
    }

appendEvidonTagControl("8523", '//c.evidon.com/dg/dg.js');

// End of Evidon Tag control

//start of adobe

function append(scriptid, url, async) {
    var d = document,
        sn = 'script',
        f = d.getElementsByTagName(sn)[0];
    if (!f) f = d.head;
    var s = d.createElement(sn);
    s.async = async;
    s.id = scriptid;
    s.src = url;
    s.charset = 'utf-8';
    f.parentNode.insertBefore(s, f);
}
window.evidon.handleAnalyticsProvider = function () {
   // append('adobe', '//assets.adobedtm.com/e7c35504fae4d678cc82d2872caab2bad744cd76/satelliteLib-3667d5ef0856da7c2ed922d9652da5d847ba357b.js');
   
   //6sense 
	append('6senseWebTag', '//j.6sc.co/j/cbdbdac9-ff50-4637-89d7-680fa52f2ede.js');
   window.evidon.MuchkinConsent();
}
window.evidon.handleFunctionalPerformance = function () {
    window.evidon.handleChatConsent();
}
window.evidon.handleMarketingPerformance = function () {
    window.evidon.linkedinCampaignConsent();
}
window.evidon.priorConsentCallback = function (categories, vendors, cookies) {
    var handlers = {
        'analytics': 'handleAnalyticsProvider',
        'functional and performance': 'handleFunctionalPerformance',
        'marketing and personalization': 'handleMarketingPerformance'
    };
    if (!!categories['all']) {
        var handler = window.evidon.allProvider;
        if (typeof handler === 'function') handler();
        return;
    }
    for (var category in categories) {
        if (!categories[category]) continue;
        var handler = window.evidon[handlers[category]];
        if (typeof handler === 'function') handler();
    }
}
window.evidon.allProvider = function () {
    window.evidon.handleAnalyticsProvider();
    window.evidon.handleFunctionalPerformance();
    window.evidon.handleMarketingPerformance();
} 

// start of qualified-chat-consent-logic
window.evidon.handleChatConsent = function () { 
    append('qualified-chat', 'https://js.qualified.com/qualified.js?token=ktqfQUZYxKDjrhhN');
    (function(w,q){w['QualifiedObject']=q;w[q]=w[q]||function(){
        (w[q].q=w[q].q||[]).push(arguments)};})(window,'qualified');
    (function(){
        if (typeof window?.experienceId !== 'undefined' && window?.experienceId !== '') {
          qualified('showExperience', `experience-${window?.experienceId}`);
          console.log('qualified chat call with experiment id triggered: ' + window?.experienceId);
        }
       })();
}
// end of qualified-chat-consent-logic

//Start of Google discovery Discovery Campaign
window.evidon.linkedinCampaignConsent = function () {
    _linkedin_partner_id = "1876505";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    (function(l) {
        if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
        window.lintrk.q=[]}
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
    })(window.lintrk);
}

//Marketo Muchkin JS
window.evidon.MuchkinConsent = function () {
    (function() {
      var didInit = false;
      function initMunchkin() {
        if(didInit === false) {
          didInit = true;
          Munchkin.init('005-SHS-767');
        }
      }
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.defer = true;
      s.src = '//munchkin.marketo.net/munchkin.js';
      s.onreadystatechange = function() {
        if (this.readyState == 'complete' || this.readyState == 'loaded') {
          initMunchkin();
        }
      };
      s.onload = initMunchkin;
      document.getElementsByTagName('head')[0].appendChild(s);
    })();
}