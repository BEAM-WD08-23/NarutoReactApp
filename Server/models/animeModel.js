import mongoose, { Schema } from "mongoose";

const animeSchema = new Schema({
  title: String,
  genre: String,
  episode: Number,
  url: String,
  image: String,
});

const Anime = mongoose.model("Anime", animeSchema);

export default Anime;
