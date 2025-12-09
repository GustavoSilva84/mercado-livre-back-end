import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express, { Request, Response } from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

import productRouter from "./routers/product.router";
import VariationRouter from "./routers/variation.router";

// const authRouter: AuthRouter = new AuthRouter


// const authMl = new AuthMl();
// authMl.main(app);

// const meAccountMl = new MeAccountMl();
// meAccountMl.main(app);

// const searchAccountMl = new SearchAccountMl();
// searchAccountMl.main(app); 

app.use(new productRouter().main());
app.use(new VariationRouter().main());

app.listen(3001);
