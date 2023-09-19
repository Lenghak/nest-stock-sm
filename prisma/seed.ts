import { PrismaClient } from "@prisma/client";

import {
  randAddress,
  randFullAddress,
  randProduct,
  randProductMaterial,
  randState,
  randUser,
  randUuid,
  randZipCode,
} from "@ngneat/falso";
import { hashSync } from "bcryptjs";

const prisma = new PrismaClient();

const seed = async () => {
  try {
    await prisma.address.deleteMany();
    await prisma.user.deleteMany();
    await prisma.products.deleteMany();

    await prisma.user.createMany({
      data: randUser({
        length: 10,
      }).map((user) => ({
        userId: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        img: user.img,
        phone: user.phone,
        password: hashSync("password", 10),
      })),
    });

    const users = await prisma.user.findMany({ take: 10 });

    await prisma.address.createMany({
      data: randAddress({ length: 10 }).map((address, index) => ({
        userId: users[index].userId,
        city: address.city,
        country: address.country,
        street: address.street,
        province: randState(),
        zipCode: address.zipCode,
      })),
    });

    await prisma.products.createMany({
      data: randProduct({
        length: 10,
      }).map((product) => ({
        productName: product.title,
        productDescription: product.description,
        productPrice: product.price,
        productCategory: product.category,
        productType: randProductMaterial(),
        productCode: randZipCode(),
        barCode: randUuid(),
      })),
    });

    console.log(`Database has been seeded. 🌱`);
  } catch (error) {
    throw error;
  }
};

seed().catch((err) => {
  console.warn("Error While generating Seed: \n", err);
});
