// src/routes/promotionRoutes.ts
import { Router } from "express";
import {
  getPromotions,
  createPromotion,
  deletePromotion,
} from "../controllers/PromotionController";

const router = Router();
console.log("🔥 promotionRoutes mounted");

router.get("/", getPromotions);
router.post("/", (req, res, next) => {
  console.log("🔥 POST /api/promotions được gọi");
  next(); // gọi tiếp createPromotion
}, createPromotion);

router.delete("/:id", deletePromotion);



export default router;
