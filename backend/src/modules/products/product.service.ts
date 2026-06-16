import { ProductRepository } from "./product.repository.js";
import type {
  CreateProductInput,
  UpdateProductInput,
} from "./product.types.js";

export class ProductService {
  private productRepository = new ProductRepository();

  async createProduct(data: CreateProductInput) {
    const existingProduct = await this.productRepository.findBySku(data.sku);

    if (existingProduct) {
      throw new Error("Product SKU already exists");
    }

    const product = await this.productRepository.create(data);

    return product;
  }

  //   async getAllProducts() {
  async getProducts() {
    return this.productRepository.findAll();
  }

  async getProductById(id: string) {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  }

  async updateProduct(id: string, data: UpdateProductInput) {
    const existingProduct = await this.productRepository.findById(id);

    if (!existingProduct) {
      throw new Error("Product not found");
    }

    return this.productRepository.update(id, data);
  }

  async deleteProduct(id: string) {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new Error("Product not found");
    }

    return this.productRepository.softDelete(id);
  }
}
