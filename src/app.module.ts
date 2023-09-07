import {
  type MiddlewareConsumer,
  Module,
  type NestModule,
} from "@nestjs/common";

import { AppMiddleware } from "./middleware/app.middleware";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppMiddleware).forRoutes("users");
  }
}
