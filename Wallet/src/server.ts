import 'dotenv/config';
import express, { Express } from 'express';
import cors from 'cors';
import routes from './routes';
import errors from './middlewares/errors';

class Server {
  express: Express;

  constructor() {
    this.express = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorsMiddlewares();
  }

  initializeMiddlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  initializeRoutes() {
    this.express.use(routes);
  }

  initializeErrorsMiddlewares() {
    this.express.use(errors);
  }

  init() {
    const PORT = process.env.API_PORT;
    this.express.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`API listening on port ${PORT}`);
    });
  }
}

export default new Server();
