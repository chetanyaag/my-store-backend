import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from 'my-store-orm/dist/data-source';
import { Product } from 'my-store-orm/dist/entities/Product';
import { Category } from 'my-store-orm/dist/entities/Category';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
    useFactory: async () => ({
      ...AppDataSource.options,
      autoLoadEntities: true, 
    }),
  }),
  TypeOrmModule.forFeature([Product, Category]),
  ProductModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
