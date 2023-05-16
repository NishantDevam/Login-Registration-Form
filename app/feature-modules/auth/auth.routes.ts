import { NextFunction, Request, Response, Router } from "express";
import { Route } from "../../routes/routes.types";
import { ResponseHandler } from "../../utility/response-handler";
import authService from "./auth.service";
import { LoginValidation, RegisterValidation } from "./auth.validations";


const router = Router();

router.post("/register",
    // middleware pipeline
    RegisterValidation,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.body;
            const result = await authService.register(user);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    })


router.post("/login",
    LoginValidation,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const credentials = req.body;
            const result = await authService.login(credentials);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    })


export default new Route(
    "/auth",
    router
)