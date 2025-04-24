import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

const router = Router();
router.get("/search", ProductController.searchProducts);
router.get("/", ProductController.getAllProducts);
console.log("ProductController.getAllProducts is typeof:", typeof ProductController.getAllProducts);
console.log("Router initialized successfully");
router.get("/:id", ProductController.getProductById);

router.post("/", ProductController.createProduct);                
router.put("/:id", ProductController.updateProduct);               
router.delete("/:id", ProductController.deleteProduct);           



export default router;

