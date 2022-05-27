import { BankEntity } from '../entities/bank.entity';

export const createBank = {
  apiOperation: {
    summary: 'create new Bank ',
  },
  apiResponse: {
    status: 201,
    description: 'created new Bank',
    type: BankEntity,
  },
};

export const findAllBanks = {
  apiOperation: {
    summary: 'find many Bank',
  },
  apiResponse: {
    status: 200,
    description: 'founded Bank',
    type: BankEntity,
  },
};

export const findOneBank = {
  apiOperation: {
    summary: 'update current Bank ',
  },
  apiResponse: {
    status: 200,
    description: 'updated Bank',
    type: BankEntity,
  },
};

export const updateBank = {
  apiOperation: {
    summary: 'update current Bank ',
  },
  apiResponse: {
    status: 200,
    description: 'updated Bank',
    type: BankEntity,
  },
};

export const removeBank = {
  apiOperation: {
    summary: 'update current Bank ',
  },
  apiResponse: {
    status: 200,
    description: 'updated Bank',
    type: BankEntity,
  },
};
