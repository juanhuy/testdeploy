import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import { AppDataSource } from "./config/datasource";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
// import protectedRoutes from "./routes/protectedRoute";
// import { keycloak, memoryStore } from "./config/keycloak";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());


// app.use(session({
//     secret: "secret-key",
//     resave: false,
//     saveUninitialized: true,
//     store: memoryStore,
// }));
//
//
// app.use(keycloak.middleware());


app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
// app.use("/api/protected", protectedRoutes);

// Khởi động server khi DB sẵn sàng
AppDataSource.initialize()
    .then(() => {
        console.log("Database connected successfully");
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => console.log("Database connection error:", error));
