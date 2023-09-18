import {
  type MiddlewareConsumer,
  Module,
  type NestModule,
} from "@nestjs/common";

import { AppMiddleware } from "./middleware/app.middleware";
import { ProductsModule } from "./products/products.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [ProductsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppMiddleware).forRoutes("users");
  }
}
