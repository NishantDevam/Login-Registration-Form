import userRepo from "./user.repo";
import { USER_RESPONSES } from "./user.responses";
import { IUser } from "./user.types";

const create = async (user: IUser) => {
    try {
        await userRepo.create(user);
        return USER_RESPONSES.USER_CREATED
    } catch (e) {
        throw USER_RESPONSES.USER_CREATION_FAILED
    }
}

const get = async (filter: Partial<IUser>) => {
    try {
        const user = await userRepo.get(filter);
        if(!user) throw USER_RESPONSES.USER_NOT_FOUND;

        return user;
    } catch (e) {
        throw USER_RESPONSES.USER_NOT_FOUND;
    }
}

const getAll = async (filter: Partial<IUser>) => {
    try {
        return await userRepo.getAll(filter);
    } catch(e) {
        throw USER_RESPONSES.INTERNAL_SERVER_ERROR;
    }
}

const updateUser = async (updatedUser: Partial<IUser>) => {
    try {
        const didUpdate = await userRepo.update(updatedUser);

        if(!didUpdate.modifiedCount) throw USER_RESPONSES.USER_UPDATE_FAILED;

        return USER_RESPONSES.USER_UPDATED;
    } catch (e) {
        throw USER_RESPONSES.INTERNAL_SERVER_ERROR;
    }
}

const deleteUser = async (id: string) => {
    try {
        const didDelete = await userRepo.deleteOne(id);

        if(!didDelete.modifiedCount) throw USER_RESPONSES.USER_DELETE_FAILED;

        return USER_RESPONSES.USER_DELETED;
    } catch(e) {
        throw USER_RESPONSES.INTERNAL_SERVER_ERROR;
    }
}

export default {
    create,
    get,
    getAll,
    updateUser,
    deleteUser
} 