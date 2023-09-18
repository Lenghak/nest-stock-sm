import { ConflictException, Injectable } from "@nestjs/common";

import { PrismaService } from "@/primsa.service";
import { hash } from "bcryptjs";

import { type CreateUserDto } from "./dto/create-user.dto";
import { type UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
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
        password: await hash(createUserDto.password, 8),
        img:
          createUserDto.img ??
          `https://robohash.org/mail@${createUserDto.email}`,
      },
    });

    return newUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({ where: { userId: id } });
  }

  update(id: string, _updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    return await this.prisma.user.delete({ where: { userId: id } });
  }
}
