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
    onDelete: "CASCADE",
    nullable: true, // cho phép null
  })
  @JoinColumn({ name: "category_id" }) 
  category!: Category | null;

  @Column({nullable: true}) 
  category_id!: number | null;
}
