import axios from "axios";
import { Express, Request, Response} from "express";
import AccountMlRepository from "../../../repository/mercadolivre/account/account.ml.repository";

export default class TokenMl {
    async main(app: Express): Promise<void> {
        // this.updateToken();

        app.get("/ml/login/code", async (req: Request, res: Response) => {
            try {
                const code: string | undefined = req.query.code?.toString();

                console.log(code)

                if(!code) res.send("Nenhum código recebido :(");

                // console.log({
                //         grant_type: "authorization_code",
                //         client_id: process.env.ML_CLIENT_ID,
                //         client_secret:  process.env.ML_CLIENT_SECRET,
                //         code: code,
                //         redirect_uri: process.env.ML_REDIRECT_URI,
                //         code_verifier: process.env.CODE_VERIFIER
                //     })

                const { data } = await axios("https://api.mercadolibre.com/oauth/token", {
                    method: "POST",
                    data: {
                        grant_type: "authorization_code",
                        client_id: "7601402631022702",
                        client_secret: "7J8ak9yFPvN5JnTsKirOphj7vOKqXJi7",
                        code: code,
                        redirect_uri: "https://arteferdecor.com.br",
                        code_verifier: "mX4nA8vQeC1sK3yPjT7hB9rFfD2gW6uSxL0qZ5oNwR8tV1Yc"
                    }
                });

                console.log(data);

                const accountMlRepository = new AccountMlRepository();
                let account = await accountMlRepository.find(parseInt(process.env.ID_ACCOUNT_MAIN!));


                // if(account) {
                //     account = await accountMlRepository.update(parseInt(process.env.ID_ACCOUNT_MAIN!), data.access_token, data.refresh_token);
                // }else if(!account) {
                //     account = await accountMlRepository.create("main account", data.access_token, data.refresh_token);
                // }
                
                res.redirect("/");
            }catch(error) {
                console.log(error);
            }
        });
    }

    // async updateToken() {
    //     const accountMlRepository = new AccountMlRepository();

    //     setInterval(async () => {
    //         try {
    //             console.log("auto update");

    //             let account = await accountMlRepository.find(parseInt(process.env.ID_ACCOUNT_MAIN!));
    
    //             if(!account) return;
    
    //             console.log("pass 1")
    //             console.log(account.refreshToken)

    //             const { data } = await axios("https://api.mercadolibre.com/oauth/token", {
    //                 method: "POST",
    //                 data: {
    //                     grant_type: "refresh_token",
    //                     client_id: process.env.ML_CLIENT_ID,
    //                     client_secret:  process.env.ML_CLIENT_SECRET,
    //                     refresh_token: account.refreshToken,
    //                     redirect_uri: process.env.ML_REDIRECT_URI
    //                 }
    //             });

    //             console.log("pass 2")
    //             console.log(data)

    //             console.log("pass 3")
    //             account = await accountMlRepository.update(parseInt(process.env.ID_ACCOUNT_MAIN!), data.access_token, data.refresh_token);
    //             console.log(account);
    //         }catch(error: any) {
    //             console.error(error.data);
    //         }
    //     }, 600000);

    //     let time = 0;

    //     setInterval(() => {
    //         if(time === 600000) {
    //             time = 0;
    //         }else {
    //             time += 1;
    //         }

    //         console.log(`refresh token in ${600000 - time}`)
    //     }, 1000);
    // }
}