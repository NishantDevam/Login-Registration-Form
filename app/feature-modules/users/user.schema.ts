import { Types, model } from 'mongoose';
import { BaseSchema } from '../../utility/base-schema';


const userSchema = new BaseSchema({
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
    role: {
        type: Types.ObjectId,
        ref: "Role",
        required: true
    }
});


export const userModel = model("User", userSchema);