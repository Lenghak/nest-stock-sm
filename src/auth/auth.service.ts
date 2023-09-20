import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { env } from "@/env/server";
import { PrismaService } from "@/primsa.service";
import { compare } from "bcryptjs";

import { type AuthSignInDto } from "./dto/authSignIn.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}
  async signIn(authSignInDto: AuthSignInDto) {
    const user = await this.validate(authSignInDto);

    const payload = {
      sub: {
        id: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    };

    const accesstoken = await this.jwtService.signAsync(payload, {
      expiresIn: "1h",
      secret: env.JWT_SECRET,
    });

    const refreshtoken = await this.jwtService.signAsync(payload, {
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

  async validate(authSignInDto: AuthSignInDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: authSignInDto.email },
    });

    if (user && (await compare(authSignInDto.password, user.password))) {
      delete user.password;
      return user;
    }

    throw new UnauthorizedException();
  }
}
