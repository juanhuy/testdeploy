import { Repository } from "typeorm";
import { ProductItem } from "../entity/ProductItem";
import { Product} from "../entity/Product";
import { Size } from "../entity/Size";
import { Color } from "../entity/Color";
import { Image } from "../entity/Image";
import { AppDataSource } from "../config/datasource";

export class ProductItemService {
    private productItemRepository: Repository<ProductItem>;
    private productRepository: Repository<Product>;
    constructor() {
        this.productItemRepository = AppDataSource.getRepository(ProductItem);
        this.productRepository = AppDataSource.getRepository(Product);
    }

    async getAllProductItems(): Promise<ProductItem[]> {
        return this.productItemRepository.find({ relations: ["product", "size", "color", "image"] });
    }

    async createProductItem(data: Partial<ProductItem>): Promise<ProductItem> {
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