import { TransactionEntity } from '../../transaction.module/entities/transaction.entity';

export type Category = {
  categoryId: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  transactionsName: TransactionEntity;
};
