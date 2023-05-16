import { model } from "mongoose";
import { BaseSchema } from "../../utility/base-schema";

const roleSchema = new BaseSchema({
    name: {
        type: String,
        required: true
    }
});

export const RoleModel = model("Role", roleSchema);