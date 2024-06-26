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
    if (rootDomain) append('evidon-settings', noticecdn + id + '/' + rootDomain + (window.evidon.test ? '/test' : '') + '/settingsV2.js', false);

    window.evidon.priorConsentCallback = function (categories, vendors, cookies) {}

    window.evidon.closeCallback = function () {}

    window.evidon.consentWithdrawnCallback = function () {}

    window.evidon.consentDeclinedCallback = function () {}


    const fireComScore = (consentFlag) => {

        console.log("Consent flag pushed into _comscore:", consentFlag)

        var _comscore = _comscore || []; 
        _comscore.push({ c1: "2", c2: "3005670", cs_ucfr: consentFlag, options: { enableFirstPartyCookie: true } });
        (function() {
            var s = document.createElement("script"), el = document.getElementsByTagName("script")[0];
            s.async = true; 
            s.src = "https://sb.scorecardresearch.com/cs/3005670/beacon.js";
            el.parentNode.insertBefore(s, el); 
        })();

    }


    const checkConsent = ()=>{
        try{
            let granularConsent = window.evidon.notice._getConsentedCategories();
            let allOrNothingConsent = true;

            for(let category in granularConsent){
                if(granularConsent[category] === false){
                    allOrNothingConsent = false;
                    break;
                }
            }

            console.log("All or Nothing Consent:", allOrNothingConsent)
            if(allOrNothingConsent)
                fireComScore(1)
            else if(!allOrNothingConsent)
                fireComScore(0)

        }catch{
            setTimeout(checkConsent,250);
        }
    };



    const settings = document.getElementById("evidon-settings");

    settings.addEventListener("load",()=>{
        checkConsent();
    })

})(6153);








