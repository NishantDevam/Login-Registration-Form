import { userModel } from "./user.schema";
import { IUser } from "./user.types";

const create = (user: IUser) => userModel.create(user);

const get = (filter: Partial<IUser>) => userModel.findOne(filter);

const update = (updatedUser: Partial<IUser>) => userModel.updateOne({ _id: updatedUser._id }, updatedUser);

const getAll = (
    filter: Partial<IUser>
) => userModel.find(filter).populate("role");

const deleteOne = (id: string) => userModel.updateOne({ _id: id }, { isDeleted: true });

export default {
    create,
    get,
    getAll,
    update,
    deleteOne
}