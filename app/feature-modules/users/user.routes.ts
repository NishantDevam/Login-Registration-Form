import { NextFunction, Request, Response, Router } from "express";
import { Route } from "../../routes/routes.types";
import userService from "./user.service";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../../utility/constants";
import { permit } from "../../utility/authorize";
import { UserUpdateValidation } from "./user.validation";
const router = Router();

router.get("/", async (req, res, next) => {
    try {
        const result = await userService.getAll({});
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

// dummy route
router.get("/sensitive2", permit([ROLES.ADMIN]), (req, res, next) => {
    try {
        res.send("sensitive data sent");
    } catch (e) {
        next(e);
    }
});

router.put("/", UserUpdateValidation, permit([ROLES.POSTER]),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await userService.updateUser(req.body);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    })

router.delete("/:id", permit([ROLES.POSTER, ROLES.ADMIN]), async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await userService.deleteUser(id);
        res.send(new ResponseHandler(result)); 
    } catch(e) {
        next(e);
    }
})

export default new Route(
    "/user",
    router
)