import { type Prisma } from "@prisma/client";

import { IsCurrency, IsString, MaxLength } from "class-validator";

export class CreateProductDto implements Prisma.ProductsCreateInput {
  @IsString()
  @MaxLength(255)
  productCode: string;

  @IsString()
  @MaxLength(255)
  productName: string;

  @IsString()
  @MaxLength(2047)
  productDescription: string;

  @IsString()
  @MaxLength(255)
  productType: string;

  @IsCurrency()
  productPrice: string;

  @IsString()
  @MaxLength(255)
  productCategory: string;

  @IsString()
  @MaxLength(255)
  barCode: string;
}
