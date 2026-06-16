import prisma from "../../database/prisma.ts";
import bcrypt from "bcrypt";
export  class AuthRepository {
  async findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async createUser(data: {
    name: string;
    email: string;
    passwordHash: string;
  }) {
    return prisma.user.create({
      data,
    });
  }

  async findUserById(id: string) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}
}