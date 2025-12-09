import { Express, Request, Response } from "express";
import AccountMlRepository from "../../../repository/mercadolivre/account/account.ml.repository";
import axios from "axios";

import { PrismaClient } from "@prisma/client";




export default class SearchAccountMl {
    async main(app: Express): Promise<void> {
        app.get("/ml/account/search/:id", async (req: Request, res: Response) => {
            try {
                const id = req.params.id;

                const accountMlRepository = new AccountMlRepository();
                const account = await accountMlRepository.find(parseInt(process.env.ID_ACCOUNT_MAIN!));

                if(!account) {
                    res.send("Ops...");
                    return;
                }

                const { data } = await axios(`https://api.mercadolibre.com/users/${id}`, {
                    headers: { "Authorization": `Bearer ${account.token}` }
                });

                console.log(data)

                res.send({
                    quantidadeVendas: data.seller_reputation.transactions.total,
                    nome: data.nickname,
                    perfil: data.permalink
                })
            }catch(error) {
                res.send("Erro :(");
            }
        })
    }
}