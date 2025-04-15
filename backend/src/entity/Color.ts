import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Product_item } from "../entity/ProductItem"; // Adjusted the path to match the correct location.

@Entity()
export class Color {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  color_code!: string; // Mã màu (ví dụ: #FFFFFF).

  @OneToMany(() => Product_item, (productItem) => productItem.color)
  productItems!: Product_item[]; // Mối quan hệ một-nhiều với Product_item.
}
