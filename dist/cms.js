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
                    links = links + `<a class="link" href="https://dg-sandbox-deb249716852.herokuapp.com/${fileName}">${fileName}</a>\n`;
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
            res.sendFile(`/html/${req.params.filename}`, { root: __dirname });
        });
        this.httpListener.get('/js/:filename', (req, res) => {
            res.sendFile(`/html/${req.params.filename}`, { root: __dirname });
        });
        this.httpListener.get('/csp/:filename', (req, res) => {
            res.sendFile(`/html/${req.params.filename}`, { root: __dirname });
        });
    }
}
const cms = new CMSAPI();
