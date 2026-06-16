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
                  links = links + `<a class="link" href="/html/${fileName.split(".")[0]}">${fileName.split(".")[0]}</a>\n`;
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

        this.httpListener.get('/:folder/:filename', (req, res)=>{
            res.sendFile(`/${req.params.folder}/${req.params.filename}.${req.params.folder}`,{root: __dirname })
        })

        this.httpListener.get('/:filename', (req, res)=>{
            res.sendFile(`/html/${req.params.filename}.html`,{root: __dirname })
        })

        this.httpListener.get('/js/test/capitalGroup-ucp.js.lc-eaf1ce5f951ae7229cb81937bfb0b365-lc.min.js', (req, res)=>{
            res.sendFile(`/js/capitalGroup-ucp.js`,{root: __dirname })
        })

        
        
    }

}

const cms = new CMSAPI()

