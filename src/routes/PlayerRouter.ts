import { Router, Request, Response } from 'express';
import { PlayerService } from '../services/PlayerService';

export const PlayerRouter: Router = Router();

PlayerRouter.get('/all', async (req: Request, res: Response) => {
    const players = await PlayerService.getAll();

    res.send(players);
});