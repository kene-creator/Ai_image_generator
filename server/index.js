import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

dotenv.config({ path: "./config.env" });

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = async () => {
  app.listen(8000, () => console.log("Server has started on server 8000"));
};

server();
