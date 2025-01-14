import { configDotenv } from "dotenv";
import express, { Request, Response } from "express";
import { mongo } from "mongoose";
const mongoose = require("mongoose");

const PORT = 5005;
const app = express();

app.use(express.json());

configDotenv();
let cluster = null;
const connectMongoDb = async () => {
  const MONGO_URI = process.env.MONGODB_URI;
  await mongoose.connect(MONGO_URI);
  console.log("done");
};

connectMongoDb();

app.get("/", async (req: Request, res: Response) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
