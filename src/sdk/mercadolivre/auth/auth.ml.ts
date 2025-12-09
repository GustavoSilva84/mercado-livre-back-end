import { Express, Request, Response} from "express";
import CodeMl from "./code.ml";
import TokenMl from "./token.ml";

export default class AuthMl {
    main(app: Express): void {
        const codeMl = new CodeMl();
        const tokenMl = new TokenMl();

        codeMl.main(app);
        tokenMl.main(app);
    }   
}