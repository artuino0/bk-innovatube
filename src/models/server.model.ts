import express, { Application } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import router from "../routes";
import databaseConn from "../config/database";

dotenv.config();

class Server {
  app: Application;
  basePath: string = "/api/v1";
  PORT: string = process.env.PORT || "4000";

  constructor() {
    this.app = express();
    this.db();
    this.middlewares();
    this.routes();
  }

  async db() {
    await databaseConn();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan("dev"));
  }

  routes() {
    this.app.use(this.basePath, router);
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Server running on port: ${this.PORT}`);
    });
  }
}

export default Server;
