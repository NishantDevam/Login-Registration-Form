import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { validate } from "../../utility/validate";


export const UserUpdateValidation = [
    (req: Request, res: Response, next: NextFunction) => {
        const { name, email, _id } = req.body;
        req.body = {};
        if(name) req.body.name = name;
        if(email) req.body.email = email;

        req.body._id = _id; 
        next();
    },
    body("id").isMongoId().withMessage("invalid id"),
    body("name").optional().isString().withMessage("name is invalid"),
    body("email").optional().isEmail().withMessage("email is invalid"),
    validate
]