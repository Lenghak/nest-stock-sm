import { Injectable, UnauthorizedException } from "@nestjs/common";
import { type JwtService } from "@nestjs/jwt";

import { env } from "@/env/server";
import { PrismaService } from "@/primsa.service";
import { compare } from "bcryptjs";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signIn(
    authSignInDto: { email: string; password: string },
    jwtService: JwtService,
  ) {
    const user = await this.validate(authSignInDto);

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

  async validate(authSignInDto: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({
      where: { email: authSignInDto.email },
    });

    console.log(user);

    if (user && (await compare(authSignInDto.password, user.password))) {
      delete user.password;
      return user;
    }

    throw new UnauthorizedException();
  }
}
