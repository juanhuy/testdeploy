import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Cart } from "./entities/Cart";
import { Address } from "./entities/Address";
import { Order_status } from "./entities/Order_status";
import { Payment } from "./entities/Payment";
import { Shipping_method } from "./entities/Shipping_method";
import { Color } from "./entities/Color";
import { Promotion } from "./entities/Promotion";
import { Size } from "./entities/Size";
import { Image } from "./entities/Image";
import { Product_promotion } from "./entities/Product_promotion";
import { Order_payment } from "./entities/Order_payment";
import { User_address } from "./entities/User_address";
import { Review } from "./entities/Review";
import { Product } from "./entities/Product";
import { Product_item } from "./entities/Product_item";
import { Cart_item } from "./entities/Cart_item";
import { Order_item } from "./entities/Order_item";
import { Order } from "./entities/Order";
import { Category } from "./entities/Category";

export const AppDataSource = new DataSource({
  type: "mssql",
  host: "localhost",
  port: 1433, 
  username: "sa",
  password: "123456789",
  database: "LTW",
  synchronize: true, // Set thành false trên môi trường production
  logging: true,
  entities: [Address, Cart_item, Cart, Category, Color, Image, Order_item, Order_status, Order_payment, Order, Payment, Product_item, Product_promotion, Product, Promotion, Review, Shipping_method, Size, User_address, User], // entity 
  options: {
    encrypt: false,
  },
});
