"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludedPaths = exports.routes = void 0;
const auth_routes_1 = __importDefault(require("../feature-modules/auth/auth.routes"));
const role_routes_1 = __importDefault(require("../feature-modules/role/role.routes"));
const user_routes_1 = __importDefault(require("../feature-modules/users/user.routes"));
exports.routes = [
    auth_routes_1.default,
    user_routes_1.default,
    role_routes_1.default
];
exports.excludedPaths = [
    { path: "/auth/login", method: "POST" },
    { path: "/auth/register", method: "POST" },
];
//# sourceMappingURL=routes.data.js.map