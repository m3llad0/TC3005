import nodemailer from 'nodemailer';
import {MailOptions} from 'nodemailer/lib/json-transport';
import { EMAIL_HOST, EMAIL_PORT, USERNAME, PASSWORD } from '../config';

class MailService {
    private static instance: MailService;
    emailHost: string;
    emailPort: number;
    username: string;
    password: string;
    transporter: nodemailer.Transporter;

    constructor(mailInit: {
        emailHost: string;
        emailPort: number;
        username: string;
        password: string;
    }){
        this.emailHost = mailInit.emailHost;
        this.emailPort = mailInit.emailPort;
        this.username = mailInit.username;
        this.password = mailInit.password;
        this.transporter = nodemailer.createTransport({
            host: this.emailHost,
            port: this.emailPort,
            auth: {
              user: this.username,
              pass: this.password
            }
          });
          
    }

    public static getInstance(){
        if(!MailService.instance){

            MailService.instance = new MailService({
                emailHost: EMAIL_HOST,
                emailPort: EMAIL_PORT,
                username: USERNAME, 
                password: PASSWORD
            });
        }

        return MailService.instance;
    }

    async createConnection(){
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            host: this.emailHost,
            port: this.emailPort,
            auth:{
                user: this.username,
                pass: this.password
            }
        });
    }

    async sendMail(options: MailOptions){

        return await this.transporter.sendMail({
            to: options.to,
            subject: options.subject,
            html: options.html

        })
        .then((info) => {
            console.log(`Message sent ${info.response}`)})
        .catch((error) => {
            console.log(error);
            })
        
    }
}

export default MailService;