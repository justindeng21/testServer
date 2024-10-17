/* --- Imports --- */
const log = require('logToConsole');
const injectScript = require('injectScript');
const setInWindow = require('setInWindow');
const getUrl = require('getUrl');
const makeInteger = require('makeInteger');
const setDefaultConsentState = require('setDefaultConsentState');
const gtagSet = require('gtagSet');
const updateConsentState = require('updateConsentState');
const copyFromWindow = require("copyFromWindow");
const companyId = data.companyId;
const domain = getRootDomain();
const callLater = require("callLater");


const evidonSiteNoticeTag = "https://c.evidon.com/sitenotice/evidon-sitenotice-tag.js";
const country = "https://c.evidon.com/geo/country.js";
const snThemes = "https://c.evidon.com/sitenotice/" + companyId + "/snthemes.js";
const settingsV3 = "https://c.evidon.com/sitenotice/" + companyId + "/" + domain + "/settingsV3.js";
const debug = "https://c.evidon.com/gtm/debug.js";

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

    if (data.enableUrlPassthrough) {
        gtagSet({ 'url_passthrough': true });
    }
    else {
        gtagSet({ 'url_passthrough': false });
    }

  
    if(!data.disableAdvancedMode){
        var defaultConsentState = {
            'ad_storage': data.adStorage,
            'analytics_storage': data.analyticsStorage,
            'ad_user_data': data.adUserData,
            'ad_personalization': data.adPersonalization
        };

        if(regions.length !== 0 && data.defaultConsentGlobally){ 
            defaultConsentState.region = regions;
        }
  
        setDefaultConsentState(defaultConsentState);
    }
  
    else{
      log("Advanced Mode Disabled");
    }

    return;
}


const updateGoogleConsent = (evidonConsentState) => {
  
    
    if(!data.disableAdvancedMode){
        if(data.adStorage == "granted") evidonConsentState.ad_storage = "granted";
        if(data.analyticsStorage == "granted") evidonConsentState.analytics_storage = "granted";
        if(data.adUserData == "granted") evidonConsentState.ad_user_data = "granted";
        if(data.adPersonalization == "granted") evidonConsentState.ad_personalization = "granted";
        updateConsentState(evidonConsentState);
    }
    if(data.enableDebugMode) copyFromWindow("evidon.logConsentUpdate")();
};


function injectDebugScript() {
  injectScript(debug, onSucessDebug, onFailureDebug, "Debug Mode");
}

function defineUpdateMethod() {
    setInWindow('evidon.updateGoogleConsent', updateGoogleConsent);
    return;
}

function defineEvidonObject() {
    const companyId = data.companyId;
    setInWindow('evidon', [], true);
    setInWindow('evidon.id', makeInteger(companyId), true);
    setInWindow('evidon.test', false, true);
    setInWindow('evidon.googleTemplateEnabled', true, true);
    defineUpdateMethod();
}


function injectEvidonScripts() {
    injectScript(evidonSiteNoticeTag, onSuccessEvidonSiteNoticeTag, onFailureEvidonSiteNoticeTag, "Evidon evidon-sitenotice-tag");
    injectScript(country, onSuccessCountry, onFailureCountry, "Evidon country");
    injectScript(snThemes, onSuccessSnThemes, onFailureSnThemes, "Evidon snThemes");
    injectScript(settingsV3, onSuccessSettingsV3, onFailureSettingsV3, "Evidon settingsV3");
    if(data.enableDebugMode) injectDebugScript();
}

/* --- Define Error and Sucess Callbacks --- */
const onSuccessEvidonSiteNoticeTag = () => {
  //if(data.enableDebugMode) log("%c"+"\n\tevidon-sitenotice-tag.js loading sucessful","color: #0C0");
};
const onFailureEvidonSiteNoticeTag = () => {
   //if(data.enableDebugMode) log("%c"+"\n\tevidon-sitenotice-tag.js loading failed","color: #C00");
};
const onSuccessCountry = () => {
    //if(data.enableDebugMode) log("%c"+"\n\tcountry.js loading sucessful","color: #0C0");
};
const onFailureCountry = () => {
    //if(data.enableDebugMode) log("%c"+"\n\tcountry.js loading failed","color: #C00");
};
const onSuccessSnThemes = () => {
    //if(data.enableDebugMode) log("%c"+"\n\tsnthemes.js loading sucessful","color: #0C0");
};
const onFailureSnThemes = () => {
    //if(data.enableDebugMode) log("%c"+"\n\tsnthemes.js loading failed","color: #C00");
};
const onSuccessSettingsV3 = () => {
    //if(data.enableDebugMode) log("%c"+"\n\tsettingsV3.js loading sucessful","color: #0C0");
};
const onFailureSettingsV3 = () => {
    //if(data.enableDebugMode) log("%c"+"\n\tsettingsV3.js loading failed","color: #C00");
};
const onSucessDebug = () => {
    copyFromWindow("evidon.checkConsentTiming")();
    copyFromWindow("evidon.logConsent")();
};

const onFailureDebug = () =>{};


setDefaultConsent();
defineEvidonObject();
injectEvidonScripts();


data.gtmOnSuccess();