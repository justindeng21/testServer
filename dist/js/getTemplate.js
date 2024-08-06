/* --- Imports --- */
const log = require('logToConsole');
const injectScript = require('injectScript');
const setInWindow = require('setInWindow');
const getUrl = require('getUrl');
const makeInteger = require('makeInteger');
const setDefaultConsentState = require('setDefaultConsentState');
const gtagSet = require('gtagSet');
const dataLayerPush = require('createQueue')('dataLayer');
const addConsentListener = require('addConsentListener');


var supportedRegions = {
    northAmerica: ['US', 'CA', 'PM', 'MQ'],
    europeEU: ['DE', 'ES', 'FR', 'GB', 'IT', 'NL', 'DK', 'IE', 'PL', 'AT', 'BE', 'SE', 'SK', 'HU', 'FI', 'PT', 'CZ', 'LU', 'GR', 'BG', 'RO', 'EE', 'LV', 'LT', 'SI', 'MT', 'CY', 'HR', 'IM', 'JE', 'GI', 'BY'],
    asiaPacific: ['CN', 'TW', 'KR', 'JP', 'AU', 'NZ', 'ID', 'MY', 'TH', 'IN', 'SG', 'HK', 'VN', 'AM', 'PH', 'LA', 'KH', 'NP', 'LK', 'MM', 'BN'],
    middleEast: ['IL', 'TR', 'EG', 'SA', 'LY', 'AE'] ,
    europeNonEU: ['RU', 'NO', 'CH', 'IS', 'MK', 'RS', 'UA', 'AL', 'BA', 'MD', 'GE', 'LI'],
    southAmerica: ['BR', 'AR', 'BO', 'CL', 'CO', 'EC', 'GY', 'PY', 'PE', 'SR', 'UY', 'VE', 'GF'],
    otherEU: ['RE', 'GG', 'PF', 'WF', 'YT'] ,
    africa: ['ZA', 'DZ', 'NG', 'CG', 'CD', 'GA', 'MA', 'SN', 'TN', 'MU'],
    caribbean: ['AI', 'AG', 'AW', 'BS', 'BB', 'BM', 'VG', 'KY', 'DM', 'DO', 'GD', 'HT', 'JM', 'AN', 'PR', 'KN', 'LC', 'VC', 'TT', 'TC', 'VI', 'GP', 'BL', 'MF'],
    centralAmerica: ['MX', 'BZ', 'CR', 'SV', 'GT', 'HN', 'NI', 'PA']
};

function getRegions(){
    var regions = [];

    if(data.defaultConsentNorthAmerica)
        regions = regions.concat(supportedRegions.northAmerica);

    if(data.defaultConsentEurope)
        regions = regions.concat(supportedRegions.europeEU);

    if(data.defaultConsentAsiaPacific)
        regions = regions.concat(supportedRegions.asiaPacific);

    if(data.defaultConsentMiddleEast)
        regions = regions.concat(supportedRegions.middleEast);

    if(data.defaultConsentEuropeNonEU)
        regions = regions.concat(supportedRegions.europeNonEU);

    if(data.defaultConsentSouthAmerica)
        regions = regions.concat(supportedRegions.southAmerica);

    if(data.defaultConsentOtherEU)
        regions = regions.concat(supportedRegions.otherEU);

    if(data.defaultConsentAfrica)
        regions = regions.concat(supportedRegions.africa);

    if(data.defaultConsentCaribbean)
        regions = regions.concat(supportedRegions.caribbean);

    if(data.defaultConsentCentralAmerica)
        regions = regions.concat(supportedRegions.centralAmerica);
  
  
    if(data.userDefinedRegions !== undefined){
      for(var i = 0; i <= data.userDefinedRegions.length-1; i++){
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

function setDefaultConsent(){
    const regions = getRegions();
    if(regions.length === 0 || data.defaultConsentGlobally){
        log("Consent applied globally");
        setDefaultConsentState({
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
        });
    }

    else{
        log("Consent applied to the following regions:", regions);
        setDefaultConsentState({
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'region': regions
        });
    }
    gtagSet({'ads_data_redaction': true,'developer_id.dOGRkZj': true});
  
    if(data.enableAdvancedMode){
        gtagSet({'url_passthrough': true});
        log("Advanced Mode Enabled")
    }
    else{
        log("Basic Mode Enabled");
    }
    return;
}

function defineEvidonObject(){
    const companyId = data.companyId;
    setInWindow('evidon', [], true);
    setInWindow('evidon.id', makeInteger(companyId), true);
    setInWindow('evidon.test', false, true);
}

function injectEvidonScripts(){
    const companyId = data.companyId;
    const domain = getRootDomain();
    const evidonSiteNoticeTag = "https://c.evidon.com/sitenotice/evidon-sitenotice-tag.js";
    const country = "https://c.evidon.com/geo/country.js";
    const snThemes = "https://c.evidon.com/sitenotice/" + companyId + "/snthemes.js";
    const settingsV3 = "https://c.evidon.com/sitenotice/" + companyId + "/"+ domain + "/settingsV3.js";
    injectScript(evidonSiteNoticeTag, onSuccessEvidonSiteNoticeTag, onFailureEvidonSiteNoticeTag, "Evidon evidon-sitenotice-tag");
    injectScript(country, onSuccessCountry, onFailureCountry, "Evidon country");
    injectScript(snThemes, onSuccessSnThemes, onFailureSnThemes, "Evidon snThemes");
    injectScript(settingsV3, onSuccessSettingsV3, onFailureSettingsV3, "Evidon settingsV3");
}

const onSuccessEvidonSiteNoticeTag = () => {
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

setDefaultConsent();
defineEvidonObject();
injectEvidonScripts();


data.gtmOnSuccess();