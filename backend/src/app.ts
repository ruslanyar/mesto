import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { errors } from 'celebrate';
import cors from 'cors';
import errorHandler from './middlewares/error-handler';
import { DB_ADDRESS, PORT } from './config';
import routes from './routes';

const app = express();
mongoose.connect(DB_ADDRESS);

app.use(cors({
  origin: [
    'http://mesto.ruslanyar.nomoredomains.rocks',
    'https://mesto.ruslanyar.nomoredomains.rocks',
  ],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(routes);
app.use(errors());
app.use(errorHandler);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log('ok'));
