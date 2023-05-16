import mongoose, { connect } from "mongoose";

export const connectToMongo = async () => {
    try {
        await connect(process.env.MONGO_CONNECTION || '');
        console.log('CONNECTED TO MONGO');
        return true;
    } catch (e) {
        throw { message: 'COULD NOT CONNECT TO MONGO' }
    }
}