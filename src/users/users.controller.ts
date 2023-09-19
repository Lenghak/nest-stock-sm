import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from "@nestjs/common";

import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";

import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.usersService.create(createUserDto);
    } catch (err) {
      throw err;
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.usersService.findAll();
    } catch (err) {
      throw err;
    }
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    try {
      return this.usersService.findOne(id);
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError)
        throw new NotFoundException(err.meta.cause);

      throw err;
    }
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      return await this.usersService.update(id, updateUserDto);
    } catch (err) {
      // else throw the erro
      if (err instanceof PrismaClientKnownRequestError)
        throw new NotFoundException(err.meta.cause);

      if (err instanceof PrismaClientValidationError)
        throw new BadRequestException(err.message);

      throw err;
    }
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    try {
      return await this.usersService.remove(id);
    } catch (err) {
      throw err;
    }
  }
}
