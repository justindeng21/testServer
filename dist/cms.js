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
                    links = links + `<a class="link" href="/${fileName.split(".")[0]}">${fileName}</a>\n`;
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
        this.httpListener.get('/assets/svg', (req, res) => {
            res.sendFile(`/assets/cookie.svg`, { root: __dirname });
        });
        this.httpListener.get('/:folder/testing/:filename', (req, res) => {
            res.sendFile(`/${req.params.folder}/${req.params.filename}.html`, { root: __dirname });
        });
        this.httpListener.get('/test/cache-busting', (req, res) => {
            res.send(`<html>
                <head>
                    ${evidonStubHelper_1.EvidonStubHelper.getSiteNoticeTag(6914, this.genString(20))}
                </head>
                <body>
                    <h1>Test Cache busting</h1>
                </body>
            </html>`);
        });
    }
}
const cms = new CMSAPI();
