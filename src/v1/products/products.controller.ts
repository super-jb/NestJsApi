import { Controller, Post, Body, Get, Param, Patch, BadRequestException, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.model';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('products')
@Controller('api/v1/products')
export class ProductsController {

  constructor(private productService: ProductsService) {

  }

  /*
    @Post()
    addProduct(
      @Body('title') title: string,
      @Body('description') description: string,
      @Body('price') price: number) {

      let prod = new Product(0, title, description, price);
      return this.productService.insertProduct(prod);
    }
  */

  @Post()
  addProduct(
    @Body() prod: Product) {
    return this.productService.insertProduct(prod);
  }

  @Get()
  async getAll(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Get(':id')
  async get(@Param('id') id: number): Promise<Product> {
    return this.productService.getProduct(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() prod: Product): Promise<Product> {
      if (id != prod.id) {
        throw new BadRequestException('Ids don\'t match');
      }

      return this.productService.updateProduct(prod);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.productService.removeProduct(id);
  }

}
