import { Schema, model } from 'mongoose';
import Transaction from '../entities/Transaction';

const schema = new Schema<Transaction>({
  user_id: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, required: true },
});

export default model<Transaction>('Transaction', schema);
