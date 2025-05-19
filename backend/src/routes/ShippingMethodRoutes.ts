import { Router } from "express";
import { createShippingMethod, deleteShippingMethod, getShippingMethods } from "../controllers/ShippingMethodController";

const router = Router();

router.get("/", getShippingMethods);
router.post("/", createShippingMethod);
router.delete("/:id", deleteShippingMethod);

export default router;
