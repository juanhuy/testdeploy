import { Repository } from "typeorm";
import { Image } from "../entity/Image";
import { AppDataSource } from "../config/datasource";

export class ImageService {
    private imageRepository: Repository<Image>;

    constructor() {
        this.imageRepository = AppDataSource.getRepository(Image);
    }

    async getAllImages(): Promise<Image[]> {
        return this.imageRepository.find();
    }

    async getImageById(id: number): Promise<Image | null> {
        return this.imageRepository.findOne({ where: { id } });
    }

    async createImage(data: Partial<Image>): Promise<Image> {
        const image = this.imageRepository.create(data);
        return this.imageRepository.save(image);
    }

    async deleteImage(id: number): Promise<boolean> {
        const result = await this.imageRepository.delete(id);
        return result.affected !== 0;
    }

}

