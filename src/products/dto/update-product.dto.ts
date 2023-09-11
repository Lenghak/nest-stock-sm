import { PartialType } from "@nestjs/mapped-types";

import { IsOptional, IsString } from "class-validator";

import { CreateProductDto } from "./create-product.dto";

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  @IsOptional()
  productCategory?: string;

  @IsString()
  @IsOptional()
  barCode?: string;

  @IsString()
  @IsOptional()
  productCode?: string;

  @IsString()
  @IsOptional()
  productDescription?: string;

  @IsString()
  @IsOptional()
  productName?: string;

  @IsString()
  @IsOptional()
  productPrice?: string;

  @IsString()
  @IsOptional()
  productType?: string;
}
