import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";

import { env } from "@/env/server";
import { PrismaService } from "@/primsa.service";
import { UsersService } from "@/users/users.service";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  imports: [JwtModule.register({ global: true, secret: env.JWT_SECRET })],
  controllers: [AuthController],
  providers: [PrismaService, AuthService, JwtService, UsersService],
  exports: [AuthService, JwtService],
})
export class AuthModule {}
