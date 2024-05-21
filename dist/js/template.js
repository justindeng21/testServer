// Enter your template code here.
const log = require('logToConsole');
const injectScript = require('injectScript');


const companyId = data.companyId;
log('data =', data);


const onSuccess = () => {
  log('Evidon Sucessfully loaded');
  data.gtmOnSuccess();
};

// If the script fails to load, log a message and signal failure
const onFailure = () => {
  log('Evidon load failed');
  data.gtmOnFailure();
};


const evidonSiteNoticeTag = "https://c.evidon.com/sitenotice/evidon-sitenotice-tag.js";
const country = "https://c.evidon.com/geo/country.js";
const snThemes = "https://c.evidon.com/sitenotice/" + companyId + "/snthemes.js";
const settingsV2 = "https://c.evidon.com/sitenotice/" + companyId + "/herokuapp/settingsV2.js";

injectScript(evidonSiteNoticeTag, data.gtmOnSuccess, data.gtmOnFailure, "attraqtLib");

injectScript(country, onSuccess, onFailure, "attraqtLib");

injectScript(snThemes, onSuccess, onFailure, "attraqtLib");

injectScript(settingsV2, onSuccess, onFailure, "Evidon CMP");

// Call data.gtmOnSuccess when the tag is finished.
data.gtmOnSuccess();