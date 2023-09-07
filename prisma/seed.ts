import { PrismaClient } from "@prisma/client";

import { randUser } from "@ngneat/falso";
import { hashSync } from "bcryptjs";

const prisma = new PrismaClient();

const seed = async () => {
  try {
    await prisma.user.deleteMany();

    await prisma.user.createMany({
      data: randUser({
        length: 10,
      }).map((user) => ({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        img: user.img,
        phone: user.phone,
        password: hashSync("password", 10),
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

console.log("seed has been called");
