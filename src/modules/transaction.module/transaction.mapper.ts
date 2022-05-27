import { TransactionEntity } from './entities/transaction.entity';

export class TransactionMapper {
  mapTransactionEntityToTransaction(transaction: TransactionEntity) {
    return {};
  }

  mapTransactionEntitiesToTransactions(transactions: TransactionEntity[]) {
    return transactions.map((transaction) => this.mapTransactionEntityToTransaction(transaction));
  }
}
