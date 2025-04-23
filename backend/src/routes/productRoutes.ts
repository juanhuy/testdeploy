import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

const router = Router();
router.get("/search", ProductController.searchProducts);
router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);

router.post("/", ProductController.createProduct);                 // ✅ /api/products (POST)
router.put("/:id", ProductController.updateProduct);               // ✅ /api/products/:id (PUT)
router.delete("/:id", ProductController.deleteProduct);            // ✅ /api/products/:id (DELETE)



export default router;

