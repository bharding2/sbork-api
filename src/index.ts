import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import { PlayerRouter } from './routes/PlayerRouter';

const app: Application = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api/player', PlayerRouter);

app.get('/', (req: Request, res: Response) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});