import pgPromise from 'pg-promise';

const pgp = pgPromise();
const Db = pgp(process.env.SBORK_PG_CONNECTION_STRING);

export { Db };