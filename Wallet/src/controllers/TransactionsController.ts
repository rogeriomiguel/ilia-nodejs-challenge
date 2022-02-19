import { Request, Response, NextFunction } from 'express';
import TransactionsDomain from '../domain/TransactionsDomain';

class TransactionsController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const { type } = request.query as { type: string };
      const transactions = await TransactionsDomain.getTransactions(type);
      return response.json(transactions);
    } catch (error) {
      return next(error);
    }
  }

  async store(request: Request, response: Response, next: NextFunction) {
    try {
      const transaction = await TransactionsDomain.createTransaction(
        request.body
      );
      return response.status(201).json(transaction);
    } catch (error) {
      return next(error);
    }
  }

  async balance(_request: Request, response: Response, next: NextFunction) {
    try {
      const balance = await TransactionsDomain.getTransactionsBalance();
      return response.json(balance);
    } catch (error) {
      return next(error);
    }
  }
}

export default new TransactionsController();
