/* --- Imports --- */
const log = require('logToConsole');
const injectScript = require('injectScript');
const setInWindow = require('setInWindow');
const getUrl = require('getUrl');
const makeInteger = require('makeInteger');
const setDefaultConsentState = require('setDefaultConsentState');
const gtagSet = require('gtagSet');
const dataLayerPush = require('createQueue')('dataLayer');
const copyFromWindow = require('copyFromWindow');
const copyFromDataLayer = require('copyFromDataLayer');
const getCookieValues = require('getCookieValues');
const updateConsentState = require('updateConsentState');
const callInWindow = require('callInWindow');
const COOKIE_NAME = '_evidon_consent_cookie';
const companyId = data.companyId;
const domain = getRootDomain();
const evidonSiteNoticeTag = "https://c.evidon.com/sitenotice/evidon-sitenotice-tag.js";
const country = "https://c.evidon.com/geo/country.js";
const snThemes = "https://c.evidon.com/sitenotice/" + companyId + "/snthemes.js";
const settingsV3 = "https://c.evidon.com/sitenotice/" + companyId + "/" + domain + "/settingsV3.js";

const adVendors = {
    80: "google-adsense",
    257: "doubleclick",
    322: "doubleclick-bid-manager-formerly-invite-media",
    344: "admeld",
    355: "google-adwords",
    443: "google-display-network",
    464: "admob-google",
    469: "adometry",
    3857: "google-ad-services",
    6458: "google-mobile-ads",
    6608: "googleima"
};
const analyticsVendors = {
    81: "google-analytics"
};

const supportedRegions = {
    northAmerica: ['US', 'CA', 'PM', 'MQ'],
    europeEU: ['DE', 'ES', 'FR', 'GB', 'IT', 'NL', 'DK', 'IE', 'PL', 'AT', 'BE', 'SE', 'SK', 'HU', 'FI', 'PT', 'CZ', 'LU', 'GR', 'BG', 'RO', 'EE', 'LV', 'LT', 'SI', 'MT', 'CY', 'HR', 'IM', 'JE', 'GI', 'BY'],
    asiaPacific: ['CN', 'TW', 'KR', 'JP', 'AU', 'NZ', 'ID', 'MY', 'TH', 'IN', 'SG', 'HK', 'VN', 'AM', 'PH', 'LA', 'KH', 'NP', 'LK', 'MM', 'BN'],
    middleEast: ['IL', 'TR', 'EG', 'SA', 'LY', 'AE'],
    europeNonEU: ['RU', 'NO', 'CH', 'IS', 'MK', 'RS', 'UA', 'AL', 'BA', 'MD', 'GE', 'LI'],
    southAmerica: ['BR', 'AR', 'BO', 'CL', 'CO', 'EC', 'GY', 'PY', 'PE', 'SR', 'UY', 'VE', 'GF'],
    otherEU: ['RE', 'GG', 'PF', 'WF', 'YT'],
    africa: ['ZA', 'DZ', 'NG', 'CG', 'CD', 'GA', 'MA', 'SN', 'TN', 'MU'],
    caribbean: ['AI', 'AG', 'AW', 'BS', 'BB', 'BM', 'VG', 'KY', 'DM', 'DO', 'GD', 'HT', 'JM', 'AN', 'PR', 'KN', 'LC', 'VC', 'TT', 'TC', 'VI', 'GP', 'BL', 'MF'],
    centralAmerica: ['MX', 'BZ', 'CR', 'SV', 'GT', 'HN', 'NI', 'PA']
};

function getRegions() {
    var regions = [];

    if (data.defaultConsentNorthAmerica)
        regions = regions.concat(supportedRegions.northAmerica);

    if (data.defaultConsentEurope)
        regions = regions.concat(supportedRegions.europeEU);

    if (data.defaultConsentAsiaPacific)
        regions = regions.concat(supportedRegions.asiaPacific);

    if (data.defaultConsentMiddleEast)
        regions = regions.concat(supportedRegions.middleEast);

    if (data.defaultConsentEuropeNonEU)
        regions = regions.concat(supportedRegions.europeNonEU);

    if (data.defaultConsentSouthAmerica)
        regions = regions.concat(supportedRegions.southAmerica);

    if (data.defaultConsentOtherEU)
        regions = regions.concat(supportedRegions.otherEU);

    if (data.defaultConsentAfrica)
        regions = regions.concat(supportedRegions.africa);

    if (data.defaultConsentCaribbean)
        regions = regions.concat(supportedRegions.caribbean);

    if (data.defaultConsentCentralAmerica)
        regions = regions.concat(supportedRegions.centralAmerica);


    if (data.userDefinedRegions !== undefined) {
        for (var i = 0; i <= data.userDefinedRegions.length - 1; i++) {
            regions = regions.concat([data.userDefinedRegions[i].region.toUpperCase()]);
        }
    }
    return regions;
}

function is2parttld(value) {
    var tldindicators = ['co', 'com', 'info', 'web', 'info', 'gov', 'edu', 'biz', 'net', 'org'];
    var countryindicators = ['uk', 'us', 'fr', 'es', 'de', 'at', 'au', 'ae', 'be', 'br', 'ca', 'ch', 'cn', 'co', 'cz', 'dk', 'eg', 'eu', 'fi', 'gb', 'gr', 'hk', 'hr', 'hu', 'ie', 'in', 'jp', 'mx', 'nl', 'no', 'nz', 'pl', 'ro', 'ru', 'se'];
    return (tldindicators.indexOf(value) !== -1 || countryindicators.indexOf(value) !== -1);
}

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



function setDefaultConsent() {
    const regions = getRegions();
    gtagSet({ 'ads_data_redaction': true, 'developer_id': 'dOGRkZj' });

    if (data.enableAdvancedMode) {
        gtagSet({ 'url_passthrough': true });
    }
    else {
        gtagSet({ 'url_passthrough': false });
    }

    var defaultConsentState = {
        'ad_storage': data.adStorage,
        'analytics_storage': data.analyticsStorage,
        'ad_user_data': data.adUserData,
        'ad_personalization': data.adPersonalization
    };

    if (regions.length === 0 || data.defaultConsentGlobally) defaultConsentState.wait_for_update = 500;

    else {
        defaultConsentState.region = regions;
        defaultConsentState.wait_for_update = 500;
    }
    log(defaultConsentState);

    setDefaultConsentState(defaultConsentState);

    return;
}



const updateGoogleConsent = (consentedVendors) => {
    var consentState = {
        'ad_storage': "denied",
        'analytics_storage': "denied",
        'ad_user_data': "denied",
        'ad_personalization': "denied" 
    };
    for (let key in consentedVendors) {
        let vendorConsent = consentedVendors[key];
        if (adVendors[key] !== undefined && vendorConsent) {
            consentState.ad_storage = "granted";
            consentState.ad_user_data = "granted";
            consentState.ad_personalization = "granted";
        }
        else if (analyticsVendors[key] !== undefined && vendorConsent) consentState.analytics_storage = "granted";
    }
    log(consentState);
    updateConsentState(consentState);
};



const eventTypes = {
    "gtm.dom": true,
    "gtm.js": true,
    "gtm.load": true,
    "gtm.click": true,
    "gtm.linkClick": true,
    "gtm.elementVisibility": true,
    "gtm.formSubmit": true,
    "gtm.scrollDepth": true,
    "gtm.video": true
};

function checkDataLayer() {
    const evidonDataLayer = copyFromWindow("dataLayer");
    for (let i in evidonDataLayer) {
        if (eventTypes[evidonDataLayer[i].event] !== undefined) {
            throw("Event pushed before default Consent");
        }

    }
}

function defineUpdateMethod() {
    setInWindow('evidon.updateGoogleConsent', updateGoogleConsent);
    setInWindow('evidon.checkDataLayer', checkDataLayer);
    return;
}

function defineEvidonObject() {
    const companyId = data.companyId;
    setInWindow('evidon', [], true);
    setInWindow('evidon.id', makeInteger(companyId), true);
    setInWindow('evidon.test', false, true);
}


function injectEvidonScripts() {
    injectScript(evidonSiteNoticeTag, onSuccessEvidonSiteNoticeTag, onFailureEvidonSiteNoticeTag, "Evidon evidon-sitenotice-tag");
    injectScript(country, onSuccessCountry, onFailureCountry, "Evidon country");
    injectScript(snThemes, onSuccessSnThemes, onFailureSnThemes, "Evidon snThemes");
    injectScript(settingsV3, onSuccessSettingsV3, onFailureSettingsV3, "Evidon settingsV3");
}

/* --- Define Error and Sucess Callbacks --- */
const onSuccessEvidonSiteNoticeTag = () => {
    defineUpdateMethod();
    data.gtmOnSuccess();
};
const onFailureEvidonSiteNoticeTag = () => {
    data.gtmOnFailure();
};
const onSuccessCountry = () => {
    data.gtmOnSuccess();
};
const onFailureCountry = () => {
    data.gtmOnFailure();
};
const onSuccessSnThemes = () => {
    data.gtmOnSuccess();
};
const onFailureSnThemes = () => {
    data.gtmOnFailure();
};
const onSuccessSettingsV3 = () => {
    data.gtmOnSuccess();
};
const onFailureSettingsV3 = () => {
    data.gtmOnFailure();
};
const onSuccess = () => {
    data.gtmOnSuccess();
};
const onFailure = () => {
    data.gtmOnFailure();
};

setDefaultConsent();
defineEvidonObject();
injectEvidonScripts();




data.gtmOnSuccess();
checkDataLayer();