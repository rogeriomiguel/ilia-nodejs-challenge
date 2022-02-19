import TransactionModel from '../models/TransactionModel';
import Transaction from '../entities/Transaction';

class TransactionsRepository {
  getAll(type: string): Promise<Transaction[]> | any {
    const where: any = {};

    if (type) {
      where.type = type;
    }

    return TransactionModel.find(where);
  }

  create(transaction: Transaction): Promise<Transaction> {
    return TransactionModel.create(transaction);
  }
}

export default new TransactionsRepository();
