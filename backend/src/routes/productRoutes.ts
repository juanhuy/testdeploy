import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

export default function ProductRoutes(keycloak: any){
    const router = Router();
    router.post("/create", keycloak.protect((token: any) =>{
        return token.hasRole("realm:express-admin")
    }), ProductController.createProduct)
    router.put("/:id/update", keycloak.protect((token: any) =>{
        return token.hasRole("realm:express-admin")
    }), ProductController.updateProduct)
    router.delete("/:id/delete", keycloak.protect((token: any) =>{
        return token.hasRole("realm:express-admin")
    }), ProductController.deleteProduct)
    router.get("/", ProductController.getAllProducts);
    router.get("/:id", ProductController.getProductById);
    return router;
}

// const router = Router();
//
// router.get("/", ProductController.getAllProducts);
// router.get("/:id", ProductController.getProductById);
// router.post("/create", ProductController.createProduct);
// router.put("/:id/update", ProductController.updateProduct);
// router.delete("/:id/delete", ProductController.deleteProduct);
//
// export default router;
