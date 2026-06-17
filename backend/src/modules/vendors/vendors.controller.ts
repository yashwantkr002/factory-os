import { VendorService } from "./vendors.service.js";
import type { Request, Response } from "express";
export class VendorController {
  private vendorService = new VendorService();
  createVendor = async (req: Request, res: Response) => {
    try {
      const vendor = await this.vendorService.createVendor(req.body);
      res.status(201).json({
        success: true,
        data: vendor,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  };

  getAllVendors = async (req: Request, res: Response) => {
    try {
      const vendors = await this.vendorService.getAllVendors();
      res.status(200).json({
        success: true,
        data: vendors,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  };

  updateVendor = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const updatedVendor = await this.vendorService.updateVendor(
        id as string,
        req.body,
      );
      res.status(200).json({
        success: true,
        data: updatedVendor,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  };

  getVendorById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const vendor = await this.vendorService.getVendorById(id as string);
      res.status(200).json({
        success: true,
        data: vendor,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  };

  deleteVendor = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const deletedVendor = await this.vendorService.deleteVendor(id as string);
      res.status(200).json({
        success: true,
        data: deletedVendor,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  };
}