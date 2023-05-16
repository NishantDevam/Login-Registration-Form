"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base-schema");
const userSchema = new base_schema_1.BaseSchema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    role: {
        type: mongoose_1.Types.ObjectId,
        ref: "Role",
        required: true
    }
});
exports.userModel = (0, mongoose_1.model)("User", userSchema);
//# sourceMappingURL=user.schema.js.map