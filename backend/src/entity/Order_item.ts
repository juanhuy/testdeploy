import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Order } from "./Order"; 
import { ProductItem } from "./ProductItem";

@Entity()
export class Order_item {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Order, order => order.id) 
  @JoinColumn({ name: 'order_id' }) 
  order_id!: number;

  @ManyToOne(() => ProductItem, product_item => product_item.id)
  @JoinColumn({ name: 'product_item_id' }) 
  product_item_id!: number;

  @Column()
  quantity!: string;

  @Column()
  price!: string;
}
