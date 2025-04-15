// src/controllers/OrderController.ts
import { Request, Response } from "express";
import { OrderService } from "../services/OrderService";

const orderService = new OrderService();

export class OrderController {
    // Lấy tất cả đơn hàng
    static async getAllOrders(req: Request, res: Response) {
        try {
            const orders = await orderService.getAllOrders();
            res.json(orders);
        } catch (error) {
            res.status(500).json({ message: "Error fetching orders", error });
        }
    }

    // Lấy đơn hàng theo ID
    static async getOrderById(req: Request, res: Response) {
        try {
            const order = await orderService.getOrderById(parseInt(req.params.id));
            if (!order) {
                res.status(404).json({ message: "Order not found" });
            } else {
                res.json(order);
            }
        } catch (error) {
            res.status(500).json({ message: "Error fetching order", error });
        }
    }

    // Tạo đơn hàng mới
    static async createOrder(req: Request, res: Response) {
        try {
            const order = await orderService.createOrder(req.body);
            res.status(201).json(order);
        } catch (error) {
            res.status(500).json({ message: "Error creating order", error });
        }
    }

    // Cập nhật đơn hàng
    static async updateOrder(req: Request, res: Response) {
        try {
            const updatedOrder = await orderService.updateOrder(parseInt(req.params.id), req.body);
            if (!updatedOrder) {
                res.status(404).json({ message: "Order not found" });
            } else {
                res.json(updatedOrder);
            }
        } catch (error) {
            res.status(500).json({ message: "Error updating order", error });
        }
    }

    // Xóa đơn hàng
    static async deleteOrder(req: Request, res: Response) {
        try {
            const deleted = await orderService.deleteOrder(parseInt(req.params.id));
            if (!deleted) {
                res.status(404).json({ message: "Order not found" });
            } else {
                res.status(204).send();
            }
        } catch (error) {
            res.status(500).json({ message: "Error deleting order", error });
        }
    }

    // Thêm chi tiết đơn hàng vào đơn hàng
    static async addOrderItem(req: Request, res: Response) {
        try {
            const orderItem = await orderService.addOrderItem(parseInt(req.params.id), req.body);
            res.status(201).json(orderItem);
        } catch (error) {
            res.status(500).json({ message: "Error adding order item", error });
        }
    }
}
