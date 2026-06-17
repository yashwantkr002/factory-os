import prisma from '../../database/prisma.js';
import type { CreateVendorInput, UpdateVendorInput } from './vendors.types.js';

export class VendorRepository {
  async create(data: CreateVendorInput) {
    return prisma.vendor.create({
      data,
    });
  }
  async findById(id:string) {
    return prisma.vendor.findUnique({
      where: {
        id,
      },
    });
  }
  async findByCode(code: string) {
  return prisma.vendor.findUnique({
    where: {
      code,
    },
  });
}

  async findAll() {
  return prisma.vendor.findMany({
    where: {
      isActive: true,
    },
  });
}

  async update(id: string, data: UpdateVendorInput) {
    return prisma.vendor.update({
      where: {
        id,
      },
      data,
    });
  }
  
  async softDelete(id: string) {
    return prisma.vendor.update({
      where: {
        id,
      },
      data: {
        isActive: false,
      },
    });
  }
}