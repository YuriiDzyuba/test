import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryRepository } from './category.repository';
import { CategoryPresenter } from './category.presenter';
import { CategoryMapper } from './category.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    CategoryRepository,
    CategoryPresenter,
    CategoryMapper,
  ],
})
export class CategoryModule {}
