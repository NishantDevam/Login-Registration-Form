"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../../routes/routes.types");
const role_service_1 = __importDefault(require("./role.service"));
role_service_1.default.nothing();
const router = (0, express_1.Router)();
exports.default = new routes_types_1.Route("/role", router);
//# sourceMappingURL=role.routes.js.map