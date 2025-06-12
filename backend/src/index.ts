import express, {Request, Response} from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/datasource";
import UserRouter from "./routes/userRoutes";

import promotionRoutes from "./routes/promotionRoutes"; 
import sizeRoutes from "./routes/SizeRoutes";
import User_addressRoute from "./routes/User_addressRoute";
import ReviewRoutes from "./routes/ReviewRoutes";
import Shipping_methodRoutes from "./routes/Shipping_methodRoutes";
import productRoutes from "./routes/productRoutes";
import imageRoutes from "./routes/imageRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import userRoutes from "./routes/userRoutes";
import product_itemRoutes from "./routes/product_itemRoutes";
import authRoutes from "./routes/authRoutes";
import Order_itemRoutes from "./routes/order_itemRoutes";
import adminOrderRoutes from "./routes/adminOrderRoutes";
import uploadRoute from "./routes/uploadRoute";
import path from "path";
import invoice from "./routes/invoice";

import cors from "cors";
import orderRoutes from "./routes/orderRoutes";
import { Order_item } from "./entity/Order_item";

dotenv.config();
const app = express();
const PORT = 3001;


app.use(cors({
    origin: "http://localhost:3000", // hoặc "*" nếu muốn cho tất cả
    credentials: true
}));


const Keycloak = require("keycloak-connect");
const session = require("express-session");
export const memoryStore = new session.MemoryStore();

const kcConfig = {
    clientId: 'express-api',
    bearerOnly: true,
    serverUrl: process.env.AUTH_SERVER || 'http://localhost:8080',
    realm: process.env.AUTH_REALM || 'ecommserse'
};

Keycloak.prototype.accessDenied = function (request: Request, response: Response) {
    response.status(401).json({
        status: 401,
        message: 'Unauthorized/Forbidden',
        result: { errorCode: 'ERR-401', errorMessage: 'Unauthorized/Forbidden' }
    });
};

const keycloak = new Keycloak({ store: memoryStore }, kcConfig);



app.use(express.json());
app.use(session({
    secret: 'I17g6De2mxstjNCF4bbST0Yh52MeVStT',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));
app.use(keycloak.middleware());

app.use("/api/users", UserRouter);
app.use("/api/promotions", promotionRoutes); 
app.use("/api/sizes", sizeRoutes); 
app.use("/api/user-addresses", User_addressRoute);
app.use("/api/reviews", ReviewRoutes);
app.use("/api/shipping-methods", Shipping_methodRoutes);
app.use("/api/products", productRoutes);
app.use("/api/product-items", product_itemRoutes);
app.use("/api/images", imageRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/order_items",Order_itemRoutes);
app.use('/admin/api/orders', adminOrderRoutes);
// Serve static files from the uploads directory
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/api/upload", uploadRoute);
app.use("/api/invoice", invoice);
// DB + start server
AppDataSource.initialize()
    .then(() => {
        console.log(" Database connected successfully");
        app.listen(PORT, () => {
            console.log(` Server running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => console.log("Database connection error:", error));
