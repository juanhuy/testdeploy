import express from "express";
import dotenv from "dotenv";
import {AppDataSource} from "./config/datasource";
import productRoutes from "./routes/productRoutes";
import productItemRoutes from "./routes/product_itemRoutes";
import imageRoutes from "./routes/imageRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import userRoutes from "./routes/userRoutes";
import path from "path";
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type'], 
}));

app.use(cors()); 

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/product-items", productItemRoutes);
app.use("/api/images", imageRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/users", userRoutes);

// Serve static files from the uploads directory
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

AppDataSource.initialize()
    .then(() => {
      console.log("Database connected successfully");
      app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
      });
    })
    .catch((error) => console.log("Database connection error:", error));