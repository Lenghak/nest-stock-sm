import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsPhoneNumber()
  @MaxLength(255)
  @IsNotEmpty()
  @IsOptional()
  phone: string;

  @IsString()
  @IsEmail()
  @MaxLength(255)
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  img: string;

  @IsString()
  @IsStrongPassword()
  @MinLength(8)
  @MaxLength(255)
  @IsNotEmpty()
  password: string;
}
