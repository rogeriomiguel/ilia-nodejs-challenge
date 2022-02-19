/* eslint-disable no-plusplus */
import Transaction from '../entities/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

class AppointmentDomain {
  async getTransactions(type: string): Promise<Transaction> {
    return TransactionsRepository.getAll(type);
  }

  async createTransaction(transaction: Transaction): Promise<Transaction> {
    return TransactionsRepository.create(transaction);
  }
}

export default new AppointmentDomain();
