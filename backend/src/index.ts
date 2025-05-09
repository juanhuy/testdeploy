import express, {Request, Response} from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/datasource";
import userRouter from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import {Token} from "keycloak-connect";



dotenv.config();
const app = express();
app.use(express.json());
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

app.use("/api/users", userRouter)
app.use("/api/products", productRoutes)

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected successfully");
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => console.log("Database connection error:", error));
