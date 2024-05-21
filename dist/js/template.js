/* --- Imports --- */
const log = require('logToConsole');
const injectScript = require('injectScript');
const setInWindow = require('setInWindow');
const getUrl = require('getUrl');
const makeInteger = require('makeInteger');
const setDefaultConsentState = require('setDefaultConsentState');


/* --- From UCP stub. Unmodified --- */
function is2parttld(value) {
  var tldindicators = ['co', 'com', 'info', 'web', 'info', 'gov', 'edu', 'biz', 'net', 'org'];
  var countryindicators = ['uk', 'us', 'fr', 'es', 'de', 'at', 'au', 'ae', 'be', 'br', 'ca', 'ch', 'cn', 'co', 'cz', 'dk', 'eg', 'eu', 'fi', 'gb', 'gr', 'hk', 'hr', 'hu', 'ie', 'in', 'jp', 'mx', 'nl', 'no', 'nz', 'pl', 'ro', 'ru', 'se'];
  return (tldindicators.indexOf(value) !== -1 || countryindicators.indexOf(value) !== -1);
}

/* --- From UCP stub. The parts variable is redefined to get the host from GTM rather than the window.location property --- */
function getRootDomain() {
    var parts;
    var rootDomain = '';
    parts = getUrl('host').split('.');
    if (parts.length === 2)
        rootDomain = parts[0];

    else if (parts.length > 2) {
        var part = parts[parts.length - 2];
        if (is2parttld(part)) {
            rootDomain = parts[parts.length - 3];
        }
        else {
            rootDomain = part;
        }
  }
  return rootDomain;
}

/* --- Define Error and Sucess Callbacks --- */
const onSuccessEvidonSiteNoticeTag = () => {
    log('Evidon: evidon-sitenotice-tag.js loaded sucessfully');
    data.gtmOnSuccess();
};
const onFailureEvidonSiteNoticeTag = () => {
    log('Evidon: evidon-sitenotice-tag.js loading failed');
    data.gtmOnFailure();
};
const onSuccessCountry = () => {
    log('Evidon: country.js loaded sucessfully');
    data.gtmOnSuccess();
};
const onFailureCountry = () => {
    log('Evidon: country.js loading failed');
    data.gtmOnFailure();
};
const onSuccessSnThemes = () => {
    log('Evidon: snthemes.js loaded sucessfully');
    data.gtmOnSuccess();
};
const onFailureSnThemes = () => {
    log('Evidon: snthemes.js loading failed');
    data.gtmOnFailure();
};
const onSuccessSettingsV2 = () => {
    log('Evidon: settingsV2.js loaded sucessfully');
    data.gtmOnSuccess();
};
const onFailureSettingsV2 = () => {
    log('Evidon: settingsV2.js loading failed');
    data.gtmOnFailure();
};

/* --- Sets Default consent --- */
setDefaultConsentState({
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied'
});

/* --- Defines the companyId and domain --- */
const companyId = data.companyId;
const domain = getRootDomain();

/* --- Defines the Evidon object within the window --- */
setInWindow('evidon', [], true);

/* --- Defines the companyId in the Evidon object --- */
setInWindow('evidon.id', makeInteger(companyId), true);

/* --- Defines the test property in the Evidon object. --- */
setInWindow('evidon.test', false, true);

/* --- Defines the src URLs for necessary UCP scripts --- */
const evidonSiteNoticeTag = "https://c.evidon.com/sitenotice/evidon-sitenotice-tag.js";
const country = "https://c.evidon.com/geo/country.js";
const snThemes = "https://c.evidon.com/sitenotice/" + companyId + "/snthemes.js";
const settingsV2 = "https://c.evidon.com/sitenotice/" + companyId + "/"+ domain + "/settingsV2.js";

/* --- Inject Scripts into the page --- */
injectScript(evidonSiteNoticeTag, onSuccessEvidonSiteNoticeTag, onFailureEvidonSiteNoticeTag, "Evidon evidon-sitenotice-tag");
injectScript(country, onSuccessCountry, onFailureCountry, "Evidon country");
injectScript(snThemes, onSuccessSnThemes, onFailureSnThemes, "Evidon snThemes");
injectScript(settingsV2, onSuccessSettingsV2, onFailureSettingsV2, "Evidon settingsV2");

data.gtmOnSuccess();