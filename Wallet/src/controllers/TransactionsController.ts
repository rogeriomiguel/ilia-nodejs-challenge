/* eslint-disable no-plusplus */
import { Request, Response, NextFunction } from 'express';
import TransactionsDomain from '../domain/TransactionsDomain';

class AppointmentController {
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
}

export default new AppointmentController();
