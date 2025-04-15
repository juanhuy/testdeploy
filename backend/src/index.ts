
import express from "express";
import dotenv from "dotenv";
import {AppDataSource} from "./config/datasource";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
dotenv.config();

import './server';


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

AppDataSource.initialize()
    .then(() => {
      console.log("Database connected successfully");
      app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
      });
    })
    .catch((error) => console.log("Database connection error:", error));