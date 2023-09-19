import { Injectable, UnauthorizedException } from "@nestjs/common";
import { type JwtService } from "@nestjs/jwt";

import { env } from "@/env/server";
import { PrismaService } from "@/primsa.service";
import { type CreateUserDto } from "@/users/dto/create-user.dto";
import { UsersService } from "@/users/users.service";
import { compare } from "bcryptjs";

import { type AuthLoginDto } from "./dto/authLogin.dto";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  async signUp(createUserDTO: CreateUserDto) {
    return await this.usersService.create(createUserDTO);
  }

  async signIn(authLoginDto: AuthLoginDto, jwtService: JwtService) {
    const user = await this.validate(authLoginDto);

    const payload = {
      sub: {
        id: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    };

    const accesstoken = await jwtService.signAsync(payload, {
      expiresIn: "1h",
      secret: env.JWT_SECRET,
    });

    const refreshtoken = await jwtService.signAsync(payload, {
      expiresIn: "7d",
      secret: env.JWT_REFRESH_TOKEN,
    });

    return {
      user,
      tokens: {
        accesstoken,
        refreshtoken,
      },
    };
  }

  async validate(authLoginDto: AuthLoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: authLoginDto.email },
    });

    if (user && (await compare(authLoginDto.password, user.password))) {
      delete user.password;
      return user;
    }

    throw new UnauthorizedException();
  }
}
