"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
class CMSAPI extends server_1.Server {
    constructor() {
        super();
        this.defineCMSEndpoints();
    }
    defineCMSEndpoints() {
        this.app.get('/:filename', (req, res) => {
            res.sendFile(`/html/${req.params.filename}`, { root: __dirname });
        });
    }
}
const cms = new CMSAPI();
