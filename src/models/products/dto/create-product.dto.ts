import { type Prisma } from "@prisma/client";

import { IsCurrency, IsEmpty, IsString, Max } from "class-validator";

export class CreateProductDto implements Prisma.ProductsCreateInput {
  @IsEmpty()
  productId?: string;

  @IsString()
  @Max(256)
  productCode: string;

  @IsString()
  @Max(256)
  productName: string;

  @IsString()
  @Max(2048)
  productDescription: string;

  @IsString()
  @Max(256)
  productType: string;

  @IsCurrency()
  productPrice: string;

  @IsString()
  @Max(256)
  productCategory: string;

  @IsString()
  @Max(256)
  barCode: string;
}
