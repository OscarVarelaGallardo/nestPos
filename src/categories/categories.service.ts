import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm/repository/Repository';



@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private readonly categoryRepository: Repository<Category>) { }

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepository.save(createCategoryDto);
  }

  findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: number) {

    const category = await this.categoryRepository.findOneBy({ id });
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    await this.findOne(id);
    return  await this.categoryRepository.update(id, updateCategoryDto);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.categoryRepository.delete(id);
  }
}
