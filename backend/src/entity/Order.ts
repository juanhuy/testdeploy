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
import { Shipping_method } from "./ShippingMethod";
import { Order_status } from "./Order_status";
import { OrderItem } from "./OrderItem"; //  Import thêm

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

  //  Quan hệ với OrderItem
  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { cascade: true })
  orderItems!: OrderItem[];
}
