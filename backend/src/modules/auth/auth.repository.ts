import prisma from "../../database/prisma.ts";
import type { RegisterUserInput , LoginUserInput  } from "./auth.types.js";
import bcrypt from "bcrypt";
export  class AuthRepository {
  async findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async createUser(data: Omit<RegisterUserInput,"password">,passwordHash: string) {
    return prisma.user.create({
      data:{
        name: data.name,
        email: data.email,
        passwordHash,
      }
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