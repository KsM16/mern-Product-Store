import express from "express";

import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";
const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
 // using POSTMAN
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;