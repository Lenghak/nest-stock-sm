import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  Res,
} from "@nestjs/common";

import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

import { PrismaService } from "@/primsa.service";
import { type CreateProductDto } from "@/products/dto/create-product.dto";
import { type UpdateProductDto } from "@/products/dto/update-product.dto";
import { Response } from "express";

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    @Res() res: Response,
    @Body() createProductDto: CreateProductDto,
  ) {
    try {
      const createdProduct = await this.prisma.products.create({
        data: createProductDto,
      });

      return res.json({
        data: createdProduct,
      });
    } catch (err) {
      throw err;
    }
  }

  async findAll(@Res() res: Response) {
    try {
      const products = await this.prisma.products.findMany();

      return res.json({
        data: products,
      });
    } catch (err) {
      throw err;
    }
  }

  async findOne(@Res() res: Response, id: string) {
    try {
      const product = await this.prisma.products.findFirst({
        where: { productId: id },
      });

      return res.json({
        data: product,
      });
    } catch (err) {
      throw err;
    }
  }

  async update(
    @Res() res: Response,
    id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    try {
      const updatedProduct = await this.prisma.products.update({
        where: { productId: id },
        data: updateProductDto,
      });

      return res.json({
        data: updatedProduct,
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === "P2025")
          throw new HttpException("Product Not Found!", HttpStatus.NOT_FOUND);
      }

      throw err;
    }
  }

  async remove(@Res() res: Response, id: string) {
    try {
      const deletedProduct = await this.prisma.products.delete({
        where: { productId: id },
      });

      return res.json({
        data: deletedProduct,
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === "P2025")
          throw new HttpException("Product Not Found!", HttpStatus.NOT_FOUND);
      }

      throw err;
    }
  }
}
