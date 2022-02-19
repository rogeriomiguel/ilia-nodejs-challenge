import TransactionModel from '../models/TransactionModel';
import Transaction from '../entities/Transaction';

class TransactionsRepository {
  create(transaction: Transaction): Promise<Transaction> {
    return TransactionModel.create(transaction);
  }
}

export default new TransactionsRepository();
