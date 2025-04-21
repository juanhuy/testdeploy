import { Repository } from "typeorm";
import { ProductItem } from "../entity/ProductItem";
import { Product } from "../entity/Product";
import { Size } from "../entity/Size";
import { Color } from "../entity/Color";
import { Image } from "../entity/Image";
import { AppDataSource } from "../config/datasource";

export class ProductItemService {
    private productItemRepository: Repository<ProductItem>;
    private productRepository: Repository<Product>;
    private sizeRepository: Repository<Size>;
    private colorRepository: Repository<Color>;
    private imageRepository: Repository<Image>;

    constructor() {
        this.productItemRepository = AppDataSource.getRepository(ProductItem);
        this.productRepository = AppDataSource.getRepository(Product);
        this.sizeRepository = AppDataSource.getRepository(Size);
        this.colorRepository = AppDataSource.getRepository(Color);
        this.imageRepository = AppDataSource.getRepository(Image);
    }

    async getAllProductItems(): Promise<ProductItem[]> {
        return this.productItemRepository.find({ 
            relations: ["product", "size", "color", "image"] 
        });
    }

    async getProductItemById(id: number): Promise<ProductItem | null> {
        return this.productItemRepository.findOne({ 
            where: { id },
            relations: ["product", "size", "color", "image"]
        });
    }

    async getProductItemsByProductId(productId: number): Promise<ProductItem[]> {
        return this.productItemRepository.find({
            where: { product: { id: productId } },
            relations: ["product", "size", "color", "image"]
        });
    }

    async createProductItem(data: Partial<ProductItem>): Promise<ProductItem> {
        // Find the product
        const product = await this.productRepository.findOne({ 
            where: { id: data.product?.id } 
        });
        if (!product) throw new Error("Product not found");

        // Find size if provided
        let size: Size | undefined;
        if (data.size?.id) {
            const foundSize = await this.sizeRepository.findOne({ 
                where: { id: data.size.id } 
            });
            if (!foundSize) throw new Error("Size not found");
            size = foundSize;
        }

        // Find color if provided
        let color: Color | undefined;
        if (data.color?.id) {
            const foundColor = await this.colorRepository.findOne({ 
                where: { id: data.color.id } 
            });
            if (!foundColor) throw new Error("Color not found");
            color = foundColor;
        }

        // Find image if provided
        let image: Image | undefined;
        if (data.image?.id) {
            const foundImage = await this.imageRepository.findOne({ 
                where: { id: data.image.id } 
            });
            if (!foundImage) throw new Error("Image not found");
            image = foundImage;
        }

        // Create the product item
        const productItem = new ProductItem();
        productItem.product = product;
        if (size) productItem.size = size;
        if (color) productItem.color = color;
        if (image) productItem.image = image;
        productItem.quantity = data.quantity || 0;
        productItem.price = data.price || "0.00";

        return this.productItemRepository.save(productItem);
    }

    async updateProductItem(id: number, data: Partial<ProductItem>): Promise<ProductItem | null> {
        const productItem = await this.productItemRepository.findOne({ 
            where: { id },
            relations: ["product", "size", "color", "image"]
        });
        
        if (!productItem) return null;

        // Update product if provided
        if (data.product?.id) {
            const product = await this.productRepository.findOne({ 
                where: { id: data.product.id } 
            });
            if (product) productItem.product = product;
        }

        // Update size if provided
        if (data.size?.id) {
            const size = await this.sizeRepository.findOne({ 
                where: { id: data.size.id } 
            });
            if (size) productItem.size = size;
        }

        // Update color if provided
        if (data.color?.id) {
            const color = await this.colorRepository.findOne({ 
                where: { id: data.color.id } 
            });
            if (color) productItem.color = color;
        }

        // Update image if provided
        if (data.image?.id) {
            const image = await this.imageRepository.findOne({ 
                where: { id: data.image.id } 
            });
            if (image) productItem.image = image;
        }

        // Update other fields
        if (data.quantity !== undefined) productItem.quantity = data.quantity;
        if (data.price !== undefined) productItem.price = data.price;

        return this.productItemRepository.save(productItem);
    }

    async deleteProductItem(id: number): Promise<boolean> {
        const result = await this.productItemRepository.delete(id);
        return result.affected !== 0;
    }
}

