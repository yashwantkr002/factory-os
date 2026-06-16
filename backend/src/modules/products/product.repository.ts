import prisma from "../../database/prisma.ts";
import type {
  CreateProductInput,
  UpdateProductInput,
} from "./product.types.js";
export class ProductRepository {
  async create(data: CreateProductInput) {
    return prisma.product.create({
      data,
    });
  }

  async findBySku(sku: string) {
    return prisma.product.findUnique({
      where: {
        sku,
      },
    });
  }

  async findAll() {
    return prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  async findById(id: string) {
    return prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: UpdateProductInput) {
    return prisma.product.update({
      where: {
        id,
      },
      data,
    });
  }

  async softDelete(id: string) {
    return prisma.product.update({
      where: {
        id,
      },
      data: {
        isActive: false,
      },
    });
  }
}
