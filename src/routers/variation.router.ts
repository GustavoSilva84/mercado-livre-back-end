import { Router } from "express";
import VariationController from "../controllers/variation.controller";

export default class VariationRouter {
    main(): Router {
        const router: Router = Router(); 

        const variationController: VariationController = new VariationController();

        router.post("/variation", variationController.create);     
        router.patch("/variation/:id", variationController.update);     
        router.delete("/variation/:id", variationController.delete);     
        router.get("/variation", variationController.get);     
        router.get("/variation/find/:id", variationController.find);
        
        return router;
    }
}