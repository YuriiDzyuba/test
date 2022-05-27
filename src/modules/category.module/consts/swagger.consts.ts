import { CategoryEntity } from '../entities/category.entity';

export const createCategory = {
  apiOperation: {
    summary: 'create new Category ',
  },
  apiResponse: {
    status: 201,
    description: 'created new Category',
    type: CategoryEntity,
  },
};

export const findAllCategorys = {
  apiOperation: {
    summary: 'find many Category',
  },
  apiResponse: {
    status: 200,
    description: 'founded Category',
    type: CategoryEntity,
  },
};

export const findOneCategory = {
  apiOperation: {
    summary: 'update current Category ',
  },
  apiResponse: {
    status: 200,
    description: 'updated Category',
    type: CategoryEntity,
  },
};

export const updateCategory = {
  apiOperation: {
    summary: 'update current Category ',
  },
  apiResponse: {
    status: 200,
    description: 'updated Category',
    type: CategoryEntity,
  },
};

export const removeCategory = {
  apiOperation: {
    summary: 'update current Category ',
  },
  apiResponse: {
    status: 200,
    description: 'updated Category',
    type: CategoryEntity,
  },
};
