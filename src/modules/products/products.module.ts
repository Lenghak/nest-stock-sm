import { Module } from "@nestjs/common";

import { PrismaService } from "src/services/primsa.service";

import { ProductsController } from "../../controllers/products/products.controller";
import { ProductsService } from "../../services/products/products.service";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService],
})
export class ProductsModule {}
