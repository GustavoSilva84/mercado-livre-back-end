import { Router } from "express";
import AuthController from "../controllers/auth.controller";

export default class AuthRouter {
    login(): Router {
        const router: Router = Router(); 

        const authController: AuthController = new AuthController();
        router.get("/ml/login", authController.login);     
        
        return router;
    }
}