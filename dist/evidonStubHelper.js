"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvidonStubHelper = void 0;
class EvidonStubHelper {
    static getSiteNoticeTag(companyId, token) {
        return `
            <script type="text/javascript" >
                (function (id) {
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
                    append('evidon-notice', noticecdn + 'evidon-sitenotice-tag.js?v=${token}', false);
                    append('evidon-location', cdn + 'geo/country.js?v=${token}', true);
                    append('evidon-themes', noticecdn + id + '/snthemes.js?v=${token}', true);
                    if (rootDomain) append('evidon-settings', noticecdn + id + '/' + rootDomain + (window.evidon.test ? '/test' : '') + '/settingsV3.js?v=${token}', true);
                
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
                        // this is executed if the user explicitly declines giving consent by
                        // using a Decline button
                    }
                
                    window.evidon.consentRejectCallback = function () {
                        // this is executed if the user explicitly revokes consent by
                        // using the Opt-Out All / Reject button for Opt-Out Regulation only.
                    }
                })(${companyId});
            </script> 
        `;
    }
}
exports.EvidonStubHelper = EvidonStubHelper;
