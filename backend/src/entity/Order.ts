import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { User } from "./User";
import { Address } from "./Address";
import { Shipping_method } from "./Shipping_method";
import { Order_status } from "./Order_status";
import { Order_item } from "./Order_item";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.orders, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user!: User;

  @ManyToOne(() => Address, { onDelete: "CASCADE" })
  @JoinColumn({ name: "shipping_address_id" })
  shippingAddress!: Address;

  @ManyToOne(() => Shipping_method, { onDelete: "SET NULL" })
  @JoinColumn({ name: "shipping_method_id" })
  shippingMethod!: Shipping_method;

  @ManyToOne(() => Order_status, { onDelete: "SET NULL" })
  @JoinColumn({ name: "order_status_id" })
  orderStatus!: Order_status;

  @CreateDateColumn()
  orderDate!: Date;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  order_total!: string;

  @OneToMany(() => Order_item, (orderItem) => orderItem.order, {
    cascade: true,
  })
  orderItems!: Order_item[];
}
