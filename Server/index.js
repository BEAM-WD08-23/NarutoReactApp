import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import animeRouter from "./routes/AnimeRouter.js";
import reviewsRouter from "./routes/reviewsRouter.js";

const app = express();
const port = process.env.PORT || 8003;
console.log(process.env.MONGO_URI);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(animeRouter, reviewsRouter);

mongoose.connect(process.env.MONGO_URI);

app.get("/", (req, res) => {
  res.send("Welcome to my Anime app");
});

app.listen(8003, () => console.log(`Server running on port 8003`));
