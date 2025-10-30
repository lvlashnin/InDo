import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import todoRoutes from "./routes/todos.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["https://indo-x6o6.onrender.com", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
console.log("MONGO_URI:", process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI as string;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected to db:", mongoose.connection.name);
  })
  .catch((err) => console.error("MongoDB error:", err));

app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => res.send("Server is running"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
