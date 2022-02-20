const createTransaction = {
  user_id: '62110cc8a06e1d31761421fc',
  amount: '100',
  type: 'DEBIT',
};

const createTransactionIdError = {
  amount: '100',
  type: 'DEBIT',
};

const createTransactionAmountError = {
  user_id: '62110cc8a06e1d31761421fc',
  type: 'DEBIT',
};

const createTransactionTypeError = {
  user_id: '62110cc8a06e1d31761421fc',
  amount: '100',
  type: 'debit',
};

export default {
  createTransaction,
  createTransactionIdError,
  createTransactionAmountError,
  createTransactionTypeError,
};
