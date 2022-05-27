import { Category } from '../types/category.type';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {TransactionEntity} from "../../transaction.module/entities/transaction.entity";
import {Transaction} from "../../transaction.module/types/transaction.type";

@Entity({ name: 'categorys' })
export class CategoryEntity implements Category {
  @PrimaryGeneratedColumn('uuid')
  categoryId: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => TransactionEntity, (transaction) => transaction.categories, {
    eager: true,
  })
  transactionsName: Transaction;
}
