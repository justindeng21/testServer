import { json } from "body-parser";
import { Server, jsonParser } from "./server";
import fs from 'fs'
import path from 'path'


class CMSAPI extends Server{
    constructor(){
        super();
        this.defineCMSEndpoints()
    }

    writeFile(filename: string,code: string){
        fs.writeFile(filename,code, (err)=>{
            if(err){
                console.log('There was an error')
                return
            }
        });
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

        this.httpListener.get('/csp/:filename',(req,res)=>{
            res.sendFile(`/html/${req.params.filename}`,{root: __dirname })
        })



    }

}

const cms = new CMSAPI()

