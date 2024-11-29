import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// Get All products.
router.get("/", getProducts);

// Create new product
router.post("/", createProduct);

// Update Product
router.put("/:id", updateProduct);

// Delelte a product.
router.delete("/:id", deleteProduct);

export default router;
