import nodemailer from 'nodemailer';
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
        this.emailHost = mailInit.emailHost;
        this.emailPort = mailInit.emailPort;
        this.username = mailInit.username;
        this.password = mailInit.password;
        this.transporter = nodemailer.createTransport();
    }

    async createConnection(){
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