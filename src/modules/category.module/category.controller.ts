import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create.category.dto';
import { UpdateCategoryDto } from './dto/update.category.dto';
import { CategoryPresenter } from './category.presenter';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  createCategory,
  findAllCategorys,
  findOneCategory,
  updateCategory,
  removeCategory,
} from './consts/swagger.consts';

@ApiTags('Category module')
@Controller('category')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly categoryPresenter: CategoryPresenter,
  ) {}

  @ApiOperation(createCategory.apiOperation)
  @ApiResponse(createCategory.apiResponse)
  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    const newCategory = await this.categoryService.createCategory(createCategoryDto);
    return this.categoryPresenter.mapCategoryResponse(newCategory);
  }

  @ApiOperation(findAllCategorys.apiOperation)
  @ApiResponse(findAllCategorys.apiResponse)
  @Get()
  async findAllCategorys() {
    const foundedCategorys = await this.categoryService.findAllCategorys();
    return this.categoryPresenter.mapMenuCategoryResponse(foundedCategorys);
  }

  @ApiOperation(findOneCategory.apiOperation)
  @ApiResponse(findOneCategory.apiResponse)
  @Get(':categoryId')
  async findOneCategory(@Param('categoryId') categoryId: string) {
    const foundedCategory = await this.categoryService.findOneCategory(categoryId);
    return this.categoryPresenter.mapCategoryResponse(foundedCategory);
  }

  @ApiOperation(updateCategory.apiOperation)
  @ApiResponse(updateCategory.apiResponse)
  @Patch(':categoryId')
  async updateCategory(
    @Param('categoryId') categoryId: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    const updatedCategory = await this.categoryService.updateCategory(
      categoryId,
      updateCategoryDto,
    );
    return this.categoryPresenter.mapCategoryResponse(updatedCategory);
  }

  @ApiOperation(removeCategory.apiOperation)
  @ApiResponse(removeCategory.apiResponse)
  @Delete(':categoryId')
  async removeCategory(@Param('categoryId') categoryId: string) {
    const removedCategory = await this.categoryService.removeCategory(categoryId);
    return this.categoryPresenter.mapCategoryResponse(removedCategory);
  }
}
