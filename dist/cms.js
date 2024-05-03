"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class CMSAPI extends server_1.Server {
    constructor() {
        super();
        this.defineCMSEndpoints();
    }
    writeFile(filename, code) {
        fs_1.default.writeFile(filename, code, (err) => {
            if (err) {
                console.log('There was an error');
                return;
            }
        });
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
                    links = links + `<a href="https://dg-sandbox-deb249716852.herokuapp.com/${fileName}">${fileName}</a>\n`;
                });
                res.send(links);
            });
        });
        this.httpListener.get('/dg/dg.js', (req, res) => {
            res.sendFile('/js/dg.js', { root: __dirname });
        });
        this.httpListener.get('/sitenotice/evidon-sitenotice-tag.js', (req, res) => {
            res.sendFile('/js/evidon-sitenotice-tag.js', { root: __dirname });
        });
        this.httpListener.get('/:filename', (req, res) => {
            res.setHeader('Content-Security-Policy', `default-src 'self' data: *.betrad.com *.evidon.com *.evidon.com *.crownpeak.com 'nonce-allow'; connect-src data: *.evidon.com; style-src 'self' 'unsafe-inline'`);
            res.sendFile(`/html/${req.params.filename}`, { root: __dirname });
        });
        this.httpListener.get('/nocsp/:filename', (req, res) => {
            res.sendFile(`/html/${req.params.filename}`, { root: __dirname });
        });
        this.httpListener.post('/data/collection', server_1.jsonParser, (req, res) => {
            const data = JSON.stringify(req.body);
            const keys = Object.keys(data);
            console.log(keys);
            res.sendStatus(204);
        });
    }
}
const cms = new CMSAPI();
