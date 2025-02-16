import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'my-store-orm/dist/entities/Product';
@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>
    ){}
   
    async findAll(): Promise<Product[]> {
        return this.productRepository.find({ relations: ['category'] });
      }
    

}
