import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Header,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from './category.dto';
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('/')
  async findAll() {
    return await this.categoryService.findAll();
  }

  @Post('/')
  async create(@Body() categoryDTO: CategoryDTO) {
    const category = await this.categoryService.create(categoryDTO);
    console.log(categoryDTO);
    return category;
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() categoryDTO: CategoryDTO) {
    const category = await this.categoryService.update(id, categoryDTO);
    return category;
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    const category = await this.categoryService.delete(id);
    return category;
  }
}
