import { Request, Response } from "express";
import { CategoryService } from "../services/CategoryService";

const categoryService = new CategoryService();

export class CategoryController {
    static async getAllCategories(req: Request, res: Response) {
        try {
            const categories = await categoryService.getAllCategories();
            res.json(categories);
        } catch (error) {
            res.status(500).json({ message: "Error fetching categories", error });
        }
    }

    static async getCategoryById(req: Request, res: Response) {
        try {
            const category = await categoryService.getCategoryById(parseInt(req.params.id));
            if (!category) res.status(404).json({ message: "Category not found" });
            else res.json(category);
        } catch (error) {
            res.status(500).json({ message: "Error fetching category", error });
        }
    }
    static async createCategory(req: Request, res: Response) {
        try {
            const category = await categoryService.createCategory(req.body);
            res.status(201).json(category);
        } catch (error) {
            res.status(500).json({ message: "Error creating category", error });
        }
    }
    static async deleteCategory(req: Request, res: Response) {
        try {
            const category = await categoryService.getCategoryById(parseInt(req.params.id));
            if (!category) {
                res.status(404).json({ message: "Category not found" });
            } else {
                await categoryService.deleteCategory(category.id);
                res.status(204).send();
            }
        } catch (error) {
            res.status(500).json({ message: "Error deleting category", error });
        }
    }
}