import { Db } from './Db';

export interface Player {
    id: string;
    name: string;
    dob?: string;
    college?: string;
    draftYear?: string;
    position?: string;
    height?: number;
    weight?: number;
    fortyYard?: number;
    tenYard?: number;
    benchPress?: number;
    verticalJump?: number;
    broadJump?: number;
    threeCone?: number;
    shortShuttle?: number;
}

const samplePlayer: Player = {
    id: '0',
    name: 'sample player',
    dob: '1980-01-01',
    college: 'University of Slothbear',
    draftYear: '2000',
    position: 'cb',
    height: 5.77,
    weight: 177,
    fortyYard: 4.5,
    tenYard: 1.45,
    benchPress: 15,
    verticalJump: 40,
    broadJump: 11,
    threeCone: 6.56,
    shortShuttle: 4.06
};

export class PlayerService {
    static getAll = (): Promise<Player[]> => {
        return new Promise((resolve, reject) => {
            resolve([samplePlayer]);
        });
    }
}