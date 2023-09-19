import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";

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
      throw err;
    }
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      return this.usersService.update(id, updateUserDto);
    } catch (err) {
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
