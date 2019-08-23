import { Module } from '@nestjs/common';
import { ProductsModule } from './v1/products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
