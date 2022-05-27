import { CreateTransactionDto } from './dto/create.transaction.dto';
import { TransactionEntity } from './entities/transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionMapper } from './transaction.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionRepository {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transaction: Repository<TransactionEntity>,
    readonly transactionMapper: TransactionMapper,
  ) {}

  async createTransaction(transactionToSave: CreateTransactionDto) {
    const newTransaction = await this.transaction.save(transactionToSave);
    return newTransaction ? this.transactionMapper.mapTransactionEntityToTransaction(newTransaction) : null;
  }

  async findAllTransactions() {
    const foundedTransactions = await this.transaction.find();
    return foundedTransactions
      ? this.transactionMapper.mapTransactionEntitiesToTransactions(foundedTransactions)
      : [];
  }

  async findOneTransaction(transactionId: string) {
    const foundedTransaction = await this.transaction.findOne({ transactionId });
    return foundedTransaction
      ? this.transactionMapper.mapTransactionEntityToTransaction(foundedTransaction)
      : null;
  }

  async updateTransaction(transactionId: string, fieldsToUpdate) {
    const { affected } = await this.transaction.update(
      { transactionId },
      {
        ...fieldsToUpdate,
      },
    );
    return !!affected;
  }

  async removeTransaction(transactionId: string): Promise<boolean> {
    const { affected } = await this.transaction.delete(transactionId);
    return !!affected;
  }
}
