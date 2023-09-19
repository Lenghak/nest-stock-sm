import { IsEmail, IsString, MaxLength } from "class-validator";

export class AuthLoginDto {
  @IsString()
  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsString()
  @MaxLength(255)
  password: string;
}
