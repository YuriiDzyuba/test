import { Bank } from '../types/bank.type';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { TransactionEntity } from '../../transaction.module/entities/transaction.entity';
import { Transaction } from '../../transaction.module/types/transaction.type';

@Entity({ name: 'banks' })
export class BankEntity implements Bank {
  @PrimaryGeneratedColumn('uuid')
  bankId: string;

  @Column({ unique: true })
  name: string;

  @Column()
  balance: number;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => TransactionEntity, (transaction) => transaction.bankName)
  transactions: Transaction[];
}
