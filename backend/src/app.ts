/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { errors } from 'celebrate';
import cors from 'cors';
import errorHandler from './middlewares/error-handler';
import { ALLOWED_URL, DB_ADDRESS, PORT } from './config';
import routes from './routes';

const app = express();
app.use(
  cors({
    origin: ALLOWED_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(routes);
app.use(errors());
app.use(errorHandler);

mongoose
  .connect(DB_ADDRESS)
  .then(() => console.log(`Connected to database ${DB_ADDRESS}`))
  .then(() => {
    app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
  })
  .catch((err) => console.error(err));
