import { DataSource } from 'typeorm';
import { Address } from '../entity/Address';
import { Admin } from '../entity/Admin';
import { Cart_item } from '../entity/Cart_item';
import { Cart } from '../entity/Cart';
import { Category } from '../entity/Category';
import { Color } from '../entity/Color';
import { Image } from '../entity/Image';
import { Order_item } from '../entity/Order_item';
import { Order_payment } from '../entity/Order_payment';
import { Order_status } from '../entity/Order_status';
import { Order } from '../entity/Order';
import { Payment } from '../entity/Payment';
import { Product_item } from '../entity/Product_item';
import { Product_promotion } from '../entity/Product_promotion';
import { Product } from '../entity/Product';
import { Promotion } from '../entity/Promotion';
import { Review } from '../entity/Review';
import { Shipping_method } from '../entity/Shipping_method';
import { Size } from '../entity/Size';
import { User_address } from '../entity/User_address';
import { User } from '../entity/User';

export const AppDataSource = new DataSource({
  type: "mssql",
  host: "localhost",
  port: 1433,
  username: "sa",
  password: "123456789",
  database: "LTW",
  synchronize: true,
  logging: true,
  entities: [Address, Admin, Cart_item, Cart, Category, Color, Image, Order_item, Order_payment, Order_status, Order, Payment, Product_item, Product_promotion, Product, Promotion, Review, Shipping_method, Size, User_address, User],
  options: {
    encrypt: false,
  },
});
