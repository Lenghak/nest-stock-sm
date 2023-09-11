import { Module } from "@nestjs/common";

import { PrismaService } from "@/primsa.service";

import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService],
})
export class ProductsModule {}
