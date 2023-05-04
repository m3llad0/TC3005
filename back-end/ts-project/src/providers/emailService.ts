import nodemailer from 'nodemailer';
import { EMAIL_HOST, EMAIL_PORT, USERNAME, PASSWORD } from '../config';
import {MailOptions} from 'nodemailer/lib/json-transport';

class MailService {
    private emailHost: string;
    private emailPort: number;
    private username: string;
    private password: string;
    private transporter: nodemailer.Transporter;

    constructor(mailInit: {
        emailHost: string;
        emailPort: number;
        username: string;
        password: string;
    }){
        this.emailHost = EMAIL_HOST;
        this.emailPort = EMAIL_PORT;
        this.username = USERNAME;
        this.password = PASSWORD;
        this.transporter = nodemailer.createTransport();
    }

    private async createConnection(){
        this.transporter = nodemailer.createTransport({
            service: this.emailHost,
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