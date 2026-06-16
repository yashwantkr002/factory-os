import * as bcrypt from "bcrypt";
import { AuthRepository } from "./auth.repository.js";
import type { RegisterUserInput } from "./auth.types.js";
import jwt from "jsonwebtoken";
import { generateAccessToken } from "../../config/jwt.js";
import type { LoginUserInput } from "./auth.types.js";

export class AuthService {
  private authRepository = new AuthRepository();

  async register(data: RegisterUserInput) {
    const existingUser =
      await this.authRepository.findUserByEmail(data.email);

    if (existingUser) {
      throw new Error("User already exists");
    }

    const passwordHash = await bcrypt.hash(data.password, 10);

    const user = await this.authRepository.createUser({
      name: data.name,
      email: data.email,
      passwordHash,
    });

    const { passwordHash: _, ...safeUser } = user;

    return safeUser;
  };

  async login(data: LoginUserInput) {
  const user = await this.authRepository.findUserByEmail(
    data.email
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid = await bcrypt.compare(
    data.password,
    user.passwordHash
  );

  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const token = generateAccessToken(
    user.id,
    user.email,
    user.role
  );

  const { passwordHash, ...safeUser } = user;

  return {
    token,
    user: safeUser,
  };
};

async getCurrentUser(userId: string) {
  const user =
    await this.authRepository.findUserById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  const { passwordHash, ...safeUser } = user;

  return safeUser;
}
}