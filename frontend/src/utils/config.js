import * as dotenv from 'dotenv';
dotenv.config();

const { NODE_ENV, REACT_APP_API_URL_DEV, REACT_APP_API_URL_PROD } = process.env;

export const apiUrl =
  NODE_ENV === 'production' ? REACT_APP_API_URL_PROD : REACT_APP_API_URL_DEV;
