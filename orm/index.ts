import "reflect-metadata";
import { AppDataSource } from "./ormconfig";

AppDataSource.initialize()
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((error) => console.log(error));
