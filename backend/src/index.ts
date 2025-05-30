import express, {Request, Response} from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/datasource";

import UserRouter from "./routes/userRoutes";
import promotionRoutes from "./routes/promotionRoutes"; 
import sizeRoutes from "./routes/SizeRoutes";
import User_addressRoute from "./routes/UserAddressRoute";
import ReviewRoutes from "./routes/ReviewRoutes";
import Shipping_methodRoutes from "./routes/ShippingMethodRoutes";
import productRoutes from "./routes/productRoutes";
import imageRoutes from "./routes/imageRoutes";
import categoryRoutes from "./routes/categoryRoutes";

import product_itemRoutes from "./routes/productItemRoutes";
import authRoutes from "./routes/authRoutes";
import StatisticsRoutes from "./routes/StatisticsRoutes";

import path from "path";


import cors from "cors";
import orderRoutes from "./routes/orderRoutes";
import {Token} from "keycloak-connect";

dotenv.config();
const app = express();
const PORT = 3001;

// keycloak config
const USER_ROLE = process.env.USER_ROLE;
const ADMIN_ROLE = process.env.ADMIN_ROLE;

const session = require("express-session");
const Keycloak = require("keycloak-connect");

const kcConfig = {
    clientId: process.env.KEYCLOAK_CLIENT_ID,
    bearerOnly: true,
    serverUrl: process.env.KEYCLOAK_URL,
    realm: process.env.KEYCLOAK_REALM
};

const memoryStore = new session.MemoryStore();

Keycloak.prototype.accessDenied = function (request: Request, response: Response) {
    response.status(401)
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({ status: 401, message: 'Unauthorized/Forbidden', result: { errorCode: 'ERR-401', errorMessage: 'Unauthorized/Forbidden' } }))
}

const keycloak = new Keycloak({ store: memoryStore }, kcConfig);

function adminOnly(token: Token, request: Request) {
    return token.hasRole(`realm:${ADMIN_ROLE}`);
}

function isAuthenticated(token: Token, request: Request) {
    return token.hasRole(`realm:${ADMIN_ROLE}`) || token.hasRole(`realm:${USER_ROLE}`);
}

app.use(session({
    secret: process.env.APP_SECRET || 'BV&%R*BD66JH',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));

app.use( keycloak.middleware() );


app.use(session({
    secret: process.env.APP_SECRET || 'BV&%R*BD66JH',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));

app.use( keycloak.middleware());

app.use(cors({
    origin: "http://localhost:3000", // hoặc "*" nếu muốn cho tất cả
    credentials: true
}));



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
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/statistics", StatisticsRoutes);
// Serve static files from the uploads directory
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// DB + start server
AppDataSource.initialize()
    .then(() => {
        console.log("Database connected successfully");
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => console.log("Database connection error:", error));
