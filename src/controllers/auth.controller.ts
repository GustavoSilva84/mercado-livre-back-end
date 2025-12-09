import { Request, Response } from "express";

export default class AuthController {
    login(req: Request, res: Response) {
        try {
            res.redirect(`https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=${process.env.ML_CLIENT_ID}&redirect_uri=${process.env.ML_REDIRECT_URI}`);
        }catch(error) {
            console.error(error);
            res.send("<h1> Ops... Algo deu errado! :( </h1>")
        }
    }
}