import express, {Request, Response } from "express";
import db from '../models';
import MailService from "./emailService";

class Server{
    private app : express.Application;
    private port : number;
    private env : string;

    constructor(appInit : {
        port: number;
        env: string;
        controllers: any[];
        middlewares: any[];

    }) {
        this.app = express();
        this.port = appInit.port;
        this.env = appInit.env;
        this.loadControllers(appInit.controllers);
        this.loadMiddlewares(appInit.middlewares);
    }

    private loadControllers(controllers: any[]){
        controllers.forEach((controller) => {
            this.app.use(`/${controller.prefix}`, controller.router);
        })
    }

    private loadMiddlewares(middlewares: any[]){
        middlewares.forEach((middleware) => {
            this.app.use(middleware);
        })
    }

    private async connectDB(){
        try{
            await db.sequelize.sync();
            console.log('Connected to database')
        }catch(err){
            console.log(err);
        }
    }

    public async init(){
        /*Created mail service instance*/
        const mailService = MailService.getInstance();
        await this.connectDB();
        /*Connects to smtp provider*/
        await mailService.createConnection();
        this.app.listen(this.port, () => {
            console.log(`Server:: Running @'http://localhost:${this.port}'`)
        })
    }

}

export default Server;