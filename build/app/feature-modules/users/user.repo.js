"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const create = (user) => user_schema_1.userModel.create(user);
const get = (filter) => user_schema_1.userModel.findOne(filter);
const getAll = (filter) => user_schema_1.userModel.find(filter).populate("role");
exports.default = {
    create,
    get,
    getAll
};
//# sourceMappingURL=user.repo.js.map