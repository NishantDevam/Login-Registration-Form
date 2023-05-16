import { RoleModel } from "./roles.schema";

const getAll = () => RoleModel.find();

export default {
    getAll
}