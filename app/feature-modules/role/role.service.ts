import roleRepo from "./role.repo";

const getAll = () => roleRepo.getAll();
const nothing = () => {}

export default {
    getAll,
    nothing
}