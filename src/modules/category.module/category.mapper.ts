import { CategoryEntity } from './entities/category.entity';

export class CategoryMapper {
  mapCategoryEntityToCategory(category: CategoryEntity) {
    return {};
  }

  mapCategoryEntitiesToCategorys(categorys: CategoryEntity[]) {
    return categorys.map((category) =>
      this.mapCategoryEntityToCategory(category),
    );
  }
}
