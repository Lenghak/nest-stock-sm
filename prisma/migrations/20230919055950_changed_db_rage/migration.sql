/*
  Warnings:

  - You are about to alter the column `street` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - You are about to alter the column `city` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - You are about to alter the column `province` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - You are about to alter the column `country` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - You are about to alter the column `productCode` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - You are about to alter the column `productName` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - You are about to alter the column `productDescription` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2048)` to `VarChar(2047)`.
  - You are about to alter the column `productType` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - You are about to alter the column `productCategory` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - You are about to alter the column `barCode` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - You are about to alter the column `firstName` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - You are about to alter the column `lastName` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - You are about to alter the column `username` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - You are about to alter the column `phone` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "street" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "city" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "province" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "country" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "zipCode" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "productCode" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "productName" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "productDescription" SET DATA TYPE VARCHAR(2047),
ALTER COLUMN "productType" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "productCategory" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "barCode" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "firstName" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "lastName" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "username" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "phone" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "img" DROP NOT NULL,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255);
