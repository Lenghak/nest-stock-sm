import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from "@nestjs/common";

import { Response } from "express";

import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Res() res: Response, @Body() createProductDto: CreateProductDto) {
    return this.productsService.create(res, createProductDto);
  }

  @Get()
  findAll(@Res() res: Response) {
    return this.productsService.findAll(res);
  }

  @Get(":id")
  findOne(@Res() res: Response, @Param("id") id: string) {
    return this.productsService.findOne(res, id);
  }

  @Patch(":id")
  update(
    @Res() res: Response,
    @Param("id") id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(res, id, updateProductDto);
  }

  @Delete(":id")
  remove(@Res() res: Response, @Param("id") id: string) {
    return this.productsService.remove(res, id);
  }
}
