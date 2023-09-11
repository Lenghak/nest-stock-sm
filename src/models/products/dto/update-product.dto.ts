import { PartialType } from "@nestjs/mapped-types";

import { IsOptional } from "class-validator";

import { CreateProductDto } from "./create-product.dto";

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsOptional()
  productCategory?: string;

  @IsOptional()
  barCode?: string;

  @IsOptional()
  productCode?: string;

  @IsOptional()
  productDescription?: string;

  @IsOptional()
  productName?: string;

  @IsOptional()
  productPrice?: string;

  @IsOptional()
  productType?: string;
}
