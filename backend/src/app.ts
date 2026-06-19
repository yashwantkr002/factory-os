import express from "express";
import authRoutes from "./modules/auth/auth.routes.ts";
import productRoutes from "./modules/products/product.routes.js";
import vendorRoutes from "./modules/vendors/vendors.routes.js";

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/vendors", vendorRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "FactoryOS API Running",
  });
});

export default app;