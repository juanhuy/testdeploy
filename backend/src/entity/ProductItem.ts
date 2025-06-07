import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Product } from "./Product";
import { Size } from "./Size";
import { Image } from "./Image";
import { Color } from "./Color";
import { Cart_item } from "./Cart_item";
import { Order_item } from "./Order_item";
@Entity()
export class ProductItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Product, (product) => product.productItems, { onDelete: "CASCADE" })
  @JoinColumn({ name: "product_id" })
  product!: Product;

  @ManyToOne(() => Size, (size) => size.productItems, { onDelete: "SET NULL" })
  @JoinColumn({ name: "size_id" })
  size!: Size | null;

  @ManyToOne(() => Color, (color) => color.productItems, { onDelete: "SET NULL" })
  @JoinColumn({ name: "color_id" })
  color!: Color | null;

  @OneToMany(() => Image, (image) => image.productItem, { cascade: true })
  images!: Image[];

  @OneToMany(() => Cart_item, (cartItem) => cartItem.productItem, { cascade: true })
  cartItems!: Cart_item[];

  @OneToMany(() => Order_item, (orderItem) => orderItem.productItem, { cascade: true })
  orderItems!: Order_item[];

  @Column()
  quantity!: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price!: number;
}
