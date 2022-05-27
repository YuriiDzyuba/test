import { Transaction } from '../types/transaction.type';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import {CostEnum} from "../types/cost.enum";
import {BankEntity} from "../../bank.module/entities/bank.entity";
import {CategoryEntity} from "../../category.module/entities/category.entity";
import {Category} from "../../category.module/types/category.type";

@Entity({ name: 'transaction' })
export class TransactionEntity implements Transaction {
  @PrimaryGeneratedColumn('uuid')
  transactionId: string;

  @Column({ nullable: true })
  title: string;

  @Column()
  amount: number;

  @Column()
  valueType: CostEnum;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => BankEntity, (bank) => bank.transactions, { eager: true })
  bankName: BankEntity;

  @OneToMany(() => CategoryEntity, (category) => category.transactionsName)
  categories: Category[];
}
