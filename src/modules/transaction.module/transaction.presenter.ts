import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionPresenter {
  mapTransactionResponse(transaction) {
    return { transaction };
  }

  mapMenuTransactionResponse(transactions) {
    return { transactions };
  }
}
