import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

const router = Router();

router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);
router.post("/create", ProductController.createProduct);
router.put("/:id/update", ProductController.updateProduct);
router.delete("/:id/delete", ProductController.deleteProduct);

export default router;