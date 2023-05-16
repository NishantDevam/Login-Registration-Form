"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidation = exports.RegisterValidation = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.RegisterValidation = [
    // registering the returning middleware
    (0, express_validator_1.body)("name").isString().withMessage("name needs to be string")
        .isLength({ min: 4, max: 10 }).withMessage("name has to be between 4 and 10 chars"),
    (0, express_validator_1.body)("email").isEmail().withMessage("invalid email id"),
    (0, express_validator_1.body)("password").isString().withMessage("password needs to be string")
        .isLength({ min: 6, max: 10 }).withMessage("password has to be between 6 and 10 chars"),
    // check whether express-validator found error
    validate_1.validate
];
exports.LoginValidation = [
    // registering the returning middleware
    (0, express_validator_1.body)("email").isEmail().withMessage("invalid email id"),
    (0, express_validator_1.body)("password").isString().withMessage("password needs to be string")
        .isLength({ min: 6, max: 10 }).withMessage("password has to be between 6 and 10 chars"),
    // check whether express-validator found error
    validate_1.validate
];
//# sourceMappingURL=auth.validations.js.map