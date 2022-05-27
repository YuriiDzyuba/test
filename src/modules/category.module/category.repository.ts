import { CreateCategoryDto } from './dto/create.category.dto';
import { CategoryEntity } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryMapper } from './category.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly category: Repository<CategoryEntity>,
    readonly categoryMapper: CategoryMapper,
  ) {}

  async createCategory(categoryToSave: CreateCategoryDto) {
    const newCategory = await this.category.save(categoryToSave);
    return newCategory ? this.categoryMapper.mapCategoryEntityToCategory(newCategory) : null;
  }

  async findAllCategorys() {
    const foundedCategorys = await this.category.find();
    return foundedCategorys
      ? this.categoryMapper.mapCategoryEntitiesToCategorys(foundedCategorys)
      : [];
  }

  async findOneCategory(categoryId: string) {
    const foundedCategory = await this.category.findOne({ categoryId });
    return foundedCategory
      ? this.categoryMapper.mapCategoryEntityToCategory(foundedCategory)
      : null;
  }

  async updateCategory(categoryId: string, fieldsToUpdate) {
    const { affected } = await this.category.update(
      { categoryId },
      {
        ...fieldsToUpdate,
      },
    );
    return !!affected;
  }

  async removeCategory(categoryId: string): Promise<boolean> {
    const { affected } = await this.category.delete(categoryId);
    return !!affected;
  }
}
