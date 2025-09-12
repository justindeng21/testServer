import express,{Application} from 'express';
import bodyParser from 'body-parser';



export class Server{
    httpListener : Application;
    server : any;


    constructor(){
        
        console.log('Working Directory:',__dirname)
        
        this.httpListener  = express();
        this.httpListener.use(express.static(__dirname))
        this.httpListener.use(bodyParser.json({limit: '35mb'}));

        this.httpListener.use(
            function(req, res, next) {
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                res.header('Access-Control-Allow-Credentials', 'true');
                res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                res.header("Access-Control-Allow-Origin", "https://privacy.evidon.com");
                next();
            },
            bodyParser.urlencoded({
                extended: true,
                limit: '35mb',
                parameterLimit: 50000,
            }),
            
        );

        this.server = this.httpListener.listen(process.env.PORT || 3400 || "0.0.0.0", () => console.log("server running"));

    }

    _closeServer(){  
       this.server.close()
    }
}

export let jsonParser = bodyParser.json()
export let urlencodedParser = bodyParser.urlencoded({ extended: false })

