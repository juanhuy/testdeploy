import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

// export default function ProductRoutes(){
//     const router = Router();
//     router.post("/create",ProductController.createProduct)
//     router.put("/:id/update", ProductController.updateProduct)
//     router.delete("/:id/delete", ProductController.deleteProduct)
//     router.get("/", ProductController.getAllProducts);
//     router.get("/:id", ProductController.getProductById);
//     return router;
// }

const router = Router();

router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);
router.post("/create", ProductController.createProduct);
router.put("/:id/update", ProductController.updateProduct);
router.delete("/:id/delete", ProductController.deleteProduct);

export default router;
