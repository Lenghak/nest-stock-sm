import { randUser } from "@ngneat/falso";
import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcryptjs";

const prisma = new PrismaClient();

const main = async () => {
  try {
    await prisma.user.deleteMany();

    const fakeUsers = randUser({
      length: 10,
    });

    await prisma.user.createMany({
      data: fakeUsers.map((user) => ({
        ...user,
        password: hashSync("password", 10),
        address: null,
      })),
    });


    console.log(`Database has been seeded. 🌱`);
  } catch (error) {
    throw error;
  }
};

main().catch((err) => {
  console.warn("Error While generating Seed: \n", err);
});
