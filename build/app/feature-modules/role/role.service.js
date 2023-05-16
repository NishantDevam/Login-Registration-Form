"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const role_repo_1 = __importDefault(require("./role.repo"));
const getAll = () => role_repo_1.default.getAll();
const nothing = () => { };
exports.default = {
    getAll,
    nothing
};
//# sourceMappingURL=role.service.js.map