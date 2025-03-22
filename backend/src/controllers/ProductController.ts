import { Request, Response } from "express";
import { AppDataSource } from "../config/datasource";
import { Product } from "../entity/Product";

const ProductRepository = AppDataSource.getRepository(Product);

export const getAllProducts = async (req: Request, res: Response) => {
    const products = await ProductRepository.find();
    res.json(products);
}

