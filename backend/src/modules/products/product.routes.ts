import { Router } from "express";
import { ProductController } from "./product.controller.js";
import { authMiddleware } from "../../middleware/auth/auth.middleware.ts";
import { authorize } from "../../middleware/auth/authorize.middleware.ts";
import {
  createProductSchema,
  updateProductSchema,
} from "./product.validation.ts";
import { validateMiddleware } from "../../middleware/validation/validate.middleware.ts";

const router = Router();

const productController = new ProductController();

router.post(
  "/",
  authMiddleware,
  authorize("ADMIN", "INVENTORY_MANAGER"),
  validateMiddleware(createProductSchema),
  productController.createProduct,
);
router.get("/", authMiddleware, productController.getProducts);
router.get("/:id", authMiddleware, productController.getProductById);
router.put(
  "/:id",
  authMiddleware,
  authorize("ADMIN", "INVENTORY_MANAGER"),
  validateMiddleware(updateProductSchema),
  productController.updateProduct,
);
router.delete(
  "/:id",
  authMiddleware,
  authorize("ADMIN", "INVENTORY_MANAGER"),
  productController.deleteProduct,
);
export default router;
