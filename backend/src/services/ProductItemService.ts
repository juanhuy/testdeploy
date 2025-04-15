import { Repository } from "typeorm";
import { Product_item } from "../entity/ProductItem";
import { Product} from "../entity/Product";
import { Size } from "../entity/Size";
import { Color } from "../entity/Color";
import { Image } from "../entity/Image";
import { AppDataSource } from "../config/datasource";

export class ProductItemService {
    private productItemRepository: Repository<Product_item>;
    private productRepository: Repository<Product>;
    constructor() {
        this.productItemRepository = AppDataSource.getRepository(Product_item);
        this.productRepository = AppDataSource.getRepository(Product);
    }

    async getAllProductItems(): Promise<Product_item[]> {
        return this.productItemRepository.find({ relations: ["product", "size", "color", "image"] });
    }

    async createProductItem(data: Partial<Product_item>): Promise<Product_item> {
        const product = await this.productRepository.findOne({ where: { id: data.product?.id } });
        if (!product) throw new Error("Product not found");

        const productItem = this.productItemRepository.create({
            product,
            size: data.size,
            color: data.color,
            image: data.image,
            quantity: data.quantity,
            price: data.price,
        });

        return this.productItemRepository.save(productItem);
    }

    async deleteProductItem(id: number): Promise<boolean> {
        const result = await this.productItemRepository.delete(id);
        return result.affected !== 0;
    }
}