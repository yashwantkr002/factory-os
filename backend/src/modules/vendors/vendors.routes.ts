/* vendors routes placeholder */
import { Router } from "express";
import { VendorController } from "./vendors.controller.js";
import {
  createVendorSchema,
  updateVendorSchema,
} from "./vendors.validation.js";
import { validateMiddleware } from "../../middleware/validation/validate.middleware.js";
import { authMiddleware } from "../../middleware/auth/auth.middleware.js";
import { authorize } from "../../middleware/auth/authorize.middleware.js";

const vendorController = new VendorController();

const vendorsRoutes = Router();

vendorsRoutes.post(
  "/",
  authMiddleware,
  authorize("ADMIN", "PURCHASE_MANAGER"),
  validateMiddleware(createVendorSchema),
  vendorController.createVendor,
);
vendorsRoutes.get("/", authMiddleware, vendorController.getAllVendors);
vendorsRoutes.put(
  "/:id",
  authMiddleware,
  authorize("ADMIN", "PURCHASE_MANAGER"),
  validateMiddleware(updateVendorSchema),
  vendorController.updateVendor,
);
vendorsRoutes.get("/:id", authMiddleware, vendorController.getVendorById);

vendorsRoutes.delete(
  "/:id",
  authMiddleware,
  authorize("ADMIN", "PURCHASE_MANAGER"),
  vendorController.deleteVendor,
);

export default vendorsRoutes;
