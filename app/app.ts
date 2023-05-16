import express from 'express';
import { registerRoutes } from './routes/routes';
import { connectToMongo } from './connections/mongo.connection';

export const startServer = async () => {
    try {
        const app = express();

        await connectToMongo();
        registerRoutes(app);
        const { PORT } = process.env;
        app.listen(
            PORT || 3000,
            () => console.log(`SERVER STARTED ON ${PORT || 3000}`)
        )
    } catch (e) {
        console.log('COULD NOT START SERVER');
        console.log(e);
    }
}