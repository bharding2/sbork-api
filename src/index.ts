import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import pgPromise from 'pg-promise';
import { PlayerRouter } from './routes/PlayerRouter';

const app: Application = express();
const port = process.env.API_PORT;

const pgp = pgPromise();
const db = pgp(process.env.SBORK_PG_CONNECTION_STRING);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/player', PlayerRouter);

app.get('/', (req: Request, res: Response) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});