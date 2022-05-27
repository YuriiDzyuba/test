import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create.category.dto';
import { UpdateCategoryDto } from './dto/update.category.dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async createCategory(createCategoryDto: CreateCategoryDto) {
    const newCategory = await this.categoryRepository.createCategory(
      createCategoryDto,
    );
    return newCategory;
  }

  async findAllCategorys() {
    const foundedCategorys = await this.categoryRepository.findAllCategorys();
    return foundedCategorys;
  }

  async findOneCategory(categoryId: string) {
    const foundedCategory = await this.categoryRepository.findOneCategory(
      categoryId,
    );
    return foundedCategory;
  }

  async updateCategory(
    categoryId: string,
    updateCategoryDto: UpdateCategoryDto,
  ) {
    const updatedCategory = await this.categoryRepository.updateCategory(
      categoryId,
      updateCategoryDto,
    );
    return updatedCategory;
  }

  async removeCategory(categoryId: string) {
    await this.categoryRepository.removeCategory(categoryId);
  }
}
