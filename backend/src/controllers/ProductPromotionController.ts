// src/controllers/ProductPromotionController.ts
import { Request, Response } from "express";
import { ProductPromotionService } from "../services/ProductPromotionService";

const productPromotionService = new ProductPromotionService();

export class ProductPromotionController {
    // Lấy tất cả các product promotion
    static async getAllProductPromotions(req: Request, res: Response) {
        try {
            const productPromotions = await productPromotionService.getAllProductPromotions();
            res.json(productPromotions);
        } catch (error) {
            res.status(500).json({ message: "Error fetching product promotions", error });
        }
    }

    // Lấy product promotion theo product_id và promotion_id
    static async getProductPromotionByIds(req: Request, res: Response) {
        try {
            const { productId, promotionId } = req.params;
            const productPromotion = await productPromotionService.getProductPromotionByIds(
                parseInt(productId),
                parseInt(promotionId)
            );
            if (!productPromotion) {
                res.status(404).json({ message: "Product promotion not found" });
            } else {
                res.json(productPromotion);
            }
        } catch (error) {
            res.status(500).json({ message: "Error fetching product promotion", error });
        }
    }

    // Tạo product promotion mới
    static async createProductPromotion(req: Request, res: Response) {
        try {
            const productPromotion = await productPromotionService.createProductPromotion(req.body);
            res.status(201).json(productPromotion);
        } catch (error) {
            res.status(500).json({ message: "Error creating product promotion", error });
        }
    }

    // Cập nhật product promotion
    static async updateProductPromotion(req: Request, res: Response) {
        try {
            const { productId, promotionId } = req.params;
            const updatedProductPromotion = await productPromotionService.updateProductPromotion(
                parseInt(productId),
                parseInt(promotionId),
                req.body
            );
            if (!updatedProductPromotion) {
                res.status(404).json({ message: "Product promotion not found" });
            } else {
                res.json(updatedProductPromotion);
            }
        } catch (error) {
            res.status(500).json({ message: "Error updating product promotion", error });
        }
    }

    // Xóa product promotion
    static async deleteProductPromotion(req: Request, res: Response) {
        try {
            const { productId, promotionId } = req.params;
            const deleted = await productPromotionService.deleteProductPromotion(
                parseInt(productId),
                parseInt(promotionId)
            );
            if (!deleted) {
                res.status(404).json({ message: "Product promotion not found" });
            } else {
                res.status(204).send();
            }
        } catch (error) {
            res.status(500).json({ message: "Error deleting product promotion", error });
        }
    }
}
