import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import { ExcludedPaths } from "../routes/routes.types";
import { ROLES } from "./constants";

export const authorize = (excludedPaths: ExcludedPaths) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(req.path)
            if (excludedPaths.find(p => p.path === req.path && req.method === p.method)) {
                return next();
            }

            const token = req.headers.authorization;
            if (!token) return next({ message: 'UNAUTHORIZED', statusCode: 403 });

            const { JWT_SECRET_KEY } = process.env;
            const decryptedData = verify(token, JWT_SECRET_KEY || "");

            res.locals = { user: decryptedData };

            // find out a way to make this work.
            // req["user"] = decryptedData;
            next();
        } catch (e) {
            next({ message: 'UNAUTHORIZED', statusCode: 403 });
        }
    }
}
export const permit = (permittedRoles: string[] = []) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const role = res.locals.user.role;
        if (permittedRoles.includes(role)) {
            return next();
        }

        next({ statusCode: 403, message: "FORBIDDEN" })
    }
}