import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import notesRouter from "./routes/notes.route.js";
import cors from "cors";

dotenv.config({ path: "./.env" });

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/notes", notesRouter);

app.use("/", (req, res) => {
  res.send("backend is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
