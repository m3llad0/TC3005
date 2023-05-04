import { Request, Response } from "express";
import AbstractController from "./abstractController";
import MailService from "../providers/emailService";

class UserController extends AbstractController{
    protected validateBody(type: any) {
        throw new Error("Method not implemented.");
    }

    /*Singleton */
        /*Atributo de clase*/
    private static instance: UserController;
        /*Metodo de clase*/
    public static getInstance(): AbstractController{
        if(this.instance){
            return this.instance;
        }

        this.instance = new UserController('user');
        return this.instance;
    }

    protected initRoutes(): void{
        this.router.get('/readUser', this.getReadUsers.bind(this));
        this.router.post('/newUser', )

    }

    private getReadUsers(req: Request, res: Response){
        const mailService = MailService.getInstance();

        console.log(mailService.emailHost, mailService.emailPort, mailService.password)
        mailService.sendMail({
            to: "a01751694@tec.mx",
            subject: "Mail sender",
            html: '<h1>Hola</h1>'
        });
        res.status(200).send({'message': 'ok'});
    }
    
    private postNewUser(req: Request, res: Response){
        res.status(200).send({'message': 'Created new user!'})
    }
}

export default UserController;