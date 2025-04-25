import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";

const productService = new ProductService();

export class ProductController {
    static async getAllProducts(req: Request, res: Response) {
        try {
            const products = await productService.getAllProducts();
            res.json(products);
        } catch (error) {
            res.status(500).json({ message: "Error fetching products", error });
        }
    }

    static async getProductById(req: Request, res: Response) {
        try {
            const product = await productService.getProductById(parseInt(req.params.id));
            if (!product) res.status(404).json({ message: "Product not found" });
            else res.json(product);
        } catch (error) {
            res.status(500).json({ message: "Error fetching product", error });
        }
    }

    static async createProduct(req: Request, res: Response) {
        try {
            const product = await productService.createProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ message: "Error creating product", error });
        }
    }

    static async updateProduct(req: Request, res: Response) {
        try {
            const updatedProduct = await productService.updateProduct(parseInt(req.params.id), req.body);
            if (!updatedProduct) res.status(404).json({ message: "Product not found" });
            else res.json(updatedProduct);
        } catch (error) {
            res.status(500).json({ message: "Error updating product", error });
        }
    }

    static async deleteProduct(req: Request, res: Response) {
        try {
            const deleted = await productService.deleteProduct(parseInt(req.params.id));
            if (!deleted) res.status(404).json({ message: "Product not found" });
            else res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: "Error deleting product", error });
        }
    }
    static async searchProducts(req: Request, res: Response) {
        try {
          const query = req.query.q?.toString().toLowerCase() || "";
          const allProducts = await productService.getAllProducts();
    
          const filtered = allProducts.filter((product) =>
            product.name.toLowerCase().includes(query)
          );
    
          res.json(filtered);
        } catch (error) {
          res.status(500).json({ message: "Error searching products", error });
        }
      }

}

