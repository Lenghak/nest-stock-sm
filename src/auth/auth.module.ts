import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";

import { env } from "@/env/server";
import { PrismaService } from "@/primsa.service";
import { UsersService } from "@/users/users.service";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  imports: [JwtModule.register({ secret: env.JWT_SECRET })],
  controllers: [AuthController],
  providers: [UsersService, AuthService, PrismaService, JwtService],
})
export class AuthModule {}
