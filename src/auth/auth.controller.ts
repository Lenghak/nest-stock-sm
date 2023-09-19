import { Body, Controller, Post } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { type CreateUserDto } from "@/users/dto/create-user.dto";

import { AuthService } from "./auth.service";
import { type AuthLoginDto } from "./dto/authLogin.dto";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post("sign-up")
  async signUp(@Body() createUserDto: CreateUserDto) {
    return await this.authService.signUp(createUserDto);
  }

  @Post("sign-in")
  async signIn(@Body() authLoginDto: AuthLoginDto) {
    return await this.authService.signIn(authLoginDto, this.jwtService);
  }
}
