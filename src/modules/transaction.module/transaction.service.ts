import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create.transaction.dto';
import { UpdateTransactionDto } from './dto/update.transaction.dto';
import { TransactionRepository } from './transaction.repository';

@Injectable()
export class TransactionService {
  constructor(private readonly transactionRepository: TransactionRepository) {}
  async createTransaction(createTransactionDto: CreateTransactionDto) {
    const newTransaction = await this.transactionRepository.createTransaction(
      createTransactionDto,
    );
    return newTransaction;
  }

  async findAllTransactions() {
    const foundedTransactions =
      await this.transactionRepository.findAllTransactions();
    return foundedTransactions;
  }

  async findOneTransaction(transactionId: string) {
    const foundedTransaction =
      await this.transactionRepository.findOneTransaction(transactionId);
    return foundedTransaction;
  }

  async updateTransaction(
    transactionId: string,
    updateTransactionDto: UpdateTransactionDto,
  ) {
    const updatedTransaction =
      await this.transactionRepository.updateTransaction(
        transactionId,
        updateTransactionDto,
      );
    return updatedTransaction;
  }

  async removeTransaction(transactionId: string) {
    await this.transactionRepository.removeTransaction(transactionId);
  }
}
