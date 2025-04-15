import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Product_item as ProductItem } from "./ProductItem";

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  image_url!: string;

  @OneToMany(() => ProductItem, (productItem) => productItem.image)
  productItems!: ProductItem[];
}