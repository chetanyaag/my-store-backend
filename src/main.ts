import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { AppDataSource } from 'my-store-orm/dist/data-source';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "http://localhost:5173", 
    methods: "GET,POST,PUT,DELETE", 
    allowedHeaders: "Content-Type, Authorization", 
  });
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
