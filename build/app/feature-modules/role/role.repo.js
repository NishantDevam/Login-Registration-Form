"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roles_schema_1 = require("./roles.schema");
const getAll = () => roles_schema_1.RoleModel.find();
exports.default = {
    getAll
};
//# sourceMappingURL=role.repo.js.map