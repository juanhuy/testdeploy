import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn} from "typeorm";
import { Product } from "./Product";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToOne(() => Category, category => category.children)
  @JoinColumn({ name: 'parentId' })
  parent!: Category;

  @Column({ nullable: true })
  parentId!: number;

  @OneToMany(() => Category, category => category.parent)
  children!: Category[];

  @OneToMany(() => Product, (product) => product.category)
  products!: Product[];
}
