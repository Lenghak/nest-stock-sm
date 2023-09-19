import { ConflictException, Injectable } from "@nestjs/common";

import { type User } from "@prisma/client";

import { PrismaService } from "@/primsa.service";
import { hash } from "bcryptjs";

import { type CreateUserDto } from "./dto/create-user.dto";
import { type UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(
    createUserDto: CreateUserDto,
  ): Promise<Omit<CreateUserDto, "password">> {
    //find if the user is already exist
    const alreadyExistUser = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    if (alreadyExistUser) throw new ConflictException("User already exists");

    const newUser = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: await hash(createUserDto.password, 10),
        img:
          createUserDto.img ??
          `https://robohash.org/mail@${createUserDto.email}`,
      },
    });

    delete newUser.password;

    return newUser;
  }

  async findAll(): Promise<Omit<User, "passwod">[]> {
    return (await this.prisma.user.findMany({ take: 10 })).map((user) => {
      delete user.password;
      return user;
    });
  }

  async findOne(id: string): Promise<Omit<User, "passwod">> {
    const user = await this.prisma.user.findUnique({ where: { userId: id } });
    delete user.password;

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.update({
      data: updateUserDto,
      where: {
        userId: id,
      },
    });

    delete user.password;

    return user;
  }

  async remove(id: string): Promise<Omit<User, "passwod">> {
    const user = await this.prisma.user.delete({ where: { userId: id } });
    delete user.password;

    return user;
  }
}
