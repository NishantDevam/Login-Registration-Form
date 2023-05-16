"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const user_service_1 = __importDefault(require("../users/user.service"));
const auth_response_1 = require("./auth.response");
const jsonwebtoken_1 = require("jsonwebtoken");
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield (0, bcryptjs_1.genSalt)(10);
    const hashedPassword = yield (0, bcryptjs_1.hash)(password, salt);
    return hashedPassword;
});
const register = (user) => __awaiter(void 0, void 0, void 0, function* () {
    user.password = yield hashPassword(user.password);
    yield user_service_1.default.create(user);
    return auth_response_1.AUTH_RESPONSE.USER_CREATED;
});
const login = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_service_1.default.get({ email: credentials.email });
    if (!user)
        throw {};
    const didMatch = yield (0, bcryptjs_1.compare)(credentials.password, user.password);
    if (!didMatch)
        throw { statusCode: 400, message: "INVALID CREDENTIALS" };
    const { JWT_SECRET_KEY } = process.env;
    const token = (0, jsonwebtoken_1.sign)({ id: user._id, email: user.email }, JWT_SECRET_KEY || "");
    return {
        token
    };
});
exports.default = {
    register,
    login
};
//# sourceMappingURL=auth.service.js.map