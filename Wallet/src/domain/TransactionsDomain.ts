/* eslint-disable no-plusplus */
import Transaction from '../entities/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

class AppointmentDomain {
  async createTransaction(transaction: Transaction): Promise<Transaction> {
    return TransactionsRepository.create(transaction);
  }
}

export default new AppointmentDomain();
