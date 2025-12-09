import { Request, Response } from "express";
import ProductServices from "../services/product.services";

export default class ProductController {
    async create(req: Request, res: Response) {
        try {
            const productServices: ProductServices = new ProductServices();
            const data = await productServices.create(req.body);

            res.status(201).send({ data });


        } catch (error) {
            console.error(error);
            res.send("<h1> Ops... Algo deu errado! :( </h1>")
        }
    }

    async update(req: Request, res: Response) {
        try {
            const productServices: ProductServices = new ProductServices();
            const data = await productServices.update(req.params, req.body);

            res.status(200).send({ data });
        } catch (error) {
            console.error(error);
            res.send("<h1> Ops... Algo deu errado! :( </h1>")
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const productServices: ProductServices = new ProductServices();
            const data = await productServices.delete(req.params);

            res.status(204).send({ data });
        } catch (error) {
            console.error(error);
            res.send("<h1> Ops... Algo deu errado! :( </h1>")
        }
    }

    async get(req: Request, res: Response) {
        try {
            const productServices: ProductServices = new ProductServices();
            const data = await productServices.get();

            res.status(200).send({ data });
        } catch (error) {
            console.error(error);
            res.send("<h1> Ops... Algo deu errado! :( </h1>")
        }
    }


    async find(req: Request, res: Response) {
        try {
            const productServices: ProductServices = new ProductServices();
            const data = await productServices.find(req.params);

            res.status(200).send({ data });
        } catch (error) {
            console.error(error);
            res.send("<h1> Ops... Algo deu errado! :( </h1>")
        }
    }
}