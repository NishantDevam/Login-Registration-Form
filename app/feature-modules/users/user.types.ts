export interface IUser {
    _id?: any; // find out the correct type here. 
    name: string;
    email: string;
    password: string;
    isDeleted: boolean;
}