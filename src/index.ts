import express, { Request, Response, Application } from 'express';
const app: Application = express();
const port = process.env.API_PORT;

app.get('/', (req: Request, res: Response) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});