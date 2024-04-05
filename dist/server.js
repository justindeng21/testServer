"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlencodedParser = exports.jsonParser = exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
class Server {
    constructor() {
        console.log('Working Directory:', __dirname);
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.static(__dirname));
        this.app.use(body_parser_1.default.json({ limit: '35mb' }));
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header('Access-Control-Allow-Credentials', 'true');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Content-Security-Policy', `default-src 'self'; script-src 'self' https://ajax.googleapis.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com https://*.cloudfront.net https://uploads-ssl.webflow.com https://www.googletagmanager.com https://www.google-anylytics.com 'sha256-7dVs2lE9kdgZl0AImwzt9o97LuiyrXpnfLz1o6fNhC4='; script-src-elem 'self' 'sha256-7dVs2lE9kdgZl0AImwzt9o97LuiyrXpnfLz1o6fNhC4=' https://.cookstreetconsulting.com https://www.cookstreetconsulting.com https://assets.adobedtm.com https://*.evidon.com https://ajax.googleapis.com https://www.googletagmanager.com https://*.cloudfront.net https://assets-global.website-files.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com; style-src-elem 'self' https://assets-global.website-files.com; style-src 'self' https://assets-global.website-files.com https://uploads-ssl.webflow.com https://fonts.googleapis.com; object-src 'none'; base-uri 'self'; connect-src 'self' https://*.evidon.com https://www.google-anylytics.com https://webflow.com; font-src 'self' data: https://uploads-ssl.webflow.com https://fonts.gstatic.com; frame-src 'self'; img-src 'self' https://assets-global.website-files.com https://uploads-ssl.webflow.com https://www.googletagmanager.com https://www.google-anylytics.com; manifest-src 'self'; media-src 'self'; worker-src 'none'; report-to csp-endpoint;`);
            next();
        }, body_parser_1.default.urlencoded({
            extended: true,
            limit: '35mb',
            parameterLimit: 50000,
        }));
        this.server = this.app.listen(process.env.PORT || 3400, () => console.log("server running"));
    }
    _closeServer() {
        this.server.close();
    }
}
exports.Server = Server;
exports.jsonParser = body_parser_1.default.json();
exports.urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
