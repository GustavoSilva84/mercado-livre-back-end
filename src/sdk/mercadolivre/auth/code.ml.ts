import { Express, Request, Response} from "express";
import { Crypto_Utils } from "../../../utils/crypto";

export default class CodeMl {
    async main(app: Express): Promise<void> {
        app.get("/ml/login", (req: Request, res: Response) => {

            const { codeChallenge, codeVerifier } = Crypto_Utils();

            // console.log(codeChallenge, codeVerifier)

            console.log(`https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=${process.env.ML_CLIENT_ID}&state=${process.env.CODE_CHALLENGE}&redirect_uri=${process.env.ML_REDIRECT_URI}`)
            res.redirect(`https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=${process.env.ML_CLIENT_ID}&state=${process.env.CODE_CHALLENGE}&redirect_uri=${process.env.ML_REDIRECT_URI}`);
        });
    }
}