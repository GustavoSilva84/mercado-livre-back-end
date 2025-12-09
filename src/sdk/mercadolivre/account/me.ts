import { Express, Request, Response } from "express";
import AccountMlRepository from "../../../repository/mercadolivre/account/account.ml.repository";
import axios from "axios";

export default class MeAccountMl {
    async main(app: Express): Promise<void> {
        app.get("/ml/account/me", async (req: Request, res: Response) => {
            try {
                const accountMlRepository = new AccountMlRepository();
                const account = await accountMlRepository.find(parseInt(process.env.ID_ACCOUNT_MAIN!));
                
                console.log(account)

                if(!account) {
                    res.send("Ops...");
                    return;
                }
                
                const { data } = await axios("https://api.mercadolibre.com/users/me", {
                    headers: { "Authorization": `Bearer ${account.token}` }
                });
    
                res.send({
                    quantidadeVendas: data.seller_reputation.transactions.total,
                    nome: data.nickname,
                    email: data.email,
                    perfil: data.permalink,
                    fotoPerfil: data.thumbnail.picture_url 
                })
            }catch(error) {
                console.error(error)
                res.send("Erro :(");
            }
            
        })
    }
}