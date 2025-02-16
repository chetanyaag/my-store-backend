import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'my-store-orm/dist/entities/Product';




@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}
    @Get()
    getProducts():Promise<Product[]> {
        return this.productService.findAll();
    }

}