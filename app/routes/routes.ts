import { Application, NextFunction, Request, Response, json } from "express";
import { excludedPaths, routes } from "./routes.data";
import { ResponseHandler } from "../utility/response-handler";
import { authorize } from "../utility/authorize";


export const registerRoutes = (app: Application) => {
    app.use(authorize(excludedPaths));    
    app.use(json());

    for(let route of routes) {
        app.use(route.path, route.router);
    }

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
    })
}