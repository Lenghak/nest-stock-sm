import { Injectable, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { PrismaService } from "src/primsa.service";

import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return "This action adds a new user";
  }

  async findAll(@Req() _request: Request, @Res() response: Response) {
    try {
      const users = await this.prisma.user.findMany();

      return response.status(200).json({
        error: undefined,
        status: 200,
        data: users,
        message: "Users fetched successfullly",
      });
    } catch (err) {
      return response.status(500).json({
        error: "User Fetch Error",
        status: 500,
        data: undefined,
        message: err,
      });
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
