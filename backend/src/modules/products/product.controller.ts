import type { Request, Response } from "express";
import { ProductService } from "./product.service.js";

export class ProductController {
  private productService = new ProductService();

  createProduct = async (req: Request, res: Response) => {
    try {
      const product = await this.productService.createProduct(req.body);

      return res.status(201).json({
        success: true,
        data: product,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  };

  //   async getAllProducts(req: Request, res: Response) {
  getProducts = async (req: Request, res: Response) => {
    try {
      const products = await this.productService.getProducts();

      return res.status(200).json({
        success: true,
        data: products,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  };

  getProductById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if (typeof id !== "string") {
        return res.status(400).json({
          success: false,
          message: "Invalid product ID format",
        });
      }

      const product = await this.productService.getProductById(id);

      return res.status(200).json({
        success: true,
        data: product,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  };

  updateProduct = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if (typeof id !== "string") {
        return res.status(400).json({
          success: false,
          message: "Invalid product ID format",
        });
      }
      const product = await this.productService.updateProduct(id, req.body);
      return res.status(200).json({
        success: true,
        data: product,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  };

  deleteProduct = async (req: Request, res: Response) => {
    try {
      const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;

      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Product ID is required",
        });
      }

      const product = await this.productService.deleteProduct(id);

      return res.status(200).json({
        success: true,
        data: product,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  };
}
