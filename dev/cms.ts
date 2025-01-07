import { EvidonStubHelper } from "./evidonStubHelper";
import { Server} from "./server";
import fs from 'fs'
import path from 'path'


class CMSAPI extends Server{
    constructor(){
        super();
        this.defineCMSEndpoints()
    }





    genString(length: number) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }


    defineCMSEndpoints(){

        this.httpListener.get('/',(req,res)=>{
            fs.readdir(__dirname+'/html', (err, files) => {

                let links = ''
                if (err) {
                  console.error('Error reading directory:', err);
                  return;
                }
                const fileNames = files.filter(file => {
                  const filePath = path.join(__dirname+'/html', file);
                  return fs.statSync(filePath).isFile();
                });
                fileNames.forEach(fileName => {
                  links = links + `<a class="link" href="https://dg-sandbox-deb249716852.herokuapp.com/${fileName.split(".")[0]}">${fileName}</a>\n`;
                });
    
                res.send(
                `<html>
                    <head>

                        <style>
                            .links{
                                display: flex; 
                                flex-direction: column;
                                gap: 10px;
                            }
                            .link{
                                text-decoration: none;
                            }
                        </style>

                    </head>
                    <body>
                        <h1>Directory</h1>
                        <div class="links">${links}</div>
                    </body>
                </html>`)
    
            });
        }) 

        this.httpListener.get('/:filename',(req,res)=>{
            res.sendFile(`/html/${req.params.filename}.html`,{root: __dirname })
        })

        this.httpListener.get('/assets/svg',(req,res)=>{
            res.sendFile(`/assets/cookie.svg`,{root: __dirname })
        })


        this.httpListener.get('/nonce/test', (req, res)=>{
            const nonce = this.genString(15);
            let html;
            res.setHeader('Content-Security-Policy',`script-src 'self' data: *.betrad.com *.evidon.com *.evidon.com *.crownpeak.com 'nonce-${nonce}'; connect-src data: *.evidon.com *.betrad.com optoutapi.evidonstage.com privacycollector.evidonqa.com; style-src 'self' *.evidon.com *.betrad.com;`)
            const elementId = "evidon-ucp-stub";
            html = `<!DOCTYPE html>
                <html>
                    <head>
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
                                append('evidon-notice', noticecdn + 'evidon-sitenotice-tag.js', false);
                                append('evidon-location', cdn + 'geo/country.js', true);
                                append('evidon-themes', noticecdn + id + '/snthemes.js', true);
                                if (rootDomain) append('evidon-settings', noticecdn + id + '/' + rootDomain + (window.evidon.test ? '/test' : '') + '/settingsV3.js', true);

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
                            })(6914);
                        </script>
                        ${EvidonStubHelper.getOmniTag(nonce)}
                    </head>
                </html>`;

            res.send(html);
        })

        this.httpListener.get('/nonce/test2', (req, res)=>{
            const nonce = this.genString(15);
            let html;
            res.setHeader('Content-Security-Policy',`script-src 'self' data: *.betrad.com *.evidon.com *.evidon.com *.crownpeak.com 'nonce-${nonce}'; connect-src data: *.evidon.com *.betrad.com optoutapi.evidonstage.com privacycollector.evidonqa.com; style-src 'self' *.evidon.com *.betrad.com 'strict-dynamic';`)
            const elementId = "evidon-ucp-stub";
            html = `<!DOCTYPE html>
                <html>
                    <head>
                        ${EvidonStubHelper.getSiteNoticeTag(nonce)}
                        ${EvidonStubHelper.getOmniTag(nonce)}
                    </head>
                </html>`;

            res.send(html);
        })

        this.httpListener.get('/:folder/testing/:filename', (req, res)=>{
            res.sendFile(`/${req.params.folder}/${req.params.filename}.html`,{root: __dirname })
        })
        
    }

}

const cms = new CMSAPI()

