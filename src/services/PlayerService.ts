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

export class PlayerService {
    static getAll = (): Promise<Player[]> => {
        return new Promise((resolve, reject) => {
            resolve([]);
        });
    }
}