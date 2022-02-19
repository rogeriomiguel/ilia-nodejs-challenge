import { Router } from 'express';
import TransactionsController from '../controllers/TransactionsController';

const routes = Router();

routes.post('/transactions', TransactionsController.store);

export default routes;
