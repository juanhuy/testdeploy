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
      relations: ["product", "size", "color", "images"], // ✅ sửa image → images
    });
  }

  async getProductItemById(id: number): Promise<ProductItem | null> {
    return this.productItemRepository.findOne({
      where: { id },
      relations: ["product", "size", "color", "images"], // ✅ sửa image → images
    });
  }

  async getProductItemsByProductId(productId: number): Promise<ProductItem[]> {
    return this.productItemRepository.find({
      where: { product: { id: productId } },
      relations: ["product", "size", "color", "images"], // ✅ sửa image → images
    });
  }

  async createProductItem(data: Partial<ProductItem>): Promise<ProductItem> {
    const product = await this.productRepository.findOne({
      where: { id: data.product?.id },
    });
    if (!product) throw new Error("Product not found");

    let size: Size | undefined;
    if (data.size?.id) {
      const foundSize = await this.sizeRepository.findOne({
        where: { id: data.size.id },
      });
      if (!foundSize) throw new Error("Size not found");
      size = foundSize;
    }

    let color: Color | undefined;
    if (data.color?.id) {
      const foundColor = await this.colorRepository.findOne({
        where: { id: data.color.id },
      });
      if (!foundColor) throw new Error("Color not found");
      color = foundColor;
    }

    // Nếu bạn muốn gán images trong quá trình tạo (mảng các ID):
    let images: Image[] = [];
    if (data.images?.length) {
      const imageIds = data.images.map((img) => img.id);
      images = await this.imageRepository.findByIds(imageIds);
    }

    const productItem = new ProductItem();
    productItem.product = product;
    if (size) productItem.size = size;
    if (color) productItem.color = color;
    productItem.images = images; 
    productItem.quantity = data.quantity || 0;
    productItem.price = data.price || "0.00";

    return this.productItemRepository.save(productItem);
  }

  async updateProductItem(id: number, data: Partial<ProductItem>): Promise<ProductItem | null> {
    const productItem = await this.productItemRepository.findOne({
      where: { id },
      relations: ["product", "size", "color", "images"], 
    });

    if (!productItem) return null;

    if (data.product?.id) {
      const product = await this.productRepository.findOne({
        where: { id: data.product.id },
      });
      if (product) productItem.product = product;
    }

    if (data.size?.id) {
      const size = await this.sizeRepository.findOne({
        where: { id: data.size.id },
      });
      if (size) productItem.size = size;
    }

    if (data.color?.id) {
      const color = await this.colorRepository.findOne({
        where: { id: data.color.id },
      });
      if (color) productItem.color = color;
    }

    if (data.images?.length) {
      const imageIds = data.images.map((img) => img.id);
      const foundImages = await this.imageRepository.findByIds(imageIds);
      productItem.images = foundImages;
    }

    if (data.quantity !== undefined) productItem.quantity = data.quantity;
    if (data.price !== undefined) productItem.price = data.price;

    return this.productItemRepository.save(productItem);
  }

  async deleteProductItem(id: number): Promise<boolean> {
    const result = await this.productItemRepository.delete(id);
    return result.affected !== 0;
  }
}
