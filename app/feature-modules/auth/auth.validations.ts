
import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const RegisterValidation = [
    // registering the returning middleware
    body("name").isString().withMessage("name needs to be string")
                .isLength({ min: 4, max: 10 }).withMessage("name has to be between 4 and 10 chars"),
    body("email").isEmail().withMessage("invalid email id"),
    body("password").isString().withMessage("password needs to be string")
                    .isLength({ min: 6, max: 10 }).withMessage("password has to be between 6 and 10 chars"),
    // check whether express-validator found error
    validate
];

export const LoginValidation = [
    // registering the returning middleware
    body("email").isEmail().withMessage("invalid email id"),
    body("password").isString().withMessage("password needs to be string")
                    .isLength({ min: 6, max: 10 }).withMessage("password has to be between 6 and 10 chars"),
    // check whether express-validator found error
    validate
];