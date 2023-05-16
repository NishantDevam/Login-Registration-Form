import { compare, genSalt, hash } from "bcryptjs";
import { IUser } from "../users/user.types";
import userService from "../users/user.service";
import { AUTH_RESPONSE } from "./auth.response";
import { ICredential } from "./auth.types";
import { sign } from "jsonwebtoken";

const hashPassword = async (password: string) => {
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);  

    return hashedPassword; 
}

const register = async (user: IUser) => {
    user.password = await hashPassword(user.password);
    await userService.create(user);
    return AUTH_RESPONSE.USER_CREATED;
}

const login = async (credentials: ICredential) => {
    const user = await userService.get({ email: credentials.email });
    if(!user) throw { };

    const didMatch = await compare(credentials.password, user.password);

    if(!didMatch) throw { statusCode: 400, message: "INVALID CREDENTIALS" }

    const { JWT_SECRET_KEY } = process.env;
    const token = sign({ id: user._id, role: user.role }, JWT_SECRET_KEY || "");

    return {
        token
    };
}

export default {
    register,
    login
}