
import { Repository } from "typeorm";
import { Product_promotion } from "../entity/ProductPromotion";
import { AppDataSource } from "../config/datasource";

export class ProductPromotionService {
    private productPromotionRepository: Repository<Product_promotion>;

    constructor() {
        this.productPromotionRepository = AppDataSource.getRepository(Product_promotion);
    }

    // Lấy tất cả các product promotion
    async getAllProductPromotions(): Promise<Product_promotion[]> {
        return this.productPromotionRepository.find();
    }

    // Lấy product promotion theo product_id và promotion_id
    async getProductPromotionByIds(productId: number, promotionId: number): Promise<Product_promotion | null> {
        return this.productPromotionRepository.findOne({
            where: {
                product_id: productId,
                promotion_id: promotionId,
            },
        });
    }

    // Tạo một product promotion mới
    async createProductPromotion(data: Partial<Product_promotion>): Promise<Product_promotion> {
        const productPromotion = this.productPromotionRepository.create(data);
        return this.productPromotionRepository.save(productPromotion);
    }

    // Cập nhật một product promotion
    async updateProductPromotion(productId: number, promotionId: number, data: Partial<Product_promotion>): Promise<Product_promotion | null> {
        const productPromotion = await this.getProductPromotionByIds(productId, promotionId);
        if (!productPromotion) return null;

        Object.assign(productPromotion, data);
        return this.productPromotionRepository.save(productPromotion);
    }

    // Xóa một product promotion
    async deleteProductPromotion(productId: number, promotionId: number): Promise<boolean> {
        const result = await this.productPromotionRepository.delete({
            product_id: productId,
            promotion_id: promotionId,
        });
        return result.affected !== 0;
    }
}
