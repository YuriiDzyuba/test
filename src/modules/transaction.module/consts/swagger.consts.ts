import { TransactionEntity } from '../entities/transaction.entity';

export const createTransaction = {
  apiOperation: {
    summary: 'create new Transaction ',
  },
  apiResponse: {
    status: 201,
    description: 'created new Transaction',
    type: TransactionEntity,
  },
};

export const findAllTransactions = {
  apiOperation: {
    summary: 'find many Transaction',
  },
  apiResponse: {
    status: 200,
    description: 'founded Transaction',
    type: TransactionEntity,
  },
};

export const findOneTransaction = {
  apiOperation: {
    summary: 'update current Transaction ',
  },
  apiResponse: {
    status: 200,
    description: 'updated Transaction',
    type: TransactionEntity,
  },
};

export const updateTransaction = {
  apiOperation: {
    summary: 'update current Transaction ',
  },
  apiResponse: {
    status: 200,
    description: 'updated Transaction',
    type: TransactionEntity,
  },
};

export const removeTransaction = {
  apiOperation: {
    summary: 'update current Transaction ',
  },
  apiResponse: {
    status: 200,
    description: 'updated Transaction',
    type: TransactionEntity,
  },
};
