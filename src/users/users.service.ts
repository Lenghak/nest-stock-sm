import {
  HttpException,
  HttpStatus,
  Injectable,
  Req,
  Res,
} from "@nestjs/common";

import { Request, Response } from "express";
import { PrismaService } from "src/primsa.service";

import { type CreateUserDto } from "./dto/create-user.dto";
import { type UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(_createUserDto: CreateUserDto) {
    return "This action adds a new user";
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.user.findFirst({ where: { id } });
  }

  update(id: number, _updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
