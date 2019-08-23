import { ApiModelProperty } from '@nestjs/swagger';

export class Product {

  @ApiModelProperty()
  id: number;

  @ApiModelProperty()
  title: string;

  @ApiModelProperty()
  description: string;

  @ApiModelProperty()
  price: number;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
    }
}
