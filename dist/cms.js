"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
class CMSAPI extends server_1.Server {
    constructor() {
        super();
        this.defineCMSEndpoints();
    }
    defineCMSEndpoints() {
        this.app.get('/dg/dg.js', (req, res) => {
            res.sendFile('/js/dg.js', { root: __dirname });
        });
        this.app.get('/sitenotice/evidon-sitenotice-tag.js', (req, res) => {
            res.sendFile('/js/evidon-sitenotice-tag', { root: __dirname });
        });
        this.app.get('/:filename', (req, res) => {
            res.setHeader('Content-Security-Policy', `default-src 'self' data: *.betrad.com *.evidon.com *.evidon.com 'nonce-allow'; connect-src data: *.evidon.com`);
            res.sendFile(`/html/${req.params.filename}`, { root: __dirname });
        });
    }
}
const cms = new CMSAPI();
