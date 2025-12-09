import { Router } from "express";
import ProductController from "../controllers/product.controller";

export default class productRouter {
    main(): Router {
        const router: Router = Router(); 

        const productController: ProductController = new ProductController();

        router.post("/product", productController.create);     
        router.patch("/product/:id", productController.update);     
        router.delete("/product/:id", productController.delete);     
        router.get("/product", productController.get);     
        router.get("/product/find/:id", productController.find);

        return router;
    }
}