"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const evidonStubHelper_1 = require("./evidonStubHelper");
const server_1 = require("./server");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class CMSAPI extends server_1.Server {
    constructor() {
        super();
        this.defineCMSEndpoints();
    }
    genString(length) {
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
    defineCMSEndpoints() {
        this.httpListener.get('/', (req, res) => {
            fs_1.default.readdir(__dirname + '/html', (err, files) => {
                let links = '';
                if (err) {
                    console.error('Error reading directory:', err);
                    return;
                }
                const fileNames = files.filter(file => {
                    const filePath = path_1.default.join(__dirname + '/html', file);
                    return fs_1.default.statSync(filePath).isFile();
                });
                fileNames.forEach(fileName => {
                    links = links + `<a class="link" href="https://dg-sandbox-deb249716852.herokuapp.com/${fileName.split(".")[0]}">${fileName}</a>\n`;
                });
                res.send(`<html>
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
                </html>`);
            });
        });
        this.httpListener.get('/:filename', (req, res) => {
            res.sendFile(`/html/${req.params.filename}.html`, { root: __dirname });
        });
        this.httpListener.get('/js/:filename', (req, res) => {
            res.sendFile(`/html/${req.params.filename}`, { root: __dirname });
        });
        this.httpListener.get('/OCD-30359/nonce-implementation/ucp-only/:options', (req, res) => {
            const nonce = this.genString(15);
            let html;
            res.setHeader('Content-Security-Policy', `default-src 'self' data: *.betrad.com *.evidon.com *.evidon.com *.crownpeak.com 'nonce-${nonce}'; connect-src data: *.evidon.com; style-src 'self'`);
            if (req.params.options == "documentId") {
                const elementId = "evidon-ucp-stub";
                const code = `document.getElementById("${elementId}");`;
                html = `<!DOCTYPE html>
                    <html>
                        <head>
                            ${evidonStubHelper_1.EvidonStubHelper.getSiteNoticeTag(nonce, code, elementId)}
                            ${evidonStubHelper_1.EvidonStubHelper.getOmniTag(nonce)}
                        </head>
                    </html>`;
            }
            if (req.params.options == "currentScript") {
                const code = "document.currentScript.nonce;";
                html = `<!DOCTYPE html>
                    <html>
                        <head>
                            ${evidonStubHelper_1.EvidonStubHelper.getSiteNoticeTag(nonce, code, "")}
                            ${evidonStubHelper_1.EvidonStubHelper.getOmniTag(nonce)}
                        </head>
                    </html>`;
            }
            res.send(html);
        });
    }
}
const cms = new CMSAPI();
