import Transaction from '../entities/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

class TransactionsDomain {
  getTransactions(type: string): Promise<Transaction[] | any> {
    return TransactionsRepository.getAll(type);
  }

  createTransaction(transaction: Transaction): Promise<Transaction> {
    return TransactionsRepository.create(transaction);
  }

  async getTransactionsBalance() {
    const balance = await TransactionsRepository.getAmountAggregation();
    const amount = balance[0]?.amount || 0;
    return { amount };
  }
}

export default new TransactionsDomain();
