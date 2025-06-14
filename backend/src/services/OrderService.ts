import { Repository } from "typeorm";
import { Order } from "../entity/Order";
import { Order_item } from "../entity/Order_item";
import { AppDataSource } from "../config/datasource";

export class OrderService {
  getDataSource() {
    throw new Error("Method not implemented.");
  }
  private orderRepository: Repository<Order>;
  private orderItemRepository: Repository<Order_item>;

  constructor() {
    this.orderRepository = AppDataSource.getRepository(Order);
    this.orderItemRepository = AppDataSource.getRepository(Order_item);
  }

 
async getAllOrders(page: number, limit: number) {
  const offset = (page - 1) * limit;

  const [orders, totalCount] = await this.orderRepository.findAndCount({
    skip: offset,
    take: limit,
    relations: ["user", "orderStatus"], // thêm quan hệ nếu cần
    order: { orderDate: "DESC" }
  });

  return { data: orders, totalCount };
}

  // Lấy đơn hàng theo ID
  async getOrderById(id: number): Promise<Order | null> {
    return this.orderRepository.findOne({
      where: { id },
      relations: [
        "user",
        "shippingAddress",
        "shippingMethod",
        "orderStatus",
        "orderItems",
      ],
    });
  }

  // Tạo đơn hàng mới
  async createOrder(data: Partial<Order>): Promise<Order> {
    const order = this.orderRepository.create(data);
    return this.orderRepository.save(order);
  }

  // Cập nhật thông tin đơn hàng
  async updateOrder(id: number, data: Partial<Order>): Promise<Order | null> {
    const order = await this.getOrderById(id);
    if (!order) return null;

    Object.assign(order, data);
    return this.orderRepository.save(order);
  }

  // Xóa đơn hàng
  async deleteOrder(id: number): Promise<boolean> {
    const result = await this.orderRepository.delete(id);
    return result.affected !== 0;
  }

  // Thêm chi tiết đơn hàng
  async addOrderItem(orderId: number, orderItemData: Partial<Order_item>): Promise<Order_item> {
    const order = await this.getOrderById(orderId);
    if (!order) throw new Error("Order not found");

    const orderItem = this.orderItemRepository.create({
      ...orderItemData,
      order, // Liên kết đơn hàng
    });

    return this.orderItemRepository.save(orderItem);
  }
}
