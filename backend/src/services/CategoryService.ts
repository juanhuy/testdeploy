import { Repository, IsNull } from "typeorm";
import { Category } from "../entity/Category";
import { AppDataSource } from "../config/datasource";
import { NotFoundException } from "@nestjs/common";

export class CategoryService {
    private categoryRepository: Repository<Category>;

    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category);
    }

    async getAllCategories(): Promise<Category[]> {
        try {
            return await this.categoryRepository.find({
                relations: ['parent', 'children', 'products']
            });
        } catch (error) {
            throw new Error('Failed to fetch categories');
        }
    }

    async getCategoryById(id: number): Promise<Category> {
        try {
            const category = await this.categoryRepository.findOne({
                where: { id },
                relations: ['parent', 'children', 'products']
            });
            if (!category) {
                throw new NotFoundException(`Category with ID ${id} not found`);
            }
            return category;
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new Error('Failed to fetch category');
        }
    }

    async createCategory(categoryData: Partial<Category>): Promise<Category> {
        try {
            // Kiểm tra parent category nếu có
            if (categoryData.parentId) {
                const parent = await this.categoryRepository.findOne({
                    where: { id: categoryData.parentId }
                });
                if (!parent) {
                    throw new NotFoundException('Parent category not found');
                }
            }

            const category = this.categoryRepository.create(categoryData);
            return await this.categoryRepository.save(category);
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new Error('Failed to create category');
        }
    }

    async updateCategory(id: number, categoryData: Partial<Category>): Promise<Category> {
        try {
            const category = await this.getCategoryById(id);
            
            // Kiểm tra parent category nếu có
            if (categoryData.parentId) {
                const parent = await this.categoryRepository.findOne({
                    where: { id: categoryData.parentId }
                });
                if (!parent) {
                    throw new NotFoundException('Parent category not found');
                }
            }

            // Cập nhật các trường được phép
            Object.assign(category, categoryData);
            return await this.categoryRepository.save(category);
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new Error('Failed to update category');
        }
    }

    async deleteCategory(id: number): Promise<void> {
        try {
            const category = await this.getCategoryById(id);
            
            // Kiểm tra xem category có sản phẩm nào không
            if (category.products && category.products.length > 0) {
                throw new Error('Cannot delete category with associated products');
            }

            // Kiểm tra xem category có category con không
            const childCategories = await this.categoryRepository.find({
                where: { parentId: id }
            });
            if (childCategories.length > 0) {
                throw new Error('Cannot delete category with child categories');
            }

            await this.categoryRepository.remove(category);
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new Error('Failed to delete category');
        }
    }

    async getCategoryHierarchy(): Promise<Category[]> {
        try {
            return await this.categoryRepository.find({
                where: { parentId: IsNull() },
                relations: ['children', 'children.children']
            });
        } catch (error) {
            throw new Error('Failed to fetch category hierarchy');
        }
    }

    async getCategoriesByParentId(parentId: number): Promise<Category[]> {
        try {
            return await this.categoryRepository.find({
                where: { parentId },
                relations: ['children', 'products']
            });
        } catch (error) {
            throw new Error('Failed to fetch child categories');
        }
    }
}