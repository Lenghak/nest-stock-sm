import { PartialType } from "@nestjs/mapped-types";

import { CreateUserDto } from "@/users/dto/create-user.dto";
import {
  IsEmail,
  IsString,
  IsStrongPassword,
  MaxLength,
} from "class-validator";

export class AuthRegisterDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsEmail()
  @MaxLength(255)
  email?: string;

  @IsString()
  @MaxLength(255)
  username?: string;

  @IsString()
  @MaxLength(255)
  firstName?: string;

  @IsString()
  @MaxLength(255)
  lastName?: string;

  @IsString()
  @MaxLength(255)
  @IsStrongPassword()
  password?: string;
}
