import { Body, Injectable } from "@nestjs/common";

import { type Prisma } from "@prisma/client";

// import { Request, Response } from "express";
import { PrismaService } from "src/primsa.service";

import { type UpdateUserDto } from "./dto/update-user.dto";

// import { type UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(@Body() userCreateInput: Prisma.UserCreateInput) {
    console.log("");
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.user.findFirst({ where: { userId: id } });
  }

  async update(id: string, @Body() userUpdateDTO: UpdateUserDto) {
    console.log(userUpdateDTO.firstName, id);

    return await this.prisma.user.update({
      where: { userId: id },
      data: userUpdateDTO,
    });
  }

  async remove(id: string) {
    return await this.prisma.user.delete({ where: { userId: id } });
  }
}
