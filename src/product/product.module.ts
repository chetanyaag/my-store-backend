import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product } from 'my-store-orm/dist/entities/Product';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Product]),],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
