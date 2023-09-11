import { type Prisma } from "@prisma/client";

import { IsCurrency, IsString } from "class-validator";

export class CreateProductDto implements Prisma.ProductsCreateInput {
  @IsString()
  productCode: string;

  @IsString()
  productName: string;

  @IsString()
  productDescription: string;

  @IsString()
  productType: string;

  @IsCurrency()
  productPrice: string;

  @IsString()
  productCategory: string;

  @IsString()
  barCode: string;
}
