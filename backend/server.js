import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.json());

// Get All products.
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.error("Error in fetching product" + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// Create new product
app.post("/api/products", async (req, res) => {
  const product = req.body; // user will send this data.
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (err) {
    console.error("Error in creating product" + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// Delelte a product.
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product Deleted" });
  } catch (err) {
    console.error("Error in Deleting products" + err.message);
    res.status(404).json({ success: false, message: "Product not Found" });
  }
});

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at " + PORT);
});
