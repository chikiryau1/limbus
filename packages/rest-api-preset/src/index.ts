import express from 'express';
import someInstanceRoute from './database/some-instance/route';
import cors from 'cors';
import { connect } from './database';

const PORT = process.env.PORT || 8000;

const start = async (): Promise<void> => {
    try {
        const app = express();

        app.use(cors({ origin: true, credentials: true }));

        app.use('/instance', someInstanceRoute);

        app.get('/', (req, res) => {
            res.status(200).send('hello')
        });

        await connect();

        app.listen(PORT, () => console.info(`Server has started on ${PORT}`));

    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};

start();