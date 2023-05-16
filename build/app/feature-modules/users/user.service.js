"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repo_1 = __importDefault(require("./user.repo"));
const create = (user) => user_repo_1.default.create(user);
const get = (filter) => user_repo_1.default.get(filter);
const getAll = (filter) => user_repo_1.default.getAll(filter);
exports.default = {
    create,
    get,
    getAll
};
//# sourceMappingURL=user.service.js.map