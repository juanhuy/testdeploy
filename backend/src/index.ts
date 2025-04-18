import express, {Request, Response} from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/datasource";
import userRouter from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";


dotenv.config();
const app = express();
app.use(express.json());
const PORT = 3001;


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
