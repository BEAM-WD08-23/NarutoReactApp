import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
  content: String,
  rating: Number,
  animeID: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Anime",
  },
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
