import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from "@nestjs/common";

import { Prisma } from "@prisma/client";

import { Request, Response } from "express";

import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(userCreateInput: Prisma.UserCreateInput) {
    return this.usersService.create(userCreateInput);
  }

  @Get()
  async findAll(@Req() _req: Request, @Res() res: Response) {
    try {
      const user = await this.usersService.findAll();

      return res.status(HttpStatus.OK).json({
        data: user,
      });
    } catch (err) {
      throw err;
    }
  }

  @Get(":id")
  async findOne(
    @Req() _req: Request,
    @Res() res: Response,
    @Param("id") id: string,
  ) {
    try {
      const user = await this.usersService.findOne(id);

      return res.status(HttpStatus.OK).json({
        data: user,
      });
    } catch (err) {
      throw err;
    }
  }

  @Patch(":id")
  async update(
    @Req() _req: Request,
    @Res() res: Response,
    @Param("id") id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      const updatedUser = await this.usersService.update(id, updateUserDto);

      return res.status(HttpStatus.OK).json({
        data: updatedUser,
        message: "User updated successfully",
      });
    } catch (err) {
      throw err;
    }
  }

  @Delete(":id")
  async remove(
    @Req() _req: Request,
    @Res() res: Response,
    @Param("id") id: string,
  ) {
    try {
      const deletedUser = await this.usersService.remove(id);

      return res.status(HttpStatus.OK).json({
        data: deletedUser,
        message: "User deleted successfully",
      });
    } catch (err) {
      throw err;
    }
  }
}
