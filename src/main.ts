import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ProductsModule } from './v1/products/products.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = 
    new DocumentBuilder()
      .setTitle('My Products Api')
      .setDescription('How to use Products API')
      .setVersion('1.0')
      .addTag('products')
      .build();

  const productDocument = SwaggerModule.createDocument(app, options, {
    include: [ProductsModule],
  });
  SwaggerModule.setup('api', app, productDocument);

  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();