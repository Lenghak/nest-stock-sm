import { Body, Controller, Post } from "@nestjs/common";

import { CreateUserDto } from "@/users/dto/create-user.dto";
import { UsersService } from "@/users/users.service";

import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post("sign-up")
  async signUp(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Post("sign-in")
  async signIn(@Body() authSignInDto: { email: string; password: string }) {
    return await this.authService.signIn(authSignInDto);
  }
}
