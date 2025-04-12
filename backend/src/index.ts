import express, {Request, Response} from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/datasource";
import UserRouter from "./routes/userRoutes";
import ProductRoutes from "./routes/productRoutes";
// import {keycloak, memoryStore} from "./keycloak";
// import session from 'express-session';

dotenv.config();
const app = express();

const PORT = 3001;

const Keycloak = require("keycloak-connect");
const session = require("express-session");
const USER_ROLE = 'user';
const ADMIN_ROLE = 'admin';

const kcConfig = {
    clientId: 'express-api',
    bearerOnly: true,
    serverUrl: process.env.AUTH_SERVER || 'http://localhost:8080',
    realm: process.env.AUTH_REALM || 'ecommserse'
};

export const memoryStore = new session.MemoryStore();

Keycloak.prototype.accessDenied = function (request: Request, response: Response) {
    response.status(401)
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({ status: 401, message: 'Unauthorized/Forbidden', result: { errorCode: 'ERR-401', errorMessage: 'Unauthorized/Forbidden' } }))
}

const keycloak = new Keycloak({ store: memoryStore }, kcConfig);

app.use(express.json());
app.use(session({
    secret: 'I17g6De2mxstjNCF4bbST0Yh52MeVStT',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));

app.use( keycloak.middleware());

app.use("/api/users", UserRouter(keycloak))
app.use("/api/products", ProductRoutes(keycloak))

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected successfully");
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => console.log("Database connection error:", error));
