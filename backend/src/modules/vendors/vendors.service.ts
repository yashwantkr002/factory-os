/* vendors service placeholder */
import { VendorRepository } from "./vendors.repository.js";
import type { CreateVendorInput,UpdateVendorInput } from "./vendors.types.js";

export class VendorService {
  private vendorRepository = new VendorRepository();
  async createVendor(data: CreateVendorInput) {
    const existingVendor = await this.vendorRepository.findByCode(data.code);

    if (existingVendor) {
      throw new Error("Vendor already exists");
    }
    return this.vendorRepository.create(data);
  }

  async getAllVendors() {
    return this.vendorRepository.findAll();
  }

  async updateVendor(id: string, data: UpdateVendorInput) {
    const existingVendor = await this.vendorRepository.findById(id);
    if (!existingVendor) {
      throw new Error("Vendor not found");
    }
    return this.vendorRepository.update(id, data);
  }

  async getVendorById(id: string) {
    const vendor = await this.vendorRepository.findById(id);
    if (!vendor) {
      throw new Error("Vendor not found");
    }
    return vendor;
  }

  async deleteVendor(id: string) {
    const existingVendor = await this.vendorRepository.findById(id);
    if (!existingVendor) {
      throw new Error("Vendor not found");
    }
    return this.vendorRepository.softDelete(id);
  }
}
