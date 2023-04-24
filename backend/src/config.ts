import * as dotenv from 'dotenv';

dotenv.config();

console.log(process.env);

export const { JWT_SECRET = 'JWT_SECRET' } = process.env;
export const { DB_ADDRESS = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;
export const { PORT = 3000 } = process.env;
export const ALLOWED_URL = process.env.ALLOWED_URL?.split(',') || '*';
