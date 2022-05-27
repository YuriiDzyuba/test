import { CostEnum } from './cost.enum';
import { BankEntity } from '../../bank.module/entities/bank.entity';
import { Category } from '../../category.module/types/category.type';

export type Transaction = {
  transactionId: string;
  title: string;
  amount: number;
  valueType: CostEnum;
  createdAt: Date;
  updatedAt: Date;
  bankName: BankEntity;
  categories: Category[];
};
