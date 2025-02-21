import { AppDataSource } from "./config/datasource";
import express from 'express';
const app = express();

(async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connected successfully!");


  // Khởi động server Express
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });


    // Chay ung dung tai day  (vd: khoi dong server, xu ly API, v.v.)
  } catch (error) {
    console.error("Error during database initialization", error);
  }
})();
