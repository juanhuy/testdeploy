import { Request, Response } from "express";
import { ProductItemService } from "../services/ProductItemService";

const productItemService = new ProductItemService();

export class ProductItemController {
    static async getAllProductItems(req: Request, res: Response) {
        try {
            const productItems = await productItemService.getAllProductItems();
            res.json(productItems);
        } catch (error) {
            res.status(500).json({ message: "Error fetching product items", error });
        }
    }

    static async createProductItem(req: Request, res: Response) {
        try {
            const productItem = await productItemService.createProductItem(req.body);
            res.status(201).json(productItem);
        } catch (error) {
            res.status(500).json({ message: "Error creating product item", error });
        }
    }

    static async deleteProductItem(req: Request, res: Response) {
        try {
            const deleted = await productItemService.deleteProductItem(parseInt(req.params.id));
            if (!deleted) res.status(404).json({ message: "ProductItem not found" });
            else res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: "Error deleting product item", error });
        }
    }
}