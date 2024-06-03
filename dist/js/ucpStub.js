
(function (id) {


    console.log('Loading UCP...')
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

    var cdn = '//c.evidon.com/', rootDomain = getRootDomain(), noticecdn = cdn + 'sitenotice/';
    append('evidon-notice', noticecdn + 'evidon-sitenotice-tag.js', false);
    append('evidon-location', cdn + 'geo/country.js', true);
    append('evidon-themes', noticecdn + id + '/snthemes.js', true);
    if (rootDomain) append('evidon-settings', noticecdn + id + '/' + rootDomain + (window.evidon.test ? '/test' : '') + '/settingsV2.js', true);

    window.evidon.priorConsentCallback = function (categories, vendors, cookies) {
        // add the tags which need to wait for prior consent
        // here.  This should be all your advertising tags and
        // probably most of your social and tracking tags.
        var handlers = {
            categories: {
                'creative\/ad format technology': 'handleCreativeAdFormatTechnology',
                'data aggregator\/supplier': 'handleDataAggregatorSupplier',
                'data management platform': 'handleDataManagementPlatform',
                'marketing solutions': 'handleMarketingSolutions',
                'mobile': 'handleMobile',
                'online privacy platform': 'handleOnlinePrivacyPlatform',
                'optimizer': 'handleOptimizer',
                'other': 'handleOther',
                'publisher': 'handlePublisher',
                'research provider': 'handleResearchProvider',
                'retargeter': 'handleRetargeter',
                'social media': 'handleSocialMedia',
                'tag manager': 'handleTagManager',
                'video': 'handleVideo',
                'website optimization': 'handleWebsiteOptimization',
                'advertising': 'handleAdvertising',
                'all':'handleAll'
            },
            vendors: {}
        };

        for (var category in categories) {
            if (!categories[category]){
                console.log(category)
                continue;
            }
            var handler = window.evidon[handlers.categories[category]];
            console.log(handler)
            if (typeof handler === 'function') handler();
        }
        for (var vendor in vendors) {
            if (!vendors[vendor]) continue;
            var handler = window.evidon[handlers.vendors[vendor]];
            if (typeof handler === 'function') handler();
        }
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
        // this is executed if the user explicitly declines giving consent by
        // using a Decline button
    }

    window.evidon.handleAll = function (categories, vendors, cookies) {
        console.log("Hello World");
    }


})(6153);



