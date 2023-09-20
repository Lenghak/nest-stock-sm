import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { env } from "@/env/server";
import { PrismaModule } from "@/prisma.module";
import { UsersService } from "@/users/users.service";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./guard/auth.guard";

@Module({
  imports: [
    JwtModule.register({ global: true, secret: env.JWT_SECRET }),
    PrismaModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard, UsersService],
  exports: [AuthService],
})
export class AuthModule {}
