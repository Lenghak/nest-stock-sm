import { Body, Controller, Post } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { CreateUserDto } from "@/users/dto/create-user.dto";
import { UsersService } from "@/users/users.service";

import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @Post("sign-up")
  async signUp(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Post("sign-in")
  async signIn(@Body() authSignInDto: { email: string; password: string }) {
    console.log(authSignInDto.email, authSignInDto.password);
    return await this.authService.signIn(authSignInDto, this.jwtService);
  }
}
