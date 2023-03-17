import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import connectDb from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config({ path: "./config.env" });

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
console.log(process.env.MONGODB_URL);

const server = async () => {
  try {
    connectDb(process.env.MONGODB_URL);
    app.listen(8000, () => console.log("Server has started on server 8000"));
  } catch (error) {
    console.log(error);
  }
};

server();
