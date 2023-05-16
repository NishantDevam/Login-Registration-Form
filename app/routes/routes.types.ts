import { Router } from "express";


export class Route {
    private static routes: string[] = [];
    constructor (
        public path: string,
        public router: Router
    ) {
        if(!path.startsWith("/")) throw "invalid path";

        if(Route.routes.includes(path)) throw "path already exist";

        Route.routes.push(path);
    }
}

export type Routes = Route[];

interface IExcludedPath {
    path: string;
    method: "POST" | "PATCH" | "GET" | "DELETE" | "PUT";
}

export type ExcludedPaths = IExcludedPath[];