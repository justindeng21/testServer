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

        this.httpListener.get('/js/:filename',(req,res)=>{
            res.sendFile(`/html/${req.params.filename}`,{root: __dirname })
        })


        this.httpListener.get('/nonce/test', (req, res)=>{
            const nonce = this.genString(15);
            let html;
            res.setHeader('Content-Security-Policy',`script-src 'self' data: *.betrad.com *.evidon.com *.evidon.com *.crownpeak.com 'nonce-${nonce}'; connect-src data: *.evidon.com *.betrad.com optoutapi.evidonstage.com privacycollector.evidonqa.com; style-src 'self'`)
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
        
    }

}

const cms = new CMSAPI()

