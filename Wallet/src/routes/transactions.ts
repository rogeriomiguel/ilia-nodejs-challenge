import { Router } from 'express';
import TransactionsController from '../controllers/TransactionsController';
import {
  validateTransactionQuery,
  validateTransactionBody,
} from '../middlewares/validators/transactions';

const routes = Router();

routes.get(
  '/transactions',
  validateTransactionQuery,
  TransactionsController.index
);
routes.post(
  '/transactions',
  validateTransactionBody,
  TransactionsController.store
);
routes.get('/balance', TransactionsController.balance);

export default routes;
