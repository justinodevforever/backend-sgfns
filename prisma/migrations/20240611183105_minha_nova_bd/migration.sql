/*
  Warnings:

  - You are about to drop the column `fk_user` on the `UserRoles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserRoles" DROP CONSTRAINT "UserRoles_fk_user_fkey";

-- AlterTable
ALTER TABLE "UserRoles" DROP COLUMN "fk_user";
