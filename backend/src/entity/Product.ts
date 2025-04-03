import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { ProductItem } from "./ProductItem";
import { Category } from "./Category";
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column({ type: "decimal", precision: 3, scale: 2 })
  all_rate!: number;

  @OneToMany(() => ProductItem, (productItem) => productItem.product)
  productItems!: ProductItem[];

  @ManyToOne(() => Category, (category) => category.products, {
    onDelete: "CASCADE", // Nếu danh mục bị xóa, sản phẩm liên quan cũng bị xóa.
  })
  @JoinColumn({ name: "category_id" }) 
  category!: Category;
}
