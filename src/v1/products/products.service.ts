import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(prod: Product) {
    prod.id = Math.random();
    this.products.push(prod);

    return prod;
  }

  getProducts() {
    return [...this.products]; // new array
  }

  getProduct(id: number) {
    // tslint:disable-next-line: triple-equals
    const res = this.products.find(p => p.id == id);
    if (!res) {
      throw new NotFoundException('product with given id not found');
    }

    return { ...res };
  }

  updateProduct(prod: Product) {
    const [product, index] = this.findProduct(prod.id);
    const productToUpdate = {...product};

    if (prod.title) {
      productToUpdate.title = prod.title;
    }
    if (prod.description) {
      productToUpdate.description = prod.description;
    }
    if (prod.price) {
      productToUpdate.price = prod.price;
    }

    this.products[index] = productToUpdate;
    return this.products[index];
  }

  removeProduct(id: number) {
    const index = this.findProduct(id)[1];
    this.products.splice(index, 1);
  }

  private findProduct(id: number): [Product, number] {
    const prodIndex = this.products.findIndex(p => p.id == id);
    const prod = this.products[prodIndex];
    if (!prod) {
      throw new NotFoundException('product with given id not found');
    }

    return [prod, prodIndex];
  }
}
