import { Request, Response } from "express";
import VariationServices from "../services/variation.services";

export default class VariationController {
    async create(req: Request, res: Response) {
        try {
            const variationServices: VariationServices = new VariationServices();
            const data = await variationServices.create(req.body);

            res.status(201).send({ data });


        } catch (error) {
            console.error(error);
            res.send("<h1> Ops... Algo deu errado! :( </h1>")
        }
    }

    async update(req: Request, res: Response) {
        try {
            const variationServices: VariationServices = new VariationServices();
            const data = await variationServices.update(req.params, req.body);

            res.status(200).send({ data });
        } catch (error) {
            console.error(error);
            res.send("<h1> Ops... Algo deu errado! :( </h1>")
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const variationServices: VariationServices = new VariationServices();
            const data = await variationServices.delete(req.params);

            res.status(204).send({ data });
        } catch (error) {
            console.error(error);
            res.send("<h1> Ops... Algo deu errado! :( </h1>")
        }
    }

    async get(req: Request, res: Response) {
        try {
            const variationServices: VariationServices = new VariationServices();
            const data = await variationServices.get();

            res.status(200).send({ data });
        } catch (error) {
            console.error(error);
            res.send("<h1> Ops... Algo deu errado! :( </h1>")
        }
    }


    async find(req: Request, res: Response) {
        try {
            const variationServices: VariationServices = new VariationServices();
            const data = await variationServices.find(req.params);

            res.status(200).send({ data });
        } catch (error) {
            console.error(error);
            res.send("<h1> Ops... Algo deu errado! :( </h1>")
        }
    }
}